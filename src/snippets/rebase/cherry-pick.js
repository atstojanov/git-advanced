export default {
    id: 'cherry-pick-code',
    title: 'Cherry Pick',
    comment: '',
    source: (
        `
$ git checkout master
$ git cherry-pick <commit-hash>
  `),
};