var canvas = document.getElementById ( 'canvas' ),
        context = canvas.getContext ( '2d' ),
        uploadedFile = document.getElementById('uploaded-file');
        
window.addEventListener ( 'DOMContentLoaded', initImageLoader );


function initImageLoader(){
    uploadedFile.addEventListener('change', handleManualUploadedFiles);
};

function handleManualUploadedFiles(ev){
    var file = ev.target.files[0];
    debugger;
    handleFile(file);
};

function handleFile(file){
    var imageType = /image.*/;
    
    if(file.type.match(imageType)){
        var reader = new FileReader();

            // ONLOAD function, UPDATES CANVAS
            
        reader.onloadend = function(event){
            var tempImageStore = new Image();
            tempImageStore.onload = function(ev){
                canvas.height = ev.target.height;
                canvas.width = ev.target.width;
                context.drawImage(ev.target, 0, 0);
            }
            tempImageStore.src = event.target.result;
        }
            reader.readAsDataURL(file);          
        }
};