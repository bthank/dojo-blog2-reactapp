import {useState,useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from '../hooks/useFetch';

const Home = () => {
    //  non-reactive variable
    //let name = "Maury";

    // reactive variable using useState hook
 /*   const [name, setName] = useState('Maureen');
    const [age, setAge] = useState(45);

    const handleClick = (e) => {
        console.log('Hello, ninjas ', e);
        setName('Fred');
        setAge(17);
    };
    const handleClickAgain = (name,e) => {
        console.log('Hello ', name, '  e: ',e);
    };
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => {handleClickAgain('John',e)}}>Click Me Again</button>
        </div>
     );
*/

   const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

   return ( 
        <div className="home">
            {
            /*blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))
            */
            }
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}
 
export default Home;
<div className="home">
    Home
</div>