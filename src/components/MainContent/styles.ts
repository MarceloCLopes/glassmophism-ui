import styled from "styled-components";

export const MainContentContainer = styled.div`
  padding: 5rem 5rem 0 5rem;
  color: #764ba2;
`;

export const MainTitle = styled.h1``;

export const InputContainer = styled.div`
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  width: 16rem;
  background: rgba(255, 255, 255, 0.9);
  align-items: center;
  svg {
    font-size: 1.4rem;
  }
`;

export const Input = styled.input`
  border-radius: 2rem;
  border: none;
  padding: 0.6rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  font-size: 0.9rem;
  color: var(--heading);

  &:focus {
    outline: none;
    border: none;
  }

  &::placeholder {
    color: #764ba2;
  }
`;

export const GameContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
