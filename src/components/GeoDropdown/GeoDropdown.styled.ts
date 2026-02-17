import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 289px;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  color: #ffffff;
  cursor: pointer;
  outline: none;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(20px);
  background:transparent;

  font-family: 'SF Pro', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  justify-content: flex-start;

  &::after {
    content: '';
    margin-left: auto;
    border-width: 6px 5px 0 5px;
    border-style: solid;
    border-color: #ffffff transparent transparent transparent;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  list-style: none;
  padding: 8px 0;
  margin: 0;
  border-radius: 12px;
  background: rgba(5, 20, 70, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.16);
  min-width: 100%;
  z-index: 10;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
`;

export const DropdownItem = styled.li`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #ffffff;
  font-family: 'SF Pro', sans-serif;
  font-size: 14px;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const Flag = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 999px;
  object-fit: cover;
  flex-shrink: 0;
`;