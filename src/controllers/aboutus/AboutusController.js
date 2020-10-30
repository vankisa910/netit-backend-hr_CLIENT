(function() {
    
    var $dom = {};
    
    var _templateBootstrap = (htmlPlaceholder) => {
    
        Template.load('aboutus/template.html', function(result) {
            htmlPlaceholder.innerHTML = result;
            _constructor();            
        });
    };
    
    var _constructor = () => {
        
    };

    AboutusController = {
        init : _templateBootstrap
    };
    
})();