export default {
    id: 'lfs-new-repo',
    title: 'Create New LFS Repository',
    comment: '',
    source: (
        `
# initialize Git
$ mkdir git-advanced
$ cd git-advanced
$ git init
Initialized empty Git repository in /src/git-advanced/.git/
# initialize Git LFS
$ git lfs install
Updated pre-push hook.
Git LFS initialized.
  `),
};