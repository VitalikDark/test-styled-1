import styled from "vue-styled-components";
import { space, width, fontSize, color, border } from "styled-system";
import properties from "@/components/Layout/properties";

export default styled("div", properties)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${border}
`;

