import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === 'fullName') {
      // Allow only letters and spaces (prevent numbers and symbols)
      if (/[^a-zA-Z\s]/.test(value)) {
        return; // Ignore key press
      }
    }

    if (name === 'message') {
      // Calculate word count
      const words = value.trim() === '' ? [] : value.trim().split(/\s+/);
      if (words.length > 100) {
        return; // Block adding more than 100 words
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

    setErrors(newErrors);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Final email validation check on submit
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({ ...errors, email: 'Please enter a valid email address' });
      return;
    }

    if (formData.fullName && formData.email && formData.message) {
      setIsSubmitted(true);
      // Optional: Reset form after some time or leave as success state
    }
  };

  // Helper to count words
  const wordCount = formData.message.trim() === '' ? 0 : formData.message.trim().split(/\s+/).length;

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        
        {/* Left Side: Info */}
        <div className="contact-info">
          <div className="contact-subtitle">
            <span className="line"></span>
            <span className="subtitle-text">GET IN TOUCH</span>
          </div>
          <h2 className="contact-title">
            COMMIT TO<br />
            <span className="text-gray">EXCELLENCE</span>
          </h2>
          <p className="contact-description">
            Ready to transform your potential into reality? Reach out to schedule a consultation or tour our facility. Our team is ready to assist you.
          </p>
          
          <div className="icon-list">
            <div className="icon-item">
              <div className="icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="icon-text">
                <strong>LOCATION</strong>
                <span>123 Iron Avenue, Fitness District, NY 10001</span>
              </div>
            </div>
            
            <div className="icon-item">
              <div className="icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="icon-text">
                <strong>PHONE</strong>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <div className="icon-item">
              <div className="icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="icon-text">
                <strong>EMAIL</strong>
                <span>join@ironforge.gym</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-container">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="contact-form">
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
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <label>YOUR MESSAGE <span className="text-red">*</span></label>
                  <span style={{fontSize: '0.75rem', color: wordCount >= 100 ? '#dc2626' : '#888', fontWeight: 'bold'}}>
                    {wordCount}/100 words
                  </span>
                </div>
                <textarea 
                  name="message" 
                  placeholder="TELL US ABOUT YOUR GOALS..." 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={wordCount >= 100 ? 'input-error' : ''}
                  required 
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                SEND
                <svg className="icon-send" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          ) : (
            <div className="success-feedback">
              <svg className="icon-success" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3>MESSAGE SENT!</h3>
              <p>Thank you for reaching out. Our team will get back to you shortly.</p>
              <button onClick={() => setIsSubmitted(false)} className="btn-reset">SEND ANOTHER MESSAGE</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
