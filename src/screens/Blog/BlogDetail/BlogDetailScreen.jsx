import './BlogDetailScreen.css'
import React, {useState, useEffect} from 'react';
import { getBlogDetail } from '../../../services/BlogServices'
import { useParams } from 'react-router-dom';


const BlogDetailScreen = () => {
    const { id } = useParams()
    console.log(id);

    const [ blog, setBlogs ] = useState([])

    useEffect(() => {
        getBlogDetail(id).then(blog => setBlogs(blog)).catch(err => console.log(err))
    }, [id])



    return (
        <div>
            <div>
                <h2>{blog.title}</h2>
                <p>imagen</p>
            </div>
            <p>{blog.keyWords}</p>
        </div>
    );
};

export default BlogDetailScreen;