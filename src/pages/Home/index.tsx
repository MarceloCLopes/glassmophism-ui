import { MainContent } from "../../components/MainContent";
import { Sidebar } from "../../components/Sidebar";
import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <S.Card>
        <Sidebar />
        <MainContent />
      </S.Card>
    </S.Container>
  );
}
