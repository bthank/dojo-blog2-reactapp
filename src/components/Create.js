import { useState } from 'react';

const Create = () => {


    const [title, setTitle] = useState('');  // initial value of these vars will be an empty string
    const [body, setBody] = useState('This is required'); 
    const [author, setAuthor] = useState('John'); // this is how to save value for a select list variable

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title,
            body,
            author
        };
        console.log(blog);
    };

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            {/* setting up a controlled input form  */}
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                {/* - whatever value is will show inside the field initially 
                    - onChange function will set the state for the variable maintaining state
                */}
                <input 
                    type="text" 
                    required 
                    value={title}  
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                    
                </textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="John">John</option>
                    <option value="Michael">Michael</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>

        </div>
      );
}
 
export default Create; 
