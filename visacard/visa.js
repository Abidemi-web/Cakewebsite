// let cardNumber1 = document.getElementById("cardNum1");
// let cardInput = document.getElementById("cardInput1").value;

let submitbtn = document.getElementById("submitbtn");

submitbtn.addEventListener("click", () => {

  
 let cardInput = document.getElementById("cardInput1").value;
 document.getElementById("cardNum1").innerHTML = cardInput;

 let cardInput2 = document.getElementById("cardInput2").value;
 document.getElementById("cardNum2").innerHTML = cardInput2;

 let cardInput3 = document.getElementById("cardInput3").value;
 document.getElementById("cardNum3").innerHTML = cardInput3;

 let cardInput4 = document.getElementById("cardInput4").value;
 document.getElementById("cardNum4").innerHTML = cardInput4;

 let cardHolder = document.getElementById("cardholder").value;
 document.getElementById("cardhold").innerHTML = cardHolder;

 let Number1 = document.getElementById("number1").value;
 document.getElementById("expiredate").innerHTML = Number1;


 let Number2 = document.getElementById("number2").value;
 document.getElementById("expiredate2").innerHTML = Number2;


 if (!cardInput && !cardInput2 && !cardInput3 && !cardInput4 && !Number1 && !Number2 && !cardHolder) {
  document.getElementById("error").style.display = "block";
  Swal.fire({
       title: "Please input your account details",
       
      
       icon: "error"
   });
}
else {
  document.getElementById("details").innerHTML = `Dear ${cardHolder}, Thanks you for banking with us.`;
  Swal.fire({
    title: `${cardHolder} Thanks you for banking with us and your order will be delivered in 30minutes`,
    
    
    icon: "success"
}).then((okay) => {
  if (okay.isConfirmed) {
   
      location.href = '/cake.html'
      
      
   }})
}



}

)


   
   
  


