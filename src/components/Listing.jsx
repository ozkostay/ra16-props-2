import React from 'react' ;
import ListingItem from './ListingItem';
// import { v4 as uuid } from 'uuid';


export default function Listing({etsyList}) {
  
  const itsyCards = etsyList.map((item) => {
    if (item.state === 'removed') {
      return;
    }
    return <ListingItem key={item.uuid} item={item}/>
  });

  return  <div className="item-list">
            {itsyCards}
          </div>

}
