import React, { Component} from 'react';

import axios from 'axios';
import './Contact.css'

export default class Contact extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

    state={
      name: '',
      lastname:'',
      email:'',
      message:'',
      sent:false
    }

    handleName=(e)=>{
      this.setState({name:e.target.value})
    }
    
    handleLastname=(e)=>{
      this.setState({lastname:e.target.value})
    }
    
    handleEmail=(e)=>{
      this.setState({email:e.target.value})
    }
    
    handleMessage=(e)=>{
      this.setState({message:e.target.value})
    }

    formSubmit=(e)=> {
      e.preventDefault();
      let data= {
         name: this.state.name,
         lastname:this.state.lastname,
         email:this.state.email,
         message:this.state.message
      }
      axios.post('api/forma' ,data)
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
      email:'',
      message:'',
      
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
          <p>Contact Us</p>
          <div>
          <form onSubmit={this.formSubmit}>
          <label>Name</label>
          <input type="text"
           id="fname" 
           name="firstname"
            placeholder="First name.." 
            value={this.state.name}
            onChange={this.handleName}
            />
          
          <input type="text" id="lname" name="lastname" placeholder="Last name.."  value={this.state.lastname}
            onChange={this.handleLastname}/>
      
      
          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Your email"   value={this.state.email}
            onChange={this.handleEmail}/>
      
      
          <label>Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."  value={this.state.message}
            onChange={this.handleMessage}></textarea>
          <input type="submit" value="Submit" />
          </form>
          </div>
          </div>
          
        );
        
      }
    }
  
  
  

