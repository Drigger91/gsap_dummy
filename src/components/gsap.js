import { gsap } from "gsap";
import React ,{useEffect,useRef,useState} from 'react'

function Gsap() {
  const box1Ref = useRef();
  const box2Ref = useRef();
  const [change,setChange] = useState(50)
  const select = gsap.utils.selector(box1Ref);
  useEffect(() => {
    gsap.to(box1Ref.current, { rotation: "+=360" });
    gsap.to(select(".text"), { x: Math.random()*80 ,y: Math.random()*100});
    box2Ref.current = gsap.timeline()
      .to(box2Ref.current, { color:'white' })
      .to(box2Ref.current, { backgroundColor:"blue",width:"250px",height:"250px"})
      .to(box2Ref.current,{ color:'black'})
  },[change]);
  useEffect(() => {
    box2Ref.current = gsap.timeline()
      .to(box2Ref.current, { color:'white' })
      .to(box2Ref.current, { backgroundColor:"blue",width:"250px",height:"250px"})
      .to(box2Ref.current,{ color:'black'})
  });
  const onHover = ({target})=>{
      gsap.to(target , {backgroundColor : "orange" , width:"300px",height:"200px"})
  }
  const onLeave = ({target})=>{
    gsap.to(target, { backgroundColor:"blue",width:"250px",height:"250px"})
  }
  return (
    <div className="basic">
      <div ref={box1Ref} onClick={()=> setChange(prev => prev + Math.random()*10 )} className="test-box1">
        <b className="text">Click to Change<br/> {change}</b>
        </div>
        <br/>
        <div onMouseEnter={onHover} onMouseLeave={onLeave} ref={box2Ref} className="test-box2">
          <b className="text">Box 2</b>
        </div>
    </div>
  )
}

export default Gsap