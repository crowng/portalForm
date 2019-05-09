import styled from 'styled-components';
import  elevation  from './elevation';
import transition from './transition'

const Card = styled.div`
  background: white;
  border-radius: 5px;
  position: absolute;
  padding: 15px;
  color: black;
  ${elevation[4]};
  ${transition({
    property: 'box-shadow'
  })};
  &:hover {
    ${elevation[5]};
  }
`;

export default Card;