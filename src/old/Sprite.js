import React from 'react';

const Sprite = (props) => {

    const icon_link = props.icon;

    return (
        <div className={props.classId}>
            <ion-icon name={icon_link} />
        </div>
    )

}

export default Sprite;