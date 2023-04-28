import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

///<img src="morning4.jpeg" alt="texto_alternativo" style={{width:"100%", height:"40vh"}} />

const RightNow = () => {
  const [time, setTime] = useState(new Date());
  const [formatedTime, setFormatedTime] = useState();

  const [formatedDate, setFormatedDate] = useState();
  const [bgImg, setBbImage] = useState("undefined.jpeg");
  const hour = time.toLocaleString("es-MX", {
    hour: "numeric",
    hour12: false,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 3000);
    setFormatedTime(time.toLocaleTimeString("es-MX", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }));
      setFormatedDate(time.toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }));
   
      switch(true) {
        case (hour >= 7 && hour < 12):
          setBbImage("morning.jpeg");
          break;
        case (hour >= 12 && hour < 19):
          setBbImage("afternoon.jpeg");
          break;
        case (hour >= 19 && hour < 1):
          setBbImage("night.jpeg");
          break;
      }
    return () => clearInterval(interval);
    }, []);

  
  

  return (
    <>
      
           <motion.div
           className="right-now"
           style={{ backgroundImage: `url(${bgImg})` }}
           initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
         >
           <div className="right-now_card">
             <div className="right-now_card_header">
                 <div className="right-now_card_header-icon">
                 <i className='bx bx-sun'></i>
                 </div>
     
                 <div className="right-now_card_header-welcome">
                 Bienvenido Daniel
                 </div>
             </div>
             
             <div className="right-now_card_content">
               <h2 className="right-now_card_content-date">{formatedDate}</h2>
               {
                 formatedTime ? (
                     <h1 className="right-now_card_content-time">{formatedTime}</h1>
                 ) : (
                 <>
                 </>
                 )
               }
     
               <div className="right-now_card_content_special-info">
                 <div className="right-now_card_content_special-info-section">
                         <h4>Todas: </h4>
                         <span>5</span>
                     </div>
                     <div className="right-now_card_content_special-info-section">
                         <h4>Programadas: </h4>
                         <span>5</span>
                     </div>
                     <div className="right-now_card_content_special-info-section">
                         <h4>Completadas: </h4>
                         <span>6</span>
                     </div>
               </div>
             </div>
           </div>
         </motion.div> 
    

    </>
  );
};

export default RightNow;
