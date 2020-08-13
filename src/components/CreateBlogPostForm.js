import React, {useState} from "react"
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import {Form, FormControl, FormGroup, Button} from "react-bootstrap"
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import {Editor, EditorState, ContentState, RichUtils, getDefaultKeyBinding} from 'draft-js';
import './RichTextEditor.css'
import RichTextEditor from './RichTextEditor'
import 'draft-js/dist/Draft.css';
// import { useNavigate } from 'react-router-dom';
// import Form from "react-bootstrap/Form"
// import FormControl from

const ADD_POST = gql`
  mutation AddPost($Id: ID!, $Author: String!, $Content: String!, $Title: String!, $LastTimeChanged: String!) {
    addPost(Id: $Id, Author: $Author, Content: $Content, Title: $Title, LastTimeChanged: $LastTimeChanged) {
      Id
      Author
      Content
      Title
      LastTimeChanged
    }
  }
`;

function CreateBlogPostForm1(opts) {
    // const [editorState, setEditorState] = useState(
    //   () => EditorState.createEmpty(),
    // );
  
    // return <Editor editorState={editorState} onChange={setEditorState} />;

    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty(),
    );
    const styleMap = {
        CODE: {
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
          fontSize: 16,
          padding: 2,
        },
      };
    
    function getBlockStyle(block) {
        switch (block.getType()) {
            case 'blockquote': return 'RichEditor-blockquote';
            default: return null;
        }
    }

    function handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
          return true;
        }
        return false;
    }

    function mapKeyToEditorCommand(e) {
        if (e.keyCode === 9 /* TAB */) {
          const newEditorState = RichUtils.onTab(
            e,
            editorState,
            4, /* maxDepth */
          );
          if (newEditorState !== editorState) {
            setEditorState(newEditorState);
          }
          return;
        }
        return getDefaultKeyBinding(e);
    }

    function toggleBlockType(blockType) {
        setEditorState(
          RichUtils.toggleBlockType(
            editorState,
            blockType
          )
        );
      }
  
      function toggleInlineStyle(inlineStyle) {
        setEditorState(
          RichUtils.toggleInlineStyle(
            editorState,
            inlineStyle
          )
        );
      }
    let className = 'RichEditor-editor';

    return (
        <div className="RichEditor-root" style={{maxWidth: "50%"}}>
            <BlockStyleControls
                editorState={editorState}
                onToggle={toggleBlockType}
            />
            <InlineStyleControls
                editorState={editorState}
                onToggle={toggleInlineStyle}
            />
            <div className={className}>
                <Editor 
                    blockStyleFn={getBlockStyle}
                    customStyleMap={styleMap}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    keyBindingFn={mapKeyToEditorCommand}
                    placeholder="Tell a story..."
                    // ref="editor"
                    spellCheck={true}
                    onChange={setEditorState}
                />
            </div>
        </div>);
  }

function CreateBlogPostForm(opts) {
    const { params: { blog_post_type } } = opts.match;
    console.log("match:", opts.match)
    console.log("type:", blog_post_type)
    // const navigate = useNavigate();
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [shortContent, setShortContent] = useState("")
    const [content, setContent] = useState("")
    const [addBlogPost, { data }] = useMutation(ADD_POST);

    function handleSubmit(event) {
        event.preventDefault()
        console.log("event:", event)
        console.log("form:", event.currentTarget)
        console.log("content:", content)
        let currDate = new Date(Date.now()).toISOString()
        addBlogPost({ variables: { 
                    Id: uuidv4(), 
                    Author: author, 
                    Content: content, 
                    Title: title, 
                    LastTimeChanged: currDate
                    } 
                });
        history.push(`/${blog_post_type}`)
        // hashHistory.goBack();
        // navigate(-1)
        // goBack()
        }

    return (
        <div>
            <Form onSubmit={handleSubmit} style={{width:"80%", margin:"auto"}}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="author" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Short Content</Form.Label>
                    <Form.Control type="shortContent" placeholder="Enter short content" value={shortContent} onChange={e => setShortContent(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <RichTextEditor content={content} setContent={setContent}/>
                    {/* <Form.Control as="textarea" type="content" placeholder="Content" rows="15" value={content} onChange={e => setContent(e.target.value)}/> */}
                    {/* <Form.Control as="textarea" rows="5" /> */}
                </Form.Group>
                {/* <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control type="content" placeholder="Content" value={content} onChange={e => setContent(e.target.value)}/>
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

class StyleButton extends React.Component {
    constructor() {
      super();
      this.onToggle = (e) => {
        e.preventDefault();
        this.props.onToggle(this.props.style);
      };
    }

    render() {
      let className = 'RichEditor-styleButton';
      if (this.props.active) {
        className += ' RichEditor-activeButton';
      }

      return (
        <span className={className} onMouseDown={this.onToggle}>
          {this.props.label}
        </span>
      );
    }
  }

  const BLOCK_TYPES = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    {label: 'H5', style: 'header-five'},
    {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
  ];

  const BlockStyleControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return (
      <div className="RichEditor-controls">
        {BLOCK_TYPES.map((type) =>
          <StyleButton
            key={type.label}
            active={type.style === blockType}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        )}
      </div>
    );
  };

  var INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'},
  ];

  const InlineStyleControls = (props) => {
    const currentStyle = props.editorState.getCurrentInlineStyle();
    
    return (
      <div className="RichEditor-controls">
        {INLINE_STYLES.map((type) =>
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        )}
      </div>
    );
  };

export default CreateBlogPostForm