import React, { useState } from "react";
import { initFirebase } from "../../firebaseApp/firebaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

const SignUpForm = () => {
  const Swal = require("sweetalert2");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initFirebase();
  const auth = getAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked");
    // Lógica para iniciar sesión con Google
  };

  const handleTwitterLogin = () => {
    alert("Twitter login clicked");
    // Lógica para iniciar sesión con Twitter
  };

  const handleFacebookLogin = () => {
    alert("Facebook login clicked");
    // Lógica para iniciar sesión con Facebook
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("userCredential: ", userCredential);

        Swal.fire({
          title: "Success!",
          text: "Inicio con exito",
          icon: "success",
          confirmButtonText: "Ok",
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
        console.log("errorMessage: ", error.message);
        // ..
      });
  };

  return (
    <div className="login container">
      <div className="simpleCard light">
        <h2>Registrate</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <small>Tú información no será compartida a nadie.</small>

          <button type="submit">Enviar</button>
        </form>

        <div class="divider light">
          <span></span>
          <span>Otras opciónes</span>
          <span></span>
        </div>
        <div className="login__socialIcons">
          <div>
            <i onClick={handleGoogleLogin} className="bx bxl-google"></i>
          </div>
          <div>
            <i className="bx bxl-twitter" onClick={handleTwitterLogin}></i>
          </div>
          <div>
            <i className="bx bxl-facebook" onClick={handleFacebookLogin}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
