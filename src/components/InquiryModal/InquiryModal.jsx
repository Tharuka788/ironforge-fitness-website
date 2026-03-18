import React, { useState, useEffect } from 'react';
import './InquiryModal.css';

const InquiryModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === 'fullName' && /[^a-zA-Z\s]/.test(value)) {
      return; 
    }

    if (name === 'phone') {
      // Allow only numbers and restrict to 10 digits max
      if (/[^0-9]/.test(value) || value.length > 10) {
        return;
      }
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        newErrors.email = 'Please enter a valid email address';
      } else {
        delete newErrors.email;
      }
    }

    if (name === 'message') {
      const words = value.trim() === '' ? [] : value.trim().split(/\s+/);
      if (words.length > 100) {
        return; 
      }
    }

    setErrors(newErrors);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({ ...errors, email: 'Please enter a valid email address' });
      return;
    }

    if (formData.phone && formData.phone.length < 10) {
      setErrors({ ...errors, phone: 'Phone number must be 10 digits' });
      return;
    }

    const words = formData.message.trim() === '' ? [] : formData.message.trim().split(/\s+/);
    if (words.length > 100) {
      return;
    }

    if (formData.fullName && formData.email) {
      setIsSubmitted(true);
    }
  };

  const wordCount = formData.message.trim() === '' ? 0 : formData.message.trim().split(/\s+/).length;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content inquiry-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        {!isSubmitted ? (
          <div className="inquiry-container">
            <div className="inquiry-header">
              <span className="subtitle-text">PROGRAM INQUIRY</span>
              <h2 className="inquiry-title">REQUEST <span className="text-yellow">MORE INFO</span></h2>
              <p className="inquiry-description">
                Leave your details below and one of our expert trainers will get back to you with program specifics.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="form-group">
                <label>FULL NAME <span className="text-red">*</span></label>
                <input 
                  type="text" 
                  name="fullName" 
                  placeholder="JOHN DOE" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label>EMAIL ADDRESS <span className="text-red">*</span></label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="JOHN@EXAMPLE.COM" 
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'input-error' : ''}
                  required 
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label>PHONE NUMBER</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="070 000 0000" 
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'input-error' : ''}
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <label>GOALS / QUESTIONS</label>
                  <span style={{fontSize: '0.75rem', color: wordCount >= 100 ? '#dc2626' : '#888', fontWeight: 'bold'}}>
                    {wordCount}/100 words
                  </span>
                </div>
                <textarea 
                  name="message" 
                  placeholder="What are you looking to achieve?" 
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className={wordCount >= 100 ? 'input-error' : ''}
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                REQUEST INFO
                <svg className="icon-send" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        ) : (
          <div className="success-feedback">
            <svg className="icon-success" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3>REQUEST RECEIVED!</h3>
            <p>Our team will contact you shortly with the information you requested.</p>
            <button onClick={onClose} className="btn-reset">CLOSE WINDOW</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiryModal;
