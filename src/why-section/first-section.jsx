import React from "react";
import "./first-section.css";

const ReasonCard = ({ icon, title, description }) => {
  return (
    <div  className="reason-card">
      <div className="icon">{icon}</div>
      <h3 >{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const reasons = [
  { icon: "❤️", title: "Они зависят от нас", description: "Домашние животные не могут выжить без человека – они нуждаются в еде, уходе и защите." },
  { icon: "🐕", title: "Верные друзья", description: "Животные преданы человеку, помогают справляться со стрессом и делают нас счастливее." },
  { icon: "🏥", title: "Ответственность за здоровье", description: "Без должного ухода питомцы могут заболеть, а некоторые болезни передаются людям." },
  { icon: "🎾", title: "Им нужна активность", description: "Собаки и кошки должны двигаться и играть, иначе у них развиваются болезни и тревожность." },
  { icon: "🚶‍♂️", title: "Спасают от одиночества", description: "Домашние животные помогают пожилым людям и одиноким людям чувствовать себя нужными." },
  { icon: "🌱", title: "Учимся доброте", description: "Забота о питомцах делает нас более ответственными, терпеливыми и заботливыми." }
];

const FirstSection = () => {
  return (
    <div id="about" className="FirstSection">
      <h2 className="title-sect-one">Почему важно заботиться о домашних животных?</h2>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <ReasonCard key={index} {...reason} />
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
