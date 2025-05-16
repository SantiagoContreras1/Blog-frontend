import { Link } from 'react-router-dom'

import DefaultAvatar from "../images/avatar1 (2).jpg"


const PostCourse = ({courseName, creationDate, image}) => {
  return (
    <Link to={`/posts/courses/${courseName}`} className='post__course'>

    <div className="post__course-avatar">
        <img src={image} alt={`Avatar for ${courseName}`} onError={(e) => e.target.src = DefaultAvatar} />
    </div>

    <div className="post__course-details">
        <h5>From: {courseName}</h5>
        <small>{creationDate}</small>
    </div>

    </Link>
  )
}



export default PostCourse