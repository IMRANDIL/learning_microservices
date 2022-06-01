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



    const renderedComments = commentList.map((comment) => {
        return <li key={comment.id}>
            {comment.content}
        </li>
    })


    return (
        <ul>
            {renderedComments}
        </ul>
    )
}

export default CommentList