angular
    .module('moose.header', [])
    .component('mooseHeader', {
        controller: HeaderController,
        templateUrl: 'app/modules/header/header.component.html'
    });

function HeaderController() {
    var ctrl = this;

    ctrl.$onInit = function() {
        ctrl.currentDate = new Date();
    };
}