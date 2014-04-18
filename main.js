window.onload = function() {

	var div = document.getElementById('imgur');

	//generates a random string 5 letters in length to use in the url
	function randomString() {
    	charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    	var randomString = '';
    	for (var i = 0; i < 5; i++) {
    		var randomPoz = Math.floor(Math.random() * charSet.length);
    		randomString += charSet.substring(randomPoz,randomPoz+1);
   	 	}
    return randomString;
	}

	//runs the loadImg func 50 times to load all the images
	var loader = function() {
		for (i = 0; i < 50; i++) {

			loadImg();

		}
	}		

	//uses randomString to make url and add images to #imgur, then removes images 161px wide which are the broken images
	var loadImg = function() {
		 

			var images = document.createElement('img');
			images.setAttribute('src', 'http://i.imgur.com/' + randomString() + '.png');
			div.appendChild(images);
			images.onload = function() {
				var thickness = $(images).width();
				console.log(thickness);
				if (thickness == 161) {
					div.removeChild(images);
					i 

				}
				$(images).width(300);
			}
		}

	loader();

	//loads more images after scrolling down half the page, allows infinite scroll
	$(function(){
 		$(window).scroll(function(){
       		if($(window).scrollTop() > $(window).height()/1.5){
           		loadImg();
       }
   	
   })
})




};