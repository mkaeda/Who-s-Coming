import React, { useRef } from 'react';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CopyableTextLine.css'

const CopyableTextLine = ({ text }) => {
  const textRef = useRef(null);

  const handleCopyClick = () => {
    if (textRef.current) {
      // Create a range, select the text, and copy it
      const range = document.createRange();
      range.selectNode(textRef.current);
      window.getSelection().addRange(range);
      document.execCommand('copy');
      // Clear the selection
      window.getSelection().removeAllRanges();
    }
  };

  return (
    <div className='copyable-container'>
      {/* Non-modifiable text */}
      <span ref={textRef} className='text'>{text}</span>

      {/* Copy button */}
      <button className='copy-btn' onClick={handleCopyClick}><FontAwesomeIcon icon={faCopy} /></button>
    </div>
  );
};

export default CopyableTextLine;
