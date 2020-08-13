import React from "react"
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import CustomCard from "../components/CustomCard"
import CustomNavbar from "../components/CustomNavbar";
import BlogPostContent from "../components/BlogPostContent"

const GET_POST = gql`
    query getPost($Id: ID!) {
        getPost(Id: $Id) {
            Id
            Title
            Author
            Content
            LastTimeChanged
        }
    }
`;

function BlogPost({match, location}) {
    const { params: { blogpostId } } = match;
    const { loading, error, data } = useQuery(GET_POST, {
        variables: {Id: blogpostId}
    })
    if (loading) return "loading..."
    if (error) return `error: ${error}`

    console.log("match params:", match)
    console.log("data:", data.getPost)
    return (
        <>
            <CustomNavbar/>
            <BlogPostContent
                blogpostId={blogpostId}
            />
        {/* <p>
            {data.getPost.Title}
        </p>
            <p>
                <strong>Blog post id: </strong>
                {blogpostId}
            </p>
            <p>
                <strong>Match Props: </strong>
                <code>{JSON.stringify(match, null, 2)}</code>
            </p>
            <p>
                <strong>Location Props: </strong>
                <code>{JSON.stringify(location, null, 2)}</code>
            </p> */}
        </>
    )
}

export default BlogPost