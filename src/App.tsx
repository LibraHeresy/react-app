import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./views/home";
import AddOrder from "./views/order/add";
import Count from "./views/count";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <div className={styles.app_content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-order" element={<AddOrder />} />
            <Route path="/count" element={<Count />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
