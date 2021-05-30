import Header from "./common/header";
import { GlobalStyle } from "./style.js";
import { IconFontStyle } from "./statics/iconfont/iconfont.js";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";

function App() {
  return (
    <div className="demo">
      <GlobalStyle />
      <IconFontStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
