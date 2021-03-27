import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import Post from "../components/Post";

const SinglePost = () => {

    const {id} = useParams()
    const history = useHistory()

    const [post, setPost] = useState({})
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(true)

    const [description, setDescription] = useState('')


    const fetchPost = async () => {
        const response = await fetch(`http://localhost:1337/posts/${id}`)
        const data = await response.json()
        setPost(data)
        setDescription(data.description)
        setLoading(false)
    }


    const handleDelete = async () => {
        const response = await fetch(`http://localhost:1337/posts/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        history.push('/')
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:1337/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description
            })
        })
        const data = await response.json()
        fetchPost()

    }

    useEffect(()=> {

        fetchPost()
    }, [])

return (
<div>
    {loading? <p>Loading...</p>
        :
        <>
            <Post
                description={post.description}
                url={post.image && post.image.url}
                likes={post.likes}/>
                <button onClick={handleDelete}>Delete this post</button>
                <button onClick={()=> setEdit(true)}>Edit this post</button>
            {edit && 
                <form onSubmit={handleSubmit}>
                    <input
                        value={description}
                        onChange={(e)=> {setDescription(e.target.value)} }
                        placeholder="New description"/>
                        <button>Confirm</button>
                </form>
            }
        </>

    }


</div>
)
}
 export default SinglePost