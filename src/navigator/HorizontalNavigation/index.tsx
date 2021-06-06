import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from "react";
import { usePanResponder } from "../../hooks/usePanResponder";
import {
  HorizontalNavigationMethods,
  HorizontalNavigationProps,
} from "./types";
import * as S from "./styles";

const _HorizontalNavigation: ForwardRefRenderFunction<
  HorizontalNavigationMethods,
  HorizontalNavigationProps
> = (
  { distance, children, onRightToLeft, onLeftToRight, flatListRef },
  ref
) => {
  const [offset, setOffset] = useState<number>(0);

  useImperativeHandle(
    ref,
    () => ({
      resetOffset() {
        setOffset(0);
      },
    }),
    []
  );

  const panResponder = usePanResponder(
    {
      onPanResponderMove(e, s) {
        const { dx, dy } = s;
        if (flatListRef) {
          flatListRef.current?.scrollToOffset({
            offset: offset - dy,
            animated: false,
          });
          setOffset((offset) => offset - dy);
        }
        if (Math.abs(dy) < 30) {
          if (dx > distance) {
            onLeftToRight && onLeftToRight();
          } else if (dx < -distance) {
            onRightToLeft && onRightToLeft();
          }
        }
      },
    },
    [offset]
  );

  return (
    <S.DragContainer {...panResponder.panHandlers}>{children}</S.DragContainer>
  );
};

export const HorizontalNavigation = forwardRef(_HorizontalNavigation);
