import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const EditComment = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  const modules = {
    toolbar:[
      [{ "header": [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ "list": "ordered" },{ "list": "bullet" },{ "indent": "-1" },{ "indent": "+1" }],
      ["clean"],
    ]
  }

  const formats = [
    "header",
    "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent",
    "clean"
  ]



  return (
    <section className="create-comment">
      <div className="container">
        <h2>Edit Comment</h2>
        <p className='form_error-message'>
          This is an error message
        </p>

        <form className="form create-comment_form">
          <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />

          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} />


          <button type='submit' className='btn primary'>Update</button>

        </form>
      </div>
    </section>
  )
}

export default EditComment
