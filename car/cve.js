import carModule from './mod';
class CanvasData {
  constructor($q) {
    'ngInject';
    this.__ready = $q.defer();
    this.cv = this.__ready.promise;
  }
}
carModule.service('data', CanvasData);
