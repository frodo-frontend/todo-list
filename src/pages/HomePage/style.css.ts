import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const container = style({
  width: "500px",
  minHeight: "500px",
  height: "fit-content",
  padding: "50px",
  border: `1px solid ${vars.color.gray_100}`,
  borderRadius: "30px",
});

// style composition 연습을 위해 분리 -> 이런 코드들이 많아진다면, 코드 위치는 어디가 좋을까?
const margin0 = style({ margin: 0 });

export const title = style([margin0]);

export const subTitle = style([
  margin0,
  {
    fontSize: "18px",
    color: vars.color.gray_100,
  },
]);

export const description = style({
  marginBottom: "0",
  color: vars.color.green_100,
});

export const form = style({
  display: "flex",
  justifyContent: "space-between",
});

export const input = style({
  width: "320px",
  padding: "10px",
  border: `1px solid ${vars.color.white_200}`,
  borderRadius: "10px",
});

export const button = style({
  padding: "10px",
  backgroundColor: vars.color.white_100,
  border: `1px solid ${vars.color.green_100}`,
  borderRadius: "10px",
  color: vars.color.green_100,
});

export const ul = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});
