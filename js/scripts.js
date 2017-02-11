var canvas = document.getElementById ( 'our-canvas' ),
        context = canvas.getContext ( '2d' ),
        uploadedFile = document.getElementById('uploaded-file');
        
window.addEventListener ( 'DOMContentLoaded', initImageLoader );


function initImageLoader(){
    uploadedFile.addEventListener('DOMContentLoaded', initImageLoader);
    
        /*
        *          ** FOR RETRIEVING LOCATION OF IMAGE **
        *
        var location = window.location.href.replace(/\/+$/, "");        
        loadFile(location+'/../images/teacup-pig.jpeg');
        *
        *       ** location = file:// index.html/../images/teacup-pig.jpeg **
        */
}

function handleManualUploadedFiles(ev){
    var file = ev.target.files[0];
    handleFile(file);
}

function handleFile(file){
    var imageType = /image.*/;
    
    if(file.type.match(imageType)){
        var reader = new FileReader();
    }
    reader.onloadend = function(event){
        var tempImageStore = new Image();
    }
        
        // ONLOAD function
        tempImageStore.onload = function(ev){
            canvas.height = ev.target.height;
            canvas.width = ev.target.width;
            
            context.drawImage(ev.target, 0, 0);
    }
}

/*
function loadFile ( file ){
    var tempImageStore = new Image();
        
        //  ONLOAD function
        tempImageStore.onload = function (ev){
        canvas.height = ev.target.height;
        canvas.width = ev.target.width;
        
        context.drawImage(ev.target, 0, 0);
    }
    tempImageStore.src = file;
    return false;     
}
*/