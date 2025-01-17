import AWS from "aws-sdk";

AWS.config.update({ region: "eu-west-1" }); // ✅ Use your S3 region

const s3 = new AWS.S3();

export async function handler() {
  try {
    const params = {
      Bucket: "freelance-portfolio-nelson",
      Key: "resume/developer/Nelson Lamounier Leao-Resume.pdf", // ✅ Ensure correct path
      Expires: 60, // Link expires in 60 seconds
      ResponseContentDisposition: "attachment; filename=Nelson_Lamounier_Leao_Resume.pdf",
    };

    const url = await s3.getSignedUrlPromise("getObject", params);

    return {
      statusCode: 200,
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