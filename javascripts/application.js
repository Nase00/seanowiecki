function removeLinkInfo() {
	$('#link-info').html('');
}
function previewLink(selector, link) {
	selector.hover(function() {
		$('#link-info').html(link)
	}, function() {
		removeLinkInfo();
	})
}
$(document).ready(function() {
	previewLink($('#github-icon'), '[ github.com/Nase00 ]')
	previewLink($('#gmail-icon'), '[ seanowiecki@gmail.com ]')
	previewLink($('#linkedin-icon'), '[ linkedin.com/pub/sean-owiecki ]')
	previewLink($('#twitter-icon'), '[ twitter.com/NaseZero ]')

	var atomic6Preview = $('#atomic6-preview')
	atomic6Preview.hover(function() {
		atomic6Preview.attr("src", 'images/atomic6_code_preview.png');
	}, function() {
		atomic6Preview.attr("src", 'images/atomic6_preview.png');
	})

	var horizonPreview = $('#horizon-preview')
	horizonPreview.hover(function() {
		horizonPreview.attr("src", 'images/horizon_code_preview.png');
	}, function() {
		horizonPreview.attr("src", 'images/horizon_preview.png');
	})
})