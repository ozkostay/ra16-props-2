import React from 'react' ;


export default function ListingItem({item}) {

  if (item.title.length > 50) {
    item.title = item.title.substring(0, 50) + '...';
  }
  
  let currency_code;
  switch(item.currency_code) {
    case 'USD':  // if (x === 'value1')
      currency_code = '$'+ item.price;
      break;
    case 'EUR':  // if (x === 'value2')
      currency_code = '€'+ item.price;
      break;
    default:
      currency_code = item.price + ' GBP';
      break;
  }

  let quantityClass = 'item-quantity ';
  if (item.quantity < 11) {
    quantityClass = quantityClass + 'level-low';
  } else if(item.quantity < 21) {
    quantityClass = quantityClass + 'level-medium';
  } else {
    quantityClass = quantityClass + 'level-high';
  }

  return  <div className="item">
            <div className="item-image">
              <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt="no img"></img>
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{item.title}</p>
              <p className="item-price">{currency_code}</p>
              <p className={quantityClass}>{item.quantity} left</p>
            </div>
          </div>
}
