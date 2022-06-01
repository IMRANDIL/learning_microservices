import React, { useState } from 'react'
import axios from 'axios';





const PostCreate = () => {
    const [title, setTitle] = useState('');




    const handleSubmit = (e) => {
        e.preventDefault()
    }


    const handleInput = (e) => {
        setTitle(e.target.value)
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="Title">Title:</label>
                    <input type="text" className='form-control' value={title} onChange={handleInput} />
                </div>
                <button type='submit' className='btn btn-primary' style={{ marginTop: '15px' }}>Submit</button>
            </form>
        </div>
    )
}

export default PostCreate