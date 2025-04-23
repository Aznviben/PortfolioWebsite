import './Work.css';
import computer from '../../../assets/Computer.png';
import chip from '../../../assets/Chip.png';
import star from '../../../assets/Star.png';  
import { useRef, useState } from 'react';
function Work() {
  const projects = [
    {
      title: 'Software DevOps Engineer',
      description: 'As a Software DevOps Engineer, I specialize in bridging the gap between development and operations to deliver efficient, secure, and scalable solutions. ',
      image: computer,
    },
    {
      title: 'Freelance Developer',
      description: 'Offering tech solutions to problems for bussinesses.',
      image: chip,
    },
    {
      title: 'Artist',
      description: 'As an Artist, I have many creative projects that are in the physical and virtual mediums. Skills include: 3d modeling, grpahic design, arduino solutions, sewing, hair and makeup.',
      image: star,
    }
  ];

  return (
    <section className="work-section">
      <h2>My Many Hats</h2>
      <div className="work-cards">
        {projects.map((project, index) => (
          <div className="work-card" key={index}>
            <img src={project.image} alt={project.title} className="work-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;