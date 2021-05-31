import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Img from '.././assets/contact.jpg';


//styling for the Form
const Form = styled.div `
padding 20px;
width: 300px;
margin: auto;
margin-top: 10px;
background-color: #80CBC4;
border-radius: 10px;
margin-bottom: 100px;
`;

//styling for the img
const Imgstyle = styled.div `
box-shadow: 0 10px 10px rgba(0,0,0,0.12), 0 3px 10px;
border-radius: 50%;
`;

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            message: '',
            phone: ''
        }
    }
   
handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
}

handleMessageChange = (event) => {
    this.setState({
        message: event.target.value
    });
}

handlePhoneChange = (event) => {
    this.setState({
        phone: event.target.value
    });
}

handleSub = (event) => {
    const { name , message , phone} = this.state;
    console.log({
        name,
        message,
        phone
    })

//Clear the form after submit
    this.setState({ 
        name: '',
        message: '',
        phone: ''

      })    
}
    

  render() {
    
    const { name, message , phone } = this.state;

    return (
    <div className="container">
      <div className="row">
        <div className="col-m-3 m-3">
        <Imgstyle>
        <img className="responsive-img" src={Img} alt=" bookstore hallway" />
        </Imgstyle>
        </div>
        <div className="col-m-3 m-1">
        <Form>
            <h1 className="h3"><span className="fas fa-envelope"></span> KEEP IN TOUCH</h1>
            <p className="lead">Please leave us a message and we will get back to you within 24 hrs.</p>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" className="form-control" value={name} onChange={ e => this.handleNameChange(e)}/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" className="form-control" value={phone} onChange={ e => this.handlePhoneChange(e)}/>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" className="form-control" row="5" value={message} onChange={e => this.handleMessageChange(e)}></textarea>
            </div>
            <div className="form-group">
                <Button color="org-m" onClick={this.handleSub}> Submit</Button>
            </div>        
        </Form>
        </div>
      </div>
    </div>
    );
  }
}

export default Contact;