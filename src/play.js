import './concatAll';
import data from './data';

// id, title and smallest box art url
const out = data.map( function( movieList){
  return movieList.videos.map( function( video){
    return video.boxarts.reduce( function( min, boxart){
      if(boxart.width < min.width) return boxart;
      return min;
    })
    .map( function( boxart){
      return { id: video.id, title: video.title,
        boxart: boxart.url};
    });
  }).concatAll();
}).concatAll();

console.log( out);
