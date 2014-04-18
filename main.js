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

	//uses randomString to make url and add images to #imgur
var loader = function() {
	for (i = 0; i < 40; i++) {

			loadImg();

		}
	}		

	
	var loadImg = function() {
		 

			var images = document.createElement('img');
			images.setAttribute('src', 'http://i.imgur.com/' + randomString() + '.png');
			div.appendChild(images);
			images.onload = function() {
				var thickness = $(images).width();
				console.log(thickness);
				if (thickness == 161 || thickness == 24 || thickness == 0) {
					div.removeChild(images);
					

				}
				$(images).width(300);
			}
		}

	loader();


	//loads more images after scrolling down half the page, allows infinite scroll
	$(function(){
 		$(window).scroll(function(){
       		if($(window).scrollTop() > $(window).height()/2){
           		loadImg();
       }
   });
});


    

};