

		//Constants
		
		var NUM_GRID_SQUARES;
		
		//Conveyor Belt
		var CONVEYOR_X;
		var CONVEYOR_Y;
		var CONVEYOR_WIDTH;
		var CONVEYOR_HEIGHT;

		//Computer (where PLU Text goes)
		var COMPUTER_X;
		var COMPUTER_Y;
		var COMPUTER_WIDTH;
		var COMPUTER_HEIGHT;

		//Scanner Area
		var SCANNER_SECTION_X;
		var SCANNER_SECTION_Y;
		var SCANNER_SECTION_WIDTH;
		var SCANNER_SECTION_HEIGHT;

		//Scanner (actual event area
		var SCANNER_X;
		var SCANNER_Y;
		var SCANNER_WIDTH;
		var SCANNER_HEIGHT;

		//Bag Section
		var BAG_SECTION_X;
		var BAG_SECTION_Y;
		var BAG_SECTION_WIDTH;
		var BAG_SECTION_HEIGHT;

		//Bags
		var BAG_1_X;
		var BAG_1_Y;
		var BAG_2_X;
		var BAG_2_Y;
		var BAG_GRID_WIDTH;
		var BAG_GRID_HEIGHT;
		var BAG_WIDTH;
		var BAG_HEIGHT;

		
	function initConstants(){
	
		NUM_GRID_SQUARES = 3;
		
		CONVEYOR_X = canvas.width * .6;
		CONVEYOR_Y = canvas.height * .65;
		CONVEYOR_WIDTH = canvas.width;
		CONVEYOR_HEIGHT = canvas.height * .25;

		COMPUTER_X = canvas.width * .4;
		COMPUTER_Y = canvas.height * .5;
		COMPUTER_WIDTH = canvas.width*.2;
		COMPUTER_HEIGHT = canvas.height * .15

		SCANNER_SECTION_X = canvas.width * .4;
		SCANNER_SECTION_Y = canvas.height * .65;
		SCANNER_SECTION_WIDTH = canvas.width* .2;
		SCANNER_SECTION_HEIGHT = canvas.height* .25;

		SCANNER_X = canvas.width * .45;
		SCANNER_Y = canvas.height * .75;
		SCANNER_WIDTH = canvas.width * .1;
		SCANNER_HEIGHT = canvas.height * .1;

		BAG_SECTION_X = 0;
		BAG_SECTION_Y = canvas.height*.65;
		BAG_SECTION_WIDTH = canvas.width*.4;
		BAG_SECTION_HEIGHT = canvas.height*.25;

		BAG_1_X = canvas.width * .03;
		BAG_1_Y = canvas.height * .655;

		BAG_2_X = canvas.width * .23;;
		BAG_2_Y = canvas.height * .655;;

		BAG_GRID_WIDTH = canvas.width * .05;
		BAG_GRID_HEIGHT = canvas.height * .08;

		BAG_WIDTH = BAG_GRID_WIDTH * NUM_GRID_SQUARES;
		BAG_HEIGHT = BAG_GRID_HEIGHT * NUM_GRID_SQUARES;
	
	
	
	}
		
	function titleScreen(){
			var s = new Shape();
			var g = s.graphics;
			g.setStrokeStyle(10, 'round', 'round');
			g.beginStroke(Graphics.getRGB(0, 0, 0));
			g.beginFill(Graphics.getRGB(75, 75, 75));
			g.rect(canvas.width * .3,canvas.height * .25,canvas.width*.4,canvas.height * .25);
			g.endStroke();
			g.endFill();

			s.onPress = handlePlayPress;
			stage.addChild(s);
			stage.update();
	
	}
	
	
	

	function setGrids(){
		grid1 = new Array();
		grid2 = new Array();
		
		for(var i = 0; i < 3; i++){
			grid1[i] = new Array();
			grid2[i] = new Array();
		}
		
		var grid1StartX = .03;
		var grid2StartX = .23;
		
		var gridStartY = .655;
		var rectWidth =  .05;
		var rectHeight =  .08
		for(var i = 0; i < 3; i++){
			for(var j = 0; j<3; j++){
				grid1[i][j] = new BagSlot(canvas.width * (grid1StartX + j*rectWidth),
				canvas.height * (gridStartY + rectHeight * i) ,
				BAG_GRID_WIDTH,
				BAG_GRID_HEIGHT);
			}
		}
		for(var i = 0; i < 3; i++){
			for(var j = 0; j<3; j++){
				grid2[i][j] = new BagSlot(canvas.width * (grid2StartX + j*rectWidth), canvas.height * (gridStartY + rectHeight * i) ,rectWidth* canvas.width ,rectHeight * canvas.height);
			}
		}
		
	}

	function drawLayout(){
	    var s = new Shape();
	    var g = s.graphics;

	    //Conveyor
	    g.setStrokeStyle(10, 'round', 'round');
	    g.beginStroke(Graphics.getRGB(0, 0, 0));
	    g.beginFill(Graphics.getRGB(75, 75, 75));
	    g.rect(CONVEYOR_X,CONVEYOR_Y,CONVEYOR_WIDTH,CONVEYOR_HEIGHT);
		g.endStroke();
	    g.endFill();
	    
	    //Scanner
	    g.setStrokeStyle(10, 'round', 'round');
	    g.beginStroke(Graphics.getRGB(0, 0, 0));
	    g.beginFill(Graphics.getRGB(75, 75, 155));
	    g.rect(SCANNER_SECTION_X,SCANNER_SECTION_Y,SCANNER_SECTION_WIDTH,SCANNER_SECTION_HEIGHT);
		g.endStroke();
	    g.endFill();
	    
		//Computer
	    g.setStrokeStyle(10, 'round', 'round');
	    g.beginStroke(Graphics.getRGB(0, 0, 0));
	    g.beginFill(Graphics.getRGB(205, 205, 205));
	    g.rect(COMPUTER_X,COMPUTER_Y,COMPUTER_WIDTH,COMPUTER_HEIGHT);
		g.endStroke();
	    g.endFill();
		
		  //Scanner
	    g.setStrokeStyle(10, 'round', 'round');
	    g.beginStroke(Graphics.getRGB(0, 0, 0));
	    g.beginFill(Graphics.getRGB(75, 75, 205));
	    g.rect(SCANNER_X,SCANNER_Y,SCANNER_WIDTH,SCANNER_HEIGHT);
		g.endStroke();
	    g.endFill();
		
	    //Bag Section
	    g.setStrokeStyle(10, 'round', 'round');
	    g.beginStroke(Graphics.getRGB(0, 0, 0));
	    g.beginFill(Graphics.getRGB(125, 75, 125));
	    g.rect(BAG_SECTION_X,BAG_SECTION_Y,BAG_SECTION_WIDTH,BAG_SECTION_HEIGHT);
		g.endStroke();
	    g.endFill();
	    
		//Bag Grids
		g.setStrokeStyle(2, 'round', 'round');
	    g.beginStroke(Graphics.getRGB(0, 0, 0));
	    g.beginFill(Graphics.getRGB(125, 75, 240));
	    g.rect(BAG_1_X ,BAG_1_Y,canvas.width*.15,canvas.height * .24);
		g.rect(BAG_2_X ,BAG_2_Y, canvas.width*.15 ,canvas.height * .24);
		
		for(var i = 0; i < 3; i++){
			for(var j = 0; j<3; j++){
				g.rect(grid1[i][j].x, grid1[i][j].y, grid1[i][j].width, grid1[i][j].height);
				g.rect(grid2[i][j].x, grid2[i][j].y, grid2[i][j].width, grid2[i][j].height);
			}
		}
		
		g.endStroke();
	    g.endFill();
		
	    stage.addChild(s);
		
		scoretext = new Text("Score: " + score, "36px Arial", "#777");
		scoretext.x = canvas.width * .25;
		scoretext.y = canvas.height * .1
		stage.addChild(scoretext);
	
	}


	function updateScore(){
		scoretext.text = "Score: " + score;
	}
