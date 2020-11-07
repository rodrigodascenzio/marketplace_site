import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid ${(props) => props.theme.secondary_color};
  text-align: center;
  padding: 165px 45px;

  @media (max-width: 600px) {
    padding: 80px 20px;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  max-width: 640px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
