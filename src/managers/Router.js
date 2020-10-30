var menuPlaceholder     = document.getElementById("hr--menu");
var contentPlaceholder  = document.getElementById("content");

menuPlaceholder.addEventListener('click', function(e) {
    
    var controllerId            = e.target.dataset.controller;
    var controllerIdFirstLetter = controllerId[0].toUpperCase();
    var controllerIdRest        = controllerId.slice(1);
    controllerId                = `${controllerIdFirstLetter}${controllerIdRest}`;
    var controllerExecutor      = `${controllerId}Controller.init(contentPlaceholder)`;
    eval(controllerExecutor);
});

