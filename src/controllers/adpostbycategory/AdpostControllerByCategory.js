(function() {
    
    var $dom = {};
    
    var categoryMenuTemplate = (templateItem) => {

        var title   = templateItem.title;
        var id      = templateItem.id;
        return `<li class="category-placeholder--category" data-id="${id}">
                    ${title}
                </li>`;
    };

    var adPostTemplate = (templateItem) => {

        var title   = templateItem.title;
        var content = templateItem.content;
        var id      = templateItem.id;

        return `<div class   ="post" 
                     data-id = "${id}">
                    <span  class = "post-title"> "${title}"</span>
                    <div   class = "post-content">
                         <p> "${content}"</p>
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
    
        Template.load('adpostbycategory/template.html', function(result) {
            htmlPlaceholder.innerHTML = result;
            _constructor();            
        });
    };
    
    var _constructor = () => {
        
        $dom.adPostPlaceholder   = document.getElementById("ad-post--content");        
        $dom.categoryPlaceholder = document.getElementById("category-placeholder");
        
       Api.http.category.getAll(function(responseCollection) {

           $dom.categoryPlaceholder.innerHTML = Template.collection.build(categoryMenuTemplate, responseCollection);

           $dom.categoryPlaceholder.addEventListener('click', function(e) {
                Api.http.adPost.byCategory(e.target.dataset.id, populateAdPost);
           });

          Api.http.adPost.getAll(populateAdPost);
       });
    };

    AdpostControllerByCategory = {
        init : _templateBootstrap
    };
})();
