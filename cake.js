// Responsive nav bar
const bar = document.getElementById('open');
const nav = document.getElementById('active');
const close = document.getElementById('close');

if (bar) {
 bar.addEventListener('click',() => {
   nav.classList.add('activity');
   close.style.display = 'block';
   bar.style.display = 'none';
   
   
 })
} 

if (close) {
 close.addEventListener('click',() => {
 nav.classList.remove('activity');
 close.style.display = 'none';
 bar.style.display = 'block';
})
}
// Responsive nav bar


 
    

let buton = document.querySelectorAll('.Abtn');

buton.forEach((butons) => {
  butons.addEventListener('click', handleClick);
    
   
  })
function handleClick(e) {
  // alert('Click')
  let btn = e.target;
  let parent = btn.parentElement.parentElement
  let grand = parent.parentElement.parentElement.parentElement;
  let items = grand.children[0]
  let image = items.children[1].src;
  let names = items.children[2]
  let name = names.children[0].innerText;
  let price = names.children[3].innerText
  console.log(image)
  console.log(name)
  console.log(price)

  // let itemContainer = document.createElement('tr')
  //    itemContainer.innerHTML = `<td><a href=""><ion-icon name="close-circle-outline"></ion-icon></a></td>
  //   <td><img src="${image}"></td>
  //   <td>${name}</td>
  //    <td>${price}</td>
  //    <td><input type="number" value="1"></td>
  //    <td>${price}</td>`
  //    document.getElementById('tbody').appendChild(itemContainer)


  //       Swal.fire({
  //   imageUrl: "./image/c1.png",
  //   imageHeight: 500,
  //   imageAlt: "A tall image"
  // });
  Swal.fire({
    imageUrl: image,
    title: name,
    text: "Please confirm your goods",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, buy"
  }).then((good) => {
    if (good.isConfirmed) {
      Swal.fire({
        title: "Delivery or Pick up",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Delivery",
        denyButtonText: `Pick up`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            
            title: "Please fill your address details",
            input: 'text',
            
            
          }).then((okay) => {
            if (okay.isConfirmed) {
             
                location.href = '/visacard/visa.html'
                
                
             }
          });
        } else if (result.isDenied) {
          Swal.fire({
            title: "Kindly call the number below to pick up your order and click okay to make your payment",
            text: "09033831446"
          }).then((okay) => {
            if (okay.isConfirmed) {
             
                location.href = '/visacard/visa.html'
                
                
             }
          });
        }
      });
      
      }
  });
      }

   
      
      // header
      // import { testimonial } from "data.js";



// let testimonialHtml = '';

// testimonial.forEach(function (item) {
// testimonialHtml += `
// <div class="text-contents">
//     <img src="${item.image}" alt="" class="quote quotes">
    
//     <p class="p">${item.content}</p>
//     <div class="text-profile">
//      <img src="${item.img}" alt="">
//      <p>${item.naMe}</p>
//     <a href="#">${item.account}</a>
//     </div>
//    </div>
// `
// });

// const htmls = document.getElementById('testimonials')
// htmls.innerHTML = testimonialHtml
// console.log(testimonial)

// testimonila

let testimonialHtml = '';

 testimonial.forEach(function (item) {
 testimonialHtml += `
 <div class="text-contents">
     <img src="${item.image}" alt="" class="quote quotes">
     
     <p class="p">${item.content}</p>
     <div class="text-profile">
      <img src="${item.img}" alt="">
      <p>${item.naMe}</p>
     <a href="#">${item.account}</a>
     </div>
    </div>
 `
});

const htmls = document.getElementById('testimonials')
htmls.innerHTML = testimonialHtml
