'use client';
import { styled } from 'styled-components';
import grid_background from '../../../../public/images/offer_card_grid_1.png';

export const ImageCtn = styled.div`
  margin: 2.5rem auto 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(255,255,255,0.01);
  box-shadow: 0 2px 12px 0 rgba(31, 38, 135, 0.10);

  &::after {
    position: absolute;
    content: '';
    height: 13.4375rem;
    width: 100%;
  
    left: 0;
    top: 50px;
    pointer-events: none;
  }

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
    transition: filter 0.2s;
  }

  @media (max-width: 768px) {
    margin: 0.32rem auto 0;
    &::after {
      top: 30px;
    }
    img {
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export const OfferCard = styled.div`
  overflow: hidden;
  height: 31.25rem;
  border-radius: 1.5rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.08));
  display: flex;
  flex-direction: column;
  background: rgba(30, 30, 30, 0.7) url(${grid_background.src}) center/cover no-repeat;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
 backdrop-filter: blur(12px) saturate(120%);
  transition: transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px) scale(1.025);
    box-shadow: 0 16px 40px 0 rgba(31, 38, 135, 0.22);
    border-color: var(--primary, #ffb347);
  }

  &:first-child {
    flex: 2;
  }

  &:nth-child(2) {
    flex: 1;

    ${ImageCtn} {
      margin-left: 2.5rem;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    border-radius: 1rem;
     box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.10); 
    backdrop-filter: blur(6px) saturate(110%);
  }
`;

export const Wrapper = styled.section`
  padding: 4rem 0 6rem 0;
  background: linear-gradient(120deg, #181818 60%, #232526 100%);
`;

export const Inner = styled.div`
  max-width: 1440px;
  width: 92%;
  margin: 8rem auto 0;
  @media (max-width: 768px) {
    margin-top: 3rem;
    width: 98%;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 5rem;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: -0.04em;
    background: linear-gradient(90deg, #ffb347 0%, #ffcc80 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 41.75rem;
    color: #b0b0b0;
    font-size: 1.35rem;
    font-weight: 400;
    line-height: 2rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.05rem;
      line-height: 1.6rem;
    }
  }
`;

export const TextCtn = styled.div`
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  max-width: 32.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: auto;
  background: rgba(20, 20, 20, 0.7);
  border-radius: 1rem;
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.08);
  transition: background 0.2s;

  h2 {
    font-size: 2.25rem;
    font-weight: 600;
    line-height: 2.25rem;
    color: #fff;
    margin-bottom: 0.25rem;
  }

  p {
    color: var(--link-color, #ffb347);
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.7rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Offers = styled.div`
  display: flex;
  align-items: stretch;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;
