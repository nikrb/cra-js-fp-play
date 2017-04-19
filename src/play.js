import './concatAll';
import data from './data';

// id, title and smallest box art url
const out = data.map( function( movieList){
  return movieList.videos.map( function( video){
    const box_art = video.boxarts.reduce( function( min, boxart){
      if(boxart.width < min.width) return boxart;
      return min;
    });
    return { id: video.id, title: video.title, boxart: box_art.url};
  });
}).concatAll();

console.log( out);
