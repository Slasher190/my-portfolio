// app/page.tsx
import React from "react";
import Counter from "../components/Counter";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Counter />
    </div>
  );
};

export default Home;
