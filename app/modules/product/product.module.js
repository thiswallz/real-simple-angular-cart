angular
  .module("moose.product", [])
  .config(function LoginConfiguration($stateProvider) {
    $stateProvider.state({
      name: "app.product",
      title: "Product",
      class: "app-product",
      url: "/",
      component: "mooseProduct",
      restricted: true
    });
  });
