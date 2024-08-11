// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from "react";
import { ThemeProvider } from "./theme";
import styled from "styled-components";

import ChatContainer from "./components/Chat/ChatContainer";

import defaultTheme from "./theme/defaultTheme";

const Page = styled.div`
  width: 400px;
  font-family: ${(props) => props.theme.fonts.regular};

  margin: ${(props) => props.theme.spacing.base};
  box-shadow: 0px 2px 3px ${(props) => props.theme.palette.alto};
  border-radius: 25px;

  /* background-color: honeydew; */
  @media (max-width: 640px) {
    position: absolute;
    width: 100%;
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
`;

const AppProvider = (props) => {
  return (
    <ThemeProvider theme={Object.assign({}, defaultTheme, props.themeConfig)}>
      {props.children}
    </ThemeProvider>
  );
};

App.defaultProps = {
  baseCssClass: "connect-customer-interface",
};

function App({ baseCssClass, ...props }) {
  return (
    <AppProvider themeConfig={props.themeConfig || {}}>
      <Page className={baseCssClass}>
        <ChatContainer {...props} />
      </Page>
    </AppProvider>
  );
}

export default App;
