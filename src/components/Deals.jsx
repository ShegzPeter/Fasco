import React, { useEffect, useState } from 'react';

const Deals = () => {
  const [time, setTime] = useState({
    days: 2,
    hours: 6,
    minutes: 5,
    seconds: 30,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            } else {
              if (days > 0) {
                days--;
                hours = 23;
                minutes = 59;
                seconds = 59;
              } else {
                clearInterval(countdown);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-20 mx-4'>
      <div className='flex flex-col items-start'>
        <h1 className='font-custom text-3xl md:text-4xl'>Deals Of The Month</h1>

        <p className='mt-5 font-custom text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur,<br />
          adipisicing elit. Lorem ipsum dolor sit amet <br />
          consectetur adipisicing. <br />
        </p>

        <button className='bg-black mt-10 text-white  md:w-[207px] md:h-[56px] w-[150px] h-[56px] rounded-lg font-custom'>
          Buy Now
        </button>
        
        <p className='text-2xl mt-12 font-custom'>Hurry Before It's </p>

        {/* Countdown Section */}
        <div className='flex justify-between items-center mt-4'>
          <div className='flex flex-col items-center'>
            <p className='text-2xl w-12 h-12 shadow-xl flex justify-center items-center'>{time.days}</p>
            <p>Days</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-2xl w-12 h-12 shadow-xl flex justify-center items-center'>{time.hours}</p>
            <p>Hr</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-2xl w-12 h-12 shadow-xl flex justify-center items-center'>{time.minutes}</p>
            <p>Mins</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-2xl w-12 h-12 shadow-xl flex justify-center items-center'>{time.seconds}</p>
            <p>Sec</p>
          </div>
        </div>
      </div>

      {/* Second Grid (You can add content here) */}
      <div className='flex justify-center mt-10 md:mt-0'>
        <img src="../images/products.png" alt="Products" className=' w-[300px] h-[400px] md:w-[400px] rounded-[20px]  md:h-[580px]'/>
      </div>
    </div>
  );
}

export default Deals;