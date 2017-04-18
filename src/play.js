import './concatAll';
import {lists, videos, boxarts, bookmarks} from './data';

// id, title, bookmark time, smallest boxart
const out = lists.map( function( list){
  return {
    name: list.name,
    videos: videos.filter( function( video){
      return video.listId === list.id;
    }).map( function( video){
      return {
        id: video.id,
        title: video.title,
        time: bookmarks.filter( function( bm){
            return bm.videoId === video.id;
          }).map( function( bm){
            return bm.time;
          })[0],
        boxart: boxarts.filter( function( boxart){
            return boxart.videoId === video.id;
          }).reduce( function( acc, cur){
            if( cur.width < acc.width) return cur;
            return acc;
          }).map( function( ba){
            return ba.url;
          })[0]
      };
    })
  };
});

console.log( out);
