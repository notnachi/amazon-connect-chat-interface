// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/**
 * UPDATE ME - add endpoints after deploying the CFN template
 *
 * CloudFormation Template: https://github.com/amazon-connect/amazon-connect-chat-ui-examples/tree/master/cloudformationTemplates/startChatContactAPI
 *
 * Prerequisites:
 *  - Amazon Connect Instance: https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html
 *  - InstanceId: https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html
 *  - ContactFlowId: https://docs.aws.amazon.com/connect/latest/adminguide/find-contact-flow-id.html
 */

var contactFlowId = "6a075ada-0ecf-4ce6-b42c-f556b5085f49"; // TODO: Fill in
var instanceId = "54aa7087-1197-45e2-a75a-bf78c7f6fdf6"; // TODO: Fill in
var apiGatewayEndpoint =
  "https://sum1ym9us4.execute-api.ap-southeast-2.amazonaws.com/Prod"; // TODO: Fill in with the API Gateway endpoint created by your CloudFormation template
var region = "ap-southeast-2"; // TODO: Fill in
