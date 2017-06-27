(function() {
	'use strict';
	function _convertLoaderValue(value, type) {
		if(type === 'percentToSvg') {
			return 251.2 * value / 100
		}
		if(type === 'svgToPercent') { 
			return value * 100 / 251.2
		}
	}

	function _numberToPercent(value, max) {
		return value * 100 / max
	}
	
	function _percentToNumber(value, max) {
		return Math.ceil((value / 100) * max)
	}

	// Exportar Depois
	function _updateLoader(newValue, limitValue, elementSelector) { // 2000/4000 == 50%/100%
		var newValuePercent = _numberToPercent(newValue, limitValue) 
		var animateTo = _convertLoaderValue(newValuePercent, 'percentToSvg')
		
		Snap.animate(0, animateTo, function(value) {
			var progressCircle = Snap(elementSelector)
			var text = progressCircle.select('.progress-circle__text')
			var loader = progressCircle.select('.progress-circle__loader')

			loader.attr({ 'stroke-dasharray': value +',251.2'})
			text.attr({ text: _percentToNumber(_convertLoaderValue(value , 'svgToPercent'), limitValue) })
			
		}, 500)
	}

	window.circuloader = {
		updateLoader: _updateLoader	
	}
	 
})()
