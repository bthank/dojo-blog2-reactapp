import { useParams, useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
 

const BlogDetails = () => {

    // useParams is found in react-router as well; MAKE SURE you pick it from 'react-router-dom'
    // the useParams hook gives us access to route parameters
    const { id } = useParams();
    // call useFetch to return the data and other 2 properties (error and isPending) for the specific blog to display
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');
        });
    };

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading ...</div>}
            { error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
                
            )}
        </div>
     );
}
 
export default BlogDetails;