(function() {
    
    var $dom = {};
    
    var _templateBootstrap = (htmlPlaceholder) => {
    
        Template.load('signup/template.html', function(result) {
            htmlPlaceholder.innerHTML = result;
            _constructor();            
        });
    };
    
    var _constructor = () => {
      
        $dom.signupFirstNameInput = $("#signup--fname");
        $dom.signupLastNameInput  = $("#signup--lname");
        $dom.signupCityInput      = $("#signup--city");
        $dom.signupCountryInput   = $("#signup--country");
        $dom.signupUsernameInput  = $("#signup--user-name");
        $dom.signupPasswordInput  = $("#signup--user-pass");
        $dom.signupEmailInput     = $("#signup--user-email");
        $dom.signupPhoneInput     = $("#signup--user-phone");
        
        $dom.signupSubmitAction   = $("#signup--submit"); 
        
        $dom.signupSubmitAction.on('click', function() {
           
           if($dom.signupFirstNameInput.val().length === 0) {
              $dom.signupFirstNameInput.after("<p>The field is required!</p>");
              return;
           }
           
           if($dom.signupLastNameInput.val().length === 0) {
              $dom.signupLastNameInput.after("<p>The field is required!</p>");
              return;
           }

           if($dom.signupCityInput.val().length === 0) {
              $dom.signupCityInput.after("<p>The field is required!</p>");
              return;
           } 
           
           if($dom.signupCountryInput.val().length === 0) {
              $dom.signupCountryInput.after("<p>The field is required!</p>");
              return;
           } 
            
           if($dom.signupUsernameInput.val().length < 3) {
              $dom.signupUsernameInput.after("<p>The username must be at least 3 symbols!</p>");
              return;
           }
           
           if($dom.signupPasswordInput.val().length < 8) {
              $dom.signupPasswordInput.after("<p>At least 8 characters required!</p>");
              return;
           }
           
           if($dom.signupEmailInput.val().length < 8) {
              $dom.signupEmailInput.after("<p>At least 8 characters required!</p>");
              return;
           }
           
           if($dom.signupPhoneInput.val().length < 8) {
              $dom.signupPhoneInput.after("<p>At least 8 characters required!</p>");
              return;
           }
           
           var request = {
               fname    : $dom.signupFirstNameInput.val(),
               lname    : $dom.signupLastNameInput.val(),
               city     : $dom.signupCityInput.val(),
               country  : $dom.signupCountryInput.val(),
               username : $dom.signupUsernameInput.val(),
               password : $dom.signupPasswordInput.val(),
               email    : $dom.signupEmailInput.val(),
               phone    : $dom.signupPhoneInput.val()
            };
           
            Api.http.user.signup(request);
        });
    };
    
    SignupController = {
        init : _templateBootstrap
    };
})();