import styles from './ItemCard.module.css';
import { useState } from 'react';

const ItemCard = props => {
    const img1 = props.item.img1;
    const img2 = props.item.img2;
    const [image,setImage] = useState(img1);

    return (
        <div className={styles.container}>
            <h3>{props.item.brand.toUpperCase()}</h3>
            <div>{props.item.description}</div>
            <div className={styles.image}><img src={image} alt={props.item.name} onMouseOver={() => setImage(img2)} onMouseOut={() => setImage(img1)}/></div>
            <div>{props.item.name}</div>
            <div>₹{props.item.price}</div>
        </div>
    )
}

export default ItemCard;