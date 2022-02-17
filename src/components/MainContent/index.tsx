import * as S from "./styles";
import { FiSearch } from "react-icons/fi";
import assassinImg from "../../assets/assassins.jpg";
import batmanImg from "../../assets/batman.jpeg";
import spidermanImg from "../../assets/spiderman.jpg";
import { Game } from "../Game";

export function MainContent() {
  return (
    <S.MainContentContainer>
      <S.MainTitle>Active Games</S.MainTitle>
      <S.InputContainer>
        <S.Input type="text" placeholder="search" />
        <FiSearch />
      </S.InputContainer>
      <S.GameContainer>
        <Game
          image={assassinImg}
          title="Assassins Creed Valhalla"
          platform="PS5 Version"
          percent="90"
        />
        <Game
          image={batmanImg}
          title="Batman Arkham Knight"
          platform="PS5 Version"
          percent="50"
        />
        <Game
          image={spidermanImg}
          title="Spiderman - Miles Morales"
          platform="PS5 Version"
          percent="70"
        />
      </S.GameContainer>
    </S.MainContentContainer>
  );
}
