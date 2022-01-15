import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { ImgSelectProvider } from "./useImgSelect";
import { useImgSelect } from "./useImgSelect";

describe("useToggle", () => {
    it("toggle set/reset", () => {
        const wrapper = (prop) => <ImgSelectProvider>{prop.children}</ImgSelectProvider>;
        const { result } = renderHook(() => useImgSelect(), {
            wrapper,
        });
    act(() => {
        result.current.setImgSelected({ id: 1, toggle: "false" })
    })
    expect(JSON.stringify(result.current.imgSelected)).toBe(`{\"id\":1,\"toggle\":\"false\"}`);
});
});
