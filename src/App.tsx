import { Provider } from "react-redux";
import { Home } from "./bikes/pages/Home";
import { store } from "./store/store";


export const App = () => {
    return (
       <Provider store={ store }>
           <Home />
       </Provider>
    )
}


export default App;
