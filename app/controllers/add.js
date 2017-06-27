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

    }
  }

});
