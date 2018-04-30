angular
    .module('moose.dashboard', [])
    .config(function LoginConfiguration($stateProvider) {
        $stateProvider
            .state({
                name: 'app.dashboard',
                title: 'Dashboard',
                class: 'app-dashboard',
                url: '/',
                component: 'mooseDashboard',
                restricted: true
            });
    });