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