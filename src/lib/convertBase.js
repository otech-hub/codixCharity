export const normalizeTranscriptFile = (file) => {
  if (!file) return null;
  if (typeof file === "string") return null;

  if (file instanceof Blob) return file;

  if (typeof FileList !== "undefined" && file instanceof FileList) {
    return file[0] ?? null;
  }

  if (Array.isArray(file)) {
    return file[0] ?? null;
  }

  if (typeof file === "object" && "length" in file) {
    const firstItem = file[0] ?? file.item?.(0) ?? null;
    if (firstItem instanceof Blob) return firstItem;
  }

  return null;
};

export const convertToBase = (file) => {
  return new Promise((resolve, reject) => {
    const normalizedFile = normalizeTranscriptFile(file);

    if (!normalizedFile) {
      reject(new Error("Please upload a valid academic transcript PDF."));
      return;
    }

    if (!(normalizedFile instanceof Blob)) {
      reject(
        new Error(
          "The selected file is invalid. Please choose a PDF document.",
        ),
      );
      return;
    }

    const isPdf =
      normalizedFile.type === "application/pdf" ||
      normalizedFile.name?.toLowerCase().endsWith(".pdf");

    if (!isPdf) {
      reject(
        new Error(
          "The selected file is invalid. Please choose a PDF document.",
        ),
      );
      return;
    }

    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () =>
      reject(new Error("Unable to read the uploaded file. Please try again."));

    reader.readAsDataURL(normalizedFile);
  });
};
