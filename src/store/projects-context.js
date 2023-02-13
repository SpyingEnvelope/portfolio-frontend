import React, { useState } from "react";

export const ProjectsContext = React.createContext({
  projects: [],
  isLoggedIn: false,
  getProjects: () => {},
  loginHandler: () => {},
});

const BACKUP_ARRAY = [
  {
    _id: "63e137fd062adbab03e096af",
    category: "preview",
    name: "The Speech Games",
    description:
      "The Speech Games is a small game I developed based on a game called Cariboo. I used it with children I worked with who had speech delays. They absolutely loved it! The game involves putting balls inside the game board. The balls then hide behind cards. When you push a card, it opens. When you find all the balls, you win the game!",
    techUsed: "This project uses Python and pygame.",
    image:
      "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/images/speech-games.jpg",
    link: "https://github.com/SpyingEnvelope/speech-games",
  },
  {
    _id: "63e1388f062adbab03e096b5",
    category: "preview",
    name: "Coin Race",
    description:
      "Coin Race is a real time multiplayer game! It is a fun game where players compete to collect coins. It even has a ranking system to rank players that are currently in the game! This game is hosted on a free Replit, so please give it a couple of seconds to load.",
    techUsed:
      "This project utilizes HTML Canvas, CSS, JavaScript, NodeJS, Express, HelmetJS, and Socket.io.",
    image:
      "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/images/real-time-multiplier.jpg",
    link: "https://boilerplate-project-secure-real-time-multiplayer-game-2.spyingenvy.repl.co/",
  },
  {
    _id: "63e138c9062adbab03e096b8",
    category: "preview",
    name: "Sudoku Solver",
    description:
      "This is a sudoku solver! It is a great way to solve sudokus if you are feeling frustrated! This project utilizes recursion to solve any numerical sudoku puzzle! This project is hosted on a free Replit, so please give it a few seconds to load.",
    techUsed:
      "This project uses JavaScript, NodeJS, Express, and Chai for testing. The algorithm uses recursion to find solutions.",
    image:
      "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/images/sudoku-solver.jpg",
    link: "https://boilerplate-project-sudoku-solver.spyingenvy.repl.co/",
  },
  {
    _id: "63e1382b062adbab03e096b2",
    category: "preview",
    name: "Dog or Cat Classifier",
    description:
      "This is a project that uses machine learning to identify if an image contains a cat or a dog. It was a project I completed for my curriculum, and I absolutely enjoyed it! It is a cute little project that shows how you can use machine learning to find different objects in an image.",
    techUsed:
      "This project uses Python, Tensorflow, Numpy, Matplotlib abd Jupyter Notebook.",
    image:
      "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/images/cat-dog-classifier.jpg",
    link: "https://colab.research.google.com/drive/1dubqwfimQq_HngTQrzNKT_01TsZ7rUxv?usp=sharing",
  },
  {
    _id: "63e3f5424eb366a192d0a4c7",
    category: "frontend",
    name: "25 + 5 Clock",
    description:
      "This app lets you set up a timer for how long you want a session to be and how long you want your break to be. The app then beeps when the time runs out. It is a great tool for setting up a studying schedule!",
    techUsed: "This project uses HTML, CSS, JavaScript, React, and Redux.",
    image:
      "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/images/255clock.jpg",
    link: "https://codepen.io/spyingenvelope/full/yLoWyzw",
  },
  {
    _id: "63e139b5062adbab03e096d4",
    category: "backend",
    name: "Sudoku Solver",
    description:
      "This is a sudoku solver! It is a great way to solve sudokus if you are feeling frustrated! This project utilizes recursion to solve any numerical sudoku puzzle! This project is hosted on a free Replit, so please give it a few seconds to load.",
    techUsed:
      "This project uses JavaScript, NodeJS, Express, and Chai for testing. The algorithm uses recursion to find solutions.",
    image:
      "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/images/sudoku-solver.jpg",
    link: "https://boilerplate-project-sudoku-solver.spyingenvy.repl.co/",
  },
  {
    _id: "63e1398f062adbab03e096d2",
    category: "fullstack",
    name: "Coin Race",
    description:
      "Coin Race is a real time multiplayer game! It is a fun game where players compete to collect coins. It even has a ranking system to rank players that are currently in the game! This game is hosted on a free Replit, so please give it a couple of seconds to load.",
    techUsed:
      "This project utilizes HTML Canvas, CSS, JavaScript, NodeJS, Express, HelmetJS, and Socket.io.",
    image:
      "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/images/real-time-multiplier.jpg",
    link: "https://boilerplate-project-secure-real-time-multiplayer-game-2.spyingenvy.repl.co/",
  },
  {
    _id: "63e13b2088bbe1b291a39bc3",
    category: "data visualization",
    name: "US Education Attainment",
    description:
      "This is a project that uses D3.js to visualize data that shows the percentage of adults with a Bachelor's Degree in the US. It uses a choropleth map.",
    techUsed: "This project uses HTML, D3.js, and JavaScript.",
    image:
      "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/images/us-ed-attain.jpg",
    link: "https://spyingenvelope.github.io/Choropleth-Map/",
  },
  {
    _id: "63e13795062adbab03e096a5",
    category: "machine learning",
    name: "Dog or Cat Classifier",
    description:
      "This is a project that uses machine learning to identify if an image contains a cat or a dog. It was a project I completed for my curriculum, and I absolutely enjoyed it! It is a cute little project that shows how you can use machine learning to find different objects in an image.",
    techUsed:
      "This project uses Python, Tensorflow, Numpy, Matplotlib abd Jupyter Notebook.",
    image:
      "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/images/cat-dog-classifier.jpg",
    link: "https://colab.research.google.com/drive/1dubqwfimQq_HngTQrzNKT_01TsZ7rUxv?usp=sharing",
  },
  {
    "_id": "63e13932062adbab03e096ce",
    category: "personal",
    name: "The Speech Games",
    description:
      "The Speech Games is a small game I developed based on a game called Cariboo. I used it with children I worked with who had speech delays. They absolutely loved it! The game involves putting balls inside the game board. The balls then hide behind cards. When you push a card, it opens. When you find all the balls, you win the game! The game also has a second option for flash cards, so I can use it with any other game I might play! I plan on adding more games to the project in the future.",
    techUsed: "This project uses Python, pygame, and SQLite 3.",
    image:
      "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/images/speech-games.jpg",
    link: "https://github.com/SpyingEnvelope/speech-games",
  },
];

export default (props) => {
  const [projectsList, setProjectsList] = useState([]);

  const [isLoggedIn, setLoggedIn] = useState(false);

  const loginHandler = (value) => {
    setLoggedIn(value);
  };

  const getProjects = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/api/portfolio-projects"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setProjectsList(data);
    } catch (error) {
      setProjectsList(BACKUP_ARRAY);
    }
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects: projectsList,
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        getProjects: getProjects,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};
