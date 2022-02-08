import carModule from './mod';
// var html = require('./cv.html');
class CvDr {
  // template = html;

  constructor($q, data) {
    'ngInject';
    this.data = data;
  }
  // controller = [
  //   '$q',
  //   // function ($q,data) {
  //   //   this.__ready = $q.defer();

  //   //   this.cv = this.__ready.promise;
  //   // },
  // ];
  link($scope, ielm, attr, model) {
    // if (model) {
    var canvas = ielm[0];
    var ctx = canvas.getContext('2d');

    this.data.__ready.resolve(ctx);
  }

  // console.log(this, ielm);
  // }
}
carModule.directive('cv', CvDr);
