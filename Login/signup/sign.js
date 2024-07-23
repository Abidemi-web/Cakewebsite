// let container = document.getElementById('container')
// let login = document.getElementById('login')
// let Signup = document.getElementById('signup')
// let h2 = document.getElementById('h2')
// let p = document.getElementById('p')
// let but = document.getElementById('but')
// let fName = document.getElementById('fName')
// let email = document.getElementById('texte')
// let password = document.getElementById('psw')
// let userPassword = document.getElementById('password')
// let userEmail = document.getElementById('email')
// let start = document.getElementById('start');
//  let displays = document.getElementById('display')
// function helloF() {
//   // container.style.right = '11%';
//   // login.style.left = '11%';
//   // h2.innerHTML = 'Welcome Back!'
//   // p.innerHTML = 'To keep connected with us please login <br> with your personal info'
//   // but.innerHTML = 'Sign in'
//   // login.innerHTML = `<h2>Sign Up</h2>
//   // <input id="fName" type="text" placeholder="First Name" required>
//   // <input id="lName" type="text" name="" placeholder="Last Name" required>
//   // <input id="text" type="email" name="email" placeholder="Email Address" required>
//   // <input id="psw" type="password" name="email" placeholder="Password" required>
//   // <button onclick="
//   //     valiDate()
//   // " class="btnn"><a id="goto" href="#"></a>Sign In</button>

  
//   // <p class="liw">Signup with</p>

//   // <div class="icons">
//   //     <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
//   //     <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
//   //     <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
//   //     <a href="#"><ion-icon name="logo-google"></ion-icon></a>
//   //     <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
//   // </div>`
// }

// function valiDate() {

// let firstname = fName.value
// let passwordf = password.value
// let emailf = email.value
// if (!firstname && !passwordf && !emailf) {
//   Swal.fire({
//     title: "Please input all required fields",
//     icon: "warning",
//   })
// } else {
// localStorage.setItem('fName', firstname)
// localStorage.setItem('email', emailf);
//  localStorage.setItem('password', passwordf);
//  Swal.fire({
//   title: "Login Successfully",
//   icon: "success"
// }).then((result) => {
//   if (result.isConfirmed) {
//     location.href = "/Login/signup/login.html"
    
//     }
// });
 

// console.log(firstname)
// console.log(passwordf)
// console.log(emailf)
// }
// }
// function valiDate1() {
 
//   const ufPassword = localStorage.getItem('password')
//   const ufEmail = localStorage.getItem('email')
//   let ufName = localStorage.getItem('fName')
//     h2.innerHTML = `Welcome ${ufName}`
//   if (userEmail.value === ufEmail && userPassword.value === ufPassword) {
   
//     Swal.fire({
//       title: "Login Successfully",
//       icon: "success"
//     }) .then((result) => {
//       if (result.isConfirmed) {
//         location.href = '/cake.html'

//         }
//     });
    
    
    

    
//   } else {
//     Swal.fire({
//       title: "Wrong Email or Password",
//       icon: "warning"
//     }) 
//   }
//   console.log(ufName)
//   console.log(ufPassword)
//   console.log(ufEmail)
// }
