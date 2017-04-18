import './concatAll';
import data from './data';

// id, title, bookmark time, smallest boxart
const out = data.filter( function( price){
  return price.name === "MSFT";
});

console.log( out);
