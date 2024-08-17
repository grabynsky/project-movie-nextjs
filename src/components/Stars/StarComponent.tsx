'use client'
import React, {FC, useState} from 'react';
import {Rating, RoundedStar, Star, ThinStar} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';


const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor : '#fbf1a9',
    inactiveFillColor : '#ffb700'
}

interface IProps {
    ratingNum: number,
}

const StarComponent: FC<IProps> = ({ratingNum}) => {
    const [rating, setRating] = useState(ratingNum / 1000)

    return (
        <div>
            < Rating
                style={{maxWidth: 300, marginTop: 20}}
                value={rating}
                onChange={setRating}
                itemStyles={myStyles}
                items={10}
                readOnly

            />
        </div>
    );
};

export default StarComponent;