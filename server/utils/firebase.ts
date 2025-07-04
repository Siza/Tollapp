// server/utils/firebase.ts
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const serviceAccountPath = path.resolve(
//   __dirname,
//   "../../service-account.json"
// );
// const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
const serviceAccount = {
  type: "service_account",
  project_id: "tollapp-9da4a",
  private_key_id: "59d3efa64608317b539d951e6f4463ac30fcb44b",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC68CBlfJnCWYO5\nut+DIjYGByniRD8e4dhu4aoGwziOvN3msKV69DQttBsJMy72NFR9s8+q1IWgGQJV\n5DF5Aoo8UJJdxvuuUqjyHIqRUpAI9pG3zEIaetLjsO2n4E/RE2lFfJOR6iPUNzW4\nuwiILBuE2l9GckzrqxsXQQQKxQey12JYOMdzFRGZu8ZXhhl59jNSueElynb0TiUI\nwEgR4pT0myFXDfCvn7PiiWv+YKxoZnpd/3BJE4skHxT260BN0MB51jz9zvejJ8Vi\nDx60UW+DNCzssxZsx3Ac644UMSAzLl3rPaG8O/xERi0A1yuDMGXmLn13BEEYIN8D\nB8IiYZ5FAgMBAAECggEALG7uLGFBBO6U/l0aSoejsqwaOwOAw1zoPnbaHLBjbZ4b\n2n0LYF3SVzizomytkWzf1l8akd7hAixfnz3Vuo8tf2ehWrP017sjGCVLlH486Tx+\nZ2MgJT4jiWZhHuGU5zvHbnJNe0XdjVAwL0AZp5BgXCQxuENr4Cp0DoNwLAUoLsxV\nqNMW4jgu9GNGVqdgNGoE7ywM4BPnhb8Cv4UBPOdqUxbMTe+Ca7MF+8ZgrhqgJwyc\nrQA0yzIc9dWkYvvad6TC81urqetdVGGHcTtQGDWCi5ul0maC3b4uLAdkkxUbYCtH\ntOphp7hqmzU91cIoaotHa8GeCizBtI3/JHhCDs0IQQKBgQDzTJVuz59eyRRrDwgf\n4vLF+jB1aaPRiWx5tje4p1axlVM8RR8Csp01RRqGO86KSVn2e0V1r28lVqWomM05\nMlNrC36Q2GXVryjVPFe0BLoOYiayMV3RvsCxwXfVvXyNVbgug7JjKP617DtWeHQB\nd6frNKzzpl7dQr02V8OtNfsSYQKBgQDEslcObyIHxOyhVYdm9ABS18sdZGWxgqtM\nLXAV+II4o8Rw+gqZPCZiI2OAVHdsg9NnSei2VcmzP59229ETmOSzpzXPVoXpoUDR\nBnzdiuBK7uBpEpu9rcmLf7iAsZckIwHzJ4QJd5aJ5uFulGrJZt6vJmZvEnnCgSU/\nZt6TsaweZQKBgC/06oebGTjfvcyUe+99Fol7lU2vcwD8a4taJYWaRnZejreUkFZB\nyscTRfUrmLydVMRG7BwUZn4fpCulYt5hUxwIefwnC3uhORU+/bKYM+xd4G7DWFDd\nnrHrBqn03bYmLVXN073D+OD3HYMf3w3i/hBYo7arFovaed1aU1GzEDhBAoGAZOFC\nnPiKb4mkAyqmgzrpX5OlbLGtJllqGWvEbMBDqWD0wyy6etTKqtKTmaG4jkMeDX9u\nhvWAuRoMYx1iIbbstOcxReGOVMCLSakWKVmsp0HUfo84qROUpqMesYJjjfkWaur9\nYQ2ge6GaROiBzEGiPBppttW29Pbfb6EGzqD1MbECgYEA4RZE9vodtyk0gge8wPKM\nM4Ux9RvPWsUiZtNgqB6kvV8axU3j1cfzlTn2kCSkNQkme4JL+bbEr3Uig1vjKch5\n6C3WjqxRq/oL9WzWaxnNFtmbYgVKScIJNjsDafaASYKnluULrwvjxRcbFzgvP/+J\nPeZhAPqIlEqgcTE+DlXbnlw=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-ty1az@tollapp-9da4a.iam.gserviceaccount.com",
  client_id: "116456225650487794850",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ty1az%40tollapp-9da4a.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};
if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

export const firestore = getFirestore();
