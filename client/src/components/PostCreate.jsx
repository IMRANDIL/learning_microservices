import React from 'react'

const PostCreate = () => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="Title">Title:</label>
                    <input type="text" className='form-control' />
                </div>
                <button className='btn btn-primary' style={{ marginTop: '15px' }}>Submit</button>
            </form>
        </div>
    )
}

export default PostCreate