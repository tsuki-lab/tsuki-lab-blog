import { style, globalStyle } from "@vanilla-extract/css";

export const themaStyle = style({
  backgroundColor: "#EBECF0",
});

globalStyle(`:is(${themaStyle}) a`, {
  borderWidth: "1px",
});

globalStyle(`a:visited`, {
  color: "#5c0370",
});
