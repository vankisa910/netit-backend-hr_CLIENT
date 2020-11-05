var HttpApi = {};

var url = (endpoint, queryParameterCollection) => {    
    
    var URL         = `http://localhost/netit-backend-hr_SERVER`;
    var urlEndpoint = `${URL}/${endpoint}`;
    
    if(queryParameterCollection) {
        
        var query = "";
        for(var index in queryParameterCollection) {
            query += `${index}=${queryParameterCollection[index]}&`;
        }
        query = query.substring(0, query.length-1);
        return `${urlEndpoint}?${query}`;
    }
      
    return urlEndpoint;
};


HttpApi.adPost = {};

HttpApi.adPost.getAll = (callback) => {
    Ajax.getJSON(url('ad_post'), (ajaxObject, res) => { callback(res); });
};

HttpApi.adPost.get = (postId, callback) => {
    Ajax.getJSON(url(`ad_post/${postId}`), (ajaxObject, res) => { callback(res.data); });
};

HttpApi.adPost.byCategory = (categoryId, callback) => {
    
    var queryParameterCollection = {
        category : categoryId
    };
    
    Ajax.getJSON(url('ad_post', queryParameterCollection), (ajaxObject, res) => { callback(res); });
};

HttpApi.adPost.byCompany = (companyId, callback) => {
    
    var queryParameterCollection = {
        company : companyId
    };
    
    Ajax.getJSON(url('ad_post', queryParameterCollection), (ajaxObject, res) => { callback(res); });
};



HttpApi.category = {};

HttpApi.category.getAll = (callback) => {
    Ajax.getJSON(url('category'), (ajaxObject, res) => { callback(res); });
};



HttpApi.company = {};

HttpApi.company.getAll = (callback) => {
    Ajax.getJSON(url('company'), (ajaxObject, res) => { callback(res); });
};    



HttpApi.user = {};

HttpApi.user.signin = (body, callback) => {
    Ajax.postJSON(url('user/signin'), body, (ajaxObject, res) => { callback(res); });
};

HttpApi.user.signup = (body, callback) => {
    Ajax.postJSON(url('user/signup'), body, (ajaxObject, res) => { callback(res); });
};