import Ember from 'ember';

const {
  get,
  Route
} = Ember;

export default Route.extend({
  model(params) {
    window.params = params;
    if(params.key && params.value){
        let value = params.value;
        if(params.value.indexOf("*") === 0){
            value = parseInt(params.value.slice(1));
        }else if(value === "true" || value === "t"){
          value = true;
        }else if(value === "false" || value === "f"){
          value = false;
        }
        return this.store.query(this.paramsFor('model-records').name, {
          orderBy: params.key,
          equalTo: value
        });
    }
    else{
      return false;
    }
  }
});