//end of mapping of all 25 post objects

    // let topPosts = this.state.mapInformation.map((postObj, i) => {
    //   // if(postObj.watsonInfo){
    //   let objTonesArray = postObj.watsonInfo.document_tone.tones //this is an array of the overall tones of this object
    //   console.log("here is the postObj-------------------------------------", postObj)
    //   console.log("here is length of postObj.watsonInfo.document_tone.tones", objTonesArray.length)
    //   let toneTags = objTonesArray.map( (toneObj, i) =>{
    //       return (
    //         <p className="post_tones" key={i}> {toneObj.tone_name}: {Math.floor((toneObj.score)*100)}% </p>  
    //       )
    //   })
    //   let commentArray = postObj.redditComments
      
    //   let commentStream = commentArray.map( (comment, i) =>{
    //     return <p key={i} >{comment}</p>
    //   })

      

    //   return (
    //     <div key={i}>
    //       <div className="post_card">            
           
    //        <a href ={postObj.link} target="_blank">
    //        <div className="_cardHeader">

    //         <div className="_cardTitle" >
    //           <h4>{postObj.postTitle}</h4>
    //         </div>

    //         <div className="_subreddit" >
    //         <p>{`subreddit: ${postObj.subName}`}</p>
    //         </div>

    //          <div className="_emotions" >
    //         {toneTags}
    //         </div>

    //         <div className="_comments" >
    //         <img src="comments.svg" />
    //            <p>{postObj.redditComments.length}</p>
    //         </div>

         
    //        </div>
    //        </a>


    //         <div className="post_comments">
            
              
    //             <div className="comment_container" >
    //              {commentStream}
    //              {/* {this.state.currentComment} */}
    //              {/* {this.animatedComments() } */}
    //             </div>
              
    //         </div>

    //             <div className="_readMore">
    //             <p>read more...</p>
    //             </div>

    //       </div>

    //     </div>
    //   )
    //   // }
    // })//end of original topPosts 