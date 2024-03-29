import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../api/api";
import '../assets/css/componentes/cartao.css'

const ListaPosts = () => {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    http.get(`/posts`)
    .then(res => {
      setPosts(res.data)
      console.log('resposta posts', res.data)
    })
  }, [])

  return(
    <section className="posts container flex">
      {posts.map((post)=>(
        <Link className={`cartao-posts cartao-post--${post.category_title}`}  to={`/posts/${post.id}`}  key={post.id}>
          <article>
            <h3 className="cartao-post__titulo">
              {post.title}
            </h3>
            <p className="cartao-post__meta">
              {post.description}
            </p>
            <img className="cartao-post__image" src={post.image} alt={post.description}/>
          </article>
        </Link>
      ))}
    </section>
  )
}

export default ListaPosts