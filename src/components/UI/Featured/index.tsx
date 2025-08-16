'use client';
import Image from 'next/image';
import big_banner from '../../../../public/images/banner1.jpg';
import featured_mobile_banner from '../../../../public/images/banner1.jpg';
import ParallaxText from '@/components/Common/ParallaxImages';
import companies_image from '../../../../public/images/socialmedia.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';
export const imageVariants = {
  hidden: {
    scale: 1.8,
    opacity: 0,
    filter: "blur(8px)",
  },
  visible: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.6,
      ease: [0.6, 0.05, 0.01, 0.9],
      delay: 0.3,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true, margin: "-10%" }}
          >
            {isMobile ? (
              <Image
                src={featured_mobile_banner}
                alt="featured_mobile_banner"
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                priority
              />
            ) : (
              <Image 
                src={big_banner} 
                alt="big_banner" 
                fill 
                sizes="(max-width: 768px) 100vw, 90vw"
                priority
              />
            )}
          </Div>
        </ImageContainer>
        <h2>Featured and Seen in</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image src={companies_image} alt="comapanies" />
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
