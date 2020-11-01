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

$("#menu-signout").hide();

if (Auth.Authenticated()) {
    $("#menu-signup").hide();
    $("#menu-signin").hide();
    $("#menu-signout").show();
}

$("#menu-signout").on('click', () => {
    Auth.signout();
    $("#menu-signup").show();
    $("#menu-signin").show();
});

