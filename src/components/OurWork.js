
import styles from './Home.module.css'
import AOS from'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function OurWork(){
    useEffect(() => {
        AOS.init();
      },[])
      
    return(
        <div className={styles.section4}>
<h1>Our Work</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100" data-aos="fade-right"   data-aos-duration="3000" style={{backgroundColor:"rgb(135,0,0)", color:"white"}}>
      <img src="./logo.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100"  data-aos="flip-left"   data-aos-duration="3000">
      <img src="./logo.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100"  data-aos="flip-left"   data-aos-duration="3000">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" data-aos="fade-left"   data-aos-duration="3000">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}