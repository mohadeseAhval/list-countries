import styles from '../../styles/cart.module.css';
const Countries = (props) => {
    return (
        <div className={styles.cart}>
            <div className={styles.imgCart} style={{backgroundImage:`url(${props.flag})`}}></div>
           <p className={styles.titleCart}>{props.title}</p>
        </div>
    );
};

export default Countries;