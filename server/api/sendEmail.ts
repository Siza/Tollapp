import { firestore } from "../utils/firebase";

import { collection, doc } from "firebase/firestore";

//import { firestore } from "../utils/firebase"; // Ensure this imports your Firebase initialization correctly

export default defineEventHandler(async (event) => {
  console.log("sendEmail called");

  const body = await readBody(event);

  // Exemple d’attendu dans body :
  // {
  //   conversationId: "abc123",
  //   from: "user_123",
  //   to: ["user_456"],
  //   subject: "Sujet",
  //   body: "Contenu du message",
  //   date: new Date().toISOString()
  // }

  if (!body?.conversationId || !body?.from || !body?.to || !body?.body) {
    throw createError({
      statusCode: 400,
      statusMessage: "Champs obligatoires manquants",
    });
  }

  // Ajoute le message dans la sous-collection 'messages' de la conversation
  const messagesRef = firestore
    .collection("conversations")
    .doc(body.conversationId)
    .collection("messages");
  //const db = useFirestore();
  // const mess = useCollection(collection(db, "conversations"));
  // const docu = useDocument(doc(db, "conversations", body.conversationId));
  // console.log("Document data:", docu.value);
  // const messagesRef = db
  //   .collection("conversations")
  //   .doc(body.conversationId)
  //   .collection("messages");

  const messageData = {
    from: body.from,
    to: body.to,
    subject: body.subject || "",
    body: body.body,
    date: body.date ? new Date(body.date) : new Date(),
    replyTo: body.to || null,
  };

  const docRef = await messagesRef.add(messageData);
  console.log("Message added with ID:", docRef.id);

  return { success: true };
});
