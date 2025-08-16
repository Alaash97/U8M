'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  background: linear-gradient(135deg, var(--green) 0%, var(--emerald) 50%, #3dd856 100%);
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(72, 214, 76, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  letter-spacing: 0.02em;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent, rgba(255, 255, 255, 0.1));
    border-radius: inherit;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 16px 48px rgba(72, 214, 76, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    
    &:hover {
      transform: translateY(-2px) scale(1.02);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  background: linear-gradient(135deg, var(--green) 0%, var(--emerald) 50%, #3dd856 100%);
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(72, 214, 76, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  letter-spacing: 0.02em;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent, rgba(255, 255, 255, 0.1));
    border-radius: inherit;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 16px 48px rgba(72, 214, 76, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    
    &:hover {
      transform: translateY(-2px) scale(1.02);
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
`;

export const ModalContent = styled.div`
  background: rgba(25, 25, 25, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  z-index: 1001;
  animation: modalSlideIn 0.3s ease-out;

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 768px) {
    margin: 1rem;
    border-radius: 1.5rem;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    background: linear-gradient(135deg, #ffffff 0%, #e8e8e8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;

export const Form = styled.form`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: var(--emerald);
    box-shadow: 0 0 0 3px rgba(72, 214, 76, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: var(--emerald);
    box-shadow: 0 0 0 3px rgba(72, 214, 76, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
  background: linear-gradient(135deg, var(--green) 0%, var(--emerald) 50%, #3dd856 100%);
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(72, 214, 76, 0.3);
  letter-spacing: 0.02em;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(72, 214, 76, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;
