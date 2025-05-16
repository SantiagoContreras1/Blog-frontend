import PostCourse from "../components/PostCourse";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const PostDetails = () => {
  const { id } = useParams();
  const [post,setPost] = useState(null)


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/publications/${id}`)
        setPost(res.data.publication)
      } catch (err) {
        console.log(err)
      }
    }

    fetchPost()
  },[id])

  if(!post){
    return <p className="center">Loading...</p>;
  }



  return (
    <section className="post-detail">
      <div className="post-detail__container">
        <div className="post-detail__header">
          <PostCourse 
            courseName={post.course.name}
            creationDate={post.creationDate}
            image={post.course.image}
          />
        </div>
        <h1>{post.title}</h1>

        <div className="post-detail__miniature">
          <img src={post?.image} alt={post.title} />
        </div>

        <h3>{post.name}</h3>
        <p>{post.description}</p>

      </div>

      <section>
       <div className="post-detail__container">
        <div className="post-detail__header">

          <h1>Comments</h1>

          <div className="post-detail__buttons">
            <Link to={`/posts/${id}/comment`} className="btn sm primary">
              Comment
            </Link>
          </div>

          <div className="">
            {post.comments.length > 0 ? (
              post.comments.map((comment,index) => (
                <div key={index} className="comment-item">
                  <h4>{comment.name}</h4>
                  <div dangerouslySetInnerHTML={{ __html: comment.comment }} />
                </div>
              ))
            ) : (<p className="center">No Comments yet.</p>)}
          </div>

        </div>
      </div>
      </section>


    </section>
  );
};

export default PostDetails;
