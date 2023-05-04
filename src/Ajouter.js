import { useState } from "react";
import { useHistory } from "react-router-dom";
const Ajouter = () => {
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [body,setbody]=useState('');
    const [isLoading,setisLoading]=useState(false);
    const history =useHistory();

    const HandleBlogAdding=(e)=>{
        e.preventDefault();
        const tmp = new Date().toISOString().split('T');
        const date=`${tmp[0]} ${tmp[1]}`;
        const blog ={title,author,body,date}
        setisLoading(true);
         
        fetch('http://localhost:8000/blogs',
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(blog)
        }

        ).then(()=>{
            console.log('success adding blog');
            setisLoading(false);
            history.push('/');
        })
          
    }
    return (  
            
            <div className="create-blog">
                <h2>Ajouter un produit</h2>
            <form onSubmit={HandleBlogAdding} className="form">
                <div className="form-group">
                    <label htmlFor="title">Titre de l'article</label>
                    <input  type="text" className="form-control" id="title" required 
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Selectionez un auteur</label>
                    <select required className="form-control" id="author"
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                    >
                        <option value=""></option>
                        <option value="Tony">Tony</option>
                        <option value="Duplex">Duplex</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="body">Contenu de l'article</label>
                    <textarea required className="form-control textarea"id="body" rows="10"
                    value={body}
                    onChange={(e)=>setbody(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                     <button type="submit" className="btn-create">Creer Article</button>
                </div>
            </form>
            <p>{title}</p>
            <p>{author}</p>
            <p>{body}</p>
        </div>
    );
}
 
export default Ajouter;