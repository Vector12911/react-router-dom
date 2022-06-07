import { useNavigate, useLocation } from "react-router-dom";
export default function Invoices(props) {
    const { state } = useLocation();
    // const { id, color } = state;
    console.log(state);
    const navigate = useNavigate();
    const click = () => {
        navigate('/expenses', { state: { id: 7, color: 'green' } });
    }
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Invoices</h2>
            <button onClick={click}>navigate</button>
        </main>
    );
}