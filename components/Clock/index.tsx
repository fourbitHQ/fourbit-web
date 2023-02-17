import React, { useState, useEffect } from "react";
import styles from './Clock.module.css'
function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
console.log({date})
  const secondHandStyle = {
    transform: `rotate(${date.getSeconds() * 6}deg)`,
  };
  const minuteHandStyle = {
    transform: `rotate(${date.getMinutes() * 6}deg)`,
  };
  const hourHandStyle = {
    transform: `rotate(${date.getHours() * 30}deg)`,
  };
console.log("hour, minute, seconds", date?.getHours(), date?.getMinutes(), date?.getSeconds())
  return (
    <div className="clock">
        <div
          className="hour_hand"
          style={hourHandStyle}
        />
        <div
          className="min_hand"
          style={minuteHandStyle}
        />
        <div
          className="sec_hand"
          style={secondHandStyle}
        />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
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
