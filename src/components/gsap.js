import { gsap } from "gsap";
import React ,{useEffect,useRef} from 'react'

function Gsap() {
  const box1Ref = useRef();
  const box2Ref = useRef();
  const select = gsap.utils.selector(box1Ref);
  useEffect(() => {
    gsap.to(box1Ref.current, { rotation: "+=360" });
    gsap.to(select(".text"), { x: Math.random()*80 ,y: Math.random()*100});
    box2Ref.current = gsap.timeline()
      .to(box2Ref.current, { color:'white' })
      .to(box2Ref.current, { backgroundColor:"blue",width:"250px",height:"250px"})
      .to(box2Ref.current,{ color:'black'})
  });
  return (
    <div>
      <div ref={box1Ref} className="test-box1">
        <b className="text">Box 1</b>
        </div>
        <br/>
        <div ref={box2Ref} className="test-box2">
          <b className="text">Box 2</b>
        </div>
    </div>
  )
}

export default Gsap