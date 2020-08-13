import React from "react"
import {
    Editor, 
    EditorState, 
    ContentState, 
    RichUtils, 
    getDefaultKeyBinding, 
    convertToRaw, 
    convertFromRaw
  } from "draft-js"

function ReadOnlyEditor(opts) {
    var parsedContent = JSON.parse(opts.content)
    var contentState = convertFromRaw(parsedContent)
    var editorState = EditorState.createWithContent(contentState)
    return (
      <Editor editorState={editorState} readOnly={true} />
    )
}

export default ReadOnlyEditor