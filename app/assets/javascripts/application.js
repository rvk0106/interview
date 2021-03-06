// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require dataTables/jquery.dataTables
//= require dataTables/bootstrap/2/jquery.dataTables.bootstrap
//= require turbolinks
//= require_tree .
$("document").ready(function() {
	// For fixed width containers
	
$( ".get-users" ).click(function() {
	var roles = []
  	$('input[type=checkbox]:checked').each(function(){ roles.push($(this).val()); })
  	$.ajax({
  		url: "/users",
  		type: "get", //send it through get method
  		data:{roles: roles, roles_select: $("#role_select").val()},
  		success: function(response) {
    		$(".result").html(response)
  		},
  		error: function(xhr) {
    		//Do Something to handle error
  		}
});
});

$('.datatable').DataTable({
	 	

	});
});