import './concatAll';
import data from './data';

// id, title and 150x200 boxart
const out = data.map( function( movieList){
  return movieList.videos.map( function( video){
    return video.boxarts.filter( function( boxart){
      return boxart.width === 150 && boxart.height === 200;
    }).map( function( boxart){
      return { id: video.id, title: video.title, boxart: boxart.url};
    });
  }).concatAll();
}).concatAll();

console.log( out);
