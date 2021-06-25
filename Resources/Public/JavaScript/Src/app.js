'use strict';

import * as $ from 'jquery';
global.jQuery = global.$ = require('jquery');
import 'bootstrap';
import '../../Scss/default.scss';

//$(".test").tooltip();
$("#meineTabs").addClass("test");

$('#meineTabs a').on("click",function (e) {
  e.preventDefault();
  $(this).tab('show');
});

$(function() {  
  $('[data-toggle="tooltip"]').tooltip('show');
})  