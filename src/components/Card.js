import styled from 'styled-components';

const Card = styled.div`
  padding 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px;
  min-height: 100px;
  background: ${(props) => {
    if (props.color === 'grey-l'){
        return '#E0E0E0'
    }
    if (props.color === 'grey-m') {
      return '#B0BEC5'
    }
    if (props.color === 'g-l') {
      return '#B2EBF2'
    }
    if (props.color === 'g-l-2') {
      return '#81D4FA'
    }
      return ' '
    }};  
`;

export default Card;