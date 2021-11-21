import React, {useState} from "react"
import axios from "axios"
import "./style.css"

const Home = () => {
    const [posts, setPosts] = useState([])
    const [postShow, setPostShow] = useState(true);
    const [postId, setIdpost] = useState([])
    const [id, setId] = useState("");

    React.useEffect(() => {
        const fetchData = async () => {            
            try {
                const {data} = await axios.get('http://jsonplaceholder.typicode.com/posts')
            setPosts(data.slice(0, 10))
            }
            catch (error) {
                console.log(error)
            }
        } 
        fetchData()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
          .then(res => {
            setIdpost(res.data);
            setPostShow(false);
            console.log(res);
            console.log(res.data);
          })
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setId(event.target.value);
    }

    return (
        <>
        <h1>My Home page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={handleChange} />
          </label>
          <button type="submit">search</button>
        </form>
        
        <div className={'wrapper-card'}>
        {postShow ? 
        (posts.map( post => (
        <div key ={post.id} className={'card'}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        </div>
        ))) : (
            postId.map( post => (
                <div key ={post.id} className={'card'}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))
        )
        }
        </div> 
        </>
        )
}    
export default Home;
