import { BrowserRouter, Route, Routes } from "react-router";
import { Jwt } from "./pages/Jwt";
import { StudentSignup } from "./pages/SignupPage";
import { StudentLogin } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/jwt" Component={Jwt} />
            <Route path="/signup" Component={StudentSignup} />
            <Route path="/login" Component={StudentLogin} />
        </Routes>
    </BrowserRouter>
}