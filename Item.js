var ITEM_STATE = "itemstate";
var BLOCK_STATE = "blockstate";

(function(window) {

function Item(imageSource) {
    this.oldX = 0;
    this.oldY = 0;
    this.radius = 38;
    this.scale = 1;
    this.imageSource = imageSource;
	this.bound = this.radius * 2;
	this.state = ITEM_STATE;
    this.initialize();
	

}


Item.prototype = new Container();

Item.prototype.bound;
Item.prototype.oldX;
Item.prototype.oldY;
Item.prototype.radius;
Item.prototype.scale;
Item.prototype.imageSource;
Item.prototype.state;


Item.prototype.changeState = function(imageSource){
	this.removeAllChildren();
	this.imageSource = imageSource;
	this.state = BLOCK_STATE;
	var bmp = new Bitmap(this.imageSource.result);
    this.addChild(bmp);
	//this.initialize();
}


Item.prototype.Container_initialize = Item.prototype.initialize;
    Item.prototype.initialize = function() {
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