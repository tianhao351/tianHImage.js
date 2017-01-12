redfy = function(canvas, originalContext) {
    var imageData = originalContext.getImageData(0, 0, canvas.width, canvas.height)

    var pixelData = imageData.data;
    for (var i = 0; i < canvas.width * canvas.height; i++) {
        pixelData[4 * i + 2] = 0;
        pixelData[4 * i + 1] = 0;
    }

    originalContext.putImageData(imageData, 0, 0)
}


bluefy = function(canvas, originalContext) {
    var imageData = originalContext.getImageData(0, 0, canvas.width, canvas.height)

    var pixelData = imageData.data;
    for (var i = 0; i < canvas.width * canvas.height; i++) {
        pixelData[4 * i + 0] = 0;
        pixelData[4 * i + 1] = 0;
    }

    originalContext.putImageData(imageData, 0, 0)
}

greenfy = function(canvas, originalContext) {
    var imageData = originalContext.getImageData(0, 0, canvas.width, canvas.height)

    var pixelData = imageData.data;
    for (var i = 0; i < canvas.width * canvas.height; i++) {
        pixelData[4 * i + 0] = 0;
        pixelData[4 * i + 2] = 0;
    }

    originalContext.putImageData(imageData, 0, 0)
}

grayfy = function(canvas, originalContext) {
    var imageData = originalContext.getImageData(0, 0, canvas.width, canvas.height)

    var pixelData = imageData.data;
    for (var i = 0; i < canvas.width * canvas.height; i++) {
        var r = pixelData[4 * i + 0];
        var g = pixelData[4 * i + 1];
        var b = pixelData[4 * i + 2];

        var gray = r * 0.3 + g * 0.59 + b * 0.11;

        pixelData[4 * i + 0] = gray;
        pixelData[4 * i + 1] = gray;
        pixelData[4 * i + 2] = gray;
    }


    originalContext.putImageData(imageData, 0, 0)
}

opposite = function(canvas, originalContext) {
    var imageData = originalContext.getImageData(0, 0, canvas.width, canvas.height)

    var pixelData = imageData.data;
    for (var i = 0; i < canvas.width * canvas.height; i++) {
        pixelData[4 * i + 0] = 255 - pixelData[4 * i + 0];
        pixelData[4 * i + 1] = 255 - pixelData[4 * i + 1];
        pixelData[4 * i + 2] = 255 - pixelData[4 * i + 2];
    }


    originalContext.putImageData(imageData, 0, 0)
}



blur = function(canvas, originalContext) {
    var imageData = originalContext.getImageData(0, 0, canvas.width, canvas.height)
    var pixelData = imageData.data;

    var temImageData = originalContext.getImageData(0, 0, canvas.width, canvas.height)
    var temPixelData = imageData.data;

    var blurR = 3
    var totalnum = (2 * blurR + 1) * (2 * blurR + 1)

    for (var i = blurR; i < canvas.height - blurR; i++)
        for (var j = blurR; j < canvas.width - blurR; j++) {

            var totalr = 0,
                totalg = 0,
                totalb = 0
            for (var dx = -blurR; dx <= blurR; dx++)
                for (var dy = -blurR; dy <= blurR; dy++) {

                    var x = i + dx
                    var y = j + dy

                    var p = x * canvas.width + y
                    totalr += temPixelData[p * 4 + 0]
                    totalg += temPixelData[p * 4 + 1]
                    totalb += temPixelData[p * 4 + 2]
                }

            var p = i * canvas.width + j
            pixelData[p * 4 + 0] = totalr / totalnum
            pixelData[p * 4 + 1] = totalg / totalnum
            pixelData[p * 4 + 2] = totalb / totalnum
        }



    originalContext.putImageData(imageData, 0, 0)
};




