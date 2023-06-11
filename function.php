<?php

// Redirect users who arent logged in...
function verified_only() {
    global $pagenow;
    // Check to see if user is not logged in and not on the login page
    if( !is_user_logged_in() && $pagenow != 'login.html' )
          auth_redirect();
}
add_action( 'verified_only' ); 

?>