'use client';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  padding: 6rem 0 8rem 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center top, rgba(72, 214, 76, 0.05) 0%, transparent 60%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 0 6rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1440px;
  width: 92%;
  position: relative;
  z-index: 1;

  h2 {
    color: rgba(189, 189, 189, 0.8);
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 8rem;
    letter-spacing: 0.15em;
    position: relative;
    padding: 0 2rem;
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 3rem;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(72, 214, 76, 0.6), transparent);
    }
    
    &::before {
      left: -3rem;
    }
    
    &::after {
      right: -3rem;
    }
  }

  @media (max-width: 768px) {
    width: 95%;

    h2 {
      font-size: 1.1rem;
      margin-top: 5rem;
      letter-spacing: 0.1em;
      
      &::before,
      &::after {
        width: 2rem;
      }
      
      &::before {
        left: -2rem;
      }
      
      &::after {
        right: -2rem;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 38rem;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(72, 214, 76, 0.1) 0%, transparent 30%, rgba(43, 137, 46, 0.05) 100%);
    z-index: 2;
    pointer-events: none;
    border-radius: 2rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 40px 120px rgba(0, 0, 0, 0.5);
    
    &::before {
      opacity: 1;
    }
  }

  img {
    object-fit: cover;
    border-radius: 2rem;
    transition: transform 0.5s ease, filter 0.3s ease;
    filter: brightness(0.95) contrast(1.05);
  }
  
  &:hover img {
    transform: scale(1.05);
    filter: brightness(1) contrast(1.1);
  }

  @media (max-width: 768px) {
    height: 25rem;
    border-radius: 1.5rem;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    
    &:hover {
      transform: translateY(-6px) scale(1.01);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    }

    img {
      border-radius: 1.5rem;
    }
    
    &::before {
      border-radius: 1.5rem;
    }
  }
`;

export const ParallaxImages = styled.div`
  position: relative;
  max-width: 60rem;
  margin: 4rem auto 0;
  padding: 2rem;
  border-radius: 2rem;
  background: rgba(25, 25, 25, 0.4);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  animation: float 6s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 1.5rem;
    margin: 3rem auto 0;
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-4px);
      }
    }
  }
`;

export const Div = styled(motion.div)`
  position: relative;
  height: 38rem;
  width: 100%;
  overflow: hidden;
  border-radius: 1.5rem;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);

  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    position: relative !important;
  }

  @media (max-width: 599px) {
    height: 25rem;
    border-radius: 1rem;
    
    img {
      object-fit: cover;
      width: 100% !important;
      height: 100% !important;
    }
  }
`;
