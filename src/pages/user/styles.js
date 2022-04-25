import styled from 'styled-components';

export const BlocTabs = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;

  .active-tabs::before {
    width: 100% !important;
  }
  .tabs {
      padding: 10px 40px;
      background-color: var(--tabs-ws);
      cursor: pointer;
      position: relative;
      &:hover {
        &::before {
            width: 100%;
        }
      }
      &::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 2px;
          background-color: var(--button-login-ws);
          transition: width .2s ease;
      }
  }
`;

export const ContentTabs = styled.div`
  width: 100%;
  height: auto;
  display: block;
  .tab {
      width: 100%;
      height: auto;
      display: none;
      position: relative;
  }
`;
