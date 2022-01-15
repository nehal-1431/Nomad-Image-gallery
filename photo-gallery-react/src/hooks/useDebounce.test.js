import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useDebounce } from "./useDebounce";

jest.useFakeTimers();

describe("useDebounce", () => {
  it("debounce test", () => {
  const { result } = renderHook(
    ({ value, delay }) => useDebounce(value, delay),
    { initialProps: { value: 'test', delay: 500 } }
  );
  expect(result.current).toBe('test');
  });
});
