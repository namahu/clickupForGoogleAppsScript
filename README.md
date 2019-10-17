# ClickupForGoogleAppsScript

clickupForGoogleAppsScript is a library that uses Clickup API in Google Apps Script.

## How to add a library

1. Open the script editor.
1. Select a library from the resource menu.
1. Enter `MWpr83H8HSn9MP0szQUnM8zG9S3INQskC` in the input field of "Add a library".
1. Click the "Add" button.
1. Select the latest version.
1. Click the "Save" button.

## Usage

```googleappsscript

// Get Clickup object from library using Clickup personal API token
const clickup = Clickup.getClickup('Enter your Clickup personal API token');

// Get tasks of specified list
const tasks = clickup.getTasksByListId(`Enter list id`);

// Get task specified by task ID
const task = clickup.getTaskByTaskId(`Enter task id`);

// Create a task in the specified list
const payload = {
    'name': 'task name',
    'content': 'task description',
    ...
};

clickup.createTaskInList(`Enter list id`, payload);

```


