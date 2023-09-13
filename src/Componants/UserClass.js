import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log("constructor child");
        this.state = {
            count: 0,
        }
    }
    componentDidMount(){
        console.log("Cmpnt Did Mount child")
    }

    render(){
        console.log("render child")
        const {name, location, contact} = this.props;
        const {count} = this.state;
        return(
            <div className="user-card">
            <h1 className="bg-slate-800 text-white py-1 rounded-md my-2">Count : {count}</h1>
            <button className="px-2 py-1 bg-red-700 text-white mx-2 my-2 rounded-md" onClick={()=>{
                this.setState({
                    count: this.state.count -1,
                });
            }}>Count -</button>
            <button className="px-2 py-1 bg-green-700 text-white mx-2 my-2 rounded-md" onClick={()=>{
                this.setState({
                    count: this.state.count +1,
                });
            }}>Count +</button>
            

            <h2>Name : {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact : {contact}</h3>
        </div>
        )
        
    }
}

export default UserClass;