edgeDetection = function(canvas, originalContext) {
    var imageData = originalContext.getImageData(0, 0, canvas.width, canvas.height)

    var pixelData = imageData.data;
    var pixelDatatemp = imageData.data;

    for (var i = 0; i < canvas.width * canvas.height; i++) {
        var r = pixelData[4 * i + 0];
        var g = pixelData[4 * i + 1];
        var b = pixelData[4 * i + 2];

        var gray = r * 0.3 + g * 0.59 + b * 0.11;

        pixelData[4 * i + 0] = gray;
        pixelData[4 * i + 1] = gray;
        pixelData[4 * i + 2] = gray;
    }
    var interval = 2;
    var change = 15;
    var newColor = 255;
    for (var i = 0; i < canvas.height; i++) {
        for (var j = 0; j < canvas.width; j++) {
            var p = i * canvas.width + j
            if (Math.abs(pixelDatatemp[4 * p + 0] - pixelDatatemp[4 * (p + interval) + 0]) < change) {
                pixelData[4 * p + 0] = newColor;

            } else {
                pixelData[4 * p + 0] = 0;
            }

            if (Math.abs(pixelDatatemp[4 * p + 1] - pixelDatatemp[4 * (p + interval) + 1]) < change) {
                pixelData[4 * p + 1] = newColor;

            } else {
                pixelData[4 * p + 1] = 0;
            }

            if (Math.abs(pixelDatatemp[4 * p + 2] - pixelDatatemp[4 * (p + interval) + 2]) < change) {
                pixelData[4 * p + 2] = newColor;

            } else {
                pixelData[4 * p + 2] = 0;
            }
        }
    }
    originalContext.putImageData(imageData, 0, 0)
};


cartoon = function(canvas, originalContext) {
    var imageData = originalContext.getImageData(0, 0, canvas.width, canvas.height)
    var pixelData = imageData.data;
    var pixelDatatemp = imageData.data;
    var interval = 3;
    var change = 20;
    var count = {};
    for (var i = 0; i < canvas.height; i++) {
        for (var j = 0; j < canvas.width; j++) {
            var p = i * canvas.width + j
            count[p] = 0;
            if (Math.abs(pixelDatatemp[4 * p + 0] - pixelDatatemp[4 * (p + interval) + 0]) < change) {
                pixelData[4 * p + 0] = pixelDatatemp[4 * p + 0];
                count[p]++;
            } else {
                pixelData[4 * p + 0] = 0;
                pixelData[4 * p + 1] = 0;
                pixelData[4 * p + 2] = 0;
            }

            if (Math.abs(pixelDatatemp[4 * p + 1] - pixelDatatemp[4 * (p + interval) + 1]) < change) {
                pixelData[4 * p + 1] = pixelDatatemp[4 * p + 1];
                count[p]++;
            } else {
                pixelData[4 * p + 0] = 0;
                pixelData[4 * p + 1] = 0;
                pixelData[4 * p + 2] = 0;
            }

            if (Math.abs(pixelDatatemp[4 * p + 2] - pixelDatatemp[4 * (p + interval) + 2]) < change) {
                pixelData[4 * p + 2] = pixelDatatemp[4 * p + 2];
                count[p]++;
            } else {
                pixelData[4 * p + 0] = 0;
                pixelData[4 * p + 1] = 0;
                pixelData[4 * p + 2] = 0;
            }
        }
    }
    originalContext.putImageData(imageData, 0, 0)
};

filtration = function(canvas, originalContext,r0,g0,b0){
	var imageData = originalContext.getImageData(0 ,0, canvas.width, canvas.height)
	var difference = 20
	var pixelData =  imageData.data;
	for (var i = 0; i <canvasA.width*canvasA.height ; i++) {
		var r = pixelData[4*i + 0 ];
		var g = pixelData[4*i + 1 ];
		var b = pixelData[4*i + 2 ];

		if(Math.abs(r-r0)>difference&&Math.abs(g-g0)>difference&&Math.abs(b-b0)>difference){
    		var gray = r*0.3 + g*0.59 + b * 0.11; 

    		pixelData[4*i + 0 ] =  gray;
    		pixelData[4*i + 1 ] =  gray;
    		pixelData[4*i + 2 ] =  gray;
		}
		
	}

	originalContext.putImageData( imageData , 0 , 0 )
};




