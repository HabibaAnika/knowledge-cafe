import PropTypes from 'prop-types';
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,reading_time,author_img,author,posted_date,hashtags} = blog; 
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between mb-4">
                <div className='flex items-center'>
                   <img className='w-14' src={author_img} alt="" />
                   <div className='ml-6'>
                       <h3 className='text-2xl'>{author}</h3>
                       <p>{posted_date}</p>
                   </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)}>
                        <img src="/src/images/icons8-bookmark-64.png" alt="" />
                    </button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}>
                        <a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=> handleMarkAsRead(id,reading_time)} className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired,
   handleAddToBookmark: PropTypes.func,
   handleMarkAsRead: PropTypes.func
}

export default Blog;