import { useState, useLayoutEffect, useRef } from "react";

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  // console.log("el",el.current.clientWidth)

  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });
   console.log("width",width)
  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <h2>textarea width: {width}px</h2>
      <h2>textarea height: {height}px</h2>
      <textarea
        onClick={() => {
          console.log("hello")
          setWidth(0);
        }}
        ref={el} //telling ref to always refer to text area
      />
    </div>
  );
};

export default LayoutEffectComponent;
