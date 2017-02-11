var canvas = document.getElementById ( 'canvas' ),
        context = canvas.getContext ( '2d' );

window.addEventListener ( 'DOMContentLoaded', initImageLoader );

function initImageLoader(){
   /*
    *     ** FOR RETRIEVING LOCATION OF IMAGE **
    */
	var location = window.location.href.replace(/\/+$/, "");        
        loadFile(location+'/../images/teacup-pig.jpeg');
};

function loadFile(file){
	var tempImageStore = new Image();

			// ONLOAD FUNCTION
		tempImageStore.onload = function(ev){
			canvas.height = ev.target.height;
			canvas.width = ev.target.width;

			canvas.drawImage(ev.target, 0, 0);
		}

		tempImageStore.src = file;
		return true;
};