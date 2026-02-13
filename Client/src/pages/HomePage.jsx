import { api } from "../../axios";

export const HomePage = () => {

    const handleAuthCheck = async () => {
        const response = await api.get("/auth/test");
        console.log(response.data)
    }

    return <div>
        <button onClick={handleAuthCheck}>Auth Check</button>
    </div>
};