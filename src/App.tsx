import React, { lazy, Suspense, useState } from "react";

import "@/App.scss";
import Class from '@/components/Class';
import img from "@/assets/img.png";
import { Demo1, Demo2 } from "@/components";
const LazyDemo = lazy(() => import(/* webpackPrefetch: true */"@/components/LazyDemo"));

function App() {
  const [show, setShow] = useState(false);

  console.log('NODE_ENV', process.env.NODE_ENV);
  console.log('BASE_ENV', process.env.BASE_ENV);
  return (
    <h2>
      <button onClick={() => setShow(!show)}>click me to show lazyload component</button>
      <Demo1></Demo1>
      star-react-ts-webpack-template
      <img src={img} alt="" />
      <div className="box"></div>
      <Class></Class>
      <span>11121</span>
      {show ? <Suspense fallback={"somefallback"}><LazyDemo></LazyDemo></Suspense> : ""}
    </h2>
  )
}
export default App;