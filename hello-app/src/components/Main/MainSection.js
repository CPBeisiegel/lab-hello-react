import styles from './styles.module.css';

function MainSection(){
    return (
        <div className= {styles.mainContainer}>
            <div className={styles.mainInner}>
                <h1>Say hello to ReactJS</h1>
                <p>
                    You will learn a Frontend 
                    <br/>
                    framework from scrath, to
                    <br/>
                     become a super Ninja developer.
                     <br/>
                </p>
                <button className="btn">Awesome!</button>

            </div>

        </div>
    )
}

export default MainSection;