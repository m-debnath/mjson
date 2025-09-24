import React from 'react';
import styled from 'styled-components';
import { useLanguage } from './language';

const StyledFooter = styled.footer`
  margin-top: auto;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  line-height: 1.5;
`;

const FooterLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Footer: React.FC = () => {
  const { constants } = useLanguage();
  const { UI_TEXT, ASSETS } = constants;

  return (
    <StyledFooter>
      <p>{UI_TEXT.FOOTER_COOKIES}</p>
      <p>
        {UI_TEXT.FOOTER_COPYRIGHT}
        <FooterLink href={ASSETS.COMPANY_URL} target="_blank" rel="noopener noreferrer">
          {UI_TEXT.FOOTER_COMPANY}
        </FooterLink>
        {UI_TEXT.FOOTER_MADE_BY}
      </p>
    </StyledFooter>
  );
};

export default Footer;
