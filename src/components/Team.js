import React from 'react';
import './styles/Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Mohammad Nayeem Teli',
      role: 'Team Mentor',
      image: './teamHeadshots/teli.png',
      description: 'Senior Lecturer, Department of Computer Science , University of Maryland, College Park',
    },
    {
      name: 'Zaida Diaz',
      role: 'Team Librarian',
      image: './teamHeadshots/zaida.png',
      description: 'Business & Economics Librarian (Librarian III)',
    },
    {
      name: 'Prabhat Jain',
      role: 'Library and Web Liason, Hardware Team',
      image: './teamHeadshots/prabhat.png',
      description: '2nd Year Computer Science major',
    },
    {
      name: 'Raghav Chakravarthy',
      role: 'Team and Web Liason, Software Team',
      image: './teamHeadshots/raghav.png',
      description: '2nd Year Computer Science major',
    },
    {
      name: 'Dania Akil',
      role: 'Library and Social Media Liason, Survey',
      image: './teamHeadshots/dania.png',
      description: '2nd Year Business Major',
    },
    {
      name: 'Meron Abera',
      role: 'Team Clerk, Hardware Team',
      image: './teamHeadshots/meron.png',
      description: '2nd Year Computer Science major',
    },
    {
      name: 'Jaime Coreas-Parada',
      role: 'Team Clerk, Software Team',
      image: './teamHeadshots/jaime.png',
      description: '2nd Year Computer Science major',
    },
    {
      name: 'Alan Jiang',
      role: 'Mentor Liason, Software Team',
      image: './teamHeadshots/alan.png',
      description: '2nd Year Computer Science major',
    },
    {
      name: 'Brandon Fox',
      role: 'Financial Liason',
      image: './teamHeadshots/brandon.png',
      description: '2nd Year Computer Science major',
    },
    {
      name: 'Kaz Henderson',
      role: 'Ombudsperson, Software Team',
      image: './teamHeadshots/kaz.png',
      description: '2nd Year Computer Science major',
    },
    {
      name: 'Juno Song',
      role: 'Web Liason',
      image: './teamHeadshots/juno.png',
      description: '2nd Year Computer Science major',
    },
    
    // Add more team members
  ];

  return (
    <section className="team">
      <h1>Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team; 