import { useParams } from "react-router-dom";

const BlogDetail = () => {
    const {id}=useParams();
    return (  
        <div className="home">
            <h2>Detail Blog {id}</h2>
        </div>
    );
}
 
export default BlogDetail;