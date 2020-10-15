export interface TaskFilteredQueries {
  page?: number;
  order_by?: string;
  reverse?: boolean;
  subtasks?: boolean;
  space_ids?: number[];
  project_ids?: number[];
  list_ids?: number[];
  statuses?: string[];
  include_closed?: boolean;
  assignees?: number[];
  tags?: string[];
  due_date_gt?: number;
  due_date_lt?: number;
  date_created_gt?: number;
  date_created_lt?: number;
  date_updated_gt?: number;
  date_updated_lt?: number;
}

export interface TaskSearchQueries {
  archived?: boolean;
  page?: number;
  order_by?: string;
  reverse?: boolean;
  subtasks?: boolean;
  space_ids?: number[];
  project_ids?: number[];
  statuses?: string[];
  include_closed?: boolean;
  assignees?: number[];
  due_date_gt?: number;
  due_date_lt?: number;
  date_created_gt?: number;
  date_created_lt?: number;
  date_updated_gt?: number;
  date_updated_lt?: number;
}

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

export interface CustomeField {
  id: string;
  value: string | number;
}

export interface BaseTask {
  name?: string;
  description?: string;
  time_estimate?: number;
  parent?: any;
  custom_fields?: CustomeField[];
}

export interface ClickupTaskPayload extends BaseTask {
  assignees?: number[];
  tags?: string[];
  status?: string;
  priority?: number;
  due_date?: number;
  due_date_time?: boolean;
  start_date?: number;
  start_date_time?: boolean;
  notify_all?: boolean;
  links_to?: any;
}

export interface ClickupTask extends BaseTask {
  id: string;
  name: string;
  custom_id?: any;
  text_content?: string;
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
  priority: Priority;
  due_date: string;
  start_date: string;
  points?: any;
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

export interface ClickupTasks {
  tasks: ClickupTask[];
}

export interface TaskPayLoad extends ClickupTask {
  
}
