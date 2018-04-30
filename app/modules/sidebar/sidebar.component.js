angular
    .module('moose.sidebar', [])
    .component('mooseSidebar', {
        controller: HeaderController,
        templateUrl: 'app/modules/sidebar/sidebar.component.html'
    });

function HeaderController() {
    var ctrl = this;
}