import styles from './ItemGallery.module.css';
import Filter from './Filter';
import AllItems from './AllItems';
import Inventory from '../../Inventory/Inventory';
import { useReducer } from 'react';

const inventoryReducer = (state,action) => {
    if (action.type === 'PRICE_ASCEND') {
        return [...state.sort((a,b) => a.price > b.price ? 1 : -1)];
    }
    if (action.type === 'PRICE_DESCEND') {
        return [...state.sort((a,b) => a.price > b.price ? -1 : 1)];
    }
    if (action.type === 'NAME_ASCEND') {
        return [...state.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)];
    }
    if (action.type === 'NAME_DESCEND') {
        return [...state.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)];
    }
}

const ItemGallery = props => {
    const [inventoryState, dispatchInventory] = useReducer(inventoryReducer, Inventory);

    const filterHandler = (selection) => {
        dispatchInventory({type: selection});
    }

    return (
        <div className={styles.container}>
            <Filter dispatch={filterHandler}/>
            <AllItems inventory={inventoryState}/>
        </div>
    )
}

export default ItemGallery;