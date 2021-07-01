import * as S from './styles';
import { Close } from '@styled-icons/material-outlined/Close';
import Slider from 'components/Slider';
import settings from './settings';
import { useEffect, useState, useRef } from 'react';
import SlickSlider from 'react-slick';

export type GalleryImageProps = {
  src: string;
  label: string;
};

export type GalleryProps = {
  items: GalleryImageProps[];
};

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false);
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings.default}>
        {items.map(({ src, label }, index) => (
          <img
            key={`Key - ${label}`}
            role="button"
            src={src}
            alt={`Thumb - ${label}`}
            onClick={() => {
              setIsOpen(true);
              slider.current?.slickGoTo(index, true);
            }}
          />
        ))}
      </Slider>

      <S.Modal aria-label="modal" aria-hidden={!isOpen} isOpen={isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size="40" />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={settings.modal}>
            {items.map(({ src, label }) => (
              <img key={`Gallery - ${label}`} src={src} alt={`${label}`} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Gallery;
