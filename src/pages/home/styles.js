import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-color: black;
`;

export const HugeText = styled.h1`
  font-size: 14px;
  color: white;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px;
  background-color: #666;
  margin-top: -60px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;

export const UserName = styled.span`
  font-size: 18px;
  color: white;
`;

export const UserCredits = styled.span`
  font-size: 14px;
  color: white;
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: 100px;
  margin-right: 30px;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: transparent;
  max-width: 330px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid white;
  margin-top: 80px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #fff;
  color: #666;
  outline: none;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #666;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #888;
  }
`;

export const LabelError = styled.div`
  color: red;
  margin-top: 10px;
`;

export const LabelSignup = styled.div`
  color: #fff;
  margin-top: 16px;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const PopupContent = styled.div`
  position: relative;
  width: 300px;
  background-color: #666;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const PopupButton = styled(Button)`
  background-color: #075e54;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #054c42;
  }
`;

export const PopupHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CloseIcon = styled(MdClose)`
  font-size: 20px;
  color: #fff;
  margin-right: 5px;
`;

export const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const LogoDiv = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(/assets/logo.png);
  background-size: cover;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #666;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const PopupFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export const CreditsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  margin-top: 100px;
`;

export const CreditsLabel = styled.span`
  font-size: 14px;
  color: white;
`;

export const CreditsAmount = styled.span`
  font-size: 18px;
  color: white;
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 80%;
`;

export const ContactInput = styled(Input)`
  flex: 1;
`;

export const CopyButton = styled(Button)`
  background-color: #888;
  color: #fff;
  font-size: 12px;
  padding: 5px;

  &:hover {
    background-color: #666;
  }
`;
