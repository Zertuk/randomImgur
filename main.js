window.onload = function() {

	var div = document.getElementById('imgur');
	
	//generates random 5 letter string to use in the url
	function randomString() {
    	charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    	var randomString = '';
    	for (var i = 0; i < 5; i++) {
    		var randomPoz = Math.floor(Math.random() * charSet.length);
    		randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
	}

	//creates img elements and adds url from randomString
	var loadImg = function() {
		for (i = 0; i < 20; i++) {
			var images = document.createElement('img');
			images.setAttribute('src', 'http://i.imgur.com/' + randomString() + '.png');
			div.appendChild(images);
		}
	}		

	//loads more images when scrolled past half way point, allows infinite scroll
	$(function(){
   		$(window).scroll(function(){
       		if($(window).scrollTop() > $(window).height()/2){
           		loadImg();
    	   	}
   		});
	});

};