$(document).ready(function(){
   var t = "\t\t\t\t\t\t\t\t\t\t\t\t"
   var userNavigate;
   var userOrderInput;
   var userOrderQuantity;
   var userOrder = [];

   var menu = [
      {
         item: "Pizza",
         price: 500
      },
      {
         item: "Burger",
         price: 250
      },
      {
         item: "Roll",
         price: 200
      }
   ]

// debugger;
   function displayMenu(){
      console.log(t+t+"\t\t---OUR MENU---\n\n");
      for(let i=0; i<menu.length; i++){
         console.log(t+t+"\t\t "+(parseInt(i)+1)+". "+menu[i].item+" - "+menu[i].price);
      }
      getOrder()
   }

   function getOrder(){
      userOrderInput = window.prompt("Enter deposite amount\n\n");
      // function checkMenuSize(){
      //    if(userOrderInput>menu.length){
      //       alert("Please Enter a valid Serial Number");
      //       userOrderInput = window.prompt("Enter item Serial Number to order\n\n");
      //       checkMenuSize();
      //    }
      // }
      // checkMenuSize();
      userOrderQuantity = window.prompt("Enter Quantity of "+menu[parseInt(userOrderInput)-1].item+"\n\n");

      // var item = menu[parseInt(userOrderInput)];
      var item = 
      {
         item: menu[parseInt(userOrderInput)-1].item,
         quantity: parseInt(userOrderQuantity),
         price: menu[parseInt(userOrderInput)-1].price*parseInt(userOrderQuantity),
      };
      userOrder.push(item);
      // for(let i=0; i<userOrder.length; i++){
      //    console.log(userOrder[i]);
      // }
      navigate();
   }

   function checkout(){
      console.log(t+t+"\t\t---Your Total Bill---")
      var totalAmount = 0;
      for(let i=0; i<userOrder.length; i++){
         console.log(t+t+"\t\t"+(i+1)+". "+userOrder[i].item+" - "+userOrder[i].quantity+" - Rs."+userOrder[i].price);
         totalAmount=parseInt(totalAmount)+parseInt(userOrder[i].price);
      }
      console.log(t+t+"\t\tYour total bill is "+totalAmount)
   }

   function navigate(){
      userNavigate = window.prompt("Enter Options\n\n1. deposite\n2. withdraw \n3. view balance")
      if(userNavigate==="1"){
         displayMenu();
      }
      else if(userNavigate==="2"){
         checkout();
      }
      else{
         navigate();
      }
   }

   
   console.log("\n\n"+t+t+"---Welcome to Anas's Restaurant---\n\n");
   navigate()

})