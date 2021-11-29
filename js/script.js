function tracy(){
    var sizes = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;
    var toppings = document.getElementById("toppings").value;
    var number = document.getElementById("number").value;
    var pizzas = parseInt(number);


    if(sizes == "small"){
        sizes = 500;
    }
    else if(sizes == "medium"){
        sizes = 800;
    }
    else if(sizes == "large"){
        sizes = 1300;
    }
    else{

        alert("enter correct value");
    } 
    

 
    if(crust == "thin"){
        crust = 150;
    }
    else if(crust == "thick"){
        crust = 250;
    }
    else if(crust == "custom"){
        crust = 350;
    }
    else{

        alert("enter correct value");
    } 
    
    
    if(toppings == "mushroom"){
        toppings = 120;
    }
    else if(toppings == "greenpepper"){
        toppings = 50;
    }
    else if(toppings == "olives"){
        toppings = 100;
    }
    else if(toppings == "pineapple"){
        toppings = 150;
    }
    else if(toppings == "bacon"){
        toppings = 250;
    }
    else if(toppings == "mince"){
        toppings = 120;
    }
    else if(toppings == "beef"){
        toppings = 170;
    }
    else if(toppings == "chicken"){
        toppings = 200;
    }

    else{

        alert("enter correct value");
    }

    var total = crust + toppings + sizes;
    var finalTotal = pizzas * total;
    alert("Your pizza will cost: " +finalTotal);


}
