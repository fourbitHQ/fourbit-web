import React, { useState, useEffect } from "react";
import styles from './Clock.module.css'
function Clock() {

  const [date, setDate] = useState(new Date());


  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  const secondHandStyle = {
    transform: `rotate(${date.getSeconds() * 6}deg)`,
  };
  const minuteHandStyle = {
    transform: `rotate(${date.getMinutes() * 6}deg)`,
  };
  const hourHandStyle = {
    transform: `rotate(${date.getHours() * 30}deg)`,
  };

  console.log({hourHandStyle, minuteHandStyle, secondHandStyle});

console.log("hour, minute, seconds", date?.getHours(), date?.getMinutes(), date?.getSeconds())
  return (
    <div className={styles.clock}>
      <div className={styles.logo}>fourbit.io</div>
        <div
          className={styles.hour_hand}
          style={hourHandStyle}
        />
        <div
          className={styles.min_hand}
          style={minuteHandStyle}
        />
        <div
          className={styles.sec_hand}
          style={secondHandStyle}
        />
        <span className={styles.twelve}>|</span>
        <span className={styles.one}>|</span>
        <span className={styles.two}>|</span>
        <span className={styles.three}>|</span>
        <span className={styles.four}>|</span>
        <span className={styles.five}>|</span>
        <span className={styles.six}>|</span>
        <span className={styles.seven}>|</span>
        <span className={styles.eight}>|</span>
        <span className={styles.nine}>|</span>
        <span className={styles.ten}>|</span>
        <span className={styles.eleven}>|</span>
      </div>
    
    // <div className="flex justify-center py-10 group">
    //   <div className="relative flex items-center justify-end w-[500px] h-[500px] overflow-hidden bg-gray-900 rounded-full ">
    //     {/* <div className="absolute w-1/2 h-1 bg-blue-400 rounded-full or igin-left -rotate-12" style={hourHandStyle} />
    //     <div className="absolute w-1/2 h-1 bg-green-400 rounded-full origin-left rotate-[440]" style={minuteHandStyle}/>
    //     <div className="absolute w-1/2 h-1 bg-red-400 rounded-full origin-left rotate-[340]" style={secondHandStyle} /> */}

    //     <div className="absolute w-1/2 h-1  origin-left" style={hourHandStyle}>
    //       <div className="w-1/2 h-full bg-blue-400 rounded-full"  />
    //     </div>
    //     <div className="absolute w-1/2 h-1  origin-left" style={minuteHandStyle}>
    //       <div className="w-3/4 h-full bg-green-400 rounded-full"  />
    //     </div>
    //     <div className="absolute w-1/2 h-1  origin-left" style={secondHandStyle}>
    //       <div className="w-full h-full bg-red-400 rounded-full"  />
    //     </div>

    //   </div>
    // </div>
  );
}

export default Clock;
