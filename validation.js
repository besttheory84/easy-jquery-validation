$(document).ready(function() {
    	// This is for on submit
	$("#form").submit(function() {
        	$('.required').each(function() {
		// These are regex to check for valid email and phone number
    		var emailVal = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    		var phoneVal = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
		    if($(this).hasClass('email')) {
		        if (!(emailVal.test($(this).val()))) {
		            $(this).removeClass('correct').addClass('error');
		        } else {
		            $(this).removeClass('error').addClass('correct');	
		        }					
		    }
		    else if($(this).hasClass('phone')) {
		        if (!(phoneVal.test($(this).val()))) {
		            $(this).removeClass('correct').addClass('error');
		        } else {
		            $(this).removeClass('error').addClass('correct');	
		        }		
		    }
			else if($(this).val() == "") {
				$(this).removeClass('correct').addClass('error')
			}
			else { 
				$(this).removeClass('error').addClass('correct')
			}
        	}
		var errors = $('input.error').length;
		if(errors !== 0) {
			alert('Please fill out all required fields');
			return false;	
		}
	});
	// This is for on blur
    	$('.required').blur(function () {
		// These are regex to check for valid email and phone number
	    	var emailVal = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	    	var phoneVal = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
	    	if($(this).hasClass('email')) {
	        	if (!(emailVal.test($(this).val()))) {
	            		$(this).removeClass('correct').addClass('error');
	        	} else {
	            		$(this).removeClass('error').addClass('correct');	
	        	}					
	    	}
	    	else if($(this).hasClass('phone')) {
	        	if (!(phoneVal.test($(this).val()))) {
	            		$(this).removeClass('correct').addClass('error');
	        	} else {
	            		$(this).removeClass('error').addClass('correct');	
	        	}		
	    	}
		else if($(this).val() == "") {
			$(this).removeClass('correct').addClass('error')
		}
		else { 
			$(this).removeClass('error').addClass('correct')
		}
    	});
});
