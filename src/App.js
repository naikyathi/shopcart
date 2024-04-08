// import logo from './logo.svg';
// import './App.css';
// import Home from './Component/Home';
// import About from './Component/About';
// import Contact from './Component/Contact';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from './Component/Main';
// import { Alert } from 'bootstrap';
// import { useState } from 'react';
// import ParentComponent from './Component/Event';
// import LifeCycleCOmponent from './LifeCycle';
// import ParentComponenterror from './Errorhandeling';
// import Componenterror from './Errorhandeling';

// function App() {
//   //const [message, setmessage]=useState("am i the one")
//  // const handleClick=(event)=>{
// // alert(event.target)
// // alert(event.type)
// //event.preventDefault();

//   return (
//     // here we setup  our routing of our application

//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path="/" element={<Main />}>
//     //       <Route index element={<Home />} />
//     //       <Route path="Home" element={<Home />} />
//     //       <Route path="About" element={<About />} />
//     //       <Route path="Contact" element={<Contact />} />
//     //     </Route>
//     //   </Routes>

//     // </BrowserRouter>


//   // event handling
// // here handelClick is the javascript function
// <div>





//   {/* <button onClick={handleClick} >click me</button>  */}
//   {/* here we will prop the message */}
//   {/* <p>{message}</p> */}
// {/* <form>
//   <input type='text'/>
//   <button type='submit' > Submit</button>

//   </form> */}

//     {/* <ParentComponent/> */}

//     {/* <LifeCycleCOmponent/> */}
//     {/* <Componenterror/> */}





// </div>


//   );
// }

// export default App;





// import logo from './logo.svg';
// import './App.css';
// import Home from './Component/Home';
// import About from './Component/About';
// import Contact from './Component/Contact';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from './Component/Main';
// import { Alert } from 'bootstrap';
// import { useState } from 'react';
// import ParentComponent from './Component/Event';
// import LifeCycleCOmponent from './LifeCycle';
// import ParentComponenterror from './Errorhandeling';
// import Componenterror from './Errorhandeling';

// function App() {


//   return (
//     // here we setup  our routing of our application

//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Main />}>
//           <Route index element={<Home />} />
//           <Route path="Home" element={<Home />} />
//           <Route path="About" element={<About />} />
//           <Route path="Contact" element={<Contact />} />
//         </Route>
//       </Routes>

//     </BrowserRouter>

//   );
// }

// export default App;




















// import logo from './logo.svg';
// import './App.css';
// import Home from './Component/Home';
// import About from './Component/About';
// import Contact from './Component/Contact';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from './Component/Main';
// import { Alert } from 'bootstrap';
// import { useEffect, useState } from 'react';
// import ParentComponent from './Component/Event';
// import LifeCycleCOmponent from './LifeCycle';
// import ParentComponenterror from './Errorhandeling';
// import Componenterror from './Errorhandeling';

// function App() {
//   const [count, setcount] = useState(0);
//   const [Calcuation, setCalcuation] = useState(0);
//   // const timer = () => {
//     useEffect(()=>{
//     // setTimeout(() => {
//       // setcount(count + 1);
// // }, 1000);
// setCalcuation(()=>count*2);
//   },[count]);

//   // by providing "[]" this on useeffect than deafualt behavior of the useeffect gets stoped

// return (
//   // here we setup  our routing of our application
  
//   < div >
//   {/* { timer() } */}
//   <h1>{count}</h1>
//   <button onClick={()=>setcount((c)=>c+1)}>add</button>
//   <h1>{Calcuation}</h1>
// </div >

//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Component/Main';
import { Alert } from 'bootstrap';
import { useEffect, useState } from 'react';
import ParentComponent from './Component/Event';
import LifeCycleCOmponent from './LifeCycle';
import ParentComponenterror from './Errorhandeling';
import Componenterror from './Errorhandeling';
import ContextAPIcomponent from './ContextAPIcomponent';

function App() {
 
return (
  <div>
    <ContextAPIcomponent/>
  </div>

  );
}

export default App;