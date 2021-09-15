import React from 'react';
import iconTime from '../img/icon-time.svg';


  export function OrderTime({orderTime}) {
    return (
    <div className='requestHour'>
      <img src={iconTime} alt='Horário que o pedido foi feito' />
      <p>{orderTime}</p>
    </div>

    );
  };
