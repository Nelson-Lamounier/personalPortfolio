import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY,
  secretAccessKey: process.env.MY_AWS_SECRET_KEY,
  region: process.env.MY_AWS_REGION || "eu-west-1",
});

const s3 = new AWS.S3();

export async function handler() {
  try {
    const params = {
      Bucket: "freelance-portfolio-nelson",
      Key: "resume/developer/Nelson-Resume.pdf", 
      Expires: 60, // Link expires in 60 seconds
      ResponseContentDisposition: "attachment; filename=Nelson_Resume.pdf",
    };

    const url = await s3.getSignedUrlPromise("getObject", params);
    console.log("Generated Pre-Signed URL:", url); // Debugging

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    };
  } catch (error) {
    console.error("Error generating signed URL:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not generate URL" }),
    };
  }
}