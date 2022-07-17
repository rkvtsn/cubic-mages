import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ModalButtonStyled,
  ModalWindowContentStyled,
  ModalWindowStyled,
  ModalWindowTitleStyled,
  ModalWindowTitleTextStyled,
  ModalWrapperStyled,
} from "./styles";

interface ModalProps {
  children?: ReactNode;
  title?: string;
  isVisible: boolean;
  onClose: () => void;
}

const Modal = ({ children, isVisible, onClose, title }: ModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: globalThis.KeyboardEvent) =>
      e.key === "Escape" ? onClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  if (!isVisible) return null;
  const component = (
    <ModalWrapperStyled>
      <ModalWindowStyled>
        <ModalWindowTitleStyled>
          <ModalWindowTitleTextStyled>{title}</ModalWindowTitleTextStyled>
          <ModalButtonStyled onClick={onClose}>x</ModalButtonStyled>
        </ModalWindowTitleStyled>
        <ModalWindowContentStyled>{children}</ModalWindowContentStyled>
      </ModalWindowStyled>
    </ModalWrapperStyled>
  );
  return createPortal(component, document.body);
};

export default Modal;
