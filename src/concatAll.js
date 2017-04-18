
// eslint-disable-next-line
Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
    subArray.forEach( function( item){
      results.push( item);
    });
	});

	return results;
};

// eslint-disable-next-line
Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
	return this.map(function(item) {
    return projectionFunctionThatReturnsArray( item);
	})
	.concatAll();
};
