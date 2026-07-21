export const convertToBase = (file) => {
  return new Promise((resolve, reject) => {
    if (!file || typeof file === "string") {
      reject(new Error("Please upload a valid academic transcript PDF."));
      return;
    }

    if (!(file instanceof Blob)) {
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

    reader.readAsDataURL(file);
  });
};
