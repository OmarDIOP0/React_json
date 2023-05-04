import { useState,useEffect } from 'react';
import Hello from './Hello.js';
import BlogList from './BlogList';

const Home = () => {
    const [name,setName]=useState("Fatou Diallo") ;
  const [blogs,setBlogs]=useState(null);
  const [isLoading,setisLoading]=useState(true);
  const [error,setError]=useState(null);

  const title="Bonjour a tous !!";
  const handleClick=()=>{
     setName("Omar DIOP")
  }
  const HandleDelete=(id)=>{
      const newBlogs = blogs.filter((blog)=>blog.id !== id);
      setBlogs(newBlogs);
  }
  // const HandleDelete =()=>{
  //   fetch('http://localhost:8000/blogs/'+id,{
  //     method:'DELETE'
  //   }).then(()=>{
  //     console.log('delete');
  //   })
  // }
  useEffect(()=>{
      // document.title="Le titre a change";
      setTimeout(() => {
        fetch('http://localhost:8000/blogs')
         .then((response)=>{
           if(!response.ok){
            throw Error('Desole une erreur est survenue..!');
           }
             return response.json();
         })
         .then((data)=>{
            setBlogs(data);
            setisLoading(false);
            setError(null);
         })
         .catch(err =>{
          setError(err.message);
          setisLoading(false);
         })
      },2000);
  },[]);
    return ( 
 
            
    <div className="App">
    {title}
  
  <Hello name="Omar DIOP"/>
   {/* {name} */}
  {/* <button onClick={()=>handleClick('OmarDIOP') }>Click on me !!!</button> */}
  {isLoading && <div className='isloading'></div>}
  {error && <div>{error}</div>}
  {blogs && <BlogList blogs={blogs} title={'Liste des blogs'} HandleDelete={HandleDelete}/> }
  {/* <BlogList blogs={blogs.filter((blog)=>blog.author=="Mariama Ba")} title={'Les blogs de Mariama Ba'}/> */}
    </div>
     );
}
 
export default Home;