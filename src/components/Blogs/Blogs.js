import './Blogs.css';
import Blog from './Blog/Blog';
import {Link} from 'react-router-dom';
import {useState} from 'react';
const Blogs = () => {

    const [searchTerm,setSearchTerm]=useState('');
    const articles=[{
        id:1,
        title:'Title 1',
        date: '10-10-2021',
        company: 'Google',
        position: 'SWE I',
        location: 'On-Campus'
    },
    {
        id:2,
        title:'Title 2',
        date:  '10-10-2021',
        company: 'Amazon',
        position: 'SWE II',
        location: 'On-Campus'
    },
    {
        id:3,
        title:'Title 3',
        date:  '10-10-2021',
        company: 'Oracle',
        position: 'Intern',
        location: 'On-Campus'
    },
    {
        id:4,
        title:'Title 4',
        date:  '10-10-2021',
        company: 'Google',
        position: 'Intern',
        location: 'On-Campus'
    }
    ];

    const onClick=(e)=>{
        e.preventDefault();
        alert(searchTerm);
        console.log(searchTerm);

    }
    return (
        <div className='Blogs-container'>
            <div className='Blogs-Header'>
                <div className="search_wrap search_wrap_4">
                    <div className="search_box">
                        <input type="text" class="input" placeholder="search..." onChange={(e)=>setSearchTerm(e.target.value)} />
                        <button className="btn btn_common" ><i className="fas fa-search" onClick={onClick}></i></button>
                    </div>
                </div> 
                <div className='Add-Blogs'>
                    <Link to='/create_article' className='Button-fill Add-blog-button' >Add Article</Link>
                </div>
                
            </div>
           <div className='Blogs-Body'>
               {articles.map((article) =>
                (<Blog title={article.title} date={article.date} company={article.company} position={article.position} location={article.location} />))}
           </div>

        </div>
    )
}

export default Blogs
