/*	BagSlot.js
	This is the class that is used for holding items. It appears as a series of squares
	on the bag section of the layout.
	
	*/

var HIGHLIGHT_FILTER = new ColorMatrixFilter([
		1,0,0,0,0, // red
		0,4,0,0,0, // green
		0,0,0,0,0, // blue
		0,0,0,1,0  // alpha
	]);

(function(window) {

/*--------------INDIVIDUAL VARIABLES------------------*/

	BagSlot.prototype = new Container();
	BagSlot.prototype.x;
	BagSlot.prototype.y;
	BagSlot.prototype.width;
	BagSlot.prototype.height;
	BagSlot.prototype.item;

	
/*-------------------------------------------------*/

	//BagSlot Constructor
	function BagSlot(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.item = null;
		this.initialize();
	}
	
	BagSlot.prototype.containsItem = function(){
		if (this.item == null){
			return false;
		}
		else
			return true;
		
	
	}

		//This function is called when a mouse hovers over an object
	BagSlot.prototype.highlight = function(){
			var shape = this.getChildAt(0);
			shape.filters = [HIGHLIGHT_FILTER];
			shape.cache(0, 0, this.width, this.height);

	}

	//This function is called when your mouse leaves an object
	BagSlot.prototype.unhighlight = function(){
		//Clear the filters and reset the cache
		var shape = this.getChildAt(0);
		shape.filters = null;
		shape.cache(0, 0, this.width, this.height);
		

	}
		
	
	BagSlot.prototype.Container_initialize = BagSlot.prototype.initialize;
		BagSlot.prototype.initialize = function() {
			//Super initializer
			this.Container_initialize();
			
			//Create a square and add it to the container.
			var shape = new Shape();
			var graphics = shape.graphics;
			graphics.setStrokeStyle(2, 'round', 'round');
			graphics.beginStroke(Graphics.getRGB(0, 0, 0));
			graphics.beginFill(Graphics.getRGB(155, 75, 240));
			graphics.rect(0, 0, this.width, this.height);
			graphics.endStroke();
			graphics.endFill();
			this.addChild(shape);
		}

	window.BagSlot = BagSlot;
}(window));