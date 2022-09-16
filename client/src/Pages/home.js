import React from 'react';
import ListingLatest from '../component/listing/listingLatest';
import ListingPosters from '../component/listing/listingPosters';
 function Home() {
  return( 
    <div>
    <ListingPosters/>
    <ListingLatest/>
   
    </div>
  );
}
export default Home;
