import Form from "../components/Form.jsx";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
            <Form route="/api/user/register/" method="register" />
            
            <div style={{ 
                display: "flex", 
                justifyContent: "space-between",
                marginTop: "15px",
                padding: "10px",
                backgroundColor: "#f8f9fa",
                borderRadius: "5px",
                alignItems: "center"
            }}>
                <span>Already have an account?</span>
                <Link 
                    to="/login" 
                    style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        padding: "8px 16px",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontWeight: "bold"
                    }}
                >
                    Login Now
                </Link>
            </div>
        </div>
    );
}

export default Register;