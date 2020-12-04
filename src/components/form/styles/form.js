import styled from "styled-components/macro";
import { color } from "../../../utils/colors";

import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  background-color: ${color.whiteLight};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: 50px auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

export const Container2 = styled.div`
  background: ${color.whiteLight};
  border: 2px solid ${color.white};
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  max-width: 450px;
  padding: 20px;
  margin-bottom: 100px;
  height: fit-content;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #222;
  font-size: 32px;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReachRouterLink)`
  color: #737373;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  border: 1px solid ${color.whiteDark};
  border-radius: 5px;
  color: #333;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin: 20px 0;
`;

export const Submit = styled.button`
  background: #5e35b1;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
