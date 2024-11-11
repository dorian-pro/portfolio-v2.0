/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/theme.scss';

import './styles/loading.scss';
import './styles/app.scss';
import './styles/navbar.scss';
import './styles/animate_block.scss';

import './styles/pages/home.scss';

$(function() {

    // affichage du loader
    $('#loading').removeClass('active')

    // menu mobile
    $('#btn-mobile').on('click', function() {
        // Bascule la classe "active" sur le bouton
        $(this).toggleClass('active');
        
        // Bascule la classe "active" sur le menu
        $('#navbar-nav').toggleClass('active');
    });
});