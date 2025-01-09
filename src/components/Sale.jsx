import React from 'react';

const Sale = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        <div className="flex justify-center">
          <img src="../images/man.jpg" alt="Man" className="w-full h-auto md:max-w-[392px]  md:max-h-[792px]" />
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="../images/pic3.jpg" alt="Ultimate Collection" className="w-full mt-[16px] md:mt-[0px] max-w-[426px] h-[150px]" />
          <h2 className="font-bold mt-4 text-[30px] md:text-[50px] font-custom">ULTIMATE</h2>
          <img src="../images/pry.png" alt="" className='md:w-[340px] w-[200px] h-[80px] md:h-[140px] mt-4' />
          <p className="mt-9 md:text-[30px] font-custom">New collection</p>
          <button className="mt-9 bg-black text-white py-2 px-4 w-[207px] h-[56px] rounded font-custom">Shop now</button>
          <img src="../images/girls.png" alt="Girls" className="w-full h-auto max-w-[426px] mt-[70px]" />
        </div>

        <div className="flex justify-center">
          <img src="../images/pic2.jpg" alt="Pic 2" className="w-full h-auto max-w-[392px] max-h-[792px]" />
        </div>
        
      </div>
    </div>
  );
}

export default Sale;