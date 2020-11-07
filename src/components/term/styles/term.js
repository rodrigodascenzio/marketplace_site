import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 10px;
`;

export const Card = styled.div`
  max-width: 1000px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  background: white;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 35px;
  color: black;
  padding: 0 20px;
  align-self: center;
  text-align: center;
  font-weight: normal;
`;

export const Text = styled.p`
  font-size: 16px;
  color: black;
  padding: 0 20px 30px 20px;
  align-self: center;
  text-align: justify;
`;
