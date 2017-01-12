/**
 * Created by Hossam Elnabawy on 12/01/2017.
 */

$(function () {
	$('#feedback .most-recent').load('api');
	$.getJSON('api', function (data) {
		console.log(data);
	})
});