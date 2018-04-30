angular.module("moose.shopping").component("mooseShoppingList", {
  controller: ShoppingListController,
  templateUrl: "app/modules/shopping/list/shopping.list.component.html"
});

function ShoppingListController() {
  var ctrl = this;

  ctrl.$onInit = function() {};
}
