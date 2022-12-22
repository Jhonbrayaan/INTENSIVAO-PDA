const middlewaresPadrao = (app, Express, cors) => {
  app.use(Express.json());

  app.use((request, response, next) => {
    next();
  });

  const options = {
    origin: ["*"],
  };

  app.use(cors(options));
};

export default middlewaresPadrao;
