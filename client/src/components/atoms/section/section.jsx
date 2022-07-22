import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledSection = styled.section`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 2rem;
  padding: 4rem 2rem;
  margin: 0 auto;
  max-width: 35rem;
  color: #333;
  text-align: ${props => props.align};
`

export const Section = ({ align, ...props }) => {
    return (
        <StyledSection align={align} {...props}>
        </StyledSection>
    );
};

Section.propTypes = {
    align: PropTypes.string
};

Section.defaultProps = {
    align: 'left'
};
