import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';







const PostList = () => {

    const [posts, setPosts] = useState({});


    const fetchPosts = async () => {
        const { data } = await axios.get('http://localhost:5000/posts');
        console.log(data);
        setPosts(data);
    }



    useEffect(() => {

        fetchPosts()



    }, []);


    const renderedPosts = Object.values(posts).map((post) => {
        return <div className='card' key={post.id} style={{ width: '30%', marginBottom: '20px' }}>
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentList postId={post.id} />
                <CommentCreate postId={post.id} />

            </div>
        </div>
    });
    console.log(renderedPosts);


    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderedPosts}
        </div>
    )
}

export default PostList