import carModule from './mod';
var html = require('./car.html');
class CarDr {
  template = html;
  wheelLength = 200;
  wheelWidth = 100;
  scope = { x: '@' };
  // require = '^cv';
  constructor($q, data) {
    'ngInject';
    this.data = data;
  }
  link($scope, ielm, attrs, model) {
    // if (model) {
    this.data.cv.then((ctx) => {
      // ctx.fillStyle = '#FF0000';
      // ctx.fillRect(0, 0, this.wheelLength, this.wheelWidth);
    });
    // }
    console.log($scope.x, model);
  }
}
carModule.directive('car', CarDr);
// export default CarDr;
