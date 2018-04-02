import React from 'react';

//remember - functional components get their data passed in through the props argument. DO NOT USE "THIS.PROPS". No need for 'this'. 

export default function MapCard(props){
    return (
        <div>
            
			<div className="album">
                <div className="card_header">
                <h2>Title of the Reddit Post</h2>
                </div>
             
                <div className="album__details">
                  
                  <p className="album__artist">Subreddit Title</p>
                  <p className="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
                  <p className="album__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, excepturi!</p>
                </div>
              </div>
         </div>
    )
}

