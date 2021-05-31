import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Button from '../components/Button';
import Img from '.././assets/shop.jpg';

const PriceContainer = styled.div`
  padding 25px;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0,0,0,0.10), 0 3px 2px;
  background-color: #80CBC4;
  margin:  50px;
  width: 350px;
`;

class Shop extends Component {
constructor(props) {
    super();
    this.state = {
        subtotal: 0,
        total: 0
    }    
  }
   
priceHandlerJs = () => {
    this.setState({
    subtotal: 70 ,
    total: ( 70 * 1.13 ).toFixed(2)      
    });      
}

priceHandlerPhp = () => {
    this.setState({
    subtotal: 55 ,
    total: ( 55 * 1.13 ).toFixed(2)         
    });         
}

priceHandlerReact = () => {
    this.setState({
    subtotal: 80 ,
    total: ( 80 * 1.13 ).toFixed(2)       
    });         
}

priceHandlerHtml = () => {
    this.setState({
    subtotal: 60 ,
    total: ( 60 * 1.13 ).toFixed(2)       
    });         
}

render () {
const { subtotal , total } = this.state;

return (   
   <div className="container">
        <div className="row"> 
            <div className="col-m-12 col-m-6">
            <img className="responsive-img" src={Img} alt="Programming books" width="20" height="100" />
            <h1 className="mt-3 h2"><span className="fas fa-shopping-cart"></span> SHOP The Newest Books Here: </h1>
                <p>To get the price for each book, please click on "GET PRICE" and you can see the subtotal and total (with tax) on the "Your purchase" section below. </p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-m-6  mb-1">
                <Card color="grey-l">
                    <h2><span className="fab fa-js-square"></span> JS Advanced</h2>
                    <Button color="org-l" onClick={this.priceHandlerJs}>GET PRICE</Button>
                </Card>
            </div>
            <div className="col-lg-3 col-m-6 mb-1">
                <Card color="g-l" >
                    <h2><span className="fab fa-php"></span> Basic PHP</h2>
                    <Button color="org-d" onClick={this.priceHandlerPhp}>GET PRICE</Button>
                </Card>
            </div>
            <div className="col-lg-3 col-m-6 mb-1">
                <Card color="grey-m">
                    <h2><span className="fab fa-react"></span> React World!</h2>
                    <Button color="org-m" onClick={this.priceHandlerReact}>GET PRICE</Button>
                </Card>
            </div>
            <div className="col-lg-3 col-m-6">
                <Card color="g-l-2">
                    <h2><span className="fas fa-code"></span> Html in Depth</h2>
                    <Button color="org-l-2" onClick={this.priceHandlerHtml}>GET PRICE</Button>
                </Card>
            </div>
        </div>  
        < PriceContainer>
        <div className="row">
            <div className=" col-lg-12 col-m-6 ">
                <h3 className="h4">Your Purchase</h3>
                <p><strong>SubTotal:</strong> { subtotal } CAD<br></br>
                <strong>Total (With Tax):</strong> { total } CAD</p>
            </div>
        </div>
        </PriceContainer>            
   </div>
  );
 }
}

export default Shop;