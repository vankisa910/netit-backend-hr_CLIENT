(function() {
    
    var $dom = {};
    
    var _templateBootstrap = (htmlPlaceholder) => {
    
        Template.load('faq/template.html', function(result) {
            htmlPlaceholder.innerHTML = result;
            _constructor();            
        });
    };
    
    var _constructor = () => {
        
    };

    FaqController = {
        init : _templateBootstrap
    };
    
})();