import styles from './AllItems.module.css';
import ItemCard from './ItemCard';

const AllItems = props => { 
    return (
        <div className={styles.container}>
            {props.inventory.map(item => <ItemCard key={Math.random()} item={item}/>)}
        </div>
    )
}

export default AllItems;