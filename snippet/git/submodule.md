# Git submodule

## Add
- add URL with `.git` extension
- `git submodule add <URL>` 
- specific branch
- `git submodule add -b main <URL>` 

## Init

- `git submodule init`

## Update

- `git submodule update --remote`
- or
- `git submodule update --init --recursive`
- `git submodule update --remote`

## Pull

- `git pull --recurse-submodules`

## Exec

- `git submodule foreach --recursive '<command>'`

## Remove

- `git submodule deinit -f <dir>`
- `rm -rf .git/modules/<dir>`
- `git rm -f <dir>`
