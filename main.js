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
	var loadImg = function() {
		for (i = 0; i < 20; i++) {

			var images = document.createElement('img');
			images.setAttribute('src', 'http://i.imgur.com/' + randomString() + '.png');
			div.appendChild(images);
		}
	}		

	loadImg();

	//loads more images after scrolling down half the page, allows infinite scroll
	$(function(){
 		$(window).scroll(function(){
       		if($(window).scrollTop() > $(window).height()/2){
           		loadImg();
       }
   });
});


    

};