import { useState } from "react";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import AgeCount from "./components/AgeCount";
import NameTag from "./components/NameTag";

const initialNames = [
  { firstName: "Helena", lastName: "Johansson" },
  { firstName: "Tore", lastName: "Toresson" },
  { firstName: "Doris", lastName: "Dorisson" },
  { firstName: "hej", lastName: "Dorisdsadason" },
];

function App() {
  const [names, setNames] = useState(initialNames);

  return (
    <Layout>
      {names.map((n, i) => {
        return (
          <NameTag key={i} firstName={n.firstName} lastName={n.lastName} />
        );
      })}
    </Layout>
  );
}

export default App;

/*
 const [num, setNum] = useState(1);
  // värdet på num = 1
  // state returnerar en array som innehåller två värden
  // en getter och en setter

  const genRandom = () => {
   rand = Math.floor(Math.random() * 10) + 1;
    console.log(rand);
    setNum(rand);
  };

  <h1>Number is: {num}</h1>
      {num === 7 ? (
        <h2>YOU WIN!</h2>
      ) : (
        <button onClick={genRandom}>Random Number</button>
      )}

        <AgeCount />
*/
