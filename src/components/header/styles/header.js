import styled from "styled-components/macro";

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
