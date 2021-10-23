import { useParams } from "react-router-dom";

const BlogDetails = () => {

    // useParams is found in react-router as well; MAKE SURE you pick it from 'react-router-dom'
    // the useParams hook gives us access to route parameters
    const { id } = useParams();

    return ( 
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
        </div>
     );
}
 
export default BlogDetails;