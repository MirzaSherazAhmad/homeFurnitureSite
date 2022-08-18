import React from 'react'
import './Dining.css'
// import pictures
import pic1 from '../../../assets/diningpics/1.jpg'
import pic2 from '../../../assets/diningpics/2.jpg'
import pic3 from '../../../assets/diningpics/3.jpg'
import pic4 from '../../../assets/diningpics/4.jpg'
import pic5 from '../../../assets/diningpics/5.jpg'
import pic6 from '../../../assets/diningpics/6.jpg'
import pic7 from '../../../assets/diningpics/7.jpg'
import pic8 from '../../../assets/diningpics/8.jpg'
import pic9 from '../../../assets/diningpics/9.jpg'

const Dining=()=> {
  return (
    <div>
         <div><nav>LUXURY DINING TABLES </nav></div>
    <img src={pic1}  style={{"height": 260}} alt="Cartoons"/>
    <img src={pic2} alt="Cartoons"/>
    <img src={pic3} alt="Cartoons"/>
    <img src={pic4} className='setheight' alt="Cartoons"/>
    <img src={pic5} className='setheight' alt="Cartoons"/>
    <img src={pic6}  alt="Cartoons"/>
    <img src={pic7} alt="Cartoons"/>
    <img src={pic8} alt="Cartoons"/>
    <img src={pic9} alt="Cartoons"/>

    </div>
  )
}
export default Dining