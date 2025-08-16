'use client';
import { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, Form, FormGroup, Input, TextArea, CloseButton, SubmitButton, ModalHeader } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    email: '',
    inquiry: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Example form submission (no actual functionality)
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setIsModalOpen(false);
    setFormData({ brandName: '', email: '', inquiry: '' });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        style={{ padding }}
        onClick={() => setIsModalOpen(true)}
      >
        Inquire
      </Button>

      {isModalOpen && (
        <Modal onClick={closeModal}>
          <ModalOverlay />
          <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <ModalHeader>
              <h2>Get Started With U8 Media</h2>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ModalHeader>
            
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="brandName">Brand Name *</label>
                <Input
                  type="text"
                  id="brandName"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                  placeholder="Enter your brand name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="email">Email Address *</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="inquiry">Special Inquiry</label>
                <TextArea
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project, goals, or any specific requirements..."
                  rows={5}
                />
              </FormGroup>

              <SubmitButton type="submit">
                Send Inquiry
              </SubmitButton>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default GetStartedButton;
