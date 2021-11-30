$(document).ready(function(){
    var t = "\t\t\t\t\t\t\t\t\t\t\t\t"
    var userNavigate;
    var userWithdrawInput;
    var userBalanceQuantity;
    var userDepositeInput = [];
    var welcomeMessage = "<h1>Welcom To ABC Bank</h1><br />"
 
    var userDetails = [
       {
          name: "Anas",
          AccountBalance: 5000
       }
    ]

    $(".depositBut").on("click", function(){
        $(".withdraw").addClass("hide");
        $(".balance").addClass("hide");
        $(".welcome").addClass("hide");
        $(".deposit").removeClass("hide");
    });
    
    $(".withdrawBut").on("click", function(){
        $(".deposit").addClass("hide");
        $(".balance").addClass("hide");
        $(".welcome").addClass("hide");
        $(".withdraw").removeClass("hide");
    });
    $(".balanceBut").on("click", function(){
        $(".withdraw").addClass("hide");
        $(".deposit").addClass("hide");
        $(".welcome").addClass("hide");
        $(".balance").removeClass("hide");
    });

    function displayuserDetails(){
        
        var wel = welcomeMessage+"<h2><strong>UserName:</strong> " + userDetails[0].name+"</h2><h2><strong>Balance:</strong> " + userDetails[0].AccountBalance;
        $(".welcome").html(wel)
        // alert(welcomeMessage+"UserName: " + userDetails[0].name+"\nBalance: " + userDetails[0].AccountBalance)
    }
    function navigate(){
        var navigate = window.prompt("Enter Options\n\n1. deposite\n2. Balance \n3. withdraw")
        console.log(navigate)
        if(navigate=="1"){
            Deposite();
         }
         else if(navigate=="2"){
            displayuserDetails();
         }
         else if(navigate=="3"){
            withdrawf();
         }
        
    }
    displayuserDetails()

    function balance(){
        $(".balance h2").html(userDetails[0].name+ " your Account Balance is Rs."+ userDetails[0].AccountBalance);
    }
    balance();  
    
    $(".despositSub").on("click", function(){
        var Depositei = $(".deposit input").val();
        if(parseInt(Depositei)<=0){
            alert("plese enter a value gretter then 0");
            Deposite();
        }
        else{
            userDetails[0].AccountBalance = parseInt(userDetails[0].AccountBalance)+parseInt(Depositei);
            alert("Transaction Successful.");
            $(".withdraw").addClass("hide");
            $(".deposit").addClass("hide");
            $(".welcome").addClass("hide");
            $(".balance").removeClass("hide");
        var Depositei = $(".deposit input").val();
            balance();  
        }
    })
    $(".withdrawSub").on("click", function(){
        var withdraw= $(".withdraw input").val();
        if(parseInt(withdraw)>userDetails[0].AccountBalance){
            alert("insufficient balance in account");
            withdraw();
        }
        else{
            userDetails[0].AccountBalance = parseInt(userDetails[0].AccountBalance)-parseInt(withdraw);
            alert("Transaction Successful.");
            $(".withdraw").addClass("hide");
            $(".deposit").addClass("hide");
            $(".welcome").addClass("hide");
            $(".balance").removeClass("hide");
            withdraw = $(".withdraw input").val("0");
            balance();  
        }
    })
    function Deposite(){
    }
    function withdrawf(){
        var withdraw = window.prompt("Enter withdraw Amount\n\n");
        transaction(withdraw);
    }
    function transaction(withdraw){
        if(parseInt(withdraw)>userDetails[0].AccountBalance){
            alert("You dont have enough money to withdraw");
            withdrawf();
        }
        else if(parseInt(withdraw)<=0){
            alert("Invalid Amount");
            withdrawf();
        }
        else{
            userDetails[0].AccountBalance = userDetails[0].AccountBalance-withdraw;
            alert("Transaction Successful.");
            navigate();
        }
    }
    // navigate();

})