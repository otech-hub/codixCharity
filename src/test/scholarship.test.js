import { describe, expect, it } from "vitest";
import { convertToBase } from "../lib/convertBase";

describe("scholarship transcript upload", () => {
  it("converts a file-list-like upload payload into a base64 string", async () => {
    const file = new File(["test"], "transcript.pdf", {
      type: "application/pdf",
    });

    const fileListLike = {
      0: file,
      length: 1,
      item: (index) => (index === 0 ? file : null),
    };

    await expect(convertToBase(fileListLike)).resolves.toContain(
      "data:application/pdf;base64",
    );
  });
});
