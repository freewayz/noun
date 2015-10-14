/**
 * Created by azibit on 9/17/15.
 */
$(document).ready(function(){
    $('ul.tabs').tabs();
});

$(document).ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');
});

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
});

$(document).ready(function() {
    $('select').material_select();
});


$('#textarea1').val('New Text');
$('#textarea1').trigger('autoresize');


$(document).ready(function(){
    $('.slider').slider({full_width: true});
});

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
});

$(document).ready(function(){
    $('ul.tabs').tabs();
});

$(document).ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');
});