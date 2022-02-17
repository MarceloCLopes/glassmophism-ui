import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  margin: 0.5rem 0;
  color: var(--heading);
  font-weight: 500;
`;

export const Icon = styled.div`
  svg {
    height: 2rem;
    width: 2rem;
  }
  cursor: pointer;
`;

export const LinkText = styled.div`
  padding-left: 1rem;
  padding-top: 0.2rem;
  cursor: pointer;
`;
