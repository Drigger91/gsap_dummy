import React , {useRef,useState,useLayoutEffect}from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
function FadeIn({children,specs}) {
    const ref = useRef();
    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(()=>{
        gsap.from(ref.current.children, { opacity:0,duration:3,ease:"bounce" ,...specs})
    },[])
  return (
    <div ref={ref}>{children}</div>
  )
}

export default FadeIn