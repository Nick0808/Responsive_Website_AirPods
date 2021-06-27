/*Show menu*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*Animate gsap*/

gsap.from('.home_title', {opacity:0, duration:1.5, delay:.5, y:50})
gsap.from('.home_description', {opacity:0, duration:1.5, delay:.8, y:50})

gsap.from('.airpods1', {opacity:0, duration:2, delay:1.2, y:-40})
gsap.from('.airpods2', {opacity:0, duration:2, delay:1.4, y:40})

gsap.from('.nav_logo', {opacity:0, duration:2.5, delay:1.5, y:25});
gsap.from('.nav_toggle', {opacity:0, duration:2.5, delay:1.7, y:25});
gsap.from('.nav_item', {opacity:0, duration:2.5, delay:1.9, y:25, ease:'expo.out', stagger:.3})
gsap.from('.nav_btn', {opacity:0, duration:2.5, delay:2, y:25});

gsap.from('.home_scroll', {opacity:0, duration:1.5, delay:2.3, y:30})

/*Animate scrollMagic*/
var animate = new TimelineMax({onUpdate:updatePercentage})
var controller = new ScrollMagic.controller()

/*Details*/
animate
.from('.details_img', {opacity:0, y:25})
.from('.details_box', {opacity:0, y:25, duration:1, ease:'expo.out', stagger:.4})

var scene = new ScrollMagic.Scene({
    triggerElement: ".details_box",
})

.setTween(animate)
.addTo(controller)

function updatePercentage() {
    animate.progress()
}
