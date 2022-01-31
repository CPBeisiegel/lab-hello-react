import styles from './styles.module.css';
import image1 from '../../images/icon1.png';
import image2 from '../../images/icon2.png';
import image3 from '../../images/icon3.png';
import image4 from '../../images/icon4.png';


function CardSection(){
    return (
        <div className={styles.cardContainer}>
            <div className= {styles.cardInner}>
                <img src={image1} alt="icon1"/>
                <h3>Declarative</h3>
                <p>React makes it painless
                <br/>
                 to create interactive UIs.</p>

            </div>
            <div className={styles.cardInner}>
                <img src={image2} alt="icon2"/>
                <h3>Components</h3>
                <p>Build encapsulated components
                <br/> 
                that manage their state.</p>

            </div>
            <div className={styles.cardInner}>
                <img src={image3} alt="icon3"/>
                <h3>Single-Way</h3>
                <p>A set of immutable values 
                <br/>
                are passed to component's.</p>

            </div>
            <div className={styles.cardInner}>
                <img src={image4} alt="icon4"/>
                <h3>JSX</h3>
                <p>Statically-typed designed 
                <br/>
                to run on modern browsers.</p>

            </div>
        </div>
    )
}

export default CardSection;