function initialize() {
    var location = new google.maps.LatLng(49.4671785, -123.0048952);
    var map_canvas = document.getElementById('map_canvas');
    var map_options = {
        center: location,
        zoom: 12,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(map_canvas, map_options)

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {
   $('#starter section, #entree section, #dessert section').css('height', $('#entree').height());
});