import { useRoute } from "@react-navigation/core";
import React from "react";
import * as S from "./styles";
import { HeaderProps } from "./types";

export default function Header({ leftItems, rightItems }: HeaderProps) {
  const route = useRoute();
  return (
    <S.HeaderContainer>
      <S.HeaderLeftItemContainer>
        {leftItems && leftItems()}
      </S.HeaderLeftItemContainer>
      <S.HeaderTitle>{route?.name}</S.HeaderTitle>
      <S.HeaderRightItemContainer>
        {rightItems && rightItems()}
      </S.HeaderRightItemContainer>
    </S.HeaderContainer>
  );
}
