import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';
import { SliderSettings } from 'components/Slider';

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="Next Image" />,
  prevArrow: <ArrowLeft aria-label="Previous Image" />
};

export default {
  default: {
    ...commonSettings,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          arrows: false,
          slidesToShow: 3.2,
          draggable: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2.2,
          draggable: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2.2,
          draggable: true
        }
      }
    ]
  },

  modal: {
    ...commonSettings,
    slidesToShow: 1
  }
};
