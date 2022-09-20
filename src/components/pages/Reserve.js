import React, { Component } from 'react';import '../../App.css';
import './Contact.css';
import axios from 'axios';

export default class Contact extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  state={
    name: '',
    lastname:'',
    reserve:'',
    date:'',
    time:'',
    sent:false
  }
  handleDate=(e)=>{
    this.setState({date:e.target.value})
  }
  handleTime=(e)=>{
    this.setState({time:e.target.value})
  }
  handleName=(e)=>{
    this.setState({name:e.target.value})
  }
  
  handleLastname=(e)=>{
    this.setState({lastname:e.target.value})
  }
  
  handleReserve=(e)=>{
    this.setState({reserve:e.target.value})
  }
  option=()=>{
    let options=[]
    for(let i=1; i<=24; i++){ 
      options.push(<option value={i}>{i}</option>)
  }
  return options;
  }
  formSubmit=(e)=> {
    e.preventDefault();
    let datar= {
       name: this.state.name,
       lastname:this.state.lastname,
       people:this.state.reserve,
       date:this.state.date,
       time:this.state.time
    }
    axios.post('api/reserve' ,datar)
    .then(res =>{
      this.setState({
        sent:true,
      },this.resetForm())
    }).catch  (()=>{
      console.log('message not sent')
    })
  }
  resetForm=()=>{
    this.setState({
      name: '',
      lastname:'',
      reserve:'',
      date:'',
      time:'',
    
    })
    setTimeout(()=>{
      this.setState({
        sent:false,
      })
    },3000)
  }
  render(){
      return (
        
        <div className="contact-form">
         
        <p>Reserve a Table</p>
        <div>
        <form onSubmit={this.formSubmit}>
        <label>Name</label>
        <input type="text"
         id="fname" 
         name="firstname"
          placeholder="First name.." 
          value={this.state.name}
          onChange={this.handleName}   required
          />
        
        <input type="text" id="lname" name="lastname" placeholder="Last name.."  value={this.state.lastname} 
          onChange={this.handleLastname}   required/>
    
    
        <label>How many people are you ?</label>
        <select required
        value={this.state.reserve} 
          onChange={this.handleReserve}
          
          >
            {this.option()}
            </select>
            <label>Select Date and Time</label><br/>
            <input className="datetime" type="date" id="start" name="trip-start"
       
       min="2021-01-01"  value={this.state.date} 
       onChange={this.handleDate} required/>
       <input className="datetime" type="time" id="appt" name="appt"
       min="12:00" max=""value={this.state.time}   required
       onChange={this.handleTime}/><br/>
       
       <span><small>We are open from 12AM to 12PM</small></span>

<br/>
     <br/>
        <input type="submit" value="Send" />
        </form>
        </div>
        </div>
        
      );
      
    }
  }
