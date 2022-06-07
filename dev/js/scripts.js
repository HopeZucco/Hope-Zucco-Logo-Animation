// Import GSAP plugins
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { TweenMax } from "gsap/gsap-core";
// import { TweenLite } from "gsap/TweenLite";
// import { TweenMax } from "gsap/TweenMax";
// import { TweenMax } from "gsap/TweenMaxBase";

//Gsap Register Plugins
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, MotionPathHelper);
//


let mainTL = new gsap.timeline();

gsap.set(".contType",{alpha:0});
gsap.set(".airType",{alpha:0});
gsap.set(".airplaneNew",{alpha:1,x:"-=126",transformOrigin:"50% 50%"});
gsap.set(".logoC",{drawSVG:"0%"});
gsap.set(".theLine",{x:"+=77",y:"+=61",scale:.5,alpha:0});
gsap.set(".airplaneNew",{rotation:200});
gsap.set(".clouds",{scale:0.75});


// gsap.set()
gsap.set(".logoA",{alpha:0});

function cloudMovement(){
    mainTL.from(".clouds",{duration:4, xPercent:-200});
    mainTL.to(".clouds",{duration:4,scale:1.25},"-=3");
    
}

function airplaneIntro(){
    // mainTL.from(".airplaneNew",{y:"+=200",duration:2,ease:"power4.out"});
    // mainTL.to(".airplaneNew",{duration:2,alpha:1},"-=2");
    mainTL.to(".airplaneNew", {motionPath:{path:"#airplanepath",align:"#airplanepath",autoRotate:true,alignOrigin:[0.5,0.5]},duration:4.5,ease:"power2.out"}, "-=4");
}


function planeToLogo(){
    // write that
    mainTL.to(".airplaneNew",{duration:.5,scale:0.75,alpha:0});
    mainTL.to(".logoA",{alpha:1,duration:.5},"-=.25");
    
    // mainTL.to(".logoC",{drawSVG:"100%",alpha:1,duration:1,ease:"power4.inOut"});

}

// function planeToLogo(){

//     var tl = gsap.timeline({defaults: {duration: 1}}),
//     airplane = document.getElementsByClassName(".airplaneNew");

//     tl.to(airplane, {morphSVG:".logoA"});
// }

function typeReveal(){
    // write that
    mainTL.to(".logoC",{drawSVG:"100%",alpha:1,duration:1,ease:"power4.inOut"});
    mainTL.from(".contType",{ease:"power4.out",duration:2,x:"-=40"});
    mainTL.to(".contType",{stagger:.1,duration:1,alpha:1},"-=2");
    mainTL.from(".airType",{ease:"power4.out",duration:2,x:"-=40"},"-=1.5");
    mainTL.to(".airType",{stagger:.1,duration:1,alpha:1},"-=2");
}

function typeReveal2(){
    
}

mainTL
.add(cloudMovement())
.add(airplaneIntro())
.add(planeToLogo())
.add(typeReveal())
.add(typeReveal2(),"-=5");




// airplaneIntro();
// planeToLogo();
// typeReveal();
// typeReveal2();



GSDevTools.create();
