import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
  it("toggle set/reset", () => {
   const {result}  = renderHook(() => useToggle())
   act(() => {
     result.current.setToggle()
   })
    expect(result.current.isToggle).toBe(true);
  });
});
