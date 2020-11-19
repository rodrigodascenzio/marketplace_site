import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1600px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  @media (min-width: 1000px) {
    width: 80%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  align-self: center;
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid ${(props) => props.theme.secondary_color};
  padding: 50px 5%;
  color: white;
  overflow: hidden;
  @media (min-width: 1000px) {
    min-height: 100vh;
  }
`;

export const Container = styled.div`
  background: ${({ background }) => background};
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Button = styled.a`
  padding: 10px 20px;
  border-radius: 4px;
  background: ${(props) => props.theme.secondary_color};
  border: 2px solid ${(props) => props.theme.secondary_color};
  white-space: nowrap;
  color: #fff;
  font-size: 24px;
  outline: none;
  align-self: start;
  margin: 20px 0;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: ${(props) => props.theme.secondary_color};
  }
`;
