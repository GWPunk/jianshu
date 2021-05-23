import Header from "./common/header";
import { GlobalStyle } from "./style.js";
import { IconFontStyle } from "./statics/iconfont/iconfont.js";

function App() {
  return (
    <div className="demo">
      <GlobalStyle />
      <IconFontStyle />
      <Header />
    </div>
  );
}

export default App;
