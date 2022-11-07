import styles from './DropDown.module.css';

const DropDown = props => {
    return (
        <ul className={`${styles.list} ${props.className ? props.className : ''}`}>
            {
                props.items.map(item => <li key={item} onClick={e => props.onClick(e)}>{item}</li>)
            }
        </ul>
    )

}

export default DropDown;