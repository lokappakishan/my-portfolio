import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <br />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({title,description,image,tags,source,visit,id})=>{
          return(
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title style={{fontWeight: 'bolder'}}>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Tech Stack</TitleContent>
                <TagList>
                  {tags.map((tag,i)=>{
                    return <Tag key={i}>{tag}</Tag>
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={source}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        })}
      </GridContainer>
  </Section>
);

export default Projects;