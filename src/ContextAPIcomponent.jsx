
import { useContext , useState} from "react"
import Usercontext from "./Usercontext"


function ContextAPIcomponent() {

    const data={user:'Ajay'}
    const [User,setUser]=useState({name:'yathish'})


    return (
        <div>
<Usercontext.Provider value={data}>
<Navbar/>
<MainPage/>
</Usercontext.Provider>
</div>
    )
}

function Navbar() {


    return (
        <div>
<div> this is navbar</div>

        </div>
    )
}


function MainPage() {


    return (
        <div>
            <div>this is a MainPage </div>
            <Contact />
        </div>
    )
}


function Contact() {


    return (
        <div>
            <div>this is contact</div>
            <Message />
        </div>
    )
}

function Message() {

const data=useContext(Usercontext)
    return (
        <div>
            <div>this is a message</div>
            {/* <Usercontext.Consumer>
                {value => <h4>{value.name}</h4>}
            </Usercontext.Consumer > */}
            {data.user}
        </div>

    )
}


export default ContextAPIcomponent;