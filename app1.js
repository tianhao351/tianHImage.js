
window.onload = function(){
	var canvas = document.getElementById("canvas")
	var context = canvas.getContext("2d")
	var image = new Image()
	var slider = document.getElementById('scale-range')

	var watermarkCanvas = document.getElementById('marsk')
	var watermarkContext = watermarkCanvas.getContext("2d")

	var canvasA = document.getElementById("canvasA")
	var contextA = canvasA.getContext("2d")

	var blueBtn = document.getElementById('blueBtn');
	var redBtn = document.getElementById('redBtn');
	var greenBtn = document.getElementById('greenBtn');
	var grayBtn = document.getElementById('grayBtn');
	var oppositeBtn = document.getElementById('oppositeBtn');
	var blurBtn = document.getElementById('blurBtn');
	var slideBtn = document.getElementById('slideBtn');
	var edgeBtn = document.getElementById('edgeBtn');
	var moshaBtn = document.getElementById('moshaBtn');
	var kiliBtn = document.getElementById('kiliBtn');
	var guolvBtn = document.getElementById('guolvBtn');

	var inputBtn = document.getElementById("inputBtn")

	var inputRed = document.getElementById('inputRed')
	var inputGreen = document.getElementById('inputGreen')
	var inputBlue = document.getElementById('inputBlue')

	var querenBtn = document.getElementById("querenBtn")
	var randomBtn = document.getElementById("randomBtn")

	inputBtn.onchange = function(){
 		image.src=inputBtn.value
	}

    image.src = "3.png"
	canvas.width = 800

    image.onload = function(){



    	canvas.width = canvas.width  ;
		canvas.height = image.height/image.width * canvas.width;


    	canvasA.width = canvas.width  ;
		canvasA.height = image.height/image.width * canvas.width;

		drawImageByScale(slider.value)

		slider.onchange = function(){
			drawImageByScale(slider.value)
		}
		    

	    redBtn.onclick = function(){
	    	redfy(canvas,context)

	    };

	    blueBtn.onclick = function(){
	    	bluefy(canvas,context)
	    };

	    greenBtn.onclick = function(){
	    	greenfy(canvas,context)
	    };

	    grayBtn.onclick = function(){
	    	grayfy(canvas,context)
	    };

	    oppositeBtn.onclick = function(){
			opposite(canvas,context)
	    };

	   	blurBtn.onclick = function(){
	    	blur(canvas,context)
	    };


	    edgeBtn.onclick = function(){
            edgeDetection(canvas,context)
	    };

    	keliBtn.onclick = function(){
	    	cartoon(canvas,context)
	    };



	    querenBtn.onclick = function(){
			filtration(canvas,context,inputRed.value,inputGreen.value,inputBlue.value)
	    
	    }


	    randomBtn.onclick = function(){
	    	console.log(inputRed.value)
	    	r1 = parseInt(Math.random()*255)
	    	g1 = parseInt(Math.random()*255)
	    	b1 = parseInt(Math.random()*255)
			guolv(r1,g1,b1)
	    }



    

    }




	function drawImageByScale( scale ){

        var imageWidth = canvas.width * scale
        var imageHeight = canvas.height * scale

        //var sx = imageWidth / 2 - canvas.width / 2
        //var sy = imageHeight / 2 - canvas.height / 2

        //context.drawImage( image , sx , sy , canvas.width , canvas.height , 0 , 0 , canvas.width , canvas.height )
        x = canvas.width /2 - imageWidth / 2
        y = canvas.height / 2 - imageHeight / 2


	    watermarkCanvas.width = canvas.width;
	    watermarkCanvas.height = canvas.height;

	    
	    var imageData2 = watermarkContext.createImageData( watermarkCanvas.width , watermarkCanvas.height )
            var pixelData2 = imageData2.data

            var sorts = 4

            for( var i = 0 ; i < watermarkCanvas.height ; i ++ )
                for( var j = 0 ; j < watermarkCanvas.width/sorts ; j ++ ){
					var p = i*watermarkCanvas.width+j
					pixelData2[4*p+0] = 0
					pixelData2[4*p+1] = 255
					pixelData2[4*p+2] = 255
					pixelData2[4*p+3] = 70
     

                    // pixelData2[4*p+0] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2),2)*255)
                    // pixelData2[4*p+1] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2-2*Math.acos(-1)/3),2)*255)
                    // pixelData2[4*p+2] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2+2*Math.acos(-1)/3),2)*255)
                    // pixelData2[4*p+3] = 55
                }
            for( var i = 0 ; i < watermarkCanvas.height ; i ++ )
                for( var j = watermarkCanvas.width/sorts ; j < 2*watermarkCanvas.width/sorts ; j ++ ){
					var p = i*watermarkCanvas.width+j
					pixelData2[4*p+0] = 20
					pixelData2[4*p+1] = 255
					pixelData2[4*p+2] = 25
					pixelData2[4*p+3] = 70
     

                    // pixelData2[4*p+0] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2),2)*255)
                    // pixelData2[4*p+1] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2-2*Math.acos(-1)/3),2)*255)
                    // pixelData2[4*p+2] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2+2*Math.acos(-1)/3),2)*255)
                    // pixelData2[4*p+3] = 55
                }
            for( var i = 0 ; i < watermarkCanvas.height ; i ++ )
                for( var j = 2*watermarkCanvas.width/sorts ; j <3* watermarkCanvas.width/sorts ; j ++ ){
					var p = i*watermarkCanvas.width+j
					pixelData2[4*p+0] = 30
					pixelData2[4*p+1] = 55
					pixelData2[4*p+2] = 255
					pixelData2[4*p+3] = 70
     

                    // pixelData2[4*p+0] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2),2)*255)
                    // pixelData2[4*p+1] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2-2*Math.acos(-1)/3),2)*255)
                    // pixelData2[4*p+2] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2+2*Math.acos(-1)/3),2)*255)
                    // pixelData2[4*p+3] = 55
                }
            for( var i = 0 ; i < watermarkCanvas.height ; i ++ )
                for( var j = 3*watermarkCanvas.width/sorts ; j < 4*watermarkCanvas.width/sorts ; j ++ ){
					var p = i*watermarkCanvas.width+j
					pixelData2[4*p+0] = 210
					pixelData2[4*p+1] = 125
					pixelData2[4*p+2] = 80
					pixelData2[4*p+3] = 70
     

                    // pixelData2[4*p+0] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2),2)*255)
                    // pixelData2[4*p+1] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2-2*Math.acos(-1)/3),2)*255)
                    // pixelData2[4*p+2] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2+2*Math.acos(-1)/3),2)*255)
                    // pixelData2[4*p+3] = 55
                }


         watermarkContext.putImageData( imageData2 , 0 , 0 , 0 , 0 , watermarkCanvas.width , watermarkCanvas.height )


        //清空操作
        context.clearRect( 0 , 0 , canvas.width , canvas.height )
        context.drawImage( image , x , y , imageWidth , imageHeight )
        // context.drawImage( watermarkCanvas ,0,0 )
		var j = 1;
        slideBtn.onclick = function(){
        	j ++;
        	if (j%2 == 0){
        		context.drawImage( watermarkCanvas ,0,0 )
        	}
        	else{
        		context.clearRect( 0 , 0 , canvas.width , canvas.height )
        		context.drawImage( image , x , y , imageWidth , imageHeight )
        	}
        }

    }




}