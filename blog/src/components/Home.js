const Home = () => {
  const handleClick = () => {
    console.log("Hello, Oli");
  };
  const handleClick2 = (name) => {
    console.log(`Hello, ${name}`);
  };
  return (
    <div className="home">
      <h2> Homepage </h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2("Oli Ullah")}>Click Me again</button>
    </div>
  );
};

export default Home;
