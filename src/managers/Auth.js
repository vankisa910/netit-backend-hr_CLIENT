var Auth = {};

Auth.Authenticated = () => {
    return !!localStorage.getItem('_tokken');
};

Auth.getTokken = () => {
    return localStorage.getItem('_tokken');
};

Auth.signout = () => {
    localStorage.clear();
};

