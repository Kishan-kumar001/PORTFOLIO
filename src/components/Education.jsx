import { FaCompass, FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../App.css";

import { motion } from "framer-motion";
export const timelineElements = [
  {
    id: 1,
    title: "SSLC",
    location: "Mahatma Montessori Matriculation Higher Secondary School",
    date: "2017-2018",
    description: "Percentage : 72%",
  },
  {
    id: 2,
    title: "HSC",
    location: "Velammal Matriculation Higher Secondary School",
    date: "2019-2020",
    description: "Percentage : 74.6%",
  },
  {
    id: 3,
    title: "B.Tech Information Technology",
    location: "Sri krishna college of technology",
    date: "2020-2024",
    description: "CGPA : 7.92",
  },
];
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};
const Time = () => {
  return (
    <div
      id="edu"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">About Me</h1>
      </ScrollReveal>
      <div className="flex">
        <div className="flex-1">
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I'm a web developer skilled in React, Tailwind, focused in building
            clean, scalable applications. From front-end design to seamless
            database integration with MongoDB, I create efficient solutions for
            dynamic user experiences. Let's build something amazing together!
          </p>
        </div>
        <div className="flex-1">
          <VerticalTimeline>
            {timelineElements.map((element) => {
              return (
                <VerticalTimelineElement
                  key={element.key}
                  icon={<FaGraduationCap />}
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.date}
                  </h5>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p id="description">{element.description}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Time;
