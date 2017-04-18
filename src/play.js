import './concatAll';
import data from './data';

// id, title, middle interesting moment time and smallest box art url
const out = data.map( function( movieList){
  return movieList.videos.map( function( video){
    return Array.zip(
      video.boxarts.reduce( function( min, boxart){
        if(boxart.width < min.width) return boxart;
        return min;
      }),
      video.interestingMoments.filter( function( im){
        return im.type === "Middle";
      }),
      function( boxart, int_mom){
        return {id:video.id, title:video.title,
          interestingMoment: int_mom.time,
          boxart: boxart.url}
      });
  }).concatAll();
}).concatAll();

console.log( out);
