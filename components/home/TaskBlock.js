import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

////QUIERO CREAR AQUI UN CARRUSEL EN UN FUTURO PARA TODAS LAS TAREAS INICIADAS. MÁX 3 POR AHORA

const TaskBlock = ({ taskBlocks, containerInfo }) => {
  /*   console.warn("containerInfo: ", containerInfo);
    const [container, setContainer] = useState(); 
  console.warn("taskBlocks: ", taskBlocks); */
  useEffect(() => {
    // Obtenemos la info del contenedor
    const container = document.querySelector(".container");

    // Hacer un map de los task blocks, calcular su info y agregarla al contenedor

    /*   block.map((taskBlocks) => (
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
    )) */

    /* let hourBlock = document.querySelector(
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
    } */
  }, []);

  return (
    <>
      {taskBlocks.map((block) => (
        <div
          className="taskBlock"
          style={{
            backgroundColor: block.color,
            top: getTaskBlockPosition(block.start_date),
            height: getTaskBlockSize(block),
          }}
        >
          <p>{block.name}</p>
        </div>
      ))}
    </>
  );
};

export default TaskBlock;

/// Posicion de task block

const getTaskBlockSize = (block) => {
  let fechaInicio = new Date(block.start_date);
  let fechaFin = new Date(block.end_date);

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
  let startMinutes = new Date(startDate).getMinutes();
  /* let container = containerInfo; */

  let topPosition = startHour * 100;

  topPosition = topPosition + (startMinutes * 100) / 60;

  /*   console.warn("prueba blockPosition minutes on pixels: ", topPosition); */

  return topPosition + "px";

  /* 
  
  console.warn("prueba blockPosition container: ", containerInfo); */
};
