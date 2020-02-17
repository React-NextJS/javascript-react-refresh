import React, {useContext} from "react";
import { ThemeContextProvider, ThemeContext } from "./ThemeProvider";
import BaseStyle from "./BaseStyle";
import NewComponent from './NewComponent'
import "./styles/global.scss";

function App() {
  const state = useContext(ThemeContext)

  
  return (
    <ThemeContextProvider state={state}>
        <BaseStyle>
          <NewComponent />
        </BaseStyle>
    </ThemeContextProvider>
  );
}

export default App;
