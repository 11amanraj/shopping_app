import DropDown from '../Ui/DropDown';
import styles from './Filter.module.css';

const Filter = props => {
    const sortCriteria = ['Price Ascending','Price Descending','Name Ascending','Name Descending'];

    const sortHandler = (selection) => {
        if(selection === 'Price Ascending') {
            props.dispatch('PRICE_ASCEND')
        } else if(selection === 'Price Descending') {
            props.dispatch('PRICE_DESCEND');
        } else if(selection === 'Name Ascending') {
            props.dispatch('NAME_ASCEND');
        } else if(selection === 'Name Descending') {
            props.dispatch('NAME_DESCEND');
        }
    }

    const filterHandler = () => {

    }

    return (
        <div className={styles.container}>
            <div>
                <h3>Sort By :</h3>
                <DropDown onClick={e => sortHandler(e.target.textContent)} items={sortCriteria}/>
            </div>
            <div>
                <h3>Filter By :</h3>
            </div>
        </div>
    )
}

export default Filter;