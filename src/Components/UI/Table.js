import styles from './Table.module.css'

const Table = (props) => {
   return (<table className={styles.result}> {props.children} </table>);
}
    
export default Table
    
    
