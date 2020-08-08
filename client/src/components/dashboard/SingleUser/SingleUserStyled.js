import styled from 'styled-components';

const SingleUserStyled = styled.div`
  .ant-input-affix-wrapper,
  .ant-select-selector {
    width: 100%;
    padding: 1rem !important;
    font-size: 1rem !important;
    font-weight: 400 !important;
    line-height: 1.5 !important;
    color: #6e707e !important;
    background-clip: padding-box !important;
    border: 1px solid #d1d3e2 !important;
    border-radius: 0.35rem !important;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
    background: #f8f9fc !important;
  }

  .ant-select-selector {
    /* padding: 1.6rem !important; */
    height: 3.4rem !important;
    padding: 0;
  }
  .ant-select-selection-item {
    line-height: 16px !important;
  }

  .ant-input {
    background: #f8f9fc !important;
  }
`;

export default SingleUserStyled;
