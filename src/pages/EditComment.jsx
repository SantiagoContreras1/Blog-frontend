import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditComment = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // REACT QUILL
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "clean",
  ];

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/comments/${id}`
        );
        setTitle(res.data.comment.name);
        setDescription(res.data.comment.comment);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComment();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const finalName = title.trim() === "" ? "Anónimo" : title.trim();

    if (description.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    // Lo que edita en verdad
    try {
      console.log(
        "URL:",
        `${import.meta.env.VITE_BASE_URL}/comments/update/${id}`
      );
      await axios.put(
        `${import.meta.env.VITE_BASE_URL}/comments/update/${id}`,
        {
          name: finalName,
          comment: description,
        }
      );

      navigate(-1); // Regresa a la pagina anterior
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  //console.log(res.data)
  return (
    <section className="create-comment">
      <div className="container">
        <h2>Edit Comment</h2>
        {error && (
          <p className="form_error-message">This is an error message</p>
        )}

        <form className="form create-comment_form" onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Nombre del Autor"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />

          <ReactQuill
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
          />

          <button type="submit" className="btn primary">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditComment;
