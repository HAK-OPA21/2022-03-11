const HomePage = () => {
  const styling = {
    color: "green",
    letterSpacing: "3px",
  };

  return (
    <div>
      <h1 style={{ color: "red", letterSpacing: "2px" }}>Titel</h1>
      <p style={styling}>Massa text</p>
    </div>
  );
};

export default HomePage;
