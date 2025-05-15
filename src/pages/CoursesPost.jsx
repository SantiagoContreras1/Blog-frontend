import { useEffect, useState } from 'react'
import PostItem from '../components/PostItem'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CoursesPost = () => {
  const {courseName} = useParams()
  const [posts, setPosts] = useState([])
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/publications/?forCourse=${courseName}`)
        setPosts(res.data.publications)
      } catch (err) {
        console.log(err)
      }finally{
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [courseName])

  if (loading) {
    return <p className="center">Loading posts...</p>
  }

  return (
    <section className="courses_posts">
      {posts.length > 0 ?  <div className="container courses_posts-container">
        {posts.map(
          (post) => (
            <PostItem
              key={post.id}
              id={post.id}
              image={post.image}
              course={post.course}
              title={post.title}
              description={post.description}
              creationDate={post.creationDate}
            />
          )
        )}
      </div> : <h2 className="center">No posts found</h2>}
    </section>
  )
}

export default CoursesPost
