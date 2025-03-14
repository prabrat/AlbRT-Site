import React from 'react';
import './styles/Timeline.css';

const Timeline = () => {
  const milestones = [
    {
      date: 'Fall 2024',
      bullets: [
        'Complete Initial Draft of full research proposal',
        'Team Presentation',
        'Submit IRB Approval'
      ]
    },
    {
      date: 'Spring 2025',
      bullets: [
        'Proposal Defense',
        'Conduct Surveys',
        'Have working software',
        'Begin integrating software and hardware'
      ]
    },
    {
      date: 'Fall 2025',
      bullets: [
        'Present preliminary findings to DoGood showcase',
        'Conduct market validation',
        'Begin product testing'
      ]
    },
    {
      date: 'Spring 2026',
      bullets: [
        'Begin finalizing prototype and reaching the goal product',
        'Conduct public testing',
        'Begin publication process of the thesis'
      ]
    },
    {
      date: 'Fall 2026',
      bullets: [
        'Write and submit final thesis',
        'Continue publication process',
        'Defend thesis in Spring 2027'
      ]
    }
  ];

  return (
    <section className="timeline">
      <h2>Project Timeline</h2>
      <div className="timeline-container">
        {milestones.map((milestone, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{milestone.date}</div>
            <div className="timeline-content">
              <ul>
                {milestone.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;