
import Link from "next/link"




export default function Contact() {
    return (
      <div>

<div style={{ backgroundColor: "#5046a1" }}>


<div className="navbar">
  <div className="navbar-heading">
    <h1 className="navbar">Sayeed It Park</h1>

  </div>

  <div className="navbar-link-container">
    
      <div><Link href='/'><a className="navbar-link" href="#">Home</a></Link></div>
      <div><Link href='/contact'><a className="navbar-link" href="#">Contact us</a></Link></div>
      <div><Link href='/about'><a className="navbar-link" href="#">About Us</a></Link></div>
      <div><Link href='/service'><a className="navbar-link" href="#">Services</a></Link></div>
    

  </div>

</div>

</div>




    <div style={{backgroundColor:'Black',color:'white',textAlign:'center' ,padding:'40px 0' ,marginTop:'40px'}}>    
      <h1>This is a service page</h1> 
    </div>
      </div>
    )
  }