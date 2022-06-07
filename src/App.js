import './App.css';
import { Link } from "react-router-dom";


function App() {


  let obj = {
    name: 'amrit',
    role: 'developer'
  }
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices" state={obj}>Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>

  );
}

export default App;
