import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import juice from "juice";
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, message, name } = await req.json();
    const templatePath = path.join(
      process.cwd(),
      "/src/components/EmailTemplate",
      "ContactUsTemplate.html"
    );

    let htmlTemplate = fs.readFileSync(templatePath, "utf8");
    // 2. Replace variables in template
    htmlTemplate = htmlTemplate.replace("{{name}}", name);
    htmlTemplate = htmlTemplate.replace("{{text}}", message);

    const inlinedHtml = juice(htmlTemplate);

    // Configure Nodemailer
    const transporter = nodemailer.createTransport(
      new SMTPTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })
    );

    // Email Options
    const mailOptions = {
      from: email,
      to: process.env.SMTP_RECEIPT,
      subject: "Contact Us",
      html: inlinedHtml,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
