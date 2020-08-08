import styled from 'styled-components';

const SidebarStyled = styled.div`
  background: #4e73df;
  .logo {
    background: #4e73df;
    h2 {
      color: #fff;
      font-weight: 700;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0rem 2rem 0px;
    }
  }
  .sidebar-items {
    background: #4e73df;
  }
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
    .ant-menu-item-selected {
    background: transparent;
    font-weight: 700;
  }

  .ant-menu-item {
    display: flex;
    align-items: center;

    font-size: 1rem !important;
  }
`;

export default SidebarStyled;
