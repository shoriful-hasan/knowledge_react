import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Singlebl = ({singl,handlembookmark,clicknowread}) => {

    const {author,cover,title,author_img,posted_date,reading_time,hashtags,id}  =singl


    return (
        <div className='space-y-4 pb-6'>
            <img  className='w-full' src={cover} alt="" />
            <div className='flex justify-between items-center p-2'>
                <div className='flex items-center gap-3'>
                    <img src={author_img} className='w-10' alt="" />
              <div>
              <h3>{author}</h3>
              <h3>{posted_date}</h3>
              </div>
                </div>
                <div className='flex items-center gap-3'>
                    
                    <div><p>{reading_time}min read</p></div>
                    <button onClick={()=>handlembookmark(singl,id)}><CiBookmark /></button>
                </div>
            </div>
            <div className=''><h2 className='text-4xl'>{title}</h2></div>
            <div>
                {hashtags.map((has,idx)=><span key={idx} className='mr-4 text-blue-700'>#<a  href="">{has}</a></span>)}

            </div>

            <div>
            <button onClick={()=>clicknowread(reading_time)} className='bg-orange-400 p-2 rounded-lg'>Mark as read</button>
            </div>
        </div>
    );
};

export default Singlebl;

Singlebl.propTypes={
singl : PropTypes.object.isRequired,
handlembookmark : PropTypes.func.isRequired,
clicknowread : PropTypes.func.isRequired
}