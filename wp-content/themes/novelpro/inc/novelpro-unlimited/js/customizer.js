jQuery(document).ready(function() {
// our service  widget
wp.customize.section( 'sidebar-widgets-novelpro-team' ).panel('our_team');
wp.customize.section( 'sidebar-widgets-novelpro-team' ).priority('3');

wp.customize.section( 'sidebar-widgets-novelpro-testimonial' ).panel('home_testimonial');
wp.customize.section( 'sidebar-widgets-novelpro-testimonial' ).priority('3');

wp.customize.section( 'sidebar-widgets-novelpro-services' ).panel('home_three_col');
wp.customize.section( 'sidebar-widgets-novelpro-services' ).priority('3');

wp.customize.section( 'sidebar-widgets-novelpro-pricing' ).panel('pricing_section');
wp.customize.section( 'sidebar-widgets-novelpro-pricing' ).priority('3');

wp.customize.section( 'sidebar-widgets-novelpro-brand' ).panel('brand_panel');
wp.customize.section( 'sidebar-widgets-novelpro-brand' ).priority('3');

wp.customize.section( 'sidebar-widgets-novelpro-custom' ).panel('cust_panel');
wp.customize.section( 'sidebar-widgets-novelpro-custom' ).priority('3');

wp.customize.section( 'sidebar-widgets-novelpro-custom-second' ).panel('cust_panel');
wp.customize.section( 'sidebar-widgets-novelpro-custom-second' ).priority('4');

wp.customize.section( 'sidebar-widgets-novelpro-custom-third' ).panel('cust_panel');
wp.customize.section( 'sidebar-widgets-novelpro-custom-third' ).priority('5');


jQuery( '.focus-customizer-slide-image-redirect' ).on( 'click', function (e){
            e.preventDefault();
             wp.customize.section( 'section_slider_first' ).focus();
} );
jQuery( '.focus-customizer-video-redirect' ).on( 'click', function (e){
            e.preventDefault();
             wp.customize.section( 'slider_video_cap' ).focus();
} );

});