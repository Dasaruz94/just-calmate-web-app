import React from "react";
import { motion } from "framer-motion";
import CircleProgress from "./StartedTask/CircleProgress";


////QUIERO CREAR AQUI UN CARRUSEL EN UN FUTURO PARA TODAS LAS TAREAS INICIADAS. MÁX 3 POR AHORA

const StartedTask = ({ taskInfo }) => {

  return (
    <div>
      <CircleProgress offset={80}/>

      <div class="card">
  <div class="card-content">
    <h2 class="card-title">Mi tarjeta glass</h2>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" class="card-link">Enlace</a>
  </div>
</div>

    </div>
  );
};

export default StartedTask;