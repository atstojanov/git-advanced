// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  ListItem,
  List,
  Slide,
  Link,
  Text,
} from 'spectacle';

import { CodeSlide, Title, theme, ImageSlide } from './utils';
import mergeSnippet from './snippets/rebase/merge';
import rebase1 from './snippets/rebase/rebase-1';
import cherryPick from './snippets/rebase/cherry-pick';
import lfsTrack from './snippets/lfs/lfs-track';
import lfsInstall from './snippets/lfs/lfs-install';
import lfsNewRepo from './snippets/lfs/lfs-new-repo';
import lfsClone from './snippets/lfs/lfs-clone';
import lfsCloneSpeed from './snippets/lfs/lfs-clone-speed';
import lfsPull from './snippets/lfs/lfs-pull';
import lfsPullSpeedUp from './snippets/lfs/lfs-pull-speed-up';
import lfsTrack1 from './snippets/lfs/lfs-track-1';
import lfsUntrack from './snippets/lfs/lfs-untrack';
import lfsCommitPush from './snippets/lfs/lfs-commit-push';

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
        <ImageSlide title="Merging vs. Rebasing" src="images/rebase/01.svg" />
        <CodeSlide {...mergeSnippet} />
        <ImageSlide title="Merge" src="images/rebase/02.svg" />
        <CodeSlide {...rebase1} />
        <ImageSlide title="Rebase" src="images/rebase/03.svg" />
        <ImageSlide id="golden-rule" title="The Golden rule of Rebasing" src="images/rebase/05.svg" comment="Never use git rebase on public branches." />
        <CodeSlide {...cherryPick} />
        {/* TODO Interactive Rebase */}
        <Slide id="cherrypick">
          <Title>Cherry Pick</Title>
          <Text bold caps textColor="tertiary">(Demo)</Text>
        </Slide>
        <Slide id="lfs">
          <Title>LFS (Large File Storage)</Title>
          <List >
            <ListItem>Storing large files in repo</ListItem>
            <ListItem>Lazy download</ListItem>
            <ListItem>Speed-up git operations (clone, pull, fetch, etc.)</ListItem>
          </List>
        </Slide>
        <ImageSlide id="lfs-add" title="LFS (Large File Storage)" src="images/lfs/01.svg" comment="Add files to LFS repo." />
        <ImageSlide id="lfs-push" title="LFS (Large File Storage)" src="images/lfs/02.svg" comment="Push files to remote LFS repo." />
        <ImageSlide id="lfs-checkout" title="LFS (Large File Storage)" src="images/lfs/03.svg" comment="Checkout commit from LFS repo." />
        <CodeSlide {...lfsInstall} />
        <CodeSlide {...lfsNewRepo} />
        <CodeSlide {...lfsClone} />
        <CodeSlide {...lfsCloneSpeed} />
        <CodeSlide {...lfsPull} />
        <CodeSlide {...lfsPullSpeedUp} />
        <CodeSlide {...lfsTrack} />
        <CodeSlide {...lfsTrack1} />
        <CodeSlide {...lfsUntrack} />
        <CodeSlide {...lfsCommitPush} />

        <Slide id="sub-modules">
          <Title>Sub Modules</Title>
        </Slide>
        <Slide id="tools">
          <Title>Tooling</Title>
        </Slide>
        <Slide id="credits">
          <Title>Links and Credits</Title>
          <Link href="https://www.atlassian.com/git/tutorials/merging-vs-rebasing" target="_blank">Merging vs Rebasing</Link>
          <Link href="https://www.atlassian.com/git/tutorials/git-lfs" target="_blank">Git LFS</Link>
          <Link href="https://git-scm.com/book/en/v2/Git-Tools-Submodules" target="_blank">Sub Modules</Link>
          <Link href="https://git-scm.com/book/en/v2/" target="_blank">Git Book</Link>

        </Slide>
        <Slide id="questions">
          <Title>?</Title>
        </Slide>

      </Deck>
    );
  }
}
