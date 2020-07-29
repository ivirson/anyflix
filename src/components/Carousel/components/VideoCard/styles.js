import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border-radius: 0;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1.2) !important;
    z-index: 2;
    outline: 1px solid var(--white);
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
