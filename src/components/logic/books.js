const progressBarLogic = () => {
  const progress = Math.floor(Math.random() * 55 + 7);
  const chapter = Math.floor(Math.random() * 20 + 1);

  return { progress, chapter };
};

export default progressBarLogic;
