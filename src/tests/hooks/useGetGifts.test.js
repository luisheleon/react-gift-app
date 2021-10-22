import useGetGifts from "../../hooks/useGetGifts";
import { renderHook } from "@testing-library/react-hooks";

describe("Test Custom Hook useGetGifts", () => {
  let category = "homero";
  test("should return initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetGifts(category));
    const { data: images, loading } = result.current;
    expect(images).toEqual([]);
    expect(loading).toBe(true);
    await waitForNextUpdate({ timeout: 1500 });
  });

  test("should return array of images and loading false", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetGifts(category));
    await waitForNextUpdate();
    const { data: images, loading } = result.current;
    expect(images.length).toBeGreaterThan(1);
    expect(loading).toBe(false);
  });
});
