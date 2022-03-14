import React, { useRef,useLayoutEffect} from 'react'
import FadeIn from './fadein'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
function Gsapad() {
  const boxRef = useRef();
  const select = gsap.utils.selector(boxRef);
  gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(()=>{
        gsap.to('#box2',{ scrollTrigger:{trigger:'#box2',toggleActions:"restart pause reverse pause"},x:400, duration:3 ,rotation : "+=360"})
        boxRef.current = gsap.timeline({scrollTrigger:{trigger:'#box3',toggleActions:"restart pause reverse pause"}})
        .to(boxRef.current,{x:400,duration:3,rotation :"+=360"})
        .to(boxRef.current,{backgroundColor:"blue",color:"white"})
        .to(boxRef.current,{x:0,duration:3,rotation:"-=360"})
    },[])
  return (
    <div  className='basic'>
    <FadeIn specs={{duration:1}}>
        <div className='test-box1'>
        <b>box 1</b>  
        </div> <br/>
        <h1>Scroll Trigger</h1>
        <div id='box2' className='test-box2'>
        <b>box 2</b> 
        </div>
        <h1>Advanced scroll trigger</h1>
        <div id='box3' ref={boxRef} className='test-box2'>
        <b>Box 3 </b> 
        </div>
        </FadeIn>
    </div>
  )
}

export default Gsapad