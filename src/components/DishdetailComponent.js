import React ,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
import '../App.css';

class Dishdetail extends Component{
    
  
    render()
    {
        
            if (this.props.dish != null){

                const comment= this.props.dish.comments.map((comment)=>{
                    return (
                            <li key={comment.id} className="li-style">
                                <p>{comment.comment}</p>
                                <p>
                                -- {comment.author} ,{" "}
                                {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit"
                                }).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </li>
                    );
                });
                return(
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width= "100%" src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                             <h3><b>Comments</b></h3>
                             {comment}
                        </div>
                    </div>
                );
            }
            else
                return(
                    <div></div>
                );
        
    }
}

export default Dishdetail;