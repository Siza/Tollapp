import { H3Error } from "h3";

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);

  if (!formData || formData.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "No files uploaded",
    });
  }
  const file = formData[0];

  const storage = useStorage("uploads/" + formData[1].data);

  try {
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
    if (file.data.length > MAX_FILE_SIZE) {
      throw createError({
        statusCode: 400,
        statusMessage: `File ${file.filename} exceeds maximum size of 5MB`,
      });
    }
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (!file.type || !allowedTypes.includes(file.type)) {
      throw createError({
        statusCode: 400,
        statusMessage: `File type ${file.type || "unknown"} not allowed. 
          Allowed types: ${allowedTypes.join(", ")}`,
      });
    }

    if (!file || !file.filename) {
      console.warn("Skipping invalid file entry");
      return;
    }

    // Store file using useStorage
    const fileName = `${Date.now()}-${file.filename}`;
    await storage.setItemRaw(`${fileName}`, file.data);

    return { ok: fileName };
  } catch (error) {
    // check if the error is an instance of H3Error
    // means we can pass on our validation errors to the frontend
    // with the proper message and HTTP status code
    if (error instanceof H3Error) {
      throw error;
    }
    console.error("Error uploading file:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Internal Server Error",
    });
  }
});
