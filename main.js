window.onload = function() {

	var div = document.getElementById('imgur');

	var randomURL = function() {	

		return Math.random().toString(36).slice(8);
	}

	var loadImg = function() {
		for (i = 0; i < 20; i++) {

			var images = document.createElement('img');
			images.setAttribute('src', 'http://i.imgur.com/' + randomURL() + '.png');
			div.appendChild(images);
		}
	}

	
		

	loadImg();
 function loadMore()
{
   console.log("More loaded");
   loadImg();
   $(window).bind('scroll', bindScroll);
 }

 function bindScroll(){
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       $(window).unbind('scroll');
       loadMore();
   }
}

$(window).scroll(bindScroll);


		

    


};