import {useState,useEffect} from 'react';
import BlogList from './BlogList';

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
    const [blogs, setBlogs] = useState(null);

    // useEffect fires on every render; note that a change of state triggers a render
    useEffect(() => {
        console.log('useEffect ran');
        fetch('http://localhost:8000/blogs')
            .then(response => {   // this response is not the data; you need to do something to the object to get the data
                return response.json();  // this json() function also takes some time to resolve, so you need another then() to wait for it to resolve
            })
            .then((data) => {  // at this point the data will be available
                console.log(data);
                setBlogs(data);
            },[]);

    },[]); // 2nd arg is a dependency array that controls when useEffect runs
               // an empty array as 2nd arg stops useEffect from running after the initial render
               // 2nd arg with a var inside the array causes useEffect to watch for changes in that variable and call itself when a change occurs
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
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}
 
export default Home;
<div className="home">
    Home
</div>