import { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import "../styles/Contact.css";

const Contact = () => {
  // 1. Form Data Management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 2. Error and UX State Management
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // 3. Data Validation
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your full name";
    
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!formData.email) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject";
    
    if (formData.message.length < 20) {
      newErrors.message = "Message must be at least 20 characters long";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <PageWrapper>
      <section className="container contact-page">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Details</h3>
            <p><strong>Email:</strong> letai3258@gmail.com</p>
            <p><strong>Hotline:</strong> 0886624288</p>
            <p><strong>Address:</strong> Thu Duc, HCMC</p>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            {showSuccess && (
              <div className="success-banner" role="status">
                ✅ Demo submitted! Note: this form is a sample and no message was actually sent.
              </div>
            )}

            <p className="demo-note">
              This is a demo form — it does not send real messages. Please reach me via the contact details on the left.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text" id="name"
                  placeholder="e.g. John Doe"
                  className={errors.name ? 'error-input' : ''}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={isSubmitting}
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email" id="email"
                  placeholder="example@email.com"
                  className={errors.email ? 'error-input' : ''}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text" id="subject"
                  placeholder="How can I help you?"
                  className={errors.subject ? 'error-input' : ''}
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  disabled={isSubmitting}
                />
                {errors.subject && <span className="error-msg">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Min. 20 characters) *</label>
                <textarea
                  id="message" rows="5"
                  placeholder="Your message goes here..."
                  className={errors.message ? 'error-input' : ''}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn-submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit (Demo)'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;