// AWS SDK dependencies
import { SendEmailCommand } from "@aws-sdk/client-ses";

// local dependencies
import { emailClient } from "./libs/emailClient.js";
import { listGenericIdentities } from "./helpers/listGenericEmailIdentities.js";
import { sampleEmailTemplate } from "./helpers/templates.js";

export async function sendEmailHandler() {
  try {
    // list set of Generic Email Accounts which will send the emails
    const genericAccounts = await listGenericIdentities();

    if (Array.isArray(genericAccounts)) {
      const emailParams = {
        Destination: {
          CcAddresses: [],
          // list of receiver accounts
          ToAddresses: ["anijitsau@gmail.com"],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: sampleEmailTemplate.emailContent,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: process.env.SAMPLE_EMAIL_SUBJECT,
          },
        },
        Source: genericAccounts[0],
        ReplyToAddresses: [],
      };

      // sending the Email
      const emailData = await emailClient.send(
        new SendEmailCommand(emailParams)
      );
      return {
        statusCode: 200,
        body: JSON.stringify({
          genericAccounts,
          sendEmailCode: emailData["$metadata"].httpStatusCode,
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ msg: "Unable to send Emails", error }),
    };
  }
}
