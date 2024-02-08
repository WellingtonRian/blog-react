import api from '../../services/api';
import Post from '../../componentes/Post';
import { useState ,useEffect} from 'react';
const Main = () => {

    let[post,setPost] = useState([])
    useEffect(()=>{
        api.get('./posts')
        .then((response)=>{
            setPost(response.data)
        })
    }, [])
    return(
        <div className='container mt-2'>
            <h3>Article</h3>
            <div className="container-post">
                {
                    post.map(post=>{
                        return (
                            <>
                            <Post 
                            key={post.id} 
                            subtitle={post.category} 
                            title={post.title}
                            author={post.author}
                            date={post.date}
                            >
                                {post.description}
                            </Post>
                            </>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Main;