import React, { useState, useEffect } from 'react'

import axios from 'axios'








const CommentList = ({ postId }) => {

    const [commentList, setCommentList] = useState([]);


    const fetchComments = async () => {
        const { data } = await axios.get(`http://localhost:7000/posts/${postId}/comments`);
        setCommentList(data)
    }


    useEffect(() => {
        fetchComments()
    }, [])






    return (
        <div>CommentList</div>
    )
}

export default CommentList