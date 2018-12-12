// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import { CodeSlide, Title, CenteredList, Accent, theme } from './utils';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck progress="bar" theme={theme} transition={['slide']}>
        <Slide id="title">
          <Title fit>
            Git Advanced
          </Title>
          <Title fit secondary>
            Merge/Rebase, Cherry Pick, LFS, Sub Modules
          </Title>
          <div style={{ float: 'right' }}>Angel Stoyanov</div>
        </Slide>
        <Slide id="outline">
          <Title>Outline</Title>
          <List style={{ listStyle: 'none' }}>
            <ListItem>Merging vs. Rebasing</ListItem>
            <ListItem>Cherry Picking</ListItem>
            <ListItem>LFS (Large File Storage)</ListItem>
            <ListItem>Sub Modules</ListItem>
            <ListItem>Tooling</ListItem>
          </List>
        </Slide>
        <Slide id="merging-rebasing">
          <Title>Merging vs. Rebasing</Title>
        </Slide>
        <Slide id="cherrypick">
          <Title>Cherry Picking</Title>
        </Slide>
        <Slide id="lfs">
          <Title>LFS (Large File Storage)</Title>
        </Slide>
        <Slide id="sub-modules">
          <Title>Sub Modules</Title>
        </Slide>
        <Slide id="tools">
          <Title>Tooling</Title>
        </Slide>
      </Deck>
    );
  }
}
