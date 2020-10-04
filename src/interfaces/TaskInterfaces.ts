export interface Status {
  status: string;
  color: string;
  orderindex: number;
  type: string;
}

export interface Creator {
  id: number;
  username: string;
  color: string;
  email?: string;
  profilePicture: string;
}

export interface Assignee {
  id: number;
  username: string;
  color: string;
  initials: string;
  email: string;
  profilePicture: string;
}

export interface Watcher {
  id: number;
  username: string;
  color: string;
  initials: string;
  email: string;
  profilePicture: string;
}

export interface Item {
  id: string;
  name: string;
  orderindex: number;
  assignee: Assignee;
  resolved: boolean;
  parent?: any;
  date_created: string;
  children: any[];
}

export interface Checklist {
  id: string;
  task_id: string;
  name: string;
  date_created: string;
  orderindex: number;
  creator: number;
  resolved: number;
  unresolved: number;
  items: Item[];
}

export interface Tag {
  name: string;
  tag_fg: string;
  tag_bg: string;
  creator?: any;
}

export interface Priority {
  id: string;
  priority: string;
  color: string;
  orderindex: string;
}

export interface List {
  id: string;
  name?: string;
  access?: boolean;
}

export interface Project {
  id: string;
  name?: string;
  hidden?: boolean;
  access?: boolean;
}

export interface Folder {
  id: string;
  name?: string;
  hidden?: boolean;
  access?: boolean;
}

export interface Space {
  id: string;
}

export interface ClickupTask {
  id: string;
  custom_id?: any;
  name: string;
  text_content?: string;
  description?: string;
  status: Status;
  orderindex: string;
  date_created: string;
  date_updated: string;
  date_closed?: any;
  archived?: boolean;
  creator: Creator;
  assignees: Assignee[];
  watchers?: Watcher[];
  checklists: Checklist[];
  tags: Tag[];
  parent?: any;
  priority: Priority;
  due_date: string;
  start_date: string;
  points?: any;
  time_estimate?: any;
  time_spent: number;
  custom_fields?: any[];
  dependencies?: any[];
  linked_tasks?: any[];
  team_id?: string;
  url: string;
  permission_level?: string;
  list: List;
  project?: Project;
  folder: Folder;
  space: Space;
  attachments?: any[];
}
