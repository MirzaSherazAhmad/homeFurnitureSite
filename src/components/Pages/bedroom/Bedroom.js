import React from 'react'
import "./Bedroom.css"
// import pictures
import pic1 from  '../../../assets/bedroompics/1.jpg'
import pic2 from '../../../assets/bedroompics/2.jpg'
import pic3 from '../../../assets/bedroompics/3.jpg'
import pic4 from '../../../assets/bedroompics/4.jpg'
import pic5 from '../../../assets/bedroompics/5.jpg'
import pic6 from '../../../assets/bedroompics/6.jpg'
import pic7 from '../../../assets/bedroompics/7.jpg'
import pic8 from '../../../assets/bedroompics/8.jpg'
import pic9 from '../../../assets/bedroompics/9.jpg'

const Bedroom=()=>{
  return (
    <div>
  <nav>LUXURY BED DESIGN</nav>
    <img src={pic1} alt="Cartoons"/>
    <img src={pic2} alt="Cartoons"/>
    <img src={pic3} style={{"height": 261}} alt="Cartoons"/>
    <img src={pic4} alt="Cartoons"/>
    <img src={pic5} alt="Cartoons"/>
    <img src={pic6} style={{"height": 261}} alt="Cartoons"/>
    <img src={pic7} alt="Cartoons"/>
    <img src={pic8} alt="Cartoons"/>
    <img src={pic9} alt="Cartoons"/>

    </div>
  )
}
export default Bedroom