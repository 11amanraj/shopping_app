import styles from './DropDown.module.css';

const DropDown = props => {
    return (
        <ul className={`${styles.list} ${props.className ? props.className : ''}`}>
            {
                props.items.map(item => <li key={item}>{item}</li>)
            }
        </ul>
    )

}

export default DropDown;