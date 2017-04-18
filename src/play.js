import './concatAll';
import data from './data';

const out = data.map( function( list){
  return list.foods.map( function( food){
    return { created: list.created, name: food.name, cost: food.cost};
  });
}).concatAll();
out.sort( function( a, b){
  if( a.name > b.name) return 1;
  else if( a.name < b.name) return -1;
  return 0;
});
console.log( out);
