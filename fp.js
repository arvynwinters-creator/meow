/*const btn1 = document.getElementById("btn1")

btn1.addEventListener("click" , function(){
  btn1.style.backgroundColor="#fff" ;
  btn1.style.color="#fbcd03";
  btn1.style.border="3px solid #fbcd03"  
})
  */
gsap.registerPlugin(ScrollTrigger);
gsap.from("#heading",{
    y:-50,
    duration:1.5,
    opacity:0,
})
gsap.from("#logo",{
    y:-50,
    duration:1.5,
    opacity:0,
})
gsap.from("nav ul li",{
    y:-50,
    duration:.8,
    opacity:0,
    stagger:1,
})
gsap.from("nav p",{
    y:-50,
    duration:1.5,
    opacity:0,
})
gsap.from("#img" , {
    x:300,
    duration:2,
    opacity:0,
})
gsap.from(".section1 h1" , {
    x:-300,
    duration:2,
    opacity:0,
    stagger:.2,
})
gsap.from(".section1 h3" , {
    x:-300,
    opacity:0,
    duration:2,
})
gsap.from(".section1 p", {
    y:100,
    duration:2,
    opacity:0,
})
gsap.from("#btn1", {
    y:100,
    duration:2,
    opacity:0,
})
gsap.from("#btn2", {
    y:100,
    duration:2,
    opacity:0,
})
gsap.from(".cb" , {
    opacity:0,
    duration:2,
    stagger:2,
    delay:1,
})
gsap.from(".cards", {
    y:100,
    opacity:0,
    duration:5,
    scrollTrigger:{
        trigger:".cards",
        start:"top 90%",
        markers:true,
    }
})