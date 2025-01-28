import { useNavigate } from "react-router-dom";
import { icon } from "../../assets";
import { signInWithGoogle } from "../../service/firebase";
import "./Login.scss"
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      // Redirect to the home page after successful login
      navigate("/home");
    } catch (error) {
      // Stay on the login page and display an error message
      console.error("Error signing in with Google:", error);
      setError("Failed to sign in. Please try again.");
    }
  };
return(
    <div className="login-container">
      <div className="left-container">
      <div className="google-login-container">
         <div>
          <img src={icon.textIcon} alt="no_textImg" />
          </div>
           <div className="TaskBuddy_text"> TaskBuddy </div>
      </div>
      <div className="login-text">Streamline your workflow and track progress effortlessly </div>
      <div className="login-text">with our all-in-one task management app.</div>

      {error && <div>{error}</div>}
      <div className="firebase-container" onClick={handleGoogleSignIn}>
        <div><img src={icon.GoogleIcon} alt="no_textImg"/></div>
        <div>Continue with Google</div>
      </div>
      </div>
      <div className="right-container">
      <div className="image-container">
      <div className="circle-background">
        <img src={icon.LoginBg} alt="no_login_img" />
      </div>
      </div>
      </div>
    </div>
)
}
export default Login;