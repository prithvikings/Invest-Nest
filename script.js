function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach((elem)=>{
    //create two spans
    let parent=document.createElement("span");
    let child=document.createElement("span");

    //parent and child both sets their respective classes
    parent.classList.add("parent");
    child.classList.add("child");

    //span parent get child and child gets elem details
    child.innerHTML=elem.innerHTML;
    parent.append(child);

    //elem replaces its value with parent span
    elem.innerHTML="";
    elem.appendChild(parent);
})
}

function loader(){
let tl=gsap.timeline();
tl.from(".child span",{
    x:"100%",
    opacity:0,
    duration:1.4,
    stagger:.2,
    ease:Power3.easeInOut
})
tl.to(".parent .child",{
    y:"-100%",
    duration:1,
    ease:Circ.easeInOut
})
tl.from(".paisa-loader i",{
    y:"-100%",
    // opacity:0,
    scale:0,
    duration:3,
    rotate:"360deg"
})
tl.to(".paisa-loader i",{
    opacity:0,
    duration:0.6,
})
tl.to("#loader",{
    delay:0.2,
    height:0,
    duration:0.9,
    ease:Circ.easeInOut
})
tl.from("#page1",{
    y:1200,
    opacity:0
})
}

function sidenav(){
    let tl=gsap.timeline();
tl.to("#full",{
    right:0,
    duration:0.4
})
tl.from("#full h4",{
    opacity:0,
    stagger:0.2,
    x:150,
    duration:0.2
})
tl.from("#full i",{
    opacity:0
},"-=1")
tl.pause();
let menu=document.querySelector(".ri-menu-3-line");
let close=document.querySelector(".ri-close-line");
menu.addEventListener("click",()=>{
    tl.play();
})
close.addEventListener("click",()=>{
    tl.reverse();
})
}

function HeroAnimation(){
    let cl=gsap.timeline();
cl.from("nav",{
    stagger:0.8,
    duration:0.6,
    opacity:0,
    y:-30
})
cl.from(".line h1",{
    opacity:0,
    duration:0.8,
    y:100
})
cl.from("#hero-btn",{
    opacity:0,
    y:10,
    duration:0.2,
    stagger:0.15
})
cl.from("#iconset",{
    opacity:0,
    y:10,
    duration:0.2,
    stagger:0.15
})
}
function howitwork(){
    let cl=gsap.timeline();
    cl.from(".line2 .ht",{
        y:"-70%",
        duration:1,
        scrollTrigger:{
            trigger:".line2 .ht",
            scroller:"body",
            markers:false,
            start:"top 80%",
            end:"top 20%",
            scrub:0.2
        }
    })
    cl.from("#startup",{
        x:"-70%",
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#startup",
            scroller:"body",
            markers:false,
            start:"top 80%",
            end:"top 50%",
            scrub:0.2
        }
    })
    cl.from("#Investor",{
        x:"70%",
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#startup",
            scroller:"body",
            markers:false,
            start:"top 80%",
            end:"top 50%",
            scrub:0.2
        }
    })
}
function valueprop(){
    let cl=gsap.timeline();
    cl.from("#v-s-head",{
        opacity:0,
        duration:1,
        x:-100,
        scrollTrigger:{
            trigger:"#v-s-head",
            scroller:"body",
            markers:false,
            start:"top 70%",
            end:"top 12%",
            scrub:0.1
        }
    })
    cl.from("#v-s-text",{
        duration:1,
        opacity:0,
        y:100,
        scrollTrigger:{
            trigger:"#v-s-text",
            scroller:"body",
            markers:false,
            start:"top 70%",
            end:"top 12%",
            scrub:0.1
        }
    },"-=0.4")
    
    cl.from("#v-i-head",{
        opacity:0,
        duration:1,
        x:-100,
        scrollTrigger:{
            trigger:"#v-i-head",
            scroller:"body",
            markers:false,
            start:"top 70%",
            end:"top 12%",
            scrub:0.1
        }
    })
    cl.from("#v-i-text",{
        duration:1,
        opacity:0,
        y:-100,
        scrollTrigger:{
            trigger:"#v-i-text",
            scroller:"body",
            markers:false,
            start:"top 70%",
            end:"top 12%",
            scrub:0.1
        }
    },"-=0.4")
}


sidenav();
HeroAnimation();
howitwork();
valueprop();
// revealToSpan();
// loader();
