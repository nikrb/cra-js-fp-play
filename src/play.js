import './concatAll';
import data from './data';

	// Expecting this output...
	// [
	//	 {
	//		 "65432445": "The Chamber",
	//		 "675465": "Fracture",
	//		 "70111470": "Die Hard",
	//		 "654356453": "Bad Boys"
	//	 }
	// ]


	const out = data.reduce( function( acc, cur){
    const obj = {};
    obj[cur.id] = cur.title;
    return {...acc, ...obj}; // Object.assign( acc, obj);
  }, {});

console.log( out);
