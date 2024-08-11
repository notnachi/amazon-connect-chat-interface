// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import * as React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import PT from "prop-types";
import { Button } from "connect-core";
import { CONTACT_STATUS } from "connect-constants";

export const ACTION_BAR_HEIGHT = "85px";

// why are there 3 div containers ???? FooterWrapper -> Actions -> ButtonWrapper

const Actions = styled.div`
  background-color: mediumvioletred;
  height: ${ACTION_BAR_HEIGHT};
  border-radius: inherit; // will have to do for now but not the best solution :/
`;

const FooterWrapper = styled.div`
  order: 3;
  background-color: darksalmon;
  border-radius: 0 0 25px 25px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  align-items: center;
  > button {
    min-width: 85px;
    margin: ${(props) => props.theme.spacing.mini};
    font-weight: bold;
  }
`;

const ActionButton = styled(Button)`
  margin: ${(props) => props.theme.spacing.small};
  width: ${(props) => (props.col ? 100 / props.col - 7 + "%" : "")};
  border-radius: inherit; // will have to do for now but not the best solution :/
`;

function createMarkup(content) {
  return { __html: content };
}

export default class ChatActionBar extends React.Component {
  constructor() {
    super();
    if (window.connect && window.connect.LogManager) {
      this.logger = window.connect.LogManager.getLogger({
        prefix: "ChatInterface-ChatActionBar",
      });
    }
  }

  static propTypes = {
    contactStatus: PT.string.isRequired,
    onEndChat: PT.func,
    onClose: PT.func,
    footerConfig: PT.object,
  };

  static defaultProps = {
    onEndChat: () => {},
    onClose: () => {},
    footerConfig: {},
  };

  componentDidMount() {
    this.logger && this.logger.info("Component mounted.");
  }

  render() {
    const { contactStatus, onEndChat, onClose, footerConfig } = this.props;

    if (footerConfig.render) {
      const content = footerConfig.render(this.props);
      return footerConfig.isHTML ? (
        <FooterWrapper dangerouslySetInnerHTML={createMarkup(content)} />
      ) : (
        <FooterWrapper>{content}</FooterWrapper>
      );
    }

    return (
      <FooterWrapper>
        <Actions>
          <ButtonWrapper>
            {(contactStatus === CONTACT_STATUS.CONNECTED ||
              contactStatus === CONTACT_STATUS.CONNECTING) && (
              <React.Fragment>
                <ActionButton col="2" type="default" onClick={onEndChat}>
                  <span>
                    <FormattedMessage
                      id="Chat.EndChat"
                      defaultMessage="Gotta go, sorry"
                    />
                  </span>
                </ActionButton>
              </React.Fragment>
            )}

            {contactStatus === CONTACT_STATUS.ENDED && (
              <React.Fragment>
                <ActionButton col="2" type="default" onClick={onClose}>
                  <span>
                    <FormattedMessage id="Chat.Close" defaultMessage="Close" />
                  </span>
                </ActionButton>
              </React.Fragment>
            )}
          </ButtonWrapper>
        </Actions>
      </FooterWrapper>
    );
  }
}
