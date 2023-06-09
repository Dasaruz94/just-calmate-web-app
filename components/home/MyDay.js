import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TaskBlock from "./TaskBlock";

const MyDay = () => {
  const [minuteLineSet, setMinuteLineSet] = useState(false);
  const hours = Array.from(Array(24).keys()); // genera un array de 0 a 23
  const containerRef = useRef(null);

  const tasks = [
    {
      name: "Profesional",
      color: "blue",
      start_date: "2023-05-20 08:00",
      end_date: "2023-05-20 10:30",
    },
    {
      name: "Personal",
      color: "green",
      start_date: "2023-06-01 10:45",
      end_date: "2023-06-01 12:20",
    },
    {
      name: "Personal",
      color: "aquamarine",
      start_date: "2023-05-15 14:30",
      end_date: "2023-05-15 17:45",
    },
  ];

  useEffect(() => {
    // Obtenemos la hora actual del dispositivo

    let currentHour = new Date().getHours();
    // Calculamos la altura a la que debemos hacer scroll para que el bloque de la hora actual quede en la parte superior del contenedor
    const container = document.querySelector(".day__container");
    let hourBlock = document.querySelector(
      `.hourBlock:nth-child(${currentHour + 1})`
    );

    let scrollTop = hourBlock.offsetTop - container.offsetTop;

    // Hacemos scroll a la posición calculada
    container.scrollTop = scrollTop + 127;

    const minuteLine = document.createElement("div");

    if (!minuteLineSet) {
      hourBlock.appendChild(minuteLine);
      minuteLine.className = "minuteLine";
      minuteLine.style.top = `${getMinutePosition(new Date().getMinutes())}%`;
      setMinuteLineSet(true);
    }

    const interval = setInterval(() => {
      minuteLine.style.top = `${getMinutePosition(new Date().getMinutes())}%`;
    }, 3000);
  }, []);

  return (
    <>
      <motion.div
        className="day__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        ref={containerRef}
      >
        <div className="innerContainer">
          {hours.map((hour) => (
            <div className="hourBlock" key={hour}>
              <div className="hourLabel">{formatHour(hour)}</div>
            </div>
          ))}

          <TaskBlock taskBlocks={tasks} containerInfo={containerRef} />
        </div>
      </motion.div>
      <i
        className="bx bx-target-lock centerTarget"
        onClick={getHourPosition}
      ></i>
    </>
  );
};

// función auxiliar para formatear la hora en AM/PM
const formatHour = (hour) => {
  if (hour === 0) {
    return "12:00 AM";
  } else if (hour < 12) {
    return `${hour}:00 AM`;
  } else if (hour === 12) {
    return "12:00 PM";
  } else {
    return `${hour - 12}:00 PM`;
  }
};

const getHourPosition = () => {
  let currentHour = new Date().getHours();
  // Calculamos la altura a la que debemos hacer scroll para que el bloque de la hora actual quede en la parte superior del contenedor
  const container = document.querySelector(".day__container");
  let hourBlock = document.querySelector(
    `.hourBlock:nth-child(${currentHour + 1})`
  );

  let scrollTop = hourBlock.offsetTop - container.offsetTop;

  // Hacemos scroll a la posición calculada
  container.scrollTo({
    top: scrollTop + 127,
    behavior: "smooth",
  });
};

const getCurrentMinutes = () => {
  return new Date().getMinutes();
};

const getMinutePosition = (minute) => {
  return (minute * 100) / 60;
};

export default MyDay;
