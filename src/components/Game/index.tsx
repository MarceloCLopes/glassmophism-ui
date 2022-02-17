import * as S from "./styles";

interface Props {
  title: string;
  platform: string;
  image: string;
  percent: string;
}

export function Game({ image, title, platform, percent }: Props) {
  return (
    <S.GameContainer>
      <S.GameImage src={image} />
      <S.GameTextContainer>
        <S.GameTitle>{title}</S.GameTitle>
        <S.Platform>{platform}</S.Platform>
        <S.ProgressBAR value={percent} max="100" />
      </S.GameTextContainer>
      <S.Percent>{percent}%</S.Percent>
    </S.GameContainer>
  );
}
