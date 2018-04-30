angular
  .module("moose.shopping", [])
  .config(function LoginConfiguration($stateProvider) {
    $stateProvider
      .state({
        abstract: true,
        name: "app.shopping",
        title: "Shopping",
        class: "app-shopping",
        url: "/shopping",
        component: "mooseShopping",
        restricted: true
      })
      .state("app.shopping.list", {
        url: "/list",
        component: "mooseShoppingList"
      });
  });
