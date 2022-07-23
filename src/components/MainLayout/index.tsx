import { ReactNode } from "react";
import {
  HeaderStyled,
  MainLayoutWrapperStyled,
  MainStyled,
  MainWrapperStyled,
  RightbarStyled,
} from "./styles";

interface MainLayoutProps {
  header?: ReactNode;
  children?: ReactNode;
  rightbar?: ReactNode;
}

const MainLayout = ({ header, children, rightbar }: MainLayoutProps) => {
  return (
    <MainLayoutWrapperStyled>
      <HeaderStyled>{header}</HeaderStyled>
      <MainWrapperStyled>
        <MainStyled>{children}</MainStyled>
        <RightbarStyled>{rightbar}</RightbarStyled>
      </MainWrapperStyled>
    </MainLayoutWrapperStyled>
  );
};

export default MainLayout;
