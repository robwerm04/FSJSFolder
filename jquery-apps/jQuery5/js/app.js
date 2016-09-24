///Hints are shown even when form is valid
///Hide and show only at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
///Hide hints
$("form span").hide();

function isPasswordValid(){
	return $password.val().length > 8;
}

function arePasswordsMatching() {
	return $password.val() === $confirmPassword.val();
}

function canSubmit() {
	return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
	///Find out if password is valid
	if(isPasswordValid()) {
		///Hide hint if valid
		$(this).next().hide();
	} else {
		///Else show hint
		$(this).next().show();
	}
}

function confirmPasswordEvent() {
	///Find out if passwords match
	if(arePasswordsMatching()) {
		///Hide hint if match
		$confirmPassword.next().hide();
	} else {
		///Else show hint 
		$confirmPassword.next().show();
	}
}

function enableSubmitEvent() {
	$("#submit").prop("disabled", !canSubmit());
}

///When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
	
///When confirmation event happens
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
	
enableSubmitEventSubmit();
	
		
		