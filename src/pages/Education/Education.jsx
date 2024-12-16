import React, { useEffect, useRef } from 'react';
import './Education.css';
import TextReveal from '../../text_animations/TextReveal/TextReveal';
import HackerEffect from '../../text_animations/HackerAnimations/HackerEffect';
import EducationCard from '../../styled_component/CyberPunk Back/EducationCard';

function Education() {

  return (
    <div className='education'>
      <div className='h1-area'>
        <HackerEffect text="Education" />
        <div className='line' />
      </div>

      {/* Subtitle section with mouse hover effect */}
      <div className='subtitle-area'>
        <TextReveal text="Throughout my educational journey, I’ve focused on building a strong foundation of knowledge and practical skills that have shaped my expertise in web development. My studies have been centered on mastering key technologies and understanding the principles of design, programming, and user experience. The pursuit of knowledge has not only equipped me with technical skills but also cultivated a passion for continuous learning and growth. I believe that education is an ongoing process, and I strive to stay up to date with the latest trends and advancements in technology to refine my craft and contribute meaningfully to the field of web development." />
      </div>
      <div className='education-card'>
        <EducationCard className="education-card"/>
      </div>
    </div>
  );
}

export default Education;
