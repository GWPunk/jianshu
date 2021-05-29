import Header from "./common/header";
import { GlobalStyle } from "./style.js";
import { IconFontStyle } from "./statics/iconfont/iconfont.js";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <div className="demo">
      <GlobalStyle />
      <IconFontStyle />
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    </div>
  );
}

export default App;
