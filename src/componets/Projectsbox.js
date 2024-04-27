import React from 'react';
import Card from './Cards';
import './projectsbox.css'; // Make sure to import your CSS file
import Project from './Project';


function projectsbox() {
  return (
    <>
      <div className="box1"  >
        <Project />
      </div>
    </>
  );
}

export default projectsbox;
