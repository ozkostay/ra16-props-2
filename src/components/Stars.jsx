import React from 'react';
import Star from './Star';
// import '../App.css';
import PropTypes from 'prop-types';

export default function Stars({count}) {

  const regx = /[1-5]/;
  if (!regx.test(count)) {
    console.log('Выход', count);
    return ;
  }

  const stars = [];
  for (let i = 0; i < count; i += 1) {
    stars.push(String(i));
  }

  return  <div className="card">
            <ul className="card-body-stars">
              <h1>Матрица {count}</h1>
              {stars.map((item) => <Star key={item}/>)}
            </ul>
          </div >
}

Stars.propTypes = {
  count: PropTypes.number
};

Stars.defaultProps = {
  count: 0
};
