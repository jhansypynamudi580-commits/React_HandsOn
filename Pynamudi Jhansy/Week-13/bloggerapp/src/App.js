import React from 'react';
import './App.css';

function CourseDetails() {
  return (
    <div className="column">
      <h2>Course Details</h2>

      <div className="item">
        <h3>Angular</h3>
        <p>4/5/2021</p>
      </div>

      <div className="item">
        <h3>React</h3>
        <p>6/3/2021</p>
      </div>
    </div>
  );
}

function BookDetails() {
  return (
    <div className="column">
      <h2>Book Details</h2>

      <div className="item">
        <h3>Master React</h3>
        <p>670</p>
      </div>

      <div className="item">
        <h3>Deep Dive into Angular 11</h3>
        <p>800</p>
      </div>

      <div className="item">
        <h3>Mongo Essentials</h3>
        <p>450</p>
      </div>
    </div>
  );
}

function BlogDetails() {
  return (
    <div className="column">
      <h2>Blog Details</h2>

      <div className="item">
        <h3>React Learning</h3>
        <h4>Stephen Biz</h4>
        <p>Welcome to learning React!</p>
      </div>

      <div className="item">
        <h3>Installation</h3>
        <h4>Schewzdenier</h4>
        <p>You can install React from npm.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <CourseDetails />
      <BookDetails />
      <BlogDetails />
    </div>
  );
}

export default App;