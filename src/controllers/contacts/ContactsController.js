(function() {
    
    var $dom = {};
    
    var _templateBootstrap = (htmlPlaceholder) => {
    
        Template.load('contacts/template.html', function(result) {
            htmlPlaceholder.innerHTML = result;
            _contructor();            
        });
    };
    
    var _contructor = () => {
        
    };

    ContactsController = {
        init : _templateBootstrap
    };
    
})();