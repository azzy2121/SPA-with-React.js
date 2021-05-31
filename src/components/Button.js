import styled from 'styled-components';

const  Button = styled.button`
  padding: 3px 6px;
  border-radius: 6px;
  color: white;
  background: ${(props) => {
    if (props.color === 'org-l'){
        return '#F3AA35'
    }
    if (props.color === 'org-d') {
      return '#D95200'
    }
    if (props.color === 'org-m') {
      return '#FBC02D'
    }
    if (props.color === 'org-l-2') {
      return '#F57F17'
    }
      return '#222'
  
    }};
`;

export default Button;