import { Grid } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron,Container,Carousel,Card,CardDeck, CardColumns } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import {} from "react-icons/fa"
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import { BiDollar,BiPaperPlane } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Nav, Navbar} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import $ from "jquery"
import "../index.css"
const LandingPage = () => {
    $(document).ready(function(){
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        $('#stars li').on('mouseover', function(){
          var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
         
          // Now highlight all the stars that's not after the current hovered star
          $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
              $(this).addClass('hover');
            }
            else {
              $(this).removeClass('hover');
            }
          });
          
        }).on('mouseout', function(){
          $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
          });
        });
        
        
        /* 2. Action to perform on click */
        $('#stars li').on('click', function(){
          var onStar = parseInt($(this).data('value'), 10); // The star currently selected
          var stars = $(this).parent().children('li.star');
          
          for (var i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
          }
          
          for (var i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
          }
          
          // JUST RESPONSE (Not needed)
          var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
          var msg = "";
          if (ratingValue > 1) {
              msg = "Thanks! You rated this " + ratingValue + " stars.";
          }
          else {
              msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
          }
          responseMessage(msg);
          
        });
        
        
      });
      
      
      function responseMessage(msg) {
        $('.success-box').fadeIn(200);  
        $('.success-box div.text-message').html("<span>" + msg + "</span>");
      }
    const ratingChanged=(rating)=>{
        alert(`You have Given ${rating} Stars`);
    }
    return ( 
        <div>
        <Grid contained>
            <Grid contained style={{backgroundColor:"whitesmoke"}}>
                <h1 style={{textAlign:"center",color:"black",marginTop:"30px"}}><strong>Home</strong></h1>
                <hr/>
              
            </Grid>
        </Grid>
        <Grid contained style={{marginTop:"10px"}}>
        <Grid contained>
        <CardDeck className="card">
            <CardColumns>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.albizco.com/cdn-images/images/ProductImages/1445__bag-016.jpg.jpg"/>
            <Card.Body>
            <h2>Hand Bag</h2>

            <p>
                500$
            </p>
            
            
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.albizco.com/cdn-images/images/ProductImages/1392__a-12.jpeg.jpeg" />
            <Card.Body>
            <h2>Box</h2>
            <p>
                545$
            </p>

            </Card.Body>
                </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.albizco.com/cdn-images/images/ProductImages/1826__lc-026.JPG.jpg" />
            <Card.Body>
            <h2>Card Holder</h2>
            <p>
                256$
            </p>
            
            
            </Card.Body>
        </Card>
        </CardColumns>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.albizco.com/cdn-images/images/ProductImages/2229__784.JPG.jpg" />
            <Card.Body>
            <h2>Mugs</h2>
            <p>
                160$
            </p>
            
            
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.albizco.com/cdn-images/images/ProductImages/Set-02.jpg" />
            <Card.Body>
            <h2>Desk Set</h2>
            <p>
                700$
            </p>
            
            </Card.Body>
                </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.albizco.com/cdn-images/images/ProductImages/W-4003-B.jpg" />
            <Card.Body>
            <h2>Golf Item</h2>
            
            <p>
                400$
            </p>
        
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.albizco.com/cdn-images/images/ProductImages/1871__0131.JPG.jpg" />
            <Card.Body>
            <h2>KayChain</h2>
           
            <p>
                120$
            </p>
            
           
            </Card.Body>
        </Card>
        <CardColumns>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.albizco.com/cdn-images/images/ProductImages/594__AGW-007.JPG.jpg" />
            <Card.Body>
            <h2>Leather item</h2>
           
            <p>
                1122$
            </p>
            
              </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.albizco.com/cdn-images/images/ProductImages/905__8022.jpg.jpg" />
            <Card.Body>
            <h2>Plastic Pen</h2>
        
       
            <p>
                17$
            </p>
            
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.albizco.com/cdn-images/images/ProductImages/1303.jpg" />
            <Card.Body>
            <h2>Tourch</h2>
            
            <p>
                227$
            </p>
            
           
            </Card.Body>
        </Card>
        </CardColumns>
    </CardDeck>
        </Grid>
        </Grid>
        </div>
     );
}

 
export default LandingPage;