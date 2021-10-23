import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {


    const [title, setTitle] = useState('');  // initial value of these vars will be an empty string
    const [body, setBody] = useState('This is required'); 
    const [author, setAuthor] = useState('John'); // this is how to save value for a select list variable

    const [isPending, setIsPending] = useState(false); // initially the page is not pending since the fetch post hasn't started yet

    const history = useHistory(); // this object represents navigation history

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title,
            body,
            author
        };
        console.log(blog);

        setIsPending(true); // set this flag to true when we start the fetch post

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("New blog added!");
            setIsPending(false); // reset this flag back to false once the record is added to db


            // history.go(-1);   the go(-1) means go back 1 step in history
            history.push('/');  // history.push method allows you to navigate to any page such as the home page from anywhere
                                // - in this case route '/' takes us back to the home page on the router setup in App.js

        });

        
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
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog ...</button>}
                {/*  
                    <p>{title}</p>
                    <p>{body}</p>
                    <p>{author}</p>
                */}
            </form>

        </div>
      );
}
 
export default Create; 
