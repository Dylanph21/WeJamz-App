import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  body {
    background-image: url(${(props) => props.backgroundImg});
    background-size: cover;
  }
`;