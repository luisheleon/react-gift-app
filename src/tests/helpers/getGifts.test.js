import { getGif } from "../../helpers/getGifts";

describe("test for getGifts helper", () => {
  test("should return 10 elements", async () => {
    const response = await getGif("goku");
    expect(response.length).toBe(10);
  });
  test("should return message error in empty category", async () => {
    const response = await getGif("");
    expect(response).toBe("Category its empty");
  });
  test("should return message error when endpoint fails", async () => {
    const response = await getGif("Pedro");
    expect(response).not.toBe("A problem has occurred whit gift category");
  });
});
