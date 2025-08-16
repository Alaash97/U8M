'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 11.25rem;
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(19, 19, 19, 0.8) 0%, rgba(25, 25, 25, 0.9) 100%);
  backdrop-filter: blur(8px);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(72, 214, 76, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    margin-top: 6.25rem;
    padding: 3rem 0;
  }
`;

export const Inner = styled.div`
  width: 92%;
  max-width: 1440px;
  margin: 0 auto 8.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-bottom: 6rem;
    width: 95%;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 60rem;
  margin: 0 auto 8rem;
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  h1 {
    font-size: 5.5rem;
    font-weight: 600;
    background: linear-gradient(135deg, #ffffff 0%, #e8e8e8 50%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 4px 16px rgba(255, 255, 255, 0.1);
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  p {
    max-width: 48rem;
    color: rgba(189, 189, 189, 0.9);
    font-size: 1.35rem;
    font-weight: 400;
    line-height: 1.8;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    margin-bottom: 5rem;
    padding: 1.5rem;
    gap: 1.5rem;

    h1 {
      font-size: 2.75rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }
`;

export const BannerCtn = styled.div`
  margin-bottom: 6rem;
  width: 100%;
  position: relative;
  height: 42rem;
  overflow: hidden;
  border-radius: 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(72, 214, 76, 0.1) 0%, transparent 50%, rgba(43, 137, 46, 0.1) 100%);
    z-index: 1;
    pointer-events: none;
    border-radius: 1.5rem;
  }

  img {
    border-radius: 1.5rem;
    object-fit: cover;
    transition: transform 0.5s ease;
    filter: brightness(0.9) contrast(1.1);
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 4rem;
    border-radius: 1rem;
    
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }
`;

export const Edges = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const Edge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2.5rem;
  border-radius: 1.5rem;
  background: rgba(25, 25, 25, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(72, 214, 76, 0.05) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(72, 214, 76, 0.3);
    
    &::before {
      opacity: 1;
    }
  }

  p {
    max-width: 28rem;
    color: rgba(189, 189, 189, 0.9);
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.6;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    
    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
  z-index: 1;

  img {
    width: 2.5rem;
    height: 2.5rem;
    filter: brightness(1.2) saturate(1.1);
    transition: transform 0.3s ease;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    background: linear-gradient(135deg, #ffffff 0%, #e8e8e8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.01em;
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
    
    img {
      width: 2rem;
      height: 2rem;
    }
    
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const BriefNote = styled.div`
  min-height: 54.75rem;
  padding: 10rem 5rem;
  background: linear-gradient(135deg, var(--emerald) 0%, #3dd856 50%, #2bc94a 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent 0deg, rgba(255, 255, 255, 0.03) 90deg, transparent 180deg);
    animation: rotate 20s linear infinite;
    pointer-events: none;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  p {
    color: var(--Background, #070606);
    font-size: 5.5rem;
    font-weight: 700;
    max-width: 1440px;
    text-align: center;
    position: relative;
    z-index: 1;
    line-height: 1.1;
    letter-spacing: -0.02em;
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
    min-height: auto;
    
    p {
      font-size: 3.5rem;
      line-height: 1.2;
    }
  }
`;
