
import React from "react";
class LifeCycleCOmponent extends React.Component{
el=document.createElement("Section");
// we are using one of the lifecycle hook
componentDidMount(){
    // this.test();
    setTimeout (()=>{
this.setState({data:"test got update"})
    }, 3000)

    
}

// this below function shud get excuted whenever ther is update 


componentDidUpdate(){
   alert("lifecycle update method is called")
}
state={data:"test not update"}
// test(){
//     document.querySelector("#test").appendChild(this.el)
// }


render(){
    return(
        <div id="test">
           {this.state.data}
        </div>
    );
}
}
export default  LifeCycleCOmponent ;