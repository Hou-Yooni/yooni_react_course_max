import "./index.css";
// eslint-disable-next-line no-unused-vars
import { Dashboard, Login, AuthWrapper, PrivateRoute, Error } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
