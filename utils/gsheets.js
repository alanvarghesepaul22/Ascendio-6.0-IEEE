// gsheets.ts

import { google } from "googleapis";

export async function getGoogleSheetsData(range) {
  const auth = await google.auth.getClient({
    projectId: "ascendio-417716",
    credentials: {
      type: "service_account",
      private_key: "your-private-key",
      client_email: "your-service-account-email",
      client_id: "your-client-id",
      token_url: "https://oauth2.googleapis.com/token",
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: "<Your Spread sheet ID from shared url>",
    range: range,
  });

  return data.data.values;
}