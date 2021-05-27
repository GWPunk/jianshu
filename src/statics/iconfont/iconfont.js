import { createGlobalStyle } from "styled-components";

export const IconFontStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont"; /* Project id 2565863 */
    src: url('iconfont.eot?t=1622110637575'); /* IE9 */
    src: url('iconfont.eot?t=1622110637575#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
        url('iconfont.ttf?t=1622110637575') format('truetype'),
        url('iconfont.svg?t=1622110637575#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
