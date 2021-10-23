import {useState} from 'react';
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

    const handleDelete = (id) => {
        const newBlogList = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogList);
    };

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
            <BlogList blogs={blogs} title="All Blogs 2" handleDelete={handleDelete}/>
 
        </div>
    );
}
 
export default Home;
<div className="home">
    Home
</div>