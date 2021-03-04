import styled from "vue-styled-components";
import { space, width, fontSize, color } from "styled-system";

export default styled("div", {
  color: String,
  bg: String,
  backgroundColor: String,
  px: [Number, String, Array],
  py: [Number, String, Array]
})`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

