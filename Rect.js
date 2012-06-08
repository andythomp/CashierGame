(function(window) {

	function Rect(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.item = null;
	}

	Rect.prototype = new Container();

	Rect.prototype.x;
	Rect.prototype.y;
	Rect.prototype.width;
	Rect.prototype.height;
	Rect.prototype.item;

	Rect.prototype.Container_initialize = Rect.prototype.initialize;
		Rect.prototype.initialize = function() {
			this.Container_initialize();
		}

	window.Rect = Rect;
}(window));