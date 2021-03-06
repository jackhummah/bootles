var elixir = require('laravel-elixir');

elixir.config.production == true;
elixir.config.sourcemaps = true;

if (elixir.config.production == true) {
    process.env.NODE_ENV = 'production';
}

require('laravel-elixir-ngtemplatecache');

/**
|--------------------------------------------------------------------------
| Elixir Asset Management
|--------------------------------------------------------------------------
|
| Elixir provides a clean, fluent API for defining some basic Gulp tasks
| for your Laravel application. By default, we are compiling the Sass
| file for our application, as well as publishing vendor resources.
|
*/

elixir(function(mix) {

    mix.ngTemplateCache('/**/*.html', 'docs/js', 'resources', {
        templateCache: {
            standalone: true
        },
        htmlmin: {
            collapseWhitespace: true,
            removeComments: true
        }
    });

    // Mix ReactJS via Browserify
    mix.browserify([
        '../../../resources/app/app.module.js',
        '../../../resources/app/utils/auth.service.js',
        '../../../resources/app/app.run.js',
        '../../../resources/app/routes.module.js',
        '../../../resources/app/components/index/index.component.js',
        '../../../resources/app/components/auth/login.component.js',
        '../../../resources/app/components/bootstrap/index.component.js',
        '../../../resources/app/components/bootstrap/navbar.component.js',
        '../../../resources/app/components/bootstrap/nav-tabs.component.js',
        '../../../resources/app/components/material/index.component.js',
        '../../../resources/app/components/material/colors.component.js',
        '../../../resources/app/components/material/drawer.component.js',
        '../../../resources/app/components/material/tabs.component.js',
        '../../../resources/app/components/plugins/index.component.js',
        '../../../resources/app/components/plugins/select2.component.js',
        '../../../resources/app/components/plugins/swiper.component.js',
        '../../../resources/app/components/plugins/tinymce.component.js',
        '../../../resources/app/components/templates/index.component.js',
    ], 'docs/js/app.ng.js');

    mix.sass([
        '../../../vendor/bootstrap/bootstrap-3.3.7/dist/css/bootstrap.css',
		'../../../vendor/bootstrap-social/bootstrap-social-5.1.1/bootstrap-social.css', // [lipis] bootstrap-social
		'../../../vendor/bootstrap-material-design/bootstrap-material-design-0.3.0/dist/css/ripples.css',
        '../../../vendor/bootstrap-slider/bootstrap-slider-9.8.0/dist/css/bootstrap-slider.css', // [seiyria] bootstrap-slider
		'../../../vendor/animate.css/animate.css-3.5.2/animate.css', // [daneden] animate.css
		'../../../vendor/font-awesome/Font-Awesome-4.7.0/css/font-awesome.css', // [FortAwesome] Font-Awesome
		'../../../vendor/flag-icon-css/flag-icon-css-2.8.0/css/flag-icon.css', // [lipis] flag-icon-css
		'../../../vendor/jquery-ui/jquery-ui-1.12.1.custom/jquery-ui.css',
		'../../../vendor/swiper/swiper-3.4.2/dist/css/swiper.css', // [nolimits4web] Swiper
		'../../../vendor/glidejs/glidejs-2.1.0/dist/css/glide.core.css', // [jedrzejchalubek] glidejs
		'../../../vendor/jquery-raty/raty-2.7.1/lib/jquery.raty.css', // [wbotelhos] raty
		'../../../vendor/select2/select2-3.5.4/select2.css', // [select2] select2
		'../../../vendor/select2-bootstrap/select2-bootstrap-css-1.4.6/select2-bootstrap.css', // [t0m] select2-bootstrap-css
		'../../../vendor/datatables/datatables-1.10.15/media/css/jquery.dataTables.css', // [DataTables] DataTables
        '../../../resources/app/utils/sass/bootles-ext.scss',
    ], 'docs/dist/css/bootles.min.css');

    // Mix jQuery core and plugins
    mix.scripts([
        // Standalone / Vanilla
        '../../../vendor/handlebars/handlebars-4.0.5/handlebars-v4.0.10.js', // [wycats] handlebars.js
        '../../../vendor/lodash/lodash-4.17.4/dist/lodash.js', // [lodash] lodash
        '../../../vendor/json2/json2.js', // JSON2
        '../../../vendor/modernizr/modernizr-2.8.3/modernizr.js', // [Modernizr] Modernizr
        '../../../vendor/moment/moment-2.18.1/min/moment.min.js', // [moment] moment
        '../../../vendor/moment-range/moment-range-3.0.3/dist/moment-range.js', // [gf3] moment-range
        '../../../vendor/wow/wow-1.1.2/dist/wow.js', // [matthieua] WOW
        '../../../vendor/sticky-js/sticky-js-1.2.0/dist/sticky.min.js', // [rgalus] sticky-js
        '../../../vendor/javascript-detect-element-resize/javascript-detect-element-resize-0.5.3/detect-element-resize.js', // [sdecima] jquerypp

        // jQuery Core
        '../../../vendor/jquery/jquery-1.12.4.js', // jQuery
        '../../../vendor/jquery/jquery-migrate-1.4.1.min.js', // jQuery Migrate
        '../../../vendor/jquery-ui/jquery-ui-1.12.1.custom/jquery-ui.js', // jQuery UI
        '../../../vendor/jquery-file-upload/jquery-file-upload-9.18.0/js/vendor/jquery.ui.widget.js', // jQuery UI Widget
        '../../../vendor/jquery-ui-touch-punch/jquery-ui-touch-punch-0.2.3/jquery.ui.touch-punch.js', // [furf] jquery-ui-touch-punch
        '../../../vendor/jquery-pp/jquerypp-2.0.2/dist/global/jquerypp.js', // [bitovi] jquerypp

        // jQuery Utilities
        '../../../vendor/jquery-whenLive/whenLive-3.1.0/jquery.whenlive.custom.js', // [tkambler] whenLive
        '../../../vendor/jquery-serializeObject/jQuery.serializeObject-2.0.3/jquery.serializeObject.js', // [hongymagic] jQuery.serializeObject

        // Bootstrap
		'../../../vendor/bootstrap/bootstrap-3.3.7/dist/js/bootstrap.js', // Bootstrap Core
		// '../../../vendor/bootstrap/bootstrap-3.3.7/js/transition.js', // Bootstrap Core
		// '../../../vendor/bootstrap/bootstrap-3.3.7/js/alert.js', // Bootstrap Core
		// '../../../vendor/bootstrap/bootstrap-3.3.7/js/button.js', // Bootstrap Core
		// '../../../vendor/bootstrap/bootstrap-3.3.7/js/carousel.js', // Bootstrap Core
		// '../../../vendor/bootstrap/bootstrap-3.3.7/js/collapse.js', // Bootstrap Core
		// '../../../vendor/bootstrap/bootstrap-3.3.7/js/dropdown.js', // Bootstrap Core
		// '../../../vendor/bootstrap/bootstrap-3.3.7/js/modal.js', // Bootstrap Core
		// '../../../vendor/bootstrap/bootstrap-3.3.7/js/tooltip.js', // Bootstrap Core
		// '../../../vendor/bootstrap/bootstrap-3.3.7/js/popover.js', // Bootstrap Core
		// '../../../vendor/bootstrap/bootstrap-3.3.7/js/scrollspy.js', // Bootstrap Core
        // '../../../vendor/bootstrap/bootstrap-3.3.7/js/tab.js', // Bootstrap Core
		// '../../../vendor/bootstrap/bootstrap-3.3.7/js/affix.js', // Bootstrap Core
		'../../../vendor/bootstrap-material-design/bootstrap-material-design-0.3.0/dist/js/material.js', // Bootstrap Material
		'../../../vendor/bootstrap-material-design/bootstrap-material-design-0.3.0/dist/js/ripples.js', // Bootstrap Material Ripples
        '../../../vendor/bootstrap-slider/bootstrap-slider-9.8.0/dist/bootstrap-slider.js', // [seiyria] bootstrap-slider

        // jQuery Presentation
        '../../../vendor/jquery-lazyload/jquery_lazyload-1.9.7/jquery.lazyload.js', // [tuupola] jquery_lazyload
        '../../../vendor/jquery-lazyload/jquery_lazyload-1.9.7/jquery.scrollstop.js', // [tuupola] jquery_lazyload Scrollstop
        '../../../vendor/swiper/swiper-3.4.2/dist/js/swiper.jquery.js', // [nolimits4web] Swiper
        '../../../vendor/glidejs/glidejs-2.1.0/dist/glide.js', // [jedrzejchalubek] glidejs
        '../../../vendor/jquery-stuck/jquery-stuck-1.0.3/src/jquery.stuck.js', // [alextaujenis] jquery-stuck

        // jQuery File Upload
        '../../../vendor/jquery-file-upload/jquery-file-upload-9.18.0/js/jquery.iframe-transport.js', // [blueimp] Iframe Transport
        '../../../vendor/jquery-file-upload/jquery-file-upload-9.18.0/js/jquery.fileupload.js', // [blueimp] Core
        '../../../vendor/jquery-file-upload/jquery-file-upload-9.18.0/js/jquery.fileupload-process.js', // [blueimp] Process

        // jQuery Forms
        '../../../vendor/jquery-spinner/jquery.spinner-0.2.1/dist/js/jquery.spinner.js', // [vsn4ik] jquery.spinner
        '../../../vendor/select2/select2-3.5.4/select2.js', // [select2] select2
        '../../../vendor/select2/select2-3.5.4-placecomplete/jquery.placecomplete.js', // [stephjang] placecomplete
        '../../../vendor/jquery-raty/raty-2.7.1/lib/jquery.raty.js', // [wbotelhos] raty
        '../../../vendor/jquery-mask-plugin/jquery-mask-plugin-1.14.11/dist/jquery.mask.js', // [igorescobar] jQuery-Mask-Plugin
        '../../../vendor/tinymce/tinymce-4.6.4/js/tinymce/tinymce.js', // [tinymce] tinymce
        '../../../vendor/tinymce/tinymce-4.6.4/js/tinymce/jquery.tinymce.min.js', // [tinymce] jQuery tinymce

        // Datatables
        '../../../vendor/datatables/datatables-1.10.15/media/js/jquery.dataTables.min.js', // [DataTables] Datatables + Bootstrap
        '../../../vendor/datatables/datatables-1.10.15/media/js/dataTables.bootstrap.min.js', // [DataTables] Datatables + Bootstrap
        // '../../../vendor/datatables/datatables-1.10.15/custom/datatables.js', // [DataTables] Datatables + Bootstrap

        // Bootles
        '../../../resources/app/utils/helpers/drawer.js',
        // '../../../vendor/materialize/materialize-src-v0.98.2/js/bin/materialize.custom.js',
        '../../../resources/app/utils/helpers/global.js',
        '../../../resources/app/utils/helpers/hammer.min.js',
        '../../../resources/app/utils/helpers/jquery.hammer.js',
        '../../../resources/app/utils/helpers/velocity.min.js',
        '../../../resources/app/utils/helpers/sideNav.js',
        '../../../resources/app/utils/helpers/tabs.js',

	], 'docs/dist/js/bootles.min.js');
});
