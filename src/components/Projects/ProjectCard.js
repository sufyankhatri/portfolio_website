import Image from "next/image";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  ImageWrapper,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ p }) => {
  return (
    <BlogCard>
      <ImageWrapper>
        <Image
          src={p.image}
          alt={p?.alt || ""}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <TitleContent>
        <HeaderThree>{p.title}</HeaderThree>
        <Hr />
        {p.source && p.visit && (
          <ExternalLinks href={p.source} target="_blank">
            {p.visit}
            <FaExternalLinkAlt style={{ marginLeft: "10px" }} />
          </ExternalLinks>
        )}
      </TitleContent>
      <CardInfo className="card-info">{p.description}</CardInfo>
      <div>
        <TitleContent>Stack</TitleContent>
        <TagList>
          {p.tags.map((t, i) => {
            return <Tag key={i}>{t}</Tag>;
          })}
        </TagList>
        <UtilityList></UtilityList>
      </div>
    </BlogCard>
  );
};

export default ProjectCard;
