var Template = { 
    collection : {}
};

var templateUrl = (templateName) => {
    
    const TEMPLATE_URL = `http://localhost/netit-backend-hr_CLIENT/src/controllers`;
    return `${TEMPLATE_URL}/${templateName}`;
};

Template.collection.build = function(templateProvider, collection) {
    
    var templateCollection  = [];
    var collection          = collection.data;
    
    for(var i = 0; i < collection.length; i++) {
        
        var template = templateProvider(collection[i]);
        templateCollection.push(template);
    }
    
    return templateCollection.join('');
};

Template.load = (templateName, callback) => {
  Ajax.get(templateUrl(templateName), (ajaxObject, res) => { callback(res); });  
};