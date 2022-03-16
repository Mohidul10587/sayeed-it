

import Link from "next/link"
import Head from 'next/head'




export default function Contact() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>
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

      <h1 style={{ textAlign: 'center' }}>GET IN TOUCH WITH US</h1>
      <div style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>_____________</div>


      <h3 style={{ textAlign: 'center' }}>Say Hello ! Don't be shy</h3>

      <div style={{width:'50%',padding:'20px'}}>
      <div>


        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginTop: '50px', width: '50%' }} >
          <p>Address:<br />
            House No 16 ( Level 5)
            Block - A
            Basundhara R/A, Main Road
            Dhaka-1229
            Email: info@dream71.com
            Mobile:+8801550019966, +8801715091734
            Phone:+88 09 678 71 1971
            USA Phone +14158002851</p>

        </div>
      </div>









      <div className="footer-div" style={{ marginTop: '50px' }} >
        <p>Address:<br />
          House No 16 ( Level 5)
          Block - A
          Basundhara R/A, Main Road
          Dhaka-1229
          Email: info@dream71.com
          Mobile:+8801550019966, +8801715091734
          Phone:+88 09 678 71 1971
          USA Phone +14158002851</p>
        <p>&copy; Copyright By<span style={{ fontStyle: 'italic' }}> Abu Sayeed Mandal</span></p>
        <a href="#"> <i class="fab fa-facebook-square"></i></a>
        <a href="#"> <i class="fab fa-linkedin"></i></a>
        <a href="#">  <i class="fab fa-twitter-square"></i></a>
      </div>

    </div>
  )
}