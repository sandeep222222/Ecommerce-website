import React from 'react';
import Button from '../components/Button';

const Home = () => (
  <div className="home">
    <h1>Welcome to My App</h1>
    <p>Transition India .</p>
    <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
  </div>
);

export default Home;