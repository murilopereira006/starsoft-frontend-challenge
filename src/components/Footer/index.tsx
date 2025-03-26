'use client'; // styled-components use React.createContext, which is not available in the serve-side

import { FooterWrapper, RightsText } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <RightsText>STARSOFT © TODOS OS DIREITOS RESERVADOS</RightsText>
    </FooterWrapper>
  );
};

export default Footer;
