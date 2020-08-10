import styled from 'styled-components';

const CustomLoaderStyled = styled.div`
  @keyframes rotate360 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .spinner {
    margin: 16px;
    animation: rotate360 1s linear infinite;
    transform: translateZ(0);
    border-top: 2px solid #1f59bc;
    border-right: 2px solid #1f59bc;
    border-bottom: 2px solid #1f59bc;
    border-left: 4px solid #1f59bb;
    background: transparent;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export default CustomLoaderStyled;
