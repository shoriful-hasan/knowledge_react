import PropTypes from 'prop-types';

const Singlebook = ({single}) => {
    console.log(single);

    
const {title} = single

    return (
        <div className='space-y-4 mb-3'>
  <div className="card bg-base-100 w-11/12 border p-2 mx-auto">
  <div className="card-body">

    <p>{title}</p>
    </div>
   <button className='bg-slate-600'>remove</button>
  </div>
</div>
        
    );
};

Singlebook.propTypes = {
    single : PropTypes.object.isRequired
};

export default Singlebook;