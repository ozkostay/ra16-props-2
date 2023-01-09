import React from 'react' ;


export default function ListingItem({item}) {

  if (item.title.length > 50) {
    item.title = item.title.substring(0, 50) + '...';
  }
  
  let currency_code;
  if( item.currency_code === 'USD') {
    currency_code = '$'+ item.price;
  } else if (item.currency_code === 'EUR') {
    currency_code = '€'+ item.price;
  } else {
    currency_code = item.price + ' GBP';
  }

  let quantityClass = 'item-quantity ';
  if (item.quantity < 11) {
    quantityClass = quantityClass + 'level-low';
  } else if(item.quantity < 21) {
    quantityClass = quantityClass + 'level-medium';
  } else {
    quantityClass = quantityClass + 'level-high';
  }

  console.log('ttt', quantityClass);

  return  <div className="item">
            <div className="item-image">
              <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt="image"></img>
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{item.title}</p>
              <p className="item-price">{currency_code}</p>
              <p className={quantityClass}>{item.quantity} left</p>
            </div>
          </div>
}
//{item.MainImage.url_570xN}