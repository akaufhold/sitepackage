'use strict';

import 'normalize-css';
import * as $ from 'jquery';

global.jQuery = global.$ = require('jquery');
import 'bootstrap';
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

import '../Scss/app.scss';

require('@fortawesome/fontawesome-free/css/all.min.css');
// require('@fortawesome/fontawesome-free/js/all');

import { library } from '@fortawesome/fontawesome-svg-core'
//import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendarAlt";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

library.add(faEnvelope, faArrowUp, faChevronRight);

gsap.to(".content-top-background", { 
    opacity: "0.4",
    transform:"rotateX(0deg) rotateY(0deg) rotateZ(-45deg)",
    backgroundColor:"#ccc",
    ease: "none",
    scrollTrigger: {  
        trigger: "main",
        start: "top bottom", // the default values
        end: () => "+=700", 
        scrub: true
    },   
}); 

/*const tl = gsap.timeline({
    scrollTrigger: {
      
      trigger: ".content-top",
      start: "top center",
      end: "+=400",
      
      scrub: true,
      markers: true,
  
    }
});

$(".content-top-circle").each(function(key,val){
    var multPosX = Math.cos(50*key)*100;
    console.log(multPosX);
    var multPosY = 50*key;
    tl.to(".content-top-circle"+key, { xPercent: multPosX, duration: 1});
    tl.to(".content-top-circle"+key, { yPercent: multPosY, duration: 1});

})*/

$(function() {   
    var App = function () {
        var app = this;

        app.init = function(val1,val2){
            return(`${val1} ${val2}`);
        }
    }

    var app = new App();
    app.init();
})  