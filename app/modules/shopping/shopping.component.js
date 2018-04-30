angular.module("moose.shopping").component("mooseShopping", {
  controller: ShoppingController,
  templateUrl: "app/modules/shopping/shopping.component.html"
});

function ShoppingController() {
  var ctrl = this;

  ctrl.$onInit = function() {};
}
