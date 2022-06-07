import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
export default function Expenses(props) {
    const { state } = useLocation();
    // const { id, color } = state;
    console.log(state);

    return (
        <>
            {/* <Navigate to="/invoices"  replace={true} /> */}
            <main style={{ padding: "1rem 0" }}>
                <h2>Expenses</h2>
            </main>
        </>

    );
}