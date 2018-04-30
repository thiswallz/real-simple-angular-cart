angular
    .module('moose')
    .component('mooseApp', {
        controller: MooseController,
        templateUrl: 'app/moose.component.html'
    });

function MooseController() {
    var ctrl = this;

    ctrl.$onInit = function() {

    };
}