
import React from 'react';
import { Link } from 'react-router-dom'; 
import "./congratulationsModal.css"; 

const CongratulationsModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <p>Congratulations! Your skills summoning game is complete.</p>
          <div>
            <button onClick={onClose}>Return to Skills Game</button><br />
            <Link to="/contact">
              <button>Contact Thaleia</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsModal;
