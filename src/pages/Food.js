import React, { useState, useEffect } from "react"
import {
        Jumbotron, 
        Button,
        Pagination,
        Card
    } 
    from "react-bootstrap"
import CustomNavbar from "../components/CustomNavbar"
import CustomCardColumns from "../components/CustomCardColumns"
import CustomCardDeck from "../components/CustomCardDeck"
import { render } from "@testing-library/react"
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import CustomCard from "../components/CustomCard"
import CreateNewPostCard from "../components/CreateNewPostCard"
import { v4 as uuidv4 } from 'uuid';
import BlogpostCard from "../components/BlogpostCard"

const ALL_POST = gql`
  {
    allPost {
        posts {
            Id
            Title
            Author
            Content
            LastTimeChanged
        }
    }
  }
`;

const DELETE_POST = gql`
  mutation deletePost($Id: ID!){
    deletePost(Id: $Id) {
        Id
    }
  }
`;

function Food({ onPostSelected }) {
    const [blogPosts, setBlogPosts] = useState([])
    const [lastDataReceived, setLastDataReceived] = useState([])
    const [backendDataHasChanged, setBackendDataHasChanged] = useState(false)
    const [postsToDelete, setPostsToDelete] = useState([])
    
    var items = []
    var allBlogpostCards = []
    const { loading, error, data } = useQuery(ALL_POST, {
    })
    const [deleteBlogPost, { data2 }] = useMutation(DELETE_POST)

    function removeBlogPost(postId) {
        setBlogPosts(blogPosts.filter((value, idx) => value.key !== postId))
    }

    function removeBlogPosts(postIds) {
        for (let i=0; i < postIds.length; ++i) {
            removeBlogPost(postIds[i])
        }
    }

    function deletePostCard(Id) {
        return () => {
            setPostsToDelete([...postsToDelete, Id])
            deleteBlogPost({
                variables: {
                    Id: Id
                }
            })
        }
    }

    function getCreateBlogpostCard(key) {
        return (
            <CreateNewPostCard
                createPostUrl="/create/create_blog_post/food"
                img="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/cambodia.JPG"
                customKey={0}
                key={key}
            />
        )
    }

    function createBlogpostCards(blogPosts, deletePostCard) {
        return blogPosts.map(function(blogPost, i) {
            return <BlogpostCard
                key={blogPost.Id}
                title={blogPost.Title}
                content={blogPost.Content}
                img="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/cambodia.JPG"
                lastTimeChanged={new Date(blogPost.LastTimeChanged).toLocaleString()}
                detailedViewUrl={`/food/${blogPost.Id}`}
                onDelete={deletePostCard(blogPost.Id)}
            />
        })
    }

    useEffect(() => {
        if (data) {
            if (data !== lastDataReceived) {
                setLastDataReceived(data)
                setBackendDataHasChanged(true)
            }
        }
        console.log("blogPosts in useEffect:", blogPosts)
        if (backendDataHasChanged) {
            var createBlogpostCard = getCreateBlogpostCard(0)
            var blogPostCards = createBlogpostCards(data.allPost.posts, deletePostCard)    
            
            allBlogpostCards = [createBlogpostCard, ...blogPostCards]
            setBlogPosts(allBlogpostCards)
            setBackendDataHasChanged(false)
        }
        if (postsToDelete.length > 0) {
            const newBlogPost = getCreateBlogpostCard(1)
            setBlogPosts([newBlogPost])
            removeBlogPosts(postsToDelete)
            
            setPostsToDelete([])
        }
    }, [data, postsToDelete, blogPosts, backendDataHasChanged])

    if (loading) {
        return 'Loading...'
    }
    if (error) return `Error! ${error.message}`

    console.log("blogPosts before render:", blogPosts)
    return (
        <div>
            <CustomNavbar />
                <Jumbotron>
                    <h1>
                        Food blog
                    </h1>
            </Jumbotron>
            <CustomCardColumns 
                blogpostCards={blogPosts}
            />
            <Pagination>{items}</Pagination>
        </div>
      );

}

export default Food