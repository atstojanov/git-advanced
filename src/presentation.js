// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Image,
  ListItem,
  List,
  Slide,
  Link,
  Text,
  CodePane
} from 'spectacle';

import { CodeSlide, Title, theme, ResultSlide } from './utils';
import rebase1 from './snippets/rebase/rebase-1';

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
        <Slide id="merging-rebasing-1">
          <Title>Merging vs. Rebasing</Title>
          <Image src="images/rebase/01.svg" />
        </Slide>
        <CodeSlide {...rebase1} />
        {/* <ResultSlide {...rebase1} /> */}
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
        <Slide id="credits">
          <Title>Links and Credits</Title>
          <Link href="https://www.atlassian.com/git/tutorials/merging-vs-rebasing" target="_blank">Merging vs Rebasing</Link>
        </Slide>
        <Slide id="questions">
          <Title>?</Title>
        </Slide>

      </Deck>
    );
  }
}
