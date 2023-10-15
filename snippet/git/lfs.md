# Git LFS

GIT Large File System

Check *Settings* > *Archives* > **Include Git LFS objects in archives** 

### Installation

#### fedora

- `dnf search git-lfs`
- `sudo dnf install git-lfs -y`

### Tracking

- `git lfs install`
- `# Example`
- `git lfs track "*.tar"` 

### Register

- `git add .gitattributes`
- `git add .`
- `cat ./.gitattributes`