import styles from "./About.module.css";

export default function About(){
    return(
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card" style={{border:"none", alignItems:"center", backgroundColor:"transparent"}}>
      <img className={styles.image} src="./girl.jpg" alt="..."/>
      <div className="card-body" style={{textAlign:"center", color:"white"}}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card" style={{border:"none", alignItems:"center", backgroundColor:"transparent"}}>
      <img className={styles.image} src="./girl.jpg" alt="..."/>
      <div className="card-body" style={{textAlign:"center", color:"white"}}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card" style={{border:"none", alignItems:"center", backgroundColor:"transparent"}}>
      <img className={styles.image} src="./girl.jpg" alt="..."/>
      <div className="card-body" style={{textAlign:"center", color:"white"}}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>
        </>
    )
}