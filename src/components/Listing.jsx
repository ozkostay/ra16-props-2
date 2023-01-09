import React from 'react' ;
import ListingItem from './ListingItem';

export default function Listing({etsyList}) {
  
  const itsyCards = etsyList.map((item) => {
    return item.state === 'removed' ? "" : <ListingItem key={item.uuid} item={item}/>
  });

  return  <div className="item-list">
            {itsyCards}
          </div>

}
