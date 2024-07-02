 let menu = document.querySelector('#menu-btn');
 let header = document.querySelector('.navbar');

 menu.onclick = () => {
     menu.classList.toggle('fa-times');
     header.classList.toggle('active');
 }

 window.onscroll = () => {
     menu.classList.remove('fa-times');
     header.classList.remove('active');
 }

 //let menutoggle = document.querySelector('.toggle');
 //let navbar = document.querySelector('.navbar');
 //menutoggle.onclick = function () {
 //    document.querySelector('#menu-btn').onclick = () => {
 //        menutoggle.classList.toggle('active');
 //        navbar.classList.toggle('active');
 //    }
 //}

 //	Green Script
 // document.querySelectorAll('.small-image-2').forEach(images => {
 //     images.onclick = () => {
 //         document.querySelector('.big-image-2').src = images.getAttribute('src');
 //     }
 // });

 //read more..read less btn
// const parentContainer = document.querySelector('.box-container');
// parentContainer.addEventListener('click', event => {
//     const current = event.target;
//     const isReadMoreBtn = current.className.includes('read-more-btn');
//     if (!isReadMoreBtn) return;
//
//     const currentText = event.target.parentNode.querySelector('.read-more-text');
//     currentText.classList.toggle('read-more-text--show');
//     current.textContent = current.textContent.includes('Read More') ? "Read Less" : "Read More";
//
// })
 //
 //// hidde-show
 //var divState = {};
 //
 //function showhide(id) {
 //    if (document.getElementById) {
 //        var divid = document.getElementById(id);
 //        divState[id] = (divState[id]) ? false : true;
 //        for (var div in divState) {
 //            if (divState[div] && div != id) {
 //                document.getElementById(div).style.display = 'none';
 //                divState[div] = false;
 //            }
 //        }
 //        divid.style.display = (divid.style.display == 'block' ? 'none' : 'block');
 //    }
 //}
 //
 //function hiddehom() {
 //    home.style.display = 'none';
 //}

 //home script

 let slides = document.querySelectorAll('.home .slides-container .slide');
 let index = 0;

 function next() {
     slides[index].classList.remove('active');
     index = (index + 1) % slides.length;
     slides[index].classList.add('active');
 }

 function prev() {
     slides[index].classList.remove('active');
     index = (index - 1 + slides.length) % slides.length;
     slides[index].classList.add('active');
 }
