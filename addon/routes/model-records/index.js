import Ember from 'ember';

const {
  get,
  Route
} = Ember;

export default Route.extend({
  model() {
    return this.store.findAll(this.paramsFor('model-records').name).then(function(records) {
      return records.filter(function(item) {
        return !get(item, 'isNew');
      });
    });
  }
});
