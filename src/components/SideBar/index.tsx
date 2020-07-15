import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowAngular from '../followSuggestion/Angular';
import FollowFlutter from '../followSuggestion/Flutter';
import FollowReact from '../followSuggestion/React';
import SkillOne from '../SkillOne';
import SkillTwo from '../SkillTwo';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowReact
                name="React JS Brasil"
                nickname="@reactbrasil"
              />,
              <FollowFlutter 
                name="Flutter" 
                nickname="@flutterjs"
              />,
              <FollowAngular
                name="Angular JS"
                nickname="@angularjs"
              />,
            ]}
          />
          <List
            title="Competencias"
            elements={[
              <SkillOne />,
              <SkillTwo />
              
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
