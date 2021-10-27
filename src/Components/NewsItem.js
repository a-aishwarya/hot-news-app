import React, { Component } from 'react';

export class NewsItem extends Component {

 

    render()
     {
         console.log("yo");
        let {title, description, imageurl,newsurl}=this.props;
        return( 
            
        
            <div className="card" >
                <img src={imageurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsurl} target="_blank" className="btn btn-primary">Read more</a>
                </div>
            </div>
        )
            
        
    }
}

export default NewsItem
