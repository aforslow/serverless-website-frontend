import React from "react"
import CreateBlogPostForm from "../components/CreateBlogPostForm"
import CustomNavbar from "../components/CustomNavbar"
import RichTextEditor from "../components/RichTextEditor"

function CreateBlogPostFormPage({match, location}) {
    return (
        <div>
            <CustomNavbar/> 
            <br/>
            <br/>
            {/* <RichTextEditor></RichTextEditor> */}
            <CreateBlogPostForm 
                match={match}
                location={location}
            />
            {/* <CreateBlogPostForm/> */}
        </div>
    )
}

export default CreateBlogPostFormPage