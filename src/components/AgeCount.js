import { useState } from "react";

const AgeCount = () => {
  const [age, setAge] = useState(24);

  return (
    <div>
      <h2>{age}</h2>
      <button onClick={() => setAge(age + 1)}>Age up</button>
      <button onClick={() => setAge(age - 1)}>Age down</button>
    </div>
  );
};

export default AgeCount;
