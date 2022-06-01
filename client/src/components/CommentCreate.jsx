import React, { useState } from 'react';
import axios from 'axios'






const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:7000/posts/${postId}/comments`, { content });
        setContent('');
    }


    const handleInput = (e) => {
        setContent(e.target.value)
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="New Comment">New Comment</label>
                    <input type="text" className='form-control' value={content} onChange={handleInput} />
                </div>
                <button className='btn btn-primary' type='submit' style={{ marginTop: '15px' }}>Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate