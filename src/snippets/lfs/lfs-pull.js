export default {
    id: 'lfs-pull',
    title: 'Pulling and checking out',
    comment: '',
    source: (
        `
$ git pull
Updating 4784e9d..7039f0a
Downloading Assets/Sprites/powerup.png (21.14 KB)
Fast-forward
Assets/Sprites/powerup.png | 3 +
Assets/Sprites/powerup.png.meta | 4133 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
2 files changed, 4136 insertions(+)
create mode 100644 Assets/Sprites/projectiles-spritesheet.png
create mode 100644 Assets/Sprites/projectiles-spritesheet.png.meta

$ git lfs pull
Git LFS: (4 of 4 files) 1.14 MB / 1.15 MB
  `),
};