import React from "react";
import Section from "./Section";
import Card from "./Card";
import amgCinema from "../assets/posters/amgCinema.png";
import globalTracker from "../assets/posters/globalTracker.png";
import muslim from "../assets/posters/muslim.png";
import toDo from "../assets/posters/toDo.png";
import weather from "../assets/posters/weather.png";
import { motion } from "motion/react";
export default function Projects() {
  const myProjects = [
    {
      name: "AMG Cinema",
      description:
        "A movie discovery web application that fetches real data from an external API. Users can browse movies, search by title, and view detailed information including trailers when available.",
      techs: ["React.js", "Tailwind CSS", "Movies API"],
      live: "https://amgcinema.netlify.app/",
      srcLink: "https://github.com/ahmedmorad275/movie-website",
      image: amgCinema,
    },
    {
      name: "Global Tracker",
      description:
        "A real-time gold and currency tracking website built with JavaScript. It fetches live prices from external APIs and displays them using a responsive Tailwind CSS interface.",
      techs: ["JavaScript", "Tailwind CSS", "Currency API"],
      live: "https://global-tracker.vercel.app/",
      srcLink: "https://github.com/ahmedmorad275/Global-Tracker",
      image: globalTracker,
    },
    {
      name: "Muslim",
      description:
        "An Islamic web application that provides prayer times, digital tasbeeh, and Quran audio streaming, built with a focus on simplicity, accuracy, and responsive design.",
      techs: ["JavaScript", "Tailwind CSS", "Quran API"],
      live: "https://muslim-app-pink.vercel.app/",
      srcLink: "https://github.com/ahmedmorad275/muslim-app",
      image: muslim,
    },
    {
      name: "Weather App",
      description:
        "A weather web application that shows current weather data for today and allows users to search for any city using live API data.",
      techs: ["React.js", "Tailwind CSS", "Weather API"],
      live: "https://weather-app-beta-ten-51.vercel.app/",
      srcLink: "https://github.com/ahmedmorad275/weather-app",
      image: weather,
    },
    {
      name: "ToDo List",
      description:
        "Web application that supports full task management (CRUD), task status tracking, and persistent data storage using Local Storage.",
      techs: ["React.js", "Tailwind CSS", "Local Storage"],
      live: "https://react-to-do-sandy.vercel.app/",
      srcLink: "https://github.com/ahmedmorad275/react-to-do",
      image: toDo,
    },
  ];

  return (
    <Section
      id={"projects"}
      type={"primarySection"}
      title={"Featured Projects"}
    >
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3"
      >
        {myProjects.map((project) => (
          <Card
            name={project.name}
            techs={project.techs}
            key={project.name}
            description={project.description}
            liveLink={project.live}
            srcLink={project.srcLink}
            imageSrc={project.image}
          />
        ))}
      </motion.div>
    </Section>
  );
}
