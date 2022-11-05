const navMenu = document.getElementById('nav-menu')
navToggle = document.getElementById('nav-toggle')
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(item=>item.addEventListener('click', linkAction))
// Swiper
let homeSwiper = new Swiper('.home-swiper', {
    spaceBetween: 30,
    loop: 'true',
    pagination: {
        el:'.swiper-pagination',
        clickable: true
    }
})

let newSwiper = new Swiper('.new-swiper', {
    centeredSlides:true,
    slidesPerView:'auto',
    loop:'true',
    spaceBetween: 16,
})
//Scroll up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY>=460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// Section active
const section = document.querySelector('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    SpeechRecognitionResult.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop=current.offsetTop -58,
        sectionId = current.getAttribute('id')
        if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active-link')
        }
    })
}

// Scroll reveal

const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 1500,
    delay: 400,
    reset: true
})
sr.reveal(`.home-swiper, .new-swiper, .newsletter_container`)
sr.reveal(`.category_data, .trick_content, .footer_content`, {interval:100})
sr.reveal(`.about_data, .discount_img`, {origin:'left'})
sr.reveal(`.about_img, .discount_data`, {origin:'right'})