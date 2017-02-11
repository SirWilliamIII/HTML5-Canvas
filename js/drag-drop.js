var canvasTwo = document.getElementById('canvasTwo');
	c = canvasTwo.getContext('2d');
	draggedFile = document.getElementById('loaded-file');

	window.addEventListener('DOMContentLoaded', initImageLoader);

	function initImageLoader(){
		document.getElementById('drop-area').addEventListener('dragover', function(this){
			$(this).addClass('over');
		}, true);


		document.getElementById('drop-area').addEventListener('dragLeave', function(this){
			$(this).removeClass('over');
		}, true);


		document.getElementById('drop-area').addEventListener('drop', function(this){
			$(this).removeClass('over');
		}, true);


		window.addEventListener('dragover', function(e){
			e.preventDefault();
		}, true);

		window.addEventListener('dragLeave', function(e){
			e.preventDefault();
		}, true);

		window.addEventListener('drop', function(e){
			e.preventDefault();
		}, true);

		

	}