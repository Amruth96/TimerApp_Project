// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from "react";
// import Counter from "./components/Counter";
// import FocusInput from "./components/FocusInput";
import TimerApp from "./components/TimerApp";
function App(){
  return(
    <div>
      {/* <Counter/> */}
      {/* <FocusInput/> */}
      <TimerApp/>
    </div>
  )
}
export default App;