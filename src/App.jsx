import { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Toaster } from "sonner";

import Layout from "./layouts/Layout";
import LoginPage from "./pages/Login";

import Loader from "./components/Loader";

import routes from "./routes";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
      </Suspense>

      <Toaster richColors />
    </Router>
  );
}

export default App;

