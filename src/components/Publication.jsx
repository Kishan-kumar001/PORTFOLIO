import React from "react";
import { motion } from "framer-motion";

const publicationData = [
  {
    title: "Exploring Sentiments in Movie Reviews Using BERT Algorithm",
    conference: "ICIRIAC",
    year: 2023,
    link: "https://pubs.aip.org/aip/acp/article-abstract/3204/1/050015/3333740/Exploring-sentiments-in-movie-reviews-using-BERT?redirectedFrom=fulltext",
    description:
      "This research explores sentiment analysis in movie reviews using the BERT algorithm. The study leverages NLP techniques to classify reviews as positive or negative, improving contextual understanding compared to traditional models.",
    technologies: [
      "Python",
      "BERT Algorithm",
      "TensorFlow / PyTorch",
      "Hugging Face Transformers",
      "Pandas & NumPy",
    ],
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

const PublicationCard = ({ publication }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg shadow-xl rounded-lg p-6 mt-6 border border-white/30">
      <h3 className="text-xl font-semibold text-white">{publication.title}</h3>
      <p className="text-gray-200 mt-2">
        Published in{" "}
        <span className="font-semibold">
          {publication.conference}, {publication.year}
        </span>
      </p>
      <p className="mt-2 text-gray-300">{publication.description}</p>

      <div className="mt-3">
        <h4 className="font-semibold text-white text-lg">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {publication.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-white/30 text-white text-sm font-medium px-3 py-1 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        href={publication.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-300 font-semibold hover:underline text-lg"
      >
        Read Paper →
      </a>
    </div>
  );
};

const Publications = () => {
  return (
    <div
      id="publications"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          Paper Publication
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16">
        {publicationData.map((publication, index) => (
          <PublicationCard key={index} publication={publication} />
        ))}
      </div>
    </div>
  );
};

export default Publications;
