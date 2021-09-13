import React from 'react';
import notfOff from '../img/notf-off.svg'

function Notification({
   notifId,
   notifClassName,
   img = notfOff
}) {
    return (
        <img id={notifId} className={notifClassName} src={img} alt='Notificações'/>
    )
}

export default Notification;