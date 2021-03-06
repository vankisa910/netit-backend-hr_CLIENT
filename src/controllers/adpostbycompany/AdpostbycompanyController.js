(function() {
    
    var $dom = {};
    
    var companyMenuTemplate = (templateItem) => {

        var title   = templateItem.title;
        var id      = templateItem.id;
        return `<li class="company-placeholder--company" data-id="${id}">
                    ${title}
                </li>`;
    };

    var adPostTemplate = (templateItem) => {

        var title   = templateItem.title;
        var content = templateItem.content;
        var id      = templateItem.id;

        return `<div class   ="post" 
                     data-id = "${id}">
                    <span  class = "post-title"> ${title}</span>
                    <div   class = "post-content">
                         <p> ${content}</p>
                    </div>   
                    <div>
                         <p>First Name:</p>
                         <input class = "input"  
                                type  = "text"> 
                         <p>Last Name:</p>
                         <input class = "input"  
                                type  = "text"> 
                         <p>Phone:</p>
                         <input class = "input"  
                                type  = "text"> 
                         <p>CV:</p>
                         <p>Cover letter:</p
                         <input class = "input"  
                                type  = "text">   
                         <input type  = "submit"
                                class = "submit"
                                value = "Apply for position">
                    </div>
                </div>`;
    };

    var populateAdPost = (responseCollection) => {

        $dom.adPostPlaceholder.innerHTML  = Template.collection.build(adPostTemplate, responseCollection);          

        $dom.adPostPlaceholder.addEventListener('click', function(e) {

           if(!e.target.dataset.id) return;

           var postId = e.target.dataset.id;
           Api.http.adPost.get(postId, function(entity) {
               $dom.adPostPlaceholder.innerHTML = adPostTemplate(entity);
           });
        });
    };
    
    var _templateBootstrap = (htmlPlaceholder) => {
    
        Template.load('adpostbycompany/template.html', function(result) {
            htmlPlaceholder.innerHTML = result;
            _constructor();            
        });
    };
    
    var _constructor = () => {
        
        $dom.adPostPlaceholder   = document.getElementById("ad-post--content");        
        $dom.companyPlaceholder = document.getElementById("company-placeholder");
        
       Api.http.company.getAll(function(responseCollection) {

           $dom.companyPlaceholder.innerHTML = Template.collection.build(companyMenuTemplate, responseCollection);

           $dom.companyPlaceholder.addEventListener('click', function(e) {
                Api.http.adPost.byCompany(e.target.dataset.id, populateAdPost);
           });

          Api.http.adPost.getAll(populateAdPost);
       });
    };

    AdpostbycompanyController = {
        init : _templateBootstrap
    };
})();