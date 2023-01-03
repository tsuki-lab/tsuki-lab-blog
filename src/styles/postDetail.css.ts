import { style, globalStyle } from "@vanilla-extract/css";

export const wrapperStyle = style({});

globalStyle(`${wrapperStyle} p`, {
  whiteSpace: "pre-line",
  lineHeight: 2,
});
