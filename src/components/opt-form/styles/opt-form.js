import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.div`
  height: 80px;
  width: 180px;
  margin: 50px auto;
  cursor: pointer;
  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ButtonDefault = styled.a`
  padding: 20px 30px;
  border-radius: 4px;
  background: ${(props) => props.theme.secondary_color};
  border: 2px solid ${(props) => props.theme.secondary_color};
  white-space: nowrap;
  color: #fff;
  font-size: 24px;
  outline: none;
  align-self: center;
  margin: 50px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: ${(props) => props.theme.secondary_color};
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
