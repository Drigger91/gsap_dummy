import React,{useState,useLayoutEffect,useRef} from "react";
import gsap from "gsap";
function ExitAnim() {
    const [items, setItems] = useState([
        { id: 0 },
        { id: 1 },
        { id: 2 }
      ]);
      
      const removeItem = (value) => {
        setItems(prev => prev.filter(item => item !== value));
      }
      
      const remove = (item, target) => {
        gsap.to(target, {
          opacity: 0,
          onComplete: () => removeItem(item)
        });
      };
      const add = ()=>{
        const id = Math.random()*100 + Math.random()*150 +200;
        setItems(prev => [...prev,{id:id}])
      }
      return (
          <>
          <button onClick={add}>Add Items</button>
        <div className="exit" >
            
          {items.map((item) => (
            <div className="box" key={item.id} onClick={(e) => remove(item, e.currentTarget)}>
              Click Me
            </div>
          ))}
          
        </div>
        </>
      );
}

export default ExitAnim;
