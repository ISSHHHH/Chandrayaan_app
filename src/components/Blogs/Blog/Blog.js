import './Blog.css'
const Blog = ({title,date,company,position,location}) => {
    return (
        <div className='Blog-container'>
            <div className='Blog-header'>
                <div className='Blog-Title-date-wrapper'>
                    <h4 className='Blog-Title'>{title}</h4>
                    <p className='Blog-date'>{date}</p>
                </div>
                <div className='Blog-like-ratio'>
                    <button className='Blog-like Blog-btn active-like'><i class="fas fa-arrow-up"></i></button>10
                    <button className='Blog-dislike Blog-btn active-dislike'><i class="fas fa-arrow-down"></i></button>2
                </div>
            </div>
            <div className='Blog-footer'>
                <div className='Blog-details'>
                    <ul>
                        <li className='Blog-company Blog-d'><i class="fas fa-building"></i> &nbsp;{company}</li>
                        <li className='Blog-position Blog-d'><i class="far fa-address-card"></i> &nbsp;{position}</li>
                        <li className='Blog-location Blog-d'><i class="fas fa-map-marker-alt"></i> &nbsp;{location}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Blog
