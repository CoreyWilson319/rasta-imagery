import Messaging from '../minorcomponents/Messaging'
function SidebarRight(props) {
    return(
        // use prevent default
        <div id="rightSidebar">
            <p id="description">Enter the information below to send questions about bookings, pricing and questions</p>
            <form id="inputLoc">
                <label>Name:</label>
                <input className="inputs" type="text" onChange={props.handleName} placeholder="John Doe"/>
                <label>Email:</label>
                <input className="inputs" type="text" onChange={props.handleEmail} placeholder="JohnD@jd.com"/>
                <label>Message:</label>
                <input className="inputs" type="text" onChange={props.handleContent} placeholder="Enter Message"/>
                <h3>Optional</h3>
                <label>Phone:</label>
                <input className="inputs" type="text" onChange={props.handlePhone} placeholder="xxx-xxx-xxxx"/>
                <Messaging {...props}/>
                {/* <Messaging messageInfo={props.messageInfo} phoneInfo={props.phoneInfo} nameInfo={props.nameInfo} emailInfo={props.emailInfo} asdf={props.asdf} /> */}
            </form>

            {/* Suggestion was to clone props and pass them to messaging component */}
        </div>
    )
}

export default SidebarRight