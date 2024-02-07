import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import { useState, useEffect } from "react";

const ProjectCard = ({ p }) => {
  return (
    <BlogCard>
      <Img src={p.image} />
      <TitleContent>
        <HeaderThree>{p.title}</HeaderThree>
        <Hr />
        {p.source && p.visit && (
          <ExternalLinks href={p.source} target="_blank">
            {p.visit}
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
