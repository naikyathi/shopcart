
import React from "react";
class ParentComponent extends React.Component{
handleClick=()=>{
    console.log("Click event handled by parentComponent");
}
render(){
    return(
        <div onClick={this.handleClick}>
            <ChildComponent/>
        </div>
    );
}
}
export default ParentComponent;







class ChildComponent extends React.Component{
    handleclick=(event)=>{
        event.stopPropagation();
console.log("Click event handled by childComponent");

    };
    render(){
        return <button onClick={this.handleclick}>Click me</button>;
    }
}