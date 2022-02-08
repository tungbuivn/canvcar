import carModule from './mod';
// var html = require('./car.html');
class Wheel {
  // template = html;
  wheelDiameter = 20;
  wheelWidth = 10;
  scope = { x: '@', y: '@' };
  // require = '^car';
  constructor($q, data) {
    'ngInject';
    this.data = data;
  }
  link($scope, ielm, attrs, model) {
    this.data.cv.then((ctx) => {
      // debugger;
      console.log('wheel');
      ctx.fillStyle = '#FF0000';
      ctx.fillRect($scope.x, $scope.y, this.wheelLength, this.wheelWidth);
    });

    console.log($scope.x, $scope.y);
  }
}
carModule.directive('wheel', Wheel);
// export default CarDr;
