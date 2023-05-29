import React, { useState } from "react";

function BionicTextArea() {
  const [bionicText, setBionicText] = useState("");

  const handleChange = (event) => {
    const newText = event.target.value;
    setBionicText(newText);
  };

  const transformText = (text) => {
    const words = text.split(" ");
    const transformedWords = words.map((word, index) => {
      const halfLength = Math.ceil(word.length / 2);
      const firstHalf = word.substring(0, halfLength);
      const secondHalf = word.substring(halfLength);
      return (
        <span key={index}>
          <b>{firstHalf}</b>
          {secondHalf}{" "}
        </span>
      );
    });
    return transformedWords;
  };

  const transformedText = transformText(bionicText);

  return (
    <div style={{ backgroundColor: "white", color: "black", fontSize: "19px" }}>
      <textarea
        value={bionicText}
        onChange={handleChange}
        placeholder="Escribe tu texto aquí"
      />
      <p>{transformedText}</p>
    </div>
  );
}

export default BionicTextArea;
