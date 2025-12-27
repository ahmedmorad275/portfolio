import React from 'react';
import myImage from '../assets/ahmed_morad.jpg';

export default function About() {
  const stats = [
    {
      num: 3,
      text: 'Year Experience',
    },
    {
      num: 25,
      text: 'Projects Completed',
    },
    {
      num: 15,
      text: 'Happy Clients',
    },
  ];
  return (
    <section id="about">
      <div className="container">
        <div className="max-w-4xl">
          <h2>About Me</h2>
          <div className="image">
            <img src={myImage} alt="Ahmed Morad" />
          </div>
          <div className="description">
            <div className="text">
              I'm a passionate Frontend Developer specializing in React.js with
              a keen eye for creating clean, efficient, and user-centric
              interfaces. I focus on writing maintainable code, optimizing
              performance, and delivering real-world solutions that make a
              difference. My goal is to craft digital experiences that are not
              only visually appealing but also highly functional and accessible.
            </div>
            <div className="stats"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
