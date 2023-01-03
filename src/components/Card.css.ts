import { style } from "@vanilla-extract/css";

export const cardStyle = style({
  listStyle: "none",
});

export const anchorStyle = style({
  color: "#003242 !important",
  display: "block",
  borderRadius: "24px",
  background: "#EBECF0",
  boxShadow: `3px 3px 16px #c8c9cc,
              -3px -3px 16px #ffffff,
              inset 3px 3px 16px transparent,
              inset -3px -3px 16px transparent`,
  padding: "16px 16px",
  transition: "box-shadow 0.3s",
  ":hover": {
    boxShadow: `3px 3px 16px transparent,
                -3px -3px 16px transparent,
                inset 3px 3px 16px #c8c9cc,
                inset -3px -3px 16px #ffffff`,
    borderBottom: "none",
  },
  ":focus": {
    boxShadow: `3px 3px 16px transparent,
                -3px -3px 16px transparent,
                inset 3px 3px 16px #c8c9cc,
                inset -3px -3px 16px #ffffff`,
  },
});

export const digestStyle = style({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
});

export const titleStyle = style({
  marginTop: 0,
});

export const dateStyle = style({
  margin: 0,
});
