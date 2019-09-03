beforeEach(function() {
	browser.url("https://www.w3schools.com/html/html5_video.asp");
})

//Injects a snippet of JavaScript into the page for execution in the context of the currently selected frame.
browser.addCommand('isVideoPaused', function(){
	var isPaused = browser.execute(function () {
		console.log('Printing the log in the brower console: Success');

	var videoStat = document.querySelector('#video1');
		return videoStat.paused;
	});
	return isPaused.value;
});

describe('Video test', function() {
	it('Validate that the video is paused upon accessing the page', function(done) {
		this.timeout(20000);
		var isPaused = browser.isVideoPaused();
		expect(isPaused).to.be.true;
		browser.pause(6000);
	});

	it('Alter the width of the video', function(done) {
		var videoWidth = browser.execute(function() {
			var video = document.querySelector('#video1');
			return video.style.width = "300px";
		});
		browser.pause(6000);
	});
});
