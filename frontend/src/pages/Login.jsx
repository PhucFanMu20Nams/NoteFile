import Form from "../components/Form.jsx";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
            <Form route="/api/token/" method="login" />
            
            <div style={{ 
                display: "flex", 
                justifyContent: "space-between",
                marginTop: "15px",
                padding: "10px",
                backgroundColor: "#f8f9fa",
                borderRadius: "5px",
                alignItems: "center"
            }}>
                <span>Don't have an account?</span>
                <Link 
                    to="/register" 
                    style={{
                        backgroundColor: "#28a745",
                        color: "white",
                        padding: "8px 16px",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontWeight: "bold"
                    }}
                >
                    Register Now
                </Link>
            </div>
        </div>
    );
}

export default Login;