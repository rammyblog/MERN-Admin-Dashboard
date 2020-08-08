import styled from 'styled-components';

const StatsCardStyled = styled.div`
  margin-right: 1rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  .card-col {
    border-left: 0.25rem solid ${(props) => props.color};
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
    /* margin-left: 1rem; */
    width: 255px;
    font-weight: 700;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    text-transform: uppercase;
    padding: 0.8rem;
  }

  .card-text {
    font-size: 0.8rem;
    color: ${(props) => props.color};
    margin: 0;
  }

  .card-stats {
    font-size: 1.25rem;
  }

  .ant-card-body {
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .col {
    padding: 0;
  }
  .col-auto {
    font-size: 1.5rem;
  }
`;

export default StatsCardStyled;
