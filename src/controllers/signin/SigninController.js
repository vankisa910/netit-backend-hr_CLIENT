(function() {
    
    var $dom = {};
    
    var _templateBootstrap = (htmlPlaceholder) => {
    
        Template.load('signin/template.html', function(result) {
            htmlPlaceholder.innerHTML = result;
            _contructor();            
        });
    };
    var _contructor = () => {
        
        $dom.signinUsernameInput       = $("#signin--user-name");
        $dom.signinUserPasswordInput   = $("#signin--user-pass");
        
        $dom.signinSubmitAction        = $("#signin--submit"); 
        $dom.signinSubmitAction.on('click', function() {
           
           if($dom.signinUsernameInput.val().length === 0) {
              $dom.signinUsernameInput.after("<p>The field is required!</p>");
              return;
           }
           
           if($dom.signinUserPasswordInput.val().length === 0) {
              $dom.signinUserPasswordInput.after("<p>The field is required!</p>");
              return;
           }
           
           var request = {
               username   : $dom.signinUsernameInput.val(),
               password   : $dom.signinUserPasswordInput.val()
           };
           
            Api.http.user.signin(request, (result) => {
               
               if(result.data && result.data.tokken) {
                    localStorage.setItem("_tokken", result.data.tokken);
               }
           });
        });
    };
    
    SigninController = {
        init : _templateBootstrap
    };
})();    
    
    