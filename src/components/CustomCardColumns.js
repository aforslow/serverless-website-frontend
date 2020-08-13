import React, { useEffect, useState } from "react"
import {Card, CardColumns} from "react-bootstrap"


function CustomCardColumns(opts) {
    // "{\"MainContent\":\"default hi there\",\"Title\":\"Blogpost title\",\"BlogPostId\":\"id1\",\"ThumbNail\":\"default thumbnail\",
    // \"LastTimeChanged\":\"2020-06-15T10:53:30\",\"ShortContent\":\"short content\"}"
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [blogPost, setBlogPost] = useState({
    //     MainContent: "",
    //     Title: "",
    //     BlogPostId: "",
    //     ThumbNail: "",
    //     LastTimeChanged: "",
    //     ShortContent: ""
    // })

    // useEffect(() => {
    //     fetch('http://localhost:3000/dev/blogpost/get?tableName=blogPosts-dev-1&blogPostId=id1')
    //         .then(resp => resp.json())
    //         .then(
    //             (result) => {
    //                 var parsedResult = JSON.parse(result)
    //                 setIsLoaded(true)
    //                 console.log("result:", parsedResult)
    //                 setBlogPost(parsedResult)
    //             },
    //             (error) => {
    //                 setIsLoaded(true)
    //                 setError(error)
    //             }
    //         )

    // }, [])

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
        console.log("opts:", opts.blogPosts)
        return (
            <div>
                <CardColumns style={{maxWidth: "90%", margin: "auto"}}>
                    {opts.blogpostCards}
                </CardColumns> 
            </div>
        )
    
}

export default CustomCardColumns