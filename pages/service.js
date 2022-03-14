
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

<img style={{width:'100%'}} src="http://datasoft-bd.com/wp-content/uploads/2017/03/service-common-1024x325.jpg"/>

<div style={{display:'flex',justifyContent:'center'}}>
<div style={{width:'80%'}}>

<p>Creates customized technological solutions for changing customer needs with flawless execution and world class advisory services.</p>


<div className="service-div">
  <img  className="service-div-img" src="https://www.appshark.com/wp-content/uploads/The-step-by-step-process-of-developing-a-custom-software-solution.jpg"/>
 <div className="service-div-headeing"> <h3>Software Development Solution</h3></div>
</div>

<div className="service-div">
  <img  className="service-div-img" src="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2018/10/software-testing-service-providing-firms-2-1.png"/>
 <div className="service-div-headeing"> <h3>Software Testing as a service</h3></div>
</div>
<div className="service-div">
  <img  className="service-div-img" src="https://int.lead.bureauveritas.com/var/images/1544450735-image.png"/>
 <div className="service-div-headeing"> <h3>System Manegment & Impliment</h3></div>
</div>
<div className="service-div">
  <img  className="service-div-img" src="https://demo.farost.net/datasoft/wp-content/uploads/2020/07/h1_slider1.jpg"/>
 <div className="service-div-headeing"> <h3>Datasoft Advisory Services</h3></div>
</div>

<div className="service-div">
  <img  className="service-div-img" src="https://static.javatpoint.com/cloudpages/images/iaas.png"/>
 <div className="service-div-headeing"> <h3>Infrustructure as a Service</h3></div>
</div>

<div className="service-div">
  <img className="service-div-img"   src="https://previews.123rf.com/images/ileezhun/ileezhun1402/ileezhun140200003/25880080-bildung-und-ausbildung-menschen-cap-buch-banner.jpg"/>
 <div className="service-div-headeing"> <h3>Education and Training</h3></div>
</div>



</div>
</div>

<div className="footer-div" style={{marginTop:'10px'}} >
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
      </div>
   
      </div>
    )
  }