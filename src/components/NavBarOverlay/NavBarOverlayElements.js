import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  z-index: 900;
`;
export const NavName = styled.div`
  margin-right: 252px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const JosipKustan = styled.p`
  max-width: 308px;
  color: ${(props) => props.theme.colors.white};
  text-shadow: 0 4px 4px ${(props) => props.theme.colors.transparentBlack};
  font-family: ${(props) => props.theme.fonts.kumarOne41Regular.family};
  font-size: ${(props) => props.theme.fonts.kumarOne41Regular.size};
  font-weight: ${(props) => props.theme.fonts.kumarOne41Regular.weight};
  line-height: ${(props) => props.theme.fonts.kumarOne41Regular.lineHeight};
`;
export const Nav = styled.div`
  margin-right: 331px;
  padding: 12px 31px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Home = styled.p`
  color: ${(props) => props.theme.colors.white};
  text-shadow: 0 4px 4px ${(props) => props.theme.colors.transparentBlack};
  font-family: ${(props) => props.theme.fonts.abel27Regular.family};
  font-size: ${(props) => props.theme.fonts.abel27Regular.size};
  font-weight: ${(props) => props.theme.fonts.abel27Regular.weight};
  line-height: ${(props) => props.theme.fonts.abel27Regular.lineHeight};
  &:not(:last-of-type) {
    margin-right: 25px;
  }
`;
export const NavMedia = styled.div`
  padding: 4px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BxbxlInstagram = styled.div`
  padding: 5.01px 4.99px 4.93px 5px;
  position: relative;
`;
export const Vector = styled.div`
  width: 3.59px;
  height: 3.59px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  position: absolute;
  left: 26.21px;
  top: 10.21px;
`;
export const VectorTwo = styled.img`
  position: absolute;
  left: 12.29px;
  top: 12.3px;
`;
export const VectorThree = styled.img`
  position: relative;
`;
export const BxbxlLinkedinSquare = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;
export const AntDesignfacebookOutlined = styled.div`
  padding: 4.38px 4.37px 4.37px 4.38px;
  display: flex;
  align-items: center;
`;
