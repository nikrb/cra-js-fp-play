import './concatAll';
import data from './data';

const lists = data.lists;
const videos = data.videos;

// id, title, middle interesting moment time and smallest box art url
const out = lists.map( function( list){
  return {
    name: list.name,
    videos: videos.filter( function( video){
      return video.listId === list.id;
    }).map( function( video){
      return { id: video.id, title: video.title};
    })
  };
});

console.log( out);
