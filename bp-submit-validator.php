<?php 

/*
Plugin Name: BP Submit Validation by JS
Plugin URI:  https://wemadetech.com
Description: BP Submit Validation by JS
Version:     1.0
Author:      SKRiaz
Author URI:  http://skriaz.com
License:     GPL2 etc
License URI: https://wemadetech.com/license
*/

add_action( 'bp_after_profile_field_content', function() {
	if ( bp_is_user_profile_edit()) { ?>
	
	<script src="<?php echo plugins_url() . '/bp-submit-validator/js/validate.js'; ?>"></script>
	<link rel="stylesheet" href="<?php echo plugins_url() . '/bp-submit-validator/css/style.css'; ?>">
	<div class="bp-feedback bp-messages bp-template-notice warning" style="margin-bottom: 30px;">
	
	<span class="bp-icon" aria-hidden="true"></span>
	<p>Please ensure all mandatory fields are filled before hitting the SAVE button. Otherwise any changes will not be saved</p>
	
	</div> 
	
	<?php }
} );