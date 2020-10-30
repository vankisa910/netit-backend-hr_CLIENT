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