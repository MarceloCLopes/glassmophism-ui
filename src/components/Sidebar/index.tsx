import * as S from "./styles";
import avatarImg from "../../assets/avatar.png";
import { ImTwitch, ImBook } from "react-icons/im";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaSteam } from "react-icons/fa";
import { Link } from "../Link";
import controllerImg from "../../assets/controller.png";

export function Sidebar() {
  const defaultStyle = { fill: "url(#gradient)" };

  return (
    <S.SidebarContainer>
      <S.ProfileContainer>
        <S.Avatar src={avatarImg} />
        <S.Name>Marcelo Lopes</S.Name>
        <S.Title>Pro Gamer</S.Title>
      </S.ProfileContainer>
      <S.LinksContainer>
        <Link title="Streams">
          <ImTwitch style={defaultStyle} />
        </Link>
        <Link title="Games">
          <IoLogoGameControllerB style={defaultStyle} />
        </Link>
        <Link title="UpComing">
          <FaSteam style={defaultStyle} />
        </Link>
        <Link title="Library">
          <ImBook style={defaultStyle} />
        </Link>
      </S.LinksContainer>
      <S.ProBox>
        <S.ProText>Join pro for free games.</S.ProText>
        <S.Image src={controllerImg} />
      </S.ProBox>
    </S.SidebarContainer>
  );
}
