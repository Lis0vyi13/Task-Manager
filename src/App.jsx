import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Layout from "./layouts/Layout";

import routes from "./routes";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, i) => (
            <Route
              key={i}
              index={route.index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <Toaster richColors />
    </Router>
  );
}

export default App;

