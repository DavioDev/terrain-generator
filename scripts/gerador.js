var terrainValues = [];
		var mult = 100;
		var xoff = 88;
		var yoff = 4;
		var inc = 0.1;
		function setup(){
			createCanvas(1900, 980, WEBGL);
			angleMode(DEGREES);
        for(var y = 0; y < 60; y++){
				terrainValues.push([]);
				xoff = 0;
				for(var x = 0; x < 60; x++){
					terrainValues[y][x] = map(noise(xoff, yoff), 0, 1, -mult, mult);
					xoff = xoff + inc;
				}
				yoff = yoff + inc;
			}
		}

		function draw(){
			background(0);

			stroke(255);
			strokeWeight(0.5);
			noFill();

			rotateX(65);
			translate(-width/3, -height/2);
			for(var y = 0; y < 60; y++){
				beginShape(TRIANGLE_STRIP);
				for(var x = 0; x < 60; x++){
					vertex(x * 20, y * 20, terrainValues[y][y]);
					vertex(x * 20, (y + 1) * 20, terrainValues[y][x]);
				}
				endShape();
			}
		}
