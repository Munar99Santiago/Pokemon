<?php
/* Add to wp-config.php */
// Enable REST API
define('REST_API_ENABLED', true);

// Habilitación de CORS para la API de REST
function add_cors_http_header(){
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
}
add_action('init', 'add_cors_http_header');
