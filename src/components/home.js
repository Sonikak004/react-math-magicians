import React from 'react';
import '../styles/home.css';

const Home = () => (
  <div>
    <div className="home-text">
      <h3>Welcome to the Home Page!</h3>
      <p>
        The Math Magician website is an interactive platform created
        using React and CSS, featuring a captivating design with a
        responsive layout. It combines a fully functional calculator
        with a random quote generator. The website welcomes users
        with a delightful image of the Math Magician and encourages
        exploration of its functionalities. The calculator allows
        users to perform basic arithmetic operations using
        on-screen buttons and keyboard inputs. React Router
        handles seamless navigation between the Home,
        Calculator, and Quotes pages, while JavaScript
        logic enables real-time calculations and event handling.
        {' '}
      </p>
      <br />
      <p>
        The Quotes page fetches random quotes from an external
        API using the `fetch` function in React. Error handling
        ensures graceful handling of unexpected issues, and
        accessibility features make the website user-friendly
        for all. The Math Magician website is a dynamic and
        engaging platform, providing users with both
        mathematical assistance and inspirational quotes
        to brighten their day.
        {' '}
      </p>
    </div>
  </div>
);

export default Home;
