export default {
    id: 'lfs-pull-speed-up',
    title: 'Speeding up pulls',
    comment: '',
    source: (
        `
$ git -c filter.lfs.smudge= -c filter.lfs.required=false pull && git lfs pull


$ git config --global alias.plfs "\!git -c filter.lfs.smudge= -c filter.lfs.required=false pull && git lfs pull"
$ git plfs
  `),
};