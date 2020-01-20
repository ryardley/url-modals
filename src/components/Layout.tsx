import React from "react";
import FooterNav from "./FooterNav";
import styled from "@emotion/styled";
import { Container, AppBar, Toolbar } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

type Props = {
  children?: React.ReactNode;
  showSpinner?: boolean;
  footer?: React.ReactNode;
  header?: React.ReactNode;
};

const LinearProgressPositioner = styled.div`
  /* overflow: hidden; */
`;

const VerticalContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 100px;
`;

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
type HeaderbarProps = {
  children: React.ReactNode;
};
function Headerbar({ children }: HeaderbarProps) {
  return (
    <AppBar position="static">
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}

function LayoutComponent({ children, showSpinner, header, footer }: Props) {
  return (
    <VerticalContainer>
      {header && <Headerbar>{header}</Headerbar>}
      {showSpinner && (
        <LinearProgressPositioner>
          <LinearProgress color="secondary" />
        </LinearProgressPositioner>
      )}
      <Container>{children}</Container>
      {footer || null}
    </VerticalContainer>
  );
}

function Footer() {
  return (
    <FooterContainer>
      <FooterNav />
    </FooterContainer>
  );
}

export default Object.assign(LayoutComponent, { Footer });
