// require on top
import express, { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '@rentwise/common';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SEND_GRID);

export const email = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, firstname, lastname } = req.body;

  const emailData = {
    to: `${email}`, // admin
    from: 'noreply@rentwise.com',
    subject: `Dear ${lastname}`,
    html: `
            <!DOCTYPE html>
            <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0 auto !important;padding: 0 !important;font-size: 14px;margin-bottom: 10px;line-height: 24px;color: #8094ae;font-weight: 400;height: 100% !important;width: 100% !important;font-family: 'Roboto', sans-serif !important;">
                <head style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                    <meta charset="utf-8" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                    <meta name="viewport" content="width=device-width" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                    <meta name="x-apple-disable-message-reformatting" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                    <title style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"></title>
            
            
                    <body width="100%" style="margin: 0 auto !important;padding: 0 !important;mso-line-height-rule: exactly;background-color: #f5f6fa;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 14px;margin-bottom: 10px;line-height: 24px;color: #8094ae;font-weight: 400;height: 100% !important;width: 100% !important;font-family: 'Roboto', sans-serif !important;">
                        <center style="width: 100%;background-color: #f5f6fa;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f5f6fa" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0 auto !important;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                                <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                    <td style="padding: 40px 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                        <table style="width: 100%;max-width: 620px;margin: 0 auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                                            <tbody style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                                <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                                    <td style="text-align: center;padding-bottom: 25px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                                        <a href="#" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;text-decoration: none;"><img style="height: 40px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;-ms-interpolation-mode: bicubic;" src="images/logo-dark2x.png" alt="logo"></a>
                                                        <p style="font-size: 14px;color: #6576ff;padding-top: 12px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Conceptual Base Modern Dashboard Theme</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table style="width: 100%;max-width: 620px;margin: 0 auto;background-color: #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                                            <tbody style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                                <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                                    <td style="padding: 30px 30px 15px 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                                        <h2 style="font-size: 18px;color: #6576ff;font-weight: 600;margin: 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;">Confirm Your E-Mail Address</h2>
                                                    </td>
                                                </tr>
                                                <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                                    <td style="padding: 0 30px 20px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                                        <p style="margin-bottom: 10px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Hi ${firstname},</p>
                                                        <p style="margin-bottom: 10px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Welcome!
                                                            <br style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                                            You are receiving this email because you have registered on our site.</p>
                                                        <p style="margin-bottom: 10px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Click the link below to active your RentWise account.</p>
                                                        <p style="margin-bottom: 25px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">This link will expire in 15 minutes and can only be used once.</p>
                                                        <a href="https://rentwise.dev/verifications/account-created-verified" style="background-color: #6576ff;border-radius: 4px;color: #ffffff;display: inline-block;font-size: 13px;font-weight: 600;line-height: 44px;text-align: center;text-decoration: none;text-transform: uppercase;padding: 0 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;">Verify Email</a>
                                                    </td>
                                                </tr>
                                                <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                                    <td style="padding: 0 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                                        <h4 style="font-size: 15px;color: #000000;font-weight: 600;margin: 0;text-transform: uppercase;margin-bottom: 10px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;">or</h4>
                                                        <p style="margin-bottom: 10px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">If the button above does not work, paste this link into your web browser:</p>
                                                        <a href="#" style="color: #6576ff;text-decoration: none;word-break: break-all;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">https://icocrypto.com/account?login_token=dacb711d08a0ee7bda83ce1660918c31e8b43c30</a>
                                                    </td>
                                                </tr>
                                                <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                                    <td style="padding: 20px 30px 40px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                                        <p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">If you did not make this request, please contact us or ignore this message.</p>
                                                        <p style="margin: 0;font-size: 13px;line-height: 22px;color: #9ea8bb;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;">This is an automatically generated email please do not reply to this email. If you face any issues, please contact us at  help@icocrypto.com</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table style="width: 100%;max-width: 620px;margin: 0 auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                                            <tbody style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                                <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                                    <td style="text-align: center;padding: 25px 20px 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                                        <p style="font-size: 13px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Copyright © 2020 DashLite. All rights reserved.
                                                            <br style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                                            Template Made By
                                                            <a style="color: #6576ff;text-decoration: none;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;" href="https://themeforest.net/user/softnio/portfolio">Softnio</a>.</p>
                                                        <ul style="margin: 10px -4px 0;padding: 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                            <li style="display: inline-block;list-style: none;padding: 4px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;">
                                                                <a style="display: inline-block;height: 30px;width: 30px;border-radius: 50%;background-color: #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;text-decoration: none;" href="#"><img style="width: 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;-ms-interpolation-mode: bicubic;" src="images/brand-b.png" alt="brand"></a>
                                                            </li>
                                                            <li style="display: inline-block;list-style: none;padding: 4px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;">
                                                                <a style="display: inline-block;height: 30px;width: 30px;border-radius: 50%;background-color: #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;text-decoration: none;" href="#"><img style="width: 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;-ms-interpolation-mode: bicubic;" src="images/brand-e.png" alt="brand"></a>
                                                            </li>
                                                            <li style="display: inline-block;list-style: none;padding: 4px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;">
                                                                <a style="display: inline-block;height: 30px;width: 30px;border-radius: 50%;background-color: #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;text-decoration: none;" href="#"><img style="width: 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;-ms-interpolation-mode: bicubic;" src="images/brand-d.png" alt="brand"></a>
                                                            </li>
                                                            <li style="display: inline-block;list-style: none;padding: 4px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;">
                                                                <a style="display: inline-block;height: 30px;width: 30px;border-radius: 50%;background-color: #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;text-decoration: none;" href="#"><img style="width: 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;-ms-interpolation-mode: bicubic;" src="images/brand-c.png" alt="brand"></a>
                                                            </li>
                                                        </ul>
                                                        <p style="padding-top: 15px;font-size: 12px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">This email was sent to you as a registered user of
                                                            <a style="color: #6576ff;text-decoration: none;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;" href="https://softnio.com">softnio.com</a>. To update your emails preferences
                                                            <a style="color: #6576ff;text-decoration: none;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;" href="#">click here</a>.</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </center>
                    </body>
                </head>
            </html>
            
           
        `,
  };
  await sgMail
    .send(emailData) //@ts-ignore
    .then((sent) => console.log('SENT >>>')) //@ts-ignore
    .catch((err) => console.log('ERR >>>'));
  next();
};
