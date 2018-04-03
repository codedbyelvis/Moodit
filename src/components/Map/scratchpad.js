<div className="card_header">
              <div className="post_title" >
                <a href={info.link} target="_blank">
                  {info.postTitle}
                
              </a>
              </div>

           

            </div>
 {/* <div>Tones: {info.watsonInfo.document_tone.tones[0].tone_name}</div> */}

<div class="subreddit_title"> 
<h4>Subreddit:  </h4>
 <p >{info.subName}</p>
 </div>

   <div clasName="comment_nums" >
     <img className="comments"
       src="comments.svg"
       onClick={() => this.getComments()}
     /> <p>{info.redditComments.length}</p>
   </div>