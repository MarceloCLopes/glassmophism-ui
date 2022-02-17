import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(18px);
  width: 140%;
  border-radius: 1rem;
  height: 7rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.5) 0px 0px 0px 1px;
`;

export const GameImage = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 1rem;
`;

export const GameTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
`;

export const GameTitle = styled.h2`
  font-size: 1.4rem;
`;

export const Platform = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
`;

export const ProgressBAR = styled.progress`
  border-radius: 0;
  width: 100%;
  height: 1.3rem;

  &::-webkit-progress-bar {
    background-color: #c5c5c5;
    border-radius: 1rem;
  }

  &::-webkit-progress-value {
    background: var(--background);
    border-radius: 1rem;
  }
`;

export const Percent = styled.h2`
  background: var(--background);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
