import Ember from 'ember';
import RecordTypeMixin from 'ember-admin/mixins/model-records/record-type';

const {
  Controller
} = Ember;

export default Controller.extend(RecordTypeMixin, {
	queryParams: ['key', 'value'],
	key: null,
	value: null
});
