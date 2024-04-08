
import React from "react";
class Componenterror extends React.Component{
componentDidCatch(error,errorinfo){
alert(error+"error called"+JSON.stringify(errorinfo))
}
render(){
    return(
        <div>
            <ChiComponent/>
        </div>
    );
}
}
export default Componenterror;







class ChiComponent extends React.Component{


   
    render(){
        return (
        <div>{this.state.data}</div>
        )
    }
}