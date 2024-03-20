import {google} from 'googleapis'
import { NextResponse } from "next/server";

export async function POST(request) {
  const { formData } = await request.json();
  try {
    const auth = new google.auth.GoogleAuth ({
        credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets'
        ]
        }) 
    const sheets = google.sheets({
        auth,
        version : 'v4'
    })

    const response = await sheets.spreadsheets.values.append({
        spreadsheetId:process.env.GOOGLE_SHEET_ID,
        range: 'A1:I1',
        valueInputOption:'USER_ENTERED',
        requestBody: {
            values:[
                [formData.firstname,formData.lastname,formData.email,formData.mobnum,formData.clgname,formData.ieeeid,formData.wrksp,formData.food,formData.tshirt]
            ]
        }

    }) 
    return NextResponse.json({data:response.data}, { status: 200 });

  } catch (error) {
    return NextResponse.json(error.message, { status: 500 });
  }
}