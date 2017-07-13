$(function() {

	var entry = $('#entry');
	
	entry.hide();

	function show_entry() {
		entry.slideDown(250);
	}

	$('#one').on('click', function(event) {
		show_entry();

		entry.append($(this).text());
	});

	$('#two').on('click', function(event) {
		show_entry();
		entry.append($(this).text());
	});

	$('#three').on('click', function(event) {
		show_entry();
		entry.append($(this).text());
	});

	$('#four').on('click', function(event) {
		show_entry();
		entry.append($(this).text());
	});

	$('#five').on('click', function(event) {
		show_entry();
		entry.append($(this).text());
	});

	$('#six').on('click', function(event) {
		show_entry();
		entry.append($(this).text());
	});

	$('#seven').on('click', function(event) {
		show_entry();
		entry.append($(this).text());
	});

	$('#eight').on('click', function(event) {
		show_entry();
		entry.append($(this).text());
	});

	$('#nine').on('click', function(event) {
		show_entry();
		entry.append($(this).text());
	});

	$('#zero').on('click', function(event) {
		show_entry();
		entry.append($(this).text());
	});

	$('#clear').on('click', function(event) {
		show_entry();
		entry.text('');
	});

	var sine = document.getElementById('sine');
	sine.addEventListener('click', function(e) {
		show_entry();
		entry.text(Math.sin(entry.text()));
	});

	var cosine = document.getElementById('cos');
	cosine.addEventListener('click', function(e) {
		show_entry();
		entry.text(Math.cos(entry.text()));
	});

	var tangent = document.getElementById('tan');
	tangent.addEventListener('click', function(e) {
		show_entry();
		entry.text(Math.tan(entry.text()));
	});

	var logarithm = document.getElementById('log');
	logarithm.addEventListener('click', function(e) {
		show_entry();
		entry.text(Math.log(entry.text()));
	});

});