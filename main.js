window.onload = function() {

	var div = document.getElementById('imgur');
	var totalDiv = document.getElementById('total');
	var removedDiv = document.getElementById('removed');
	var total = 0;

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
	var loader = function(val) {
		for (i = 0; i < val; i++) {

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
				if (thickness == 161) {
					div.removeChild(images);
				
				}
				else {
				$(images).width(300);
				total++;
				totalDiv.innerHTML = '<p>' + total + ' images loaded</p>';
				}
			}
		}

	loader(30);

	//button to add more if infinite fails
	var more = document.getElementById('more');
	more.addEventListener('click', function() {
		loader(15);
	})

	//loads more images after scrolling down half the page, allows infinite scroll
	$(function(){
 		$(window).scroll(function(){
       		if($(window).scrollTop() > $(window).height()/1.5){
           		loader(15);
       }
   	
   })
})

};