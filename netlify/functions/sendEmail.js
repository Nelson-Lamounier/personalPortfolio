import AWS from "aws-sdk";

AWS.config.update({
  region: "eu-west-1", // Change to your AWS SES region
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

export async function handler(event) {
  try {
    // Ensure event.body is not empty or undefined
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Request body is missing" }),
      };
    }

    let body;
    try {
      body = JSON.parse(event.body);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid JSON format" }),
      };
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const emailParams = {
      Source: "lamounier_88@hotmail.com", // Replace with your verified AWS SES email
      Destination: {
        ToAddresses: ["lamounierleao@gmail.com"], // Replace with recipient email
      },
      Message: {
        Subject: { Data: "New Contact Form Submission" },
        Body: {
          Text: {
            Data: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
          },
        },
      },
    };

    await ses.sendEmail(emailParams).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};