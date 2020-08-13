import React from "react"
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ReadOnlyEditor from './ReadOnlyEditor'
import {
    Editor, 
    EditorState, 
    ContentState, 
    RichUtils, 
    getDefaultKeyBinding, 
    convertToRaw, 
    convertFromRaw
  } from "draft-js"
import BlogPost from "../pages/BlogPostPage";


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

function BlogPostContent(opts) {
    var blogpostId = opts.blogpostId
    const { loading, error, data } = useQuery(GET_POST, {
        variables: {Id: blogpostId}
    })
    if (loading) return "loading..."
    if (error) return `error: ${error}`

    var blogPost = data.getPost
    console.log("blogPost 2:", blogPost)
    var contentState = convertFromRaw(JSON.parse(blogPost.Content))
    console.log("content state:", contentState)
    var editorState = EditorState.createWithContent(contentState)

    return (
        <>
            <h1>
                {blogPost.Title}
            </h1>
            <p>Author: {blogPost.Author}</p>
            <div>
                <ReadOnlyEditor content={blogPost.Content} />
            </div>
            <p>
                Content last changed: {new Date(blogPost.LastTimeChanged).toLocaleString()}
            </p>
        </>
    )
}

export default BlogPostContent