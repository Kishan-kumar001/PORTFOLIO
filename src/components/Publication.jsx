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
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6 border-l-4 border-blue-500">
      <h3 className="text-xl font-bold text-gray-800">{publication.title}</h3>
      <p className="text-gray-600">
        Published in{" "}
        <span className="font-semibold">
          {publication.conference}, {publication.year}
        </span>
      </p>
      <p className="mt-2 text-gray-700">{publication.description}</p>

      <div className="mt-3">
        <h4 className="font-semibold text-gray-800">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {publication.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-lg"
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
        className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
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
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {publicationData.map((publication, index) => (
          <PublicationCard key={index} publication={publication} />
        ))}
      </div>
    </div>
  );
};

export default Publications;
