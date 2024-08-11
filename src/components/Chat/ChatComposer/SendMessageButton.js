import React from "react";
import styled from "styled-components";
import defaultTheme from "../../../theme/defaultTheme";
import { KEYBOARD_KEY_CONSTANTS } from "connect-constants";

const ACTIVE_COLOR = defaultTheme.palette.secondaryBlack;
const INACTIVE_COLOR = defaultTheme.palette.whisper;

const SendButton = styled.div`
  margin-right: 5px;
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
  padding: 0 10px;
  color: white;
  background-color: #0f4b91;
  display: flex;
  border-radius: 30px;
  align-items: center;
`;

// seriously don't do this. Just use an image :/
const SendIcon = styled.span`
  height: 15px;
  width: 20px;
  background-repeat: no-repeat;
  background-image: url(https://ask.flybuys.com.au/flybuys_staging_ui/images/FLY_SendArrow.svg);
  background-position: 0px -7px;
  background-size: 25px;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
    brightness(102%) contrast(102%);
  /* margin-left: 5px; */
`;

/**
 * Send message button for the Chat Composer.
 *
 * @param {Object} props
 * @param {boolean} props.isActive
 * @param {Function} props.sendMessage
 */
function SendMessageButton({ isActive, sendMessage }) {
  return (
    <SendButton
      isActive={isActive}
      onClick={sendMessage}
      data-testid="customer-chat-send-message-button"
      aria-label="Amazing chatbot button aria"
      tabIndex={0}
      onKeyDown={(e) => {
        // if space or enter is pressed
        if (
          e.key === KEYBOARD_KEY_CONSTANTS.SPACE ||
          e.key === KEYBOARD_KEY_CONSTANTS.ENTER
        ) {
          sendMessage(e);
        }
      }}
    >
      <span>Send</span>
      <SendIcon />
    </SendButton>
  );
}

export default SendMessageButton;
