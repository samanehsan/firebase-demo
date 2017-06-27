import Ember from 'ember';

export default Ember.Controller.extend({
  guid: null,
  node: null,
  actions: {
    search() {
      var node = this.store.findRecord('node', this.get('guid')).then((res) => {
        this.set('node', res);
      });
    },
    createPage() {
      var node = this.get('node');
      var data = {
        title: node.get('title'),
        description: node.get('description'),
        tags: node.get('tags').join(', ')
      };
      var page = this.store.createRecord('page', data);
      page.save().then((res) => {
        this.transitionToRoute('page', page.id);
      })
    }
  }

});
