#!/bin/bash

# Function to display help information
display_help() {
    echo "Usage: $0 [option]"
    echo "Options:"
    echo "  -r: Delete remote branches"
    echo "  -l: Delete local branches"
    echo "  -b: Delete both remote and local branches"
    echo "  -h: Display this help message"
    echo ""
}

# Function to delete remote branches
delete_remote_branches() {
    # Fetch all remote branches
    git fetch --prune
    
    # List all remote branches except origin and main
    git branch -r | grep -v 'origin/main$' | grep -v 'origin/HEAD$' | grep -v 'origin/origin$' | sed 's/origin\///' > branches_to_delete.txt
    
    # Loop through the branches and delete them remotely
    while read -r branch; do
        git push --delete origin "$branch"
    done < branches_to_delete.txt
    
    # Remove the temporary file
    rm branches_to_delete.txt
}

# Function to delete local branches
delete_local_branches() {
    # List all local branches except main
    git branch | grep -v 'main$' > branches_to_delete.txt
    
    # Loop through the branches and delete them locally
    while read -r branch; do
        git branch -d "$branch"
    done < branches_to_delete.txt
    
    # Remove the temporary file
    rm branches_to_delete.txt
}

# Function to delete both remote and local branches
delete_both_branches() {
    delete_remote_branches
    delete_local_branches
}

# Check for options
while getopts "hrlb" opt; do
    case $opt in
        h)
            display_help
            exit 0
        ;;
        r)
            delete_remote_branches
        ;;
        l)
            delete_local_branches
        ;;
        b)
            delete_both_branches
        ;;
        \?)
            echo "Invalid option: -$OPTARG" >&2
            display_help
            exit 1
        ;;
    esac
done