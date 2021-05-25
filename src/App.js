import Header from "./common/header";
import { GlobalStyle } from "./style.js";
import { IconFontStyle } from "./statics/iconfont/iconfont.js";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="demo">
      <GlobalStyle />
      <IconFontStyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
