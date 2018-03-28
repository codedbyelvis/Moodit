// app.get('/api/comments', (req, res, next) => {
//         ////get comments from top 25 subreddits
//         function handleReddit2(resp){
//                         if(resp[1]!== undefined){
//                         console.log(resp[1].body + '---------------')
//                         }
                        
                
                
//                         for (let i = 0; i < 2; i++) {
//                                 // console.log([i], resp[i].body)
                                
//                                 // if(!resp[i].body){console.log('nothing to show')}
//                                 // redditComments.push(resp[i].body + '-----')
//                                 // redditComments.push([i] + '-----')

//                                 // console.log(resp[i].body.length + ' -------- ')                                           

//                                 // if(redditComments.length === 625) {
//                                 //         res.status(200).send(redditComments)

//                                 // }

//                         }
//                         // newComments.push(redditComments)
//                         // redditComments = []
//                         // console.log(redditComments)
//                         // console.log(newComments.length)
                     
//                         // if (newComments.length === 25) {
//                         //         res.status(200).send(newComments)
//                         // }
                        
                       
//         }

//         function handleReddit(subId){
//                 r.getSubmission(subId).comments.then(handleReddit2)
//         }
//         r.getHot()
//                 .then(resp => {
//                         var newComments = []
//                         var redditComments = []
//                         for (let j = 0; j < 25; j++) {
//                                 // var subName = resp[j].subreddit.display_name
//                                 var subId = resp[j].id
//                                 handleReddit(subId)
//                                 // console.log(subId)
//                                 // console.log(resp[0])
//                                 // console.log(resp[j].title, subId)
                                

//                                 // r.getSubreddit(subName).getNewComments().then(resp => {
//                                 //         var comments = []
//                                 //         for (let i = 0; i < 25; i++) {
//                                 //                 comments.push(resp[i].body + '-----')
//                                 //                 // comments.push([i] + '-----')

//                                 //                 // console.log(resp[i].body.length + ' -------- ')                                           

//                                 //                 // if(comments.length === 625) {
//                                 //                 //         res.status(200).send(comments)

//                                 //                 // }

//                                 //         }
//                                 //         newComments.push(comments)
//                                 //         comments = []
//                                 //         // console.log(comments)
//                                 //         // console.log(newComments.length)
                                     
//                                 //         if (newComments.length === 25) {
//                                 //                 res.status(200).send(newComments)
//                                 //         }
//                                 // })

//                         }


//                 }
//                 )
// })