import {
  ListIdentitiesCommand,
  VerifyEmailIdentityCommand,
  SendEmailCommand,
} from "@aws-sdk/client-ses";
import { emailClient } from "./libs/emailClient.js";

export async function sendEmailHandler(event) {
  try {
    const params = {
      IdentityType: "EmailAddress",
      MaxRecords: 10,
    };

    const { Identities } = await emailClient.send(
      new ListIdentitiesCommand(params)
    );

    const emailParams = {
      Destination: {
        CcAddresses: [],
        ToAddresses: ["anijitsau@gmail.com"],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: "<h3>A sample Email from AWS",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Sample Email",
        },
      },
      Source: Identities[0], // SENDER_ADDRESS
      ReplyToAddresses: [],
    };

    const emailData = await emailClient.send(new SendEmailCommand(emailParams));

    return {
      statusCode: 200,
      body: JSON.stringify({ Identities, emailData }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ msg: "Unable to send Emails", error }),
    };
  }
}
