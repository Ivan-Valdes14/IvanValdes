function testLength(value, length){
	if(value === length){
		return true;
	}
	else{
		return false;
	}
}








function testNumber(value){
	if(!isNaN(value)){
		return true;
	}
	else{
		return false;
	}
}








function validateControl(control, name){
	
	if(name === 'First-Name' || name === 'Last-Name' || name === 'Name-on-card'){
		
		if (!testNumber(control.value)) {
			return true;
		}
		else{
			alert("A mistake was made when filling out the " + name + " portion of the form. Please correct the information or reset the form and start over");
			return false;
		}
	}
	else if (name === 'CVC') {
		
		if (testNumber(control.value) && control.value != '' && control.value.length === 3) {
			return true;
		}
		else{
			alert("A mistake was made when filling out the " + name + " portion of the form. Please correct the information or reset the form and start over");
			return false;
		}
	}
	else{
		alert("We're not sure how that happened. Please reset the form and refresh the page please.");
		return false;
	}	
}








function validateCreditCard(value){
	let cardNum = value.value ;
	cardNum = cardNum.replace(/\s/g,'');
	let numValid = false;
	let cardTypeValid = false;
	let correctLen = false;
	
	if (testNumber(cardNum)) {
	  numValid = true;
	}
	else{
		alert("The information entered is incompatible with our system, please go back and check make sure you entered your information correctly.");
		return false;
	}


	if (numValid) {
		if (parseInt(cardNum[0]) === 3 || parseInt(cardNum[0]) === 6 || parseInt(cardNum[0]) === 5 || parseInt(cardNum[0]) === 4) {
			cardTypeValid = true;
		}
		else{
			alert("The card information entered is incompatible with our system, please go back and check make sure you entered your information correctly.");
			return false
		}
	}

 
  
  if (numValid && cardTypeValid) {
  	if ((parseInt(cardNum[0]) === 3 && testLength(cardNum.length, 15)) || ((parseInt(cardNum[0]) === 6 || parseInt(cardNum[0]) === 5 || parseInt(cardNum[0]) === 4) && testLength(cardNum.length, 16))) {
  		correctLen = true;
  	}
  	else{
  		alert("Your Card is invalid with us, please use a different card");
  		return false;
  	}
  }


  if (numValid && cardTypeValid && correctLen) {
  	return true;
  }
  else{
  	alert("Go back and make sure your info is valid please");
  	return false;
  }
}








function validateDate(value){
	let formatedDate = new Date(value.value + "GMT-0500");
	let date = new Date();

	if(formatedDate.valueOf() > date.valueOf()){
		return true;
	}
	else{
		alert("Enter a date after today please");
		return false;
	}
}






function validateEmail(value){
	let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
	if(value.value.match(re)){
		return true;
	}
	else{
		alert("Enter valid email");
		return false;
	}
}








function validateCarType(value) {
  if(value == null) {   
   alert("please select a Car Type please");
   return false;
  }   
  else {
   return true;
  }   
}







function validateState(value){
	if(value.value){
		return true;
	}
	else{
		alert("Select A valid state please")
		return false;
	}
}    







function validateDateTime(value){
	date = new Date();
	selectedDate = new Date(value.value);
	if(selectedDate.valueOf() > date.valueOf()){
		return true;
	}
	else{
		alert("Please select a later day/time please");
		return false;
	}
	
}

function validateDropOffTime(valuepickUp, valueDropoff){
	pickupDate = new Date(valuepickUp.value);
	dropoffDate = new Date(valueDropoff.value);
	if(dropoffDate.valueOf() > pickupDate.valueOf()){
		return true;
	}
	else{
		return false;
	}
}







function validateForm(){
 let fnameValid = validateControl(document.getElementById('fname'), document.getElementById('fname').name);
 let lnameValid = validateControl(document.getElementById('lname'), document.getElementById('lname').name);
 let nocValid = validateControl(document.getElementById('cname'), document.getElementById('cname').name);
 let cvcValid = validateControl(document.getElementById('secnum'), document.getElementById('secnum').name);
 let cardValid = validateCreditCard(document.getElementById('cnum'));
 let dateValid = validateDate(document.getElementById('proj2'));
 let emailValid = validateEmail(document.getElementById('ead'));
 let carTypeValid = validateCarType(document.querySelector('input[name="carTypeBtn"]:checked'));
 let statePickupValid = validateState(document.getElementById('pickupLoc'));
 let stateDropoffValid = validateState(document.getElementById('dropoffLoc'));
 let dateTimeValid = validateDateTime(document.getElementById('pickup-time'))
 let dropOffValid = validateDropOffTime(document.getElementById('pickup-time'),document.getElementById('dropoff-time'));
 let truth = fnameValid && lnameValid && nocValid && cvcValid && cardValid && dateValid && emailValid && carTypeValid && statePickupValid && stateDropoffValid && dateTimeValid && dropOffValid;
 if(truth){
 	alert("Payment Submitted Successfully!");
 }
 else{
 	alert("One or more inputs are incorrect please go back and fix what was wrong.")
 }
 return false; 
}