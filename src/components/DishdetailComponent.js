import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';

class DishDetail extends Component {
  

    
    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
    }

    renderComments(dish){
        if(dish != null){
            const com = dish.comments.map(el => {
                return(
                    <div key={el.id}>
                        <p>{el.comment}</p>
                        <p>--{el.author} {el.date}</p>
                    </div>
                    
                )
                
            });
            return(
                <Card>
                    <CardBody>
                        <CardTitle> <h4>Comments</h4></CardTitle>
                        <CardText>{com}</CardText>
                    </CardBody>
                </Card>
            )
        }
    }

    render(){
        
        return (               
                <div className="row">
                    <div className="col-md-5 m-1">
                       {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-md-5 m-1"> {/* commment */}
                    {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
        );
    }
}

export default DishDetail;