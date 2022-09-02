import React from 'react';
import { OrderArea, OrderImage, OrderText } from './order.style';

import Lottie from 'react-lottie';
import animationData from '../../lotties/done-blue';

const Order = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <OrderArea>
        {/* <OrderImage src="/images/design-image.svg" alt="click here" /> */}
        <Lottie options={defaultOptions} height={400} width={400} />
        <OrderText>Your order has been placed successfully.</OrderText>
      </OrderArea>
    </>
  );
};

export default Order;
