import styled from 'styled-components';

const HeaderStyled = styled.div`
  .ant-layout-header {
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
  }
  .site-layout-background {
    padding: 0;
  }
  .anticon-menu-fold {
    padding: 0 1rem;
    font-size: 1.2rem;
  }

  .anticon-menu-unfold {
    padding: 1rem;
  }
  .name {
    font-size: 0.8rem;
    padding: 0 0.8rem;
  }

  @media (max-width: 600px) {
    .name {
      display: none;
    }
  }
`;

export default HeaderStyled;
