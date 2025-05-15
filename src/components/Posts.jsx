import React, { useEffect, useState } from "react";
import axios from "axios";

import PostItem from "./PostItem";
import Loader from "./Loader";


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/publications`)
        console.log("Publicaciones recibidas: ", response?.data)
        setPosts(response?.data?.publications || [])
      } catch (err) {
        console.log(err);
      }

      setIsLoading(false)

    }

    fetchPosts()
  }, [])

  if (isLoading) {
    return <Loader />
  }



  return (
    <section className="posts">
      {posts.length > 0 ?  <div className="container posts__container">
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
  );
};

export default Posts;
