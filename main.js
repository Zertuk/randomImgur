window.onload = function() {

	var div = document.getElementById('imgur');

	var randomURL = function() {	

		return Math.random().toString(36).slice(8);
	}

	function randomString() {
    charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var randomString = '';
    for (var i = 0; i < 5; i++) {
    	var randomPoz = Math.floor(Math.random() * charSet.length);
    	randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

	var loadImg = function() {
		for (i = 0; i < 20; i++) {

			var images = document.createElement('img');
			images.setAttribute('src', 'http://i.imgur.com/' + randomString() + '.png');
			div.appendChild(images);
		}
	}		

	loadImg();
	
};