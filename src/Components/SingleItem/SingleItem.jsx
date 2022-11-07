import styles from './SingleItem.module.css';
import CartButton from '../Ui/CartButton';

import Inventory from '../../Inventory/Inventory';

const SingleItem = props => {
    return (
        <div className={styles.container}>
            <div className={styles.images}>
                <div className={styles['image-main']}>
                    <img src={Inventory[0].img1} alt={Inventory[0].name} />
                </div>
                <div className={styles['image-gallery']}>
                    <img src={Inventory[0].img1} alt={Inventory[0].name} />
                    <img src={Inventory[0].img2} alt={Inventory[0].name} />
                    <img src={Inventory[0].img3} alt={Inventory[0].name} />
                    <img src={Inventory[0].img4} alt={Inventory[0].name} />
                </div>
            </div>

            <div className={styles.info}>
                <h1>{Inventory[0].name}</h1>
                <h2>{Inventory[0].brand}</h2>
                <span>{Inventory[0].description}</span>
                <h2>{Inventory[0].price}</h2>
                <CartButton />
            </div>
        </div>
    )
}

export default SingleItem;