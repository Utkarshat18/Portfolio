import React from 'react';
import './SkillCard.css';
import { SKILLS } from '../../../utils/data';

const SkillCard = ({ title, iconUrl, isActive, onClick }) => { // Destructure props here
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`} onClick={onClick}> {/* Correct onClick */}
      <div className='skills-icon'>
        <img src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
}

export default SkillCard;
