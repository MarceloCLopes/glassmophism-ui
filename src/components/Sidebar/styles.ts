import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 30%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(14px);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 25%;
  padding: 3rem 0 1rem 0;
`;

export const Avatar = styled.img`
  height: 7rem;
  border-radius: 5rem;
`;

export const Name = styled.h1`
  color: var(--heading);
  font-size: 1.3rem;
  margin: 1rem 0 0.2rem 0;
`;

export const Title = styled.h2`
  color: var(--heading);
  font-size: 1rem;
`;

export const LinksContainer = styled.div`
  padding-left: 4rem;
  margin: 2rem 0;
`;

export const ProBox = styled.div`
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto auto;
  border-radius: 1rem;
  height: 15%;
  padding: 1rem;
`;

export const ProText = styled.span`
  color: var(--shape);
  font-weight: bolder;
`;

export const Image = styled.img`
  height: 4rem;
  transform: rotate(-60deg);
`;
