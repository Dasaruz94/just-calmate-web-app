import React from "react";
import { motion } from "framer-motion";
import CircleProgress from "./StartedTask/CircleProgress";

////QUIERO CREAR AQUI UN CARRUSEL EN UN FUTURO PARA TODAS LAS TAREAS INICIADAS. MÁX 3 POR AHORA

const TaskBlock = ({ taskInfo }) => {
  return (
    <>
      <div className="started__tasks">
        <CircleProgress offset={80} icon="bx bxs-message-rounded-dots" />
        <CircleProgress offset={60} icon="bx bxs-cookie" />
        <CircleProgress offset={20} icon="bx bxl-zoom" />
      </div>

      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Mi tarjeta glass</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="#" className="card-link">
            Enlace
          </a>
        </div>
      </div>
    </>
  );
};

export default TaskBlock;
