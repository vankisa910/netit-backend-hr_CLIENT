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
           
           var regexEmailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g;
           var regexPhone        = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

           var emailValidator = $dom.signupEmailInput.match(regexEmailPattern);
           var phoneValidator = $dom.signupPhoneInput.match(regexPhone);
         
           if(emailValidator === null) {
              $dom.signupEmailInput.after("<p>Email format is not valid!</p>");
              return;
           }

           if(phoneValidator === null) {
              $dom.signupPhoneInput.after("<p>Phone format is not valid!</p>");
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