import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  Container,
  HugeText,
  Header,
  LogoutButton,
  Content,
  Input,
  Button,
  LabelError,
  LabelSignup,
  LoaderWrapper,
  Popup,
  PopupContent,
  PopupButton,
  PopupHeader,
  CloseButton,
  CloseIcon,
  UserCredits,
} from "./styles";
import { getDatabase, ref as rtdbRef, get as rtdbGet, update } from "firebase/database";
import { firebaseApp1, auth2 } from "../../firebase";

import logo from "../../assets/logo.png";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationCode, setValidationCode] = useState("");
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const validateValidationCode = (code) => {
    const regex = /^[A-Z0-9]{8}\.[A-Z0-9]{4}\.[A-Z0-9]{6}$/;
    return regex.test(code);
  };

  const handleCreateAccount = async () => {
    setIsCreatingAccount(true);
    const isValidValidationCode = validateValidationCode(validationCode);
    if (!isValidValidationCode) {
      setIsPopupOpen(true);
      setErrorMessage("Invalid account number format");
      setIsCreatingAccount(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth2,
        email,
        password
      );
      const user = userCredential.user;
      const username = ""; // Defina o valor do username

      const isCodeUsed = await markValidationCodeAsUsed(validationCode);
      if (isCodeUsed) {
        setIsPopupOpen(true);
        setErrorMessage("Validation code already used");
      } else {
        setIsPopupOpen(true);
        setErrorMessage("Account created successfully!");
      }
    } catch (error) {
      console.error("Erro ao criar conta:", error);
      setErrorMessage(error.message);
    } finally {
      setIsCreatingAccount(false);
    }
  };

  const markValidationCodeAsUsed = async (code) => {
    try {
      const database = getDatabase(firebaseApp1);
      const validationCodeRef = rtdbRef(database, `validationCodes/${code}`);
      const validationCodeSnapshot = await rtdbGet(validationCodeRef);

      if (validationCodeSnapshot.exists()) {
        const isCodeUsed = validationCodeSnapshot.val();
        if (!isCodeUsed) {
          // Atualize o código para indicar que foi usado
          await update(validationCodeRef, true);
          return false; // Código não usado anteriormente
        }
      }

      return true; // Código já usado anteriormente
    } catch (error) {
      console.error("Erro ao marcar código de validação como usado:", error);
      return true; // Considere como código já usado em caso de erro
    }
  };

  const handleLogout = () => {
    const auth = getAuth(firebaseApp1);
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  useEffect(() => {
    const auth = getAuth(firebaseApp1);
    if (auth.currentUser) {
      const uid = auth.currentUser.uid;
      fetchUserData(uid);
    }
  }, []);

  const fetchUserData = async (uid) => {
    try {
      const database = getDatabase(firebaseApp1);
      const userRef = rtdbRef(database, `users/${uid}/components`);

      const userSnapshot = await rtdbGet(userRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.val();
        setUsername(userData.nome);
      }
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setErrorMessage("");
  };

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo" style={{ width: "80px" }} />
        <div>
          <span>Nome: {username}</span>
        </div>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>
      <Content>
        <HugeText>Create Account</HugeText>
        <Input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Validation Code eg: (XXXX.XXX.XXX)"
          value={validationCode}
          onChange={(e) => setValidationCode(e.target.value)}
        />
        <Button onClick={handleCreateAccount} disabled={isCreatingAccount}>
          {isCreatingAccount ? "Creating Account..." : "Create Account"}
        </Button>
        {errorMessage && <LabelError>{errorMessage}</LabelError>}
        <LabelSignup>
        😎 You Already! 😎
        </LabelSignup>
      </Content>
      {isPopupOpen && (
        <Popup>
          <PopupContent>
            <PopupHeader>
              <CloseButton onClick={closePopup}>
                <CloseIcon />
              </CloseButton>
            </PopupHeader>
            <p>{errorMessage}</p>
            <PopupButton onClick={closePopup}>OK</PopupButton>
          </PopupContent>
        </Popup>
      )}
    </Container>
  );
};

export default Home;
