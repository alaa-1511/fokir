
window.addEventListener('scroll',  function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 600) { 
        navbar.classList.add('scrolled'); 
    } else {
        navbar.classList.remove('scrolled'); 
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        
        document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
  });
  
//  portfolio
let  swicherlis= document.querySelectorAll('.swich li');
let imgs= Array.from(document.images);


swicherlis.forEach((li) => {
    li.addEventListener('click', removeActive);
    li.addEventListener('click', manageImgs);
});


// add and remove
function removeActive(){
    swicherlis.forEach((li)=>{
     li.classList.remove('active');
     this.classList.add('active') ;
    });

}
// manage imgs
function manageImgs(){
imgs.forEach((img)=>{
 img.style.display='none' ;
});
document.querySelectorAll(this.dataset.cat).forEach((el)=>{
    el.style.display='block';
})
}
function showCaption(element) {
    const overlay = element.nextElementSibling;
    overlay.style.display = 'flex';
}

function hideCaption(element) {
    element.style.display = 'none';
}
function showDetails(element) {
    const details = element.nextElementSibling;
    details.style.display = 'block';
}

function hideDetails(closeButton) {
    const details = closeButton.closest('.Portfolio-veiw');
    details.style.display = 'none';
}

// change num

let nums =document.querySelectorAll('.nums .num');
let section =document.querySelector('.count');
let started =false; 
   
window.onscroll = function(){
    if(window.scrollY >= section.offsetTop ){
        if(!started){
            nums.forEach((num)=>startCounter(num));
        }
        started = true;
    }
};



function startCounter(el){
    let goal=el.dataset.goal;
    let count=setInterval(()=>{
        el.textContent++;
        if(el.textContent==goal){
            clearInterval(count)
        }

    }, 2000/goal);
}


document.addEventListener('scroll', () => {
    const span = document.querySelector('.up');
    span.style.display = window.scrollY >= 100 ? 'block' : 'none';
  });
  
  document.querySelector('.up').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
    

 // JavaScript to highlight the active link in the navbar
//  const sections = document.querySelectorAll("section");
//  const navLinks = document.querySelectorAll(".nav-link");

//  window.addEventListener("scroll", () => {
//    let currentSection = "";

//    sections.forEach((section) => {
//      const sectionTop = section.offsetTop;
//      if (pageYOffset >= sectionTop - 60) {
//        currentSection = section.getAttribute("id");
//      }
//    });

//    navLinks.forEach((link) => {
//      link.classList.remove("active");
//      if (link.getAttribute("href") === `#${currentSection}`) {
//        link.classList.add("active");
//      }
//    });
//  });

