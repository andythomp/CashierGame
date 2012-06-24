(function(window) {

	function BagSlot(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.item = null;
	}

	BagSlot.prototype = new Container();

	BagSlot.prototype.x;
	BagSlot.prototype.y;
	BagSlot.prototype.width;
	BagSlot.prototype.height;
	BagSlot.prototype.item;

	BagSlot.prototype.Container_initialize = BagSlot.prototype.initialize;
		BagSlot.prototype.initialize = function() {
			this.Container_initialize();
		}

	window.BagSlot = BagSlot;
}(window));