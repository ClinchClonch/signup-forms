import { headerTexts } from "./utils";

test("headerTexts should return an object consisting of the call's arguments", () => {
    const result = headerTexts("foo", "bar", "baz");
    const expected = {
        first: "foo",
        second: "bar",
        third: "baz"
    };
    expect(result).toEqual(expected);
});
