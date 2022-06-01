import React, { useState } from 'react';
import axios from 'axios'






const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
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
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate