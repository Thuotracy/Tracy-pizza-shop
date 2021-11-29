$(document).ready(function() {
    $("#order-details").hide();
    $("#deliver").hide();

    var totalPriceArray = [];
    class Order {
    constructor(size, crust, toppings, amount) {
      this.size = size;
      this.crust = crust;
      this.toppings = toppings;
      this.pizzaPrice = 0;
      this.amount = amount;
    }
    pizzaCost() {
      if (this.size === "small-pizza") {
        this.pizzaPrice += 500;
      } else if (this.size === "medium-pizza") {
        this.pizzaPrice += 800;
      } else if (this.size === "large-pizza") {
        this.pizzaPrice += 1300;
      }
      if (this.crust === "thick") {
        this.pizzaPrice += 250;
      } else if (this.crust === "FlatBread crust") {
        this.pizzaPrice += 200;
      } else if (this.crust === "custom crust") {
        this.pizzaPrice += 350;
      } else if (this.crust === "thin") {
        this.pizzaPrice += 150;
      }
      if (this.toppings === "chicken") {
        this.pizzaPrice += 200;
      } else if (this.toppings === "Green pepper") {
        this.pizzaPrice += 50;
      } else if (this.toppings === "meat") {
        this.pizzaPrice += 200;
      } else if (this.toppings === "spicy_boerewors") {
        this.pizzaPrice += 200;
      } else if (this.toppings === "pepperoni") {
        this.pizzaPrice += 200;
      }
    }
    finalCost() {
      var cartTotalPrice = [];
      for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
        cartTotalPrice += totalPriceArray[arrayElement];
      }
      return cartTotalPrice;
    }
  }
    class Address {
    constructor(address) {
      this.address = address;
      this.deliveryAddress = (address);
    }
  }

    $(".btn.check-out").click(function() {
    });
    $("form#menu").submit(function(event) {
      event.preventDefault();
      var size = $("select#size").val();
      var crust = $("select#crust").val();
      var toppings = $("select#toppings").val();
      var pizzaDetails = (size + " - " + crust + " - " + toppings);
      var newPizzaOrder = new Order(size, crust, toppings);
      newPizzaOrder.pizzaCost();
      totalPriceArray.push(newPizzaOrder.pizzaPrice);
      $("#final-cost").text(newPizzaOrder.finalCost());
      $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
    });
    $("#submit-pizza").click(function() {
      $("#deliver").toggle();
    });
  
    $("#checkout-btn").click(function() {
      $("#order-details").toggle();
    });
    $("form#address-form").submit(function(event) {
      $(".address-form").toggle();
      event.preventDefault();
      var address = $("input#location").val();
      var newAddress = new Address(address);
      $("#delivery-option").text("Your pizza will be delivered to: " + newAddress.deliveryAddress);
    });
  });