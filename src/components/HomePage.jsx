import React from 'react';
import millify from 'millify'; // Format number
import { Typography, Row, Col, Statistics } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography; // Get Title from Typography

const HomePage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
    </>
  );
};

export default HomePage;
