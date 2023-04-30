import PropTypes from 'prop-types';
import { HeaderSection, Title } from './Section.styled';
const Section = ({ title, children }) => {
  return (
    <HeaderSection>
      <Title>{title}</Title>
      {children}
    </HeaderSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default Section;
