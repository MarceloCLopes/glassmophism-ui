import { ReactNode } from "react";
import * as S from "./styles";

type Props = {
  title: string;
  children: ReactNode;
};

export function Link({ title, children }: Props) {
  return (
    <S.LinkContainer>
      <S.Icon>
        <svg width="0" height="0">
          <linearGradient id="gradient" x1="100%" y1="100%" x2="0" y2="0">
            <stop stopColor="#667eea" offset="0%" />
            <stop stopColor="#764ba2" offset="100%" />
          </linearGradient>
        </svg>
        {children}
      </S.Icon>
      <S.LinkText>{title}</S.LinkText>
    </S.LinkContainer>
  );
}
