import styled from "styled-components/macro";

export const Container = styled.div`
  background: ${(props) => props.theme.feature_background};
  padding: 30px;
`;

export const Card = styled.div`
  max-width: 1000px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  background: white;
  flex-direction: column;
  padding: 30px;
`;

export const Title = styled.h1`
  font-size: 35px;
  color: black;
  padding: 20px;
  align-self: center;
  text-align: center;
  font-weight: normal;
`;

export const Text = styled.p`
  font-size: 16px;
  color: black;
  padding: 20px;
  align-self: center;
  text-align: center;
`;
