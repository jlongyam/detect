# Config

## User

- `git config --global user.name USER_NAME`
- `git config --global user.email EMAIL`

## Branch

- Branch | typycaly 'main' or 'development'
- `git config --global init.defaultBranch BRANCH_NAME`
- To change default current branch 'master' to 'main'
- `git branch -m main`

## Editor

- `git config --global core.editor "nano -w"`

## Style

- `git config --global color.ui true`
- `git config --global format.pretty oneline`

## Credential

- Cache for 1 hour
- `git config --global credential.helper 'cache --timeout 3600'`

## Check

- `git config --list`

## Alias

- `git config --global alias.[alias_name] [git_command]`

For example,

you can use the alias st for the status command 
by typing the command:

`git config --global alias.st status`

## windows only

- Add safe directory
- `# Example`
- `git config --global --add safe.directory E:/backup/clone`
