import profile from '../../assets/images/profile.png'




const Header = () => {



    return (
 <>
        <div className='flex items-center justify-between p-4'>
        <div><h1>Knowledge Cafe</h1></div>
      <div> <img src={profile} alt="" /></div>

       </div>
  <hr />
 </>
   
    );
};

export default Header;