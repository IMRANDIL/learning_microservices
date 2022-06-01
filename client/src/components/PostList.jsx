import React, { useEffect, useState } from 'react'
import axios from 'axios'







const PostList = () => {

    const [posts, setPosts] = useState({});


    const fetchPosts = async () => {
        const { data } = await axios.get('http://localhost:5000/posts');
        console.log(data);
        setPosts(data);
    }



    useEffect(() => {

        fetchPosts()



    }, [])


    return (
        <div>PostList</div>
    )
}

export default PostList