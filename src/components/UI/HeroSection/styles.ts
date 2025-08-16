'use client';
import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  margin-top: 6.25rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 30%, rgba(72, 214, 76, 0.08) 0%, transparent 60%);
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent 0deg, rgba(255, 255, 255, 0.02) 90deg, transparent 180deg);
    animation: rotate 30s linear infinite;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    min-height: 90vh;
  }
`;

export const Inner = styled.div`
  background: url(${hero_background.src}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 72rem;
  margin: 0 auto;
  text-align: center;
  background-position: top center;
  background-size: contain;
  position: relative;
  z-index: 1;
  padding: 4rem 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3rem;
    backdrop-filter: blur(20px);
    z-index: -1;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    max-width: 95%;
  }
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  margin-bottom: 2.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(72, 214, 76, 0.2);
    border-color: rgba(72, 214, 76, 0.3);
    
    &::before {
      left: 100%;
    }
  }

  span {
    color: rgba(220, 220, 220, 0.95);
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
  }

  img {
    transition: transform 0.3s ease;
    filter: brightness(1.2);
  }

  &:hover img {
    transform: translateX(2px);
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    margin-bottom: 2rem;
    
    span {
      font-size: 0.9rem;
    }
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 4rem;
  position: relative;
  z-index: 1;

  h1 {
    font-size: 7rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff 0%, #e8e8e8 30%, #ffffff 70%, #f5f5f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
    letter-spacing: -0.03em;
    line-height: 1.1;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(72, 214, 76, 0.6), transparent);
      border-radius: 1px;
    }
  }

  p {
    max-width: 48rem;
    color: rgba(189, 189, 189, 0.9);
    font-size: 1.6rem;
    font-weight: 400;
    margin: 0 auto;
    line-height: 1.7;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    letter-spacing: 0.01em;
  }

  @media (max-width: 768px) {
    gap: 2rem;
    padding-bottom: 3rem;
    
    h1 {
      font-size: 3rem;
      letter-spacing: -0.02em;
      line-height: 1.2;
      
      &::after {
        width: 80%;
        bottom: -8px;
      }
    }

    p {
      font-size: 1.15rem;
      line-height: 1.6;
      max-width: 95%;
    }
  }
`;
