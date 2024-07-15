import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    /* width: 80%; */

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const MiddleSection = styled.div`
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
