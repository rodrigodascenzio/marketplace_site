import styled from "styled-components/macro";
import { FaStore } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.radial_background}, url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Container = styled.div`
  display: flex;
  padding: 18px 56px;
  /* height: 64px; */
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    padding: 18px 30px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonLink = styled.a`
  background-color: #222;
  color: white;
  font-size: 15px;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #303030;
  }
`;

export const Logo = styled.img`
  max-height: 50px;
  max-width: 50px;
  width: 50px;
  height: 50px;
  z-index: 999;
  border-radius: 50%;

  @media (min-width: 1000px) {
    max-height: 90px;
    max-width: 90px;
    height: 90px;
    width: 90px;
  }
`;

export const PersonIcon = styled(BsFillPersonFill)`
  border: 0;
  color: gray;
  padding: 5px;
  border-radius: 50%;
  margin: 0 8px;
  z-index: 10;
  cursor: pointer;
  background: white;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    color: white;
  }

  align-items: center;
  ${({ nav }) => (nav ? `background: rgba(0, 0, 0, 0.2);color: white` : "")}
`;

export const CartIcon = styled(MdAccountBalanceWallet)`
  border: 0;
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin: 0 8px;
  z-index: 10;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  align-items: center;
  ${({ nav }) => (nav ? "background-color: rgba(0, 0, 0, 0.2)" : "")}
`;

export const OrderIcon = styled(FaStore)`
  border: 0;
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin: 0 8px;
  z-index: 10;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  align-items: center;
  ${({ nav }) => (nav ? "background-color: rgba(0, 0, 0, 0.2)" : "")}
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  &:hover {
    opacity: 0.7;
  }
  cursor: pointer;
`;
