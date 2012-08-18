/* Item.js
	This is the class that represents the items that move along the conveyorbelt,
	as well as when they are scanned and turn into blocks. 
	
	*/



/*--------------GLOBAL VARIABLES------------------*/


var ITEM_STATE = "itemstate";
var BLOCK_STATE = "blockstate";

var ITEM_FILTER = new ColorMatrixFilter([
		2,2,2,0,0, // red
		1,1,1,0,0, // green
		1,1,1,0,0, // blue
		0,0,0,1,0  // alpha
	]);

	
var BLOCK_FILTER = new ColorMatrixFilter([
		2,0,0,0,0, // red
		0,1,0,0,0, // green
		0,0,1,0,0, // blue
		0,0,0,1,0  // alpha
	]);
/*-------------------------------------------------*/	



(function(window) {

/*--------------INDIVIDUAL VARIABLES------------------*/

Item.prototype = new Container();
Item.prototype.width;
Item.prototype.height;
Item.prototype.bound;
Item.prototype.oldX;
Item.prototype.oldY;
Item.prototype.radius;
Item.prototype.scale;
Item.prototype.imageSource;
Item.prototype.state;
Item.prototype.locked;
Item.prototype.plu;
Item.prototype.name;
Item.prototype.product_type;

/*-------------------------------------------------*/

//Constructor
function Item(imageSource, name, plu, type, blocktype) {
    this.oldX = 0;
    this.oldY = 0;
    this.radius = 38;
    this.scale = 1;
	this.width = 80;
	this.height = 80;
    this.imageSource = imageSource;
	this.bound = this.radius * 2;
	this.state = ITEM_STATE;
	this.locked = false;
	if (type == 'grocery')
		this.product_type = TRUE;
	else
		this.product_type = false;
	this.plu = plu;
	this.name = name;
    this.initialize();

}

//Used to change the state from a conveyorbelt item to a block sequence.
Item.prototype.changeState = function(){
	if (this.state == ITEM_STATE){

		//Get rid of BMPs
		this.removeAllChildren();
		//Set new state to block state
		this.state = BLOCK_STATE;
		
		//Create a rect of appropriate size
		var shape = new Shape();
		var graphics = shape.graphics;
		graphics.setStrokeStyle(5, 'round', 'round');
		graphics.beginStroke(Graphics.getRGB(0, 0, 0));
		graphics.beginFill(Graphics.getRGB(75, 75, 155));
		graphics.rect(-this.width/2, -this.height/2, this.width, this.height);
		graphics.endStroke();
		graphics.endFill();
		console.log(this.x);
		
		this.addChild(shape);
	}
	if (this.state == BLOCK_STATE){
	//This would be for verbose mode if it ever comes up
		//console.log("Unable to change state: In block state");
	}
}


//This function is called when a mouse hovers over an object
Item.prototype.highlight = function(){
	//Set new filters and reset the cache
	if (this.state == ITEM_STATE){
		var bmp = this.getChildAt(0);
		bmp.filters = [ITEM_FILTER];
		bmp.cache(0,0,76,76);
	}
	
	else if (this.state == BLOCK_STATE){
		var shape = this.getChildAt(0);
		shape.filters = [BLOCK_FILTER];
		shape.cache(-this.width/2, -this.height/2, this.width, this.height);
		
	}

}

//This function is called when your mouse leaves an object
Item.prototype.unhighlight = function(){
	//Clear the filters and reset the cache
	if (this.state == ITEM_STATE){
		var bmp = this.getChildAt(0);
		bmp.filters = null;
		bmp.cache(0,0,76,76); // color filters don't change the bounds.
	}
	else if (this.state == BLOCK_STATE){
		var shape = this.getChildAt(0);
		shape.filters = null;
		shape.cache(-this.width/2, -this.height/2, this.width, this.height);
	}

}

//Initialize the container -- this container has everything that gets drawn
Item.prototype.Container_initialize = Item.prototype.initialize;
    Item.prototype.initialize = function() {
		//Caller super initialize, then add a bitmap to the container.
        this.Container_initialize();
        var bmp = new Bitmap(this.imageSource.result);
        this.addChild(bmp);
    }

function handleImageLoad() {
       var bmp = new Bitmap(this.img);
       this.addChild(bmp);
}

window.Item = Item;
}(window));