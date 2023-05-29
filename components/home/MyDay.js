import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MyDay = () => {
  const [minuteLineSet, setMinuteLineSet] = useState(false);
  const hours = Array.from(Array(24).keys()); // genera un array de 0 a 23
  const containerRef = useRef(null);

  const tasks = [
    {
      name: "Profesional",
      color: "blue",
      start_date: "2023-05-20 09:00",
      end_date: "2023-05-20 12:55",
    },
    /* {
      name: "Personal",
      color: "green",
      start_date: "2023-06-01 10:15",
      end_date: "2023-06-01 14:30",
    },
    {
      name: "Personal",
      color: "aquamarine",
      start_date: "2023-05-15 14:30",
      end_date: "2023-05-15 17:45",
    }, */
  ];

  useEffect(() => {
    // Obtenemos la hora actual del dispositivo

    let currentHour = new Date().getHours();
    // Calculamos la altura a la que debemos hacer scroll para que el bloque de la hora actual quede en la parte superior del contenedor
    const container = document.querySelector(".container");
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
        className="container"
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

          {tasks.map((taskBlock) => (
            <div
              className="taskBlock"
              style={{
                backgroundColor: taskBlock.color,
                top: getTaskBlockPosition(taskBlock.start_date),
                height: getTaskBlockSize(taskBlock),
              }}
            >
              <p>{taskBlock.name}</p>
            </div>
          ))}
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
  const container = document.querySelector(".container");
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

/// Posicion de task block

const getTaskBlockSize = (taskBlock) => {
  let fechaInicio = new Date(taskBlock.start_date);
  let fechaFin = new Date(taskBlock.end_date);

  // Calcula la diferencia en milisegundos entre las dos fechas
  let diferenciaEnMilisegundos = fechaFin - fechaInicio;

  // Calcula la diferencia en minutos
  let diferenciaEnMinutos = diferenciaEnMilisegundos / (1000 * 60);

  // Calcula la diferencia en píxeles
  let diferenciaEnPixeles = (diferenciaEnMinutos / 60) * 100;

  return diferenciaEnPixeles;
};

const getTaskBlockPosition = (startDate) => {
  let startHour = new Date(startDate).getHours();

  console.warn("prueba blockPosition startHour: ", startHour);

  // Calculamos la altura a la que mandamos el bloque de tareas
  /* const container = document.querySelector(".container");
  let hourBlock = document.querySelector(
    `.hourBlock:nth-child(${startHour + 1})`
  );


  let scrollTop = hourBlock.offsetTop - container.offsetTop;

  return scrollTop + 127; */
};

const getCurrentMinutes = () => {
  return new Date().getMinutes();
};

const getMinutePosition = (minute) => {
  return (minute * 100) / 60;
};

export default MyDay;
