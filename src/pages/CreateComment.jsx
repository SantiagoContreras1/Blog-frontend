import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const CreateComment = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(false)


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

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // validacion
    if(title.trim() === '' || description.trim() === ''){
      setError(true)
      return
    }

    setError(false)


    // Conexion con axios
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/comments/save`,{
        name: title,
        comment: description,
        post: id
      })

      //Se redirige al detallePost al publicar
      navigate(`/posts/${id}`)
      
    } catch (err) {
      console.log(err)
      setError(true)
    }

  }


  return (
    <section className="create-comment">
      <div className="container">
        <h2>Comment</h2>

        {error && (
          <p className='form_error-message'>
            Complete all fill blanks.
          </p>
        )}



        <form className="form create-comment_form" onSubmit={handleSubmit}>
          <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />

          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} />


          <button type='submit' className='btn primary'>Save</button>

        </form>
      </div>
    </section>
  )
}

export default CreateComment
