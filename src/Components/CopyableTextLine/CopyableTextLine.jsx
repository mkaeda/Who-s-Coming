import React, { useRef } from 'react';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CopyableTextLine.css'

const CopyableTextLine = ({ text }) => {
  const textRef = useRef(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Link copied to clipboard!'))
      .catch(err => console.error('Error copying link: ', err));
  };

  return (
    <div className='copyable-container'>
      {/* Non-modifiable text */}
      <span ref={textRef} className='text'>{text}</span>

      {/* Copy button */}
      <button className='copy-btn' onClick={handleCopyLink}><FontAwesomeIcon icon={faCopy} /></button>
    </div>
  );
};

export default CopyableTextLine;
