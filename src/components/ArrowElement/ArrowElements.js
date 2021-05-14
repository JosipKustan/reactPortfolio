import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const MyWorkArrow = styled(motion.div)`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;
export const Arrow = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const MyWork = styled(Link)`
  max-width: 227px;
  font-family: "Kumar One";
  font-size: 1.3rem;
  line-height: normal;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  &:hover {
    transform: scale(1.2);
    color: #fefefe;
  }
`;
