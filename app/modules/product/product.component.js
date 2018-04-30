angular.module("moose.product").component("mooseProduct", {
  controller: ProductController,
  templateUrl: "app/modules/product/product.component.html"
});

function ProductController() {
  var ctrl = this;

  ctrl.$onInit = function() {};
}
