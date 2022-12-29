import React from "react";
import axios from "axios";

export default class PersonList extends React.Component{

    state={
        persons:[],
    };

    componentDidMount(){
        axios.get('http://127.0.0.1:8003/router/getdata')
        .then( res=>{
            console.log(res.data);
        this.setState({persons: res.data});
    });
}

    render(){
    
    return <ul >{this.state.persons.map(person=><li>{person.name} </li>)}</ul>
    
    }
}