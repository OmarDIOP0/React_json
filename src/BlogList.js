import { Link } from "react-router-dom";

const BlogList = ({title,blogs,HandleDelete}) => {
    return ( 
        <div className="home">
             <h2>{title}</h2>
            <div className="bloglist">
           
            
          {
            blogs.map((blog)=>(
              <div className="blog" key={blog.id}>
            <Link to={`/blogs/${blog.id}`} className='blogtitle'>{blog.title}</Link>
             <small className='publication'>Publier le:{blog.date}</small>
             <p className='author'>Publier par: {blog.author} .</p>
             <button  className="btn" onClick={()=>HandleDelete(blog.id)}>Supprimer</button>
             </div>
            ))
            
          }
        </div>
        </div>
     );
}
 
export default BlogList;