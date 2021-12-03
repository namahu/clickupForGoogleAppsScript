# ClickupForGoogleAppsScript

clickupForGoogleAppsScript is a library that uses Clickup API in Google Apps Script.

Clickup API docs: [https://clickup.com/api](https://clickup.com/api)

## Current Implementation

- Tasks
- Teams

## How to add a library

1. Open the script editor.
1. Select a library from the resource menu.
1. Enter `1C7AvL6vODVFQTZKS2OvnPsTqoU9Si0nQDCbz7BNF46t8TrRLZIEp7bmM` in the input field of "Add a library".
1. Click the "Add" button.
1. Select the latest version.
1. Click the "Save" button.

## Usage

```javascript

// Get Clickup object from library using Clickup personal API token
const clickup = Clickup.getClickup("Enter your Clickup personal API token");

// Get task from task id.
const task = clickup.Tasks.getTaskByTaskId("Enter task id");

// Get tasks from list id.
const tasks = clickup.Tasks.getTasksByListId("Enter list id");

// Get your teams.
const teams = clickup.Teams.getTeams();

```

## Author

- namahu

## License

- MIT
