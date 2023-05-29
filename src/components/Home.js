import About from './About'
import styles from './Home.module.css'
import OurWork from './OurWork'
import Particle from './Particle'
import Story from './Story'

export default function Home(){
    return(
<>
<div className={styles.section1}>
<Particle/>
<h1>Welcome to the world of Veiled Vision</h1>
</div>
<div className={styles.section2}>
    <Story/>
</div>
<div className={styles.section3}>
    <About/>
</div>
<div className={styles.section4}>
    <OurWork/>
</div>
</>

    )
}