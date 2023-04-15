import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import http from '../api/api'
import '../assets/css/lista.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaSubcategorias from '../components/ListaSubcategorias'
import PostSemEstado from './PostSemEstado'

const PostsPorSubcategoria = () => {
  const { subcategoriaTitle } = useParams()
  const [postsPorSubcategorias, setPostsPorSubcategorias] = useState([])

  useEffect(() => {
    async function buscarDados() {
      const res = await http.get(`/posts/subcategorias/${subcategoriaTitle}`)
      const data = await res.data
      console.log('data', data)
      setPostsPorSubcategorias(data)
    }
    buscarDados();
  }, [subcategoriaTitle])

  return (
    <>
      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {
          postsPorSubcategorias.map(({
            category_title,
            subcategory_title,
            title,
            description,
            image,
            id,
            text
          }) => (
            <li
              key={id}
            >
              <PostSemEstado 
                className={`lista-categorias__categoria lista-categorias__categoria--${category_title}`}
                categoria={category_title}
                subcategoria={subcategory_title}
                titulo={title}
                descricao={description}
                imagem={image}
                id={id}
                texto={text}
              />
            </li>
          ))
        }
      </ul>

    </>
  )
}

export default PostsPorSubcategoria