require('jquery-ui');
import $ from 'jquery';
import 'bootstrap';

$(function(){ 
	console.log("test");
    alert("test"); 

    $('.tooltip').tooltip({
        sanitizeFn: function (content) {
          return DOMPurify.sanitize(content)
        }
    });

});