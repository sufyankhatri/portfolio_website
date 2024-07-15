import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative; // Important for Next.js Image
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  text-align: center;
  width: 440px;
  height: max-content;
  border: 1px solid lightgrey;
  box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.2);
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 320px;
  }
  cursor: "pointer";
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h2`
  font-weight: 700;
  color: #000;
  padding: 0.5rem 0;
  /* font-size: ${(props) => (props.title ? "3rem" : "2rem")}; */
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 8px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  margin-top: 10px;
  width: 100%;
  padding: 0 50px;
  color: #333;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #388e3c;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #b5b3b3;
  font-size: 1.5rem;
`;

export const StackInfoContainer = styled.div`
  margin-top: 16px;
`;

export const CardBody = styled.div`
  padding: 0px 10px;
`;
