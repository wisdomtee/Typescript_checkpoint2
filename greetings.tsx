import React from 'react';

// Define the props interface
interface GreetingProps {
  name: string;
}

// Add type annotations to the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
