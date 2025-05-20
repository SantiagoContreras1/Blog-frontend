import { Link } from "react-router-dom";

import PostCourse from "./PostCourse";

const PostItem = ({ id, course, title, description, image, creationDate }) => {
  const shortDescription =
    description.length > 146 ? description.substr(0, 145) + "..." : description;
  const postTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;

  return (
    <article className="post">
      <div className="post__image">
        <img src={image} alt={title} />
      </div>

      <div className="post__content">
        <Link to={`/posts/${id}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className="post__footer">
          <PostCourse
            courseName={course.name}
            creationDate={creationDate}
            image={course.image}
          />
          <Link to={`/posts/courses/${course.name}`} className="btn course">
            {course.name}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
