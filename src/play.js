import './concatAll';
import data from './data';

// id, title and 150x200 boxart
// example uses map and concatAll at end, it seems concatMap would work
	const out = data
	  .concatMap(function(movieList) {
      return movieList.videos
        .concatMap(function(video) {
          return video.boxarts
            .filter(function(boxart) {
            	return boxart.width === 150;
            })
            .map(function(boxart) {
            	return {id: video.id, title: video.title, boxart: boxart.url};
            });
        });
	  });

console.log( out);
