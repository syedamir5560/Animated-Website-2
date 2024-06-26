function init() {

  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

init()

// cursor

let cursor=document.querySelector(".cursor")
let sound =document.querySelector(".sound")
let main=document.querySelector(".main")
let vedio = document.querySelector(".main video")

main.addEventListener("mousemove",(dets)=>{
    cursor.style.left = dets.x +20+"px"
  
    cursor.style.top = dets.y +20+"px"

})

vedio.addEventListener("mouseenter",(dets)=>{
  sound.style.left = dets.x + 20+"px"
  sound.style.top = dets.y + 20+"px"
sound.style.visibility='visible'
 
  cursor.style.visibility='hidden'

})

vedio.addEventListener("mouseleave",(dets)=>{

sound.style.visibility='hidden'
cursor.style.visibility='visible'


})



let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: '.main',
    start: "top 27%",
    end: "top 0",
    // markers: true,
    scrub: 2

  }
})

tl.to(".page1  h1", {
  x: -100,

}, 'a')

tl.to(".page1  h2", {
  x: 100,

}, 'a')

tl.to(".page1 video", {
  width: "90%",

}, 'a')



let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: '.main',
    start: "top -116%",
    end: "top -120%",
    // markers: true,
    scrub: 2

  }
})


tl2.to(".main", {
  backgroundColor:"white"

}, 'a')

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: '.main',
    start: "top -300%",
    end: "top -300%",
    // markers: true,
    scrub: 2

  }
})

tl3.to(".main", {
  backgroundColor:"black"

})

var boxes=document.querySelectorAll(".box")
// console.log(boxes)

boxes.forEach((ele)=>{
ele.addEventListener("mouseenter",()=>{
  var att = ele.getAttribute("data-image")
  cursor.style.width="300px"
  cursor.style.height="250px"
  cursor.style.backgroundColor="blue"
  cursor.style.borderRadius="0"
  cursor.style.backgroundImage=`url(${att})`
 
})


ele.addEventListener("mouseleave",()=>{
 
  cursor.style.backgroundColor="transparent"
  cursor.style.width="20px"
  cursor.style.height="20px"
  cursor.style.borderRadius="50%"
  cursor.style.backgroundImage=`url(${att})`

 
})
})




