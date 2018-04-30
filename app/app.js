var angular = require("angular");

require("angular-ui-router");
require("angular-animate");
require("angular-resource");
require("angular-translate");
require("angular-translate-loader-static-files");
require("ngstorage");

angular
  .module("moose", [
    "ngAnimate",
    "ngResource",
    "ngStorage",
    "ui.router",
    "pascalprecht.translate",
    "moose.configuration",
    "moose.dashboard",
    "moose.shopping",
    "moose.product",
    "moose.header",
    "moose.sidebar"
  ])
  .config(function(
    $httpProvider,
    $urlRouterProvider,
    $stateProvider,
    $translateProvider
  ) {
    $translateProvider
      .useStaticFilesLoader({
        prefix: "assets/dist/languages/lang.",
        suffix: ".json"
      })
      .useSanitizeValueStrategy("escape")
      .registerAvailableLanguageKeys(["en", "de"], {
        en_US: "en",
        en_UK: "en",
        de_DE: "de",
        de_CH: "de",
        de_AT: "de"
      })
      .determinePreferredLanguage();

    // $translateProvider.preferredLanguage('de');

    $urlRouterProvider.otherwise("/");

    $stateProvider.state("app", {
      title: "Moose",
      views: {
        "": { templateUrl: "app/templates/main.html" },
        "sidebar@app": "mooseSidebar",
        "header@app": "mooseHeader"
      }
    });

    // $httpProvider.interceptors.push('apiInterceptor');
  })
  .run(function($rootScope, $state, $translate, $transitions) {
    $transitions.onSuccess({}, function(transition) {
      $rootScope.pageName = transition.$to().class;
      $translate("Pages." + transition.$to().title + ".Title")
        .then(function(translation) {
          $rootScope.pageTitle = translation;
        })
        .catch(function() {
          $rootScope.pageTitle = transition.$to().title;
        });
    });
  });

require("./moose.component");
require("./configurations");
require("./directives");
require("./modules");
require("./services");
