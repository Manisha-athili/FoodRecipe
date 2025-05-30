import { Carousel } from "antd";
import 'animate.css'

const Hero = ()=> {
    const contentStyle = {
        margin: 0,
        height: '200px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    //   const imagediv = {
    //     height: '500px',
    //     lineHeight: '160px',
    //     textAlign: 'center',
    //     background: '#364d79',
    //   }

    return(
        <>
            <Carousel arrows dotPosition="left"  autoplay={{ dotDuration: true }} autoplaySpeed={2000} className="m-4  " style={{ padding: '2rem', backgroundColor: '#f0f2f5' }}>
        
            <img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  style={{contentStyle}} height='600px' className="rounded-4" />
       
            <img src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{contentStyle}}  height='600px' className="rounded-4" />
      
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  style={{contentStyle}} height='600px' className="rounded-4" />
        
            <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" style={{contentStyle}} height='600px' className="rounded-4"  />

        
    </Carousel>
        <img 
        className="animate__animated animate__animate__fadeInDownBig animate__slow"
        src="textanim-Igxvn.gif" 
        alt="Dancing animation" 
        style={{ width: '175vh', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', display: 'block',borderRadius: '10px',padding: '2rem', backgroundColor: '#f0f2f5' }}
      />
        </>
    )
}

export default Hero