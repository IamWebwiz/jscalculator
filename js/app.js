$(function() {

	var entry = $('#entry');
	
	entry.hide();

	function show_entry() {
		entry.slideDown(250);
	}

	var toDegree = function(radianValue) {
		return radianValue * (180/Math.PI);
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

	$()

});