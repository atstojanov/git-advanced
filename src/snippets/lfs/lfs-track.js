export default {
    id: 'lfs-track',
    title: 'Lfs Tracking',
    comment: '',
    source: (
        `
$ git lfs track "*.ogg"
Tracking *.ogg
$ git add .gitattributes
$ git diff --cached
diff --git a/.gitattributes b/.gitattributes
new file mode 100644
index 0000000..b6dd0bb
--- /dev/null
+++ b/.gitattributes
@@ -0,0 +1 @@
+*.ogg filter=lfs diff=lfs merge=lfs -text
$ git commit -m "Track ogg files with Git LFS"
  `),
};