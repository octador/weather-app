import React from "react";
import "./Day.css";

function Day({ handleClickDay }) {
  // Récupération du jour de la semaine
  function getNumberDay(n) {
    // recuperé la date du jour
    const tomorrow = new Date();
    const d = tomorrow.setDate(tomorrow.getDate() + n);
    const options = { weekday: "long" };
    const dayName = new Intl.DateTimeFormat("en-US", options).format(d);
    return dayName;
  }

  return (
    // cree un csss pour style={{ fontWeight: "bold" }}
    <>
      <a onClick={handleClickDay} href="#" id="0" className="selectorday">
        {getNumberDay(0)}
      </a>
      <a onClick={handleClickDay} href="#" id="1">
        {getNumberDay(1)}
      </a>
      <a onClick={handleClickDay} href="#" id="2">
        {getNumberDay(2)}
      </a>
      <a onClick={handleClickDay} href="#" id="3">
        {getNumberDay(3)}
      </a>
      <a onClick={handleClickDay} href="#" id="4">
        {getNumberDay(4)}
      </a>
    </>
  );
}

export default Day;
