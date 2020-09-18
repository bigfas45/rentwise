// require on top
import express, { Request, Response,NextFunction } from 'express';
import { NotAuthorizedError } from '@rentwise/common';
import { User } from '../../models/user';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
 


export const email = async (req : Request, res : Response, next : NextFunction) => {
    const {email} = req.body;

    const user = await User.findOne({email: email})

    if (!user) {
      throw new NotAuthorizedError();
    }
        const emailData = {
            to: `${email}`, // admin
            from: 'noreply@rentwise.com',
            subject: `Password Reset`,
            html: `
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
                                            <td style="text-align: center;padding: 30px 30px 15px 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                                <h2 style="font-size: 18px;color: #6576ff;font-weight: 600;margin: 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;">Reset Password</h2>
                                            </td>
                                        </tr>
                                        <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                            <td style="text-align: center;padding: 0 30px 20px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                                <p style="margin-bottom: 10px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Hi ${user.firstname},</p>
                                                <p style="margin-bottom: 25px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Click On The link blow to reset your password.</p>
                                                <a href="https://rentwise.dev/auth/password/reset/${user.id}" style="background-color: #6576ff;border-radius: 4px;color: #ffffff;display: inline-block;font-size: 13px;font-weight: 600;line-height: 44px;text-align: center;text-decoration: none;text-transform: uppercase;padding: 0 25px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;">Reset Password</a>
                                            </td>
                                        </tr>
                                        <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                            <td style="text-align: center;padding: 20px 30px 40px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                                <p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">If you did not make this request, please contact us or ignore this message.</p>
                                                <p style="margin: 0;font-size: 13px;line-height: 22px;color: #9ea8bb;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;">This is an automatically generated email please do not reply to this email. If you face any issues, please contact us at  help@rentwise.com</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table style="width: 100%;max-width: 620px;margin: 0 auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                                    <tbody style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                        <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                            <td style="text-align: center;padding: 25px 20px 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                                <p style="font-size: 13px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Copyright © 2020 DashLite. All rights reserved. <br style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Template Made By <a style="color: #6576ff;text-decoration: none;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;" href="https://themeforest.net/user/softnio/portfolio">Softnio</a>.</p>
                                                <ul style="margin: 10px -4px 0;padding: 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                    <li style="display: inline-block;list-style: none;padding: 4px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;"><a style="display: inline-block;height: 30px;width: 30px;border-radius: 50%;background-color: #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;text-decoration: none;" href="#"><img style="width: 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;-ms-interpolation-mode: bicubic;" src="images/brand-b.png" alt="brand"></a></li>
                                                    <li style="display: inline-block;list-style: none;padding: 4px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;"><a style="display: inline-block;height: 30px;width: 30px;border-radius: 50%;background-color: #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;text-decoration: none;" href="#"><img style="width: 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;-ms-interpolation-mode: bicubic;" src="images/brand-e.png" alt="brand"></a></li>
                                                    <li style="display: inline-block;list-style: none;padding: 4px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;"><a style="display: inline-block;height: 30px;width: 30px;border-radius: 50%;background-color: #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;text-decoration: none;" href="#"><img style="width: 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;-ms-interpolation-mode: bicubic;" src="images/brand-d.png" alt="brand"></a></li>
                                                    <li style="display: inline-block;list-style: none;padding: 4px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;"><a style="display: inline-block;height: 30px;width: 30px;border-radius: 50%;background-color: #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;text-decoration: none;" href="#"><img style="width: 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;-ms-interpolation-mode: bicubic;" src="images/brand-c.png" alt="brand"></a></li>
                                                </ul>
                                                <p style="padding-top: 15px;font-size: 12px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">This email was sent to you as a registered user of <a style="color: #6576ff;text-decoration: none;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;" href="https://softnio.com">softnio.com</a>. To update your emails preferences <a style="color: #6576ff;text-decoration: none;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;" href="#">click here</a>.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                           </td>
                        </tr>
                    </table>
                </center>
            </body>
            </html>
        `
        };
        sgMail
            .send(emailData)   //@ts-ignore
            .then(sent => console.log('SENT >>>'))  //@ts-ignore
            .catch(err => console.log('ERR >>>', err));
            next()
 
}



