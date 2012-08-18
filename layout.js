

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
		
		//Computer (where PLU Text goes)
		var ROLLODEX_X;
		var ROLLODEX_Y;
		var ROLLODEX_WIDTH;
		var ROLLODEX_HEIGHT;

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
		
		var STAGE_MODE;
		var BOSS_MODE;
		var MENU_MODE;

		
	function initConstants(){
	
		NUM_GRID_SQUARES = 3;
		
		CONVEYOR_X = canvas.width * .6;
		CONVEYOR_Y = canvas.height * .65;
		CONVEYOR_WIDTH = canvas.width;
		CONVEYOR_HEIGHT = canvas.height * .25;

		COMPUTER_X = canvas.width * .4;
		COMPUTER_Y = canvas.height * .5;
		COMPUTER_WIDTH = canvas.width*.2;
		COMPUTER_HEIGHT = canvas.height * .15;

		ROLLODEX_X = canvas.width * .65;
		ROLLODEX_Y = canvas.height * .53;
		ROLLODEX_WIDTH = canvas.width*.2;
		ROLLODEX_HEIGHT = canvas.height * .10;
		
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
		BAG_2_X = canvas.width * .23;;
		BAG_Y = canvas.height * .655;;

		BAG_GRID_WIDTH = canvas.width * .05;
		BAG_GRID_HEIGHT = canvas.height * .08;

		BAG_WIDTH = BAG_GRID_WIDTH * NUM_GRID_SQUARES;
		BAG_HEIGHT = BAG_GRID_HEIGHT * NUM_GRID_SQUARES;
		
		STAGE_MODE = 0;
		BOSS_MODE = 1;
		MENU_MODE = 2;
		

		
		
	
	
	
	}

	function loadingScreen(percent){
		stage.removeAllChildren();
		
		var loadingBarBack = new Shape();
		var graphics = loadingBarBack.graphics;
		graphics.setStrokeStyle(10, 'round', 'round');
		graphics.beginStroke(Graphics.getRGB(0, 0, 0));
		//graphics.beginFill(Graphics.getRGB(255, 255, 255));
		graphics.rect(canvas.width * .2,canvas.height * .40,canvas.width*.6,canvas.height * .20);
		graphics.endStroke();
		graphics.endFill();
		
		var loadingBarFront = new Shape();
		var graphics = loadingBarFront.graphics;
		graphics.setStrokeStyle(10, 'round', 'round');
		graphics.beginStroke(Graphics.getRGB(0, 0, 0));
		graphics.beginFill(Graphics.getRGB(75, 75, 75));
		graphics.rect(canvas.width * .2,canvas.height * .40,canvas.width*.6*(percent/100),canvas.height * .20);
		graphics.endStroke();
		graphics.endFill();
	
		var loadingText = new Text("Loading...");
		loadingText.x = canvas.width*.5;
		loadingText.y = canvas.height*.53;	
		loadingText.textAlign = "center";
		loadingText.font = "72px bold Arial";
		
		
		stage.addChild(loadingBarBack);
		stage.addChild(loadingBarFront);
		stage.addChild(loadingText);
		stage.update();
	}
	
	function optionMenu(){
		stage.removeAllChildren();
		
		var musicText = new Text("Music");
		musicText.x = canvas.width*.65;
		musicText.y = canvas.height*.47;	
		musicText.textAlign = "center";
		musicText.font = "36px bold Arial";
		
		var musicButton = new Shape();
		var graphics = musicButton.graphics;
		graphics.setStrokeStyle(10, 'round', 'round');
		graphics.beginStroke(Graphics.getRGB(0, 0, 0));
		graphics.beginFill(Graphics.getRGB(75, 75, 75));
		graphics.rect(canvas.width * .6,canvas.height * .40,canvas.width*.2,canvas.height * .10);
		graphics.endStroke();
		graphics.endFill();
		
		var backText = new Text("Back");
		backText.x = canvas.width*.25;
		backText.y = canvas.height*.87;	
		backText.textAlign = "center";
		backText.font = "36px bold Arial";
		
		var backButton = new Shape();
		var graphics = backButton.graphics;
		graphics.setStrokeStyle(10, 'round', 'round');
		graphics.beginStroke(Graphics.getRGB(0, 0, 0));
		graphics.beginFill(Graphics.getRGB(75, 75, 75));
		graphics.rect(canvas.width * .2,canvas.height * .80,canvas.width*.2,canvas.height * .10);
		graphics.endStroke();
		graphics.endFill();
		
		backButton.onPress = handleBackPress;
		
		
		stage.addChild(backButton);
		stage.addChild(backText);
		
		stage.addChild(musicButton);
		stage.addChild(musicText);
		
		
		
		
		stage.update();
		
	
	}
	
	function titleScreen(){
			stage.removeAllChildren();

			
			var playButton = new Shape();
			var g = playButton.graphics;
			g.setStrokeStyle(10, 'round', 'round');
			g.beginStroke(Graphics.getRGB(0, 0, 0));
			g.beginFill(Graphics.getRGB(75, 75, 75));
			g.rect(canvas.width * .3,canvas.height * .20,canvas.width*.4,canvas.height * .20);
			g.endStroke();
			g.endFill();
			
			playText = new Text("Play");
			playText.x = canvas.width * .5;
			playText.y = canvas.height * .32;
			playText.textAlign = "center";
			playText.font = "72px bold Arial";
			
			
			var levelButton = new Shape();
			g = levelButton.graphics;
			g.beginStroke(Graphics.getRGB(0, 0, 0));
			g.beginFill(Graphics.getRGB(75, 75, 75));
			g.rect(canvas.width * .35,canvas.height * .45,canvas.width*.30,canvas.height * .15);
			g.endStroke();
			g.endFill();
			
			levelText = new Text("Choose Level");
			levelText.x = canvas.width * .5;
			levelText.y = canvas.height * .55;
			levelText.textAlign = "center";
			levelText.font = "50px bold Arial";
			
			var optionsButton = new Shape();
			g = optionsButton.graphics;
			g.beginStroke(Graphics.getRGB(0, 0, 0));
			g.beginFill(Graphics.getRGB(75, 75, 75));
			g.rect(canvas.width * .35,canvas.height * .65,canvas.width*.30,canvas.height * .15);
			g.text
			g.endStroke();
			g.endFill();
			
			optionsText = new Text("Options");
			optionsText.x = canvas.width * .5;
			optionsText.y = canvas.height * .75;
			optionsText.textAlign = "center";
			optionsText.font = "50px bold Arial";

			playButton.onPress = handlePlayPress;
			levelButton.onPress = handleLevelPress;
			optionsButton.onPress = handleOptionsPress;
			
			
			stage.addChild(playButton);
			stage.addChild(playText);
			
			stage.addChild(levelButton);
			stage.addChild(levelText);
			
			stage.addChild(optionsButton);
			stage.addChild(optionsText);
			
			stage.update();
	
	}
	
	
	function levelSelectScreen(){
		stage.removeAllChildren();
		
		var backText = new Text("Back");
		backText.x = canvas.width*.25;
		backText.y = canvas.height*.87;	
		backText.textAlign = "center";
		backText.font = "36px bold Arial";
		
		var backButton = new Shape();
		var graphics = backButton.graphics;
		graphics.setStrokeStyle(10, 'round', 'round');
		graphics.beginStroke(Graphics.getRGB(0, 0, 0));
		graphics.beginFill(Graphics.getRGB(75, 75, 75));
		graphics.rect(canvas.width * .2,canvas.height * .80,canvas.width*.2,canvas.height * .10);
		graphics.endStroke();
		graphics.endFill();
		
		backButton.onPress = handleBackPress;
		
		stage.addChild(backButton);
		stage.addChild(backText);
		
		stage.update();
	
	}
	
	function gridMouseOver(){
		this.highlight();
	
	}
	
	function gridMouseOut(){
		this.unhighlight();
	
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
				//Uncomment to test highlighting
				//grid1[i][j].onMouseOver = gridMouseOver;
				//grid1[i][j].onMouseOut = gridMouseOut;
				stage.addChild(grid1[i][j]);
			}
		}
		for(var i = 0; i < 3; i++){
			for(var j = 0; j<3; j++){
				grid2[i][j] = new BagSlot(canvas.width * (grid2StartX + j*rectWidth), 
				canvas.height * (gridStartY + rectHeight * i) ,
				rectWidth* canvas.width ,
				rectHeight * canvas.height);
				//Uncomment to test highlighting
				//grid2[i][j].onMouseOver = gridMouseOver;
				//grid2[i][j].onMouseOut = gridMouseOut;
				stage.addChild(grid2[i][j]);
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
	    g.setStrokeStyle(7, 'round', 'round');
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
		
		
		/*
		for(var i = 0; i < 3; i++){
			for(var j = 0; j<3; j++){
				g.rect(grid1[i][j].x, grid1[i][j].y, grid1[i][j].width, grid1[i][j].height);
				g.rect(grid2[i][j].x, grid2[i][j].y, grid2[i][j].width, grid2[i][j].height);
			}
		}
		*/

		g.endStroke();
	    g.endFill();
		
	    stage.addChild(s);
		
		//Rollodex
		var rollodex = new Shape();
		graphics = rollodex.graphics;
	    graphics.setStrokeStyle(5, 'round', 'round');
	    graphics.beginStroke(Graphics.getRGB(0, 0, 0));
	    graphics.beginFill(Graphics.getRGB(205, 205, 205));
	    graphics.rect(ROLLODEX_X,ROLLODEX_Y,ROLLODEX_WIDTH,ROLLODEX_HEIGHT);
		graphics.endStroke();
	    graphics.endFill();
		
		stage.addChild(rollodex);
		
		//Rollodex Text
		rollodex_text = new Text("Text go hur", "18px Arial", "#777");
		rollodex_text.x = ROLLODEX_X + ROLLODEX_WIDTH/2;
		rollodex_text.y = ROLLODEX_Y + ROLLODEX_HEIGHT/2;
		rollodex_text.textAlign = "center";
		stage.addChild(rollodex_text);
		
		//Score Text
		scoretext = new Text("Score: " + score, "36px Arial", "#777");
		scoretext.x = canvas.width * .25;
		scoretext.y = canvas.height * .1
		stage.addChild(scoretext);
		
		//PLU Text
		pluInputText = new Text(pluInput, "24px Arial", "#777");
		pluInputText.x = COMPUTER_X + COMPUTER_WIDTH/2;
		pluInputText.y = COMPUTER_Y + COMPUTER_HEIGHT/2;
		pluInputText.textAlign = "center";
		stage.addChild(pluInputText);
		
		//Grid Overlay
		setGrids();
	
	}

	function updateRollodex(){
		if (scanner_item != null)
			rollodex_text.text = scanner_item.name+":"+scanner_item.plu;
		else
			rollodex_text.text = "Error";
	
	}

	function updateText(){
		scoretext.text = "Score: " + score;
		pluInputText.text = pluInput;
	}
