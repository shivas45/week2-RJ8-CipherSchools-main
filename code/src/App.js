// import React from "react";
// //import Test from "./Test";
// //import AllUserList from "./components/AllUserList";
// import './App.css';
// import SignUpForm from "./components/SignUpForm";
// //import Name from "./components/Name";
// //import SumNumbers from "./components/SumNumber";
// const App = () => {
//   return(
//     <div>
//       {/* <h1>
//         Hello, I am Shantanu
//       </h1> */}
//       {/* <Test/> */}
//       {/* <AllUserList/> */}
//       {/* <Name/> */}
//       {/* <SumNumbers/> */}
//       <SignUpForm/>

//     </div>
//   )
// }

import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Header from "./components/Header";
import CounterComponent from "./components/CounterComponent";
import Photos from "./components/Photos";
//import TaskScreen from "./components/TaskScreen";
import higherOrderComponent from "./components/Hoc";
import SampleRenderProps from "./components/SampleRenderProps";
const App = () => {
  const TestApp = higherOrderComponent(()=> {
    return <div>Test App</div>
  });
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path={"/"} element={<h1>This is on Home Page</h1>} />
          <Route path={"/contact"} element={<h1>This is on Contact Page</h1>} />
          <Route path={"/about"} element={<h1>This is on About Page</h1>} />
          <Route path={"/signup"} element={<SignUpForm/>}/>
          {/* <Route path={"/tasks"} element={<TaskScreen/>}/> */}
          <Route path={"/counter"} element={<CounterComponent/>}/>
          <Route path={"/photos"} element={<Photos/>}/>
          <Route path={"/test"} element={<TestApp/>}/>
          <Route path={"/sample"} element={<SampleRenderProps/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
