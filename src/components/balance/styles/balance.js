import styled from "styled-components/macro";
import { color } from "../../../utils/colors";

export const Container = styled.div`
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
  text-align: center;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
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

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 20px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
