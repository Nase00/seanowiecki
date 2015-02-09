function removeLinkInfo() {
	$('#link-info').html('');
}
$(document).ready(function() {
	var linkInfo = $('#link-info')
	$('#github-icon').hover(function() {
		linkInfo.html('[ github.com/Nase00 ]')
	}, function() {
		removeLinkInfo();
	})
	$('#gmail-icon').hover(function() {
		linkInfo.html('[ seanowiecki@gmail.com ]')
	}, function() {
		removeLinkInfo();
	})
	$('#linkedin-icon').hover(function() {
		linkInfo.html('[ linkedin.com/pub/sean-owiecki ]')
	}, function() {
		removeLinkInfo();
	})
	$('#twitter-icon').hover(function() {
		linkInfo.html('[ twitter.com/NaseZero ]')
	}, function() {
		removeLinkInfo();
	})
})