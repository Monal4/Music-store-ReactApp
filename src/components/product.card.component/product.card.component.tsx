import { product } from "../../types/producttypes";
import React,{ FC } from 'react';
import './style.css'

interface props {
    product: product;
}

const Card: FC<props> = (props) => {
    
    const{ product } = props;

    return(
        <div className = "prodDiv bg-light">
            <h1 key={product.code}> {product.description} </h1>
            <div className="tracks">
                {product.tracks.map(
                    track => <li key={track.id}> {track.title} </li>
                )}
            </div>
        </div>
    )
}

export default Card;