import React ,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle ,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../App.css';

function RenderDish({dish}) {
    
    return(
        <Card>
            <CardImg width= "100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );

  }

  function RenderComments({comments}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <h3><b>Comments</b></h3>
            {comments.map((comment)=>{
                return(
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
                    </li>);
               })}
        </div>
    );
  }

  const  Dishdetail = (props) => {

        if (props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <RenderComments comments={props.comments}/>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }

    }


export default Dishdetail;