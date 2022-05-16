import styles from '../styles/title.module.css';
const Title = (props) => {
    return (
        <>
            <div className={styles.title}>
                <span>{props.title}</span>
            </div>
        </>
    );
};

export default Title;