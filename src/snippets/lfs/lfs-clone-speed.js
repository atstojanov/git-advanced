export default {
    id: 'lfs-clone-speed',
    title: 'Speed-up cloning',
    comment: '',
    source: (
        `
$ git lfs clone https://github.com/atstojanov/git-advanced.git
Cloning into 'git-advanced'...
remote: Counting objects: 156, done.
remote: Compressing objects: 100% (154/154), done.
remote: Total 156 (delta 87), reused 0 (delta 0)
Receiving objects: 100% (156/156), 54.04 KiB | 0 bytes/s, done.
Resolving deltas: 100% (87/87), done.
Checking connectivity... done.
Git LFS: (4 of 4 files) 1.14 MB / 1.15 MB
  `),
};