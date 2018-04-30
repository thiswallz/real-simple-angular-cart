angular
    .module('moose.dashboard')
    .component('mooseDashboard', {
        controller: DashboardController,
        templateUrl: 'app/modules/dashboard/dashboard.component.html'
    });

function DashboardController() {
    var ctrl = this;

    ctrl.$onInit = function() {
        ctrl.user = {
            fullName: 'Hallo Welt'
        }
    };
}