import React from "react";
import { motion } from "framer-motion";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { FaGraduationCap } from "react-icons/fa";

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

const EducationCard = ({ title, college, result }) => {
  return (
    <ScrollReveal>
      <div className="group w-100 transition-all duration-300 bg-white/10 shadow-lg rounded-lg p-4 border border-gray-300 text-white">
        <h2 className="text-lg font-bold ">{title}</h2>

        <p className="text-md  mt-2">{college}</p>
        <p className="text-md font-semibold mt-2">{result}</p>
      </div>
    </ScrollReveal>
  );
};
const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
      >
        <ScrollReveal>
          <h1 className="text-4xl font-light text-white md:text-6xl">
            About Me
          </h1>
        </ScrollReveal>

        <div className="flex w-full gap-15 flex-col lg:flex-row">
          {/* <ScrollReveal> */}
          <div className="flex-1  flex items-center justify-center flex-col gap-10">
            <p className="md:text-xl text-justify text-xl text-gray-400 leading-relaxed bg-white/10 p-4 rounded-lg backdrop-blur-2xl">
              Hey there! I'm a MERN stack developer with a strong passion for
              UI/UX design and full-stack web development. I love bringing ideas
              to life with clean and efficient code. From designing sleek
              interfaces to implementing backend logic, I enjoy every aspect of
              web development. When I'm not coding, you'll find me exploring AI
              concepts, working on creative projects, or sharpening my
              problem-solving skills. Always open to new challenges and
              opportunities!
            </p>
            <a
              href=""
              className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
            >
              Download CV
            </a>
          </div>
          {/* </ScrollReveal> */}
          <div className="flex-1 text-white flex justify-center items-end">
            <Timeline>
              <TimelineItem>
                <TimelineOppositeContent>2017-2018</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <EducationCard
                    title="SSLC"
                    college="Mahatma Montessori Matriculation Higher Secondary School"
                    year="2017-2018"
                    result="Percentage : 92%"
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>2019-2020</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <EducationCard
                    title="HSC"
                    college="Velammal Matriculation Higher Secondary School"
                    year="2019-2020"
                    result="Percentage : 74.6%"
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>2020-2024</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                </TimelineSeparator>
                <TimelineContent>
                  <EducationCard
                    title="B.Tech Information Technology"
                    college="Sri Krishna college of technology"
                    year="2020-2024"
                    result="CGPA : 7.92"
                  />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
