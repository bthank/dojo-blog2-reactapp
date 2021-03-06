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
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    const [name,setName] = useState('Mario');

    const handleDelete = (id) => {
        const newBlogList = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogList);
    };

    // useEffect fires on every render; note that a change of state triggers a render
    useEffect(() => {
        console.log('useEffect ran');
        console.log(name);
    },[name]); // 2nd arg is a dependency array
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
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName('Phil')}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}
 
export default Home;
<div className="home">
    Home
</div>