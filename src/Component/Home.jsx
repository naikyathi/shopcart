// function Home() {
//     return (
//     <div className="Home text-secondary">
//       this is Home page
//     </div>
//     );
//   }

//   export default Home;

import { Component } from "react";
class Home extends Component {
componentWillUnmount(){
  alert("component gone")
}



  render() {

    return (
      <div className="Home text-secondary">
        this is Home page
      </div>
    );
  }
}

export default Home;
