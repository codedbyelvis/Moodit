let thePostMoods = function (postObj){
  if(postObj.watsonInfo.document_tone.tones)
   let postMoods = postObj.watsonInfo.document_tone.tones.map( (mood)=>{
     return(
       <h4>mood</h4>
     );
   })