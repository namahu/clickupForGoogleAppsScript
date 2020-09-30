type Method = "get" | "post" | "put" | "delete";

interface Options {
  method?: Method;
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
  payload?: string;
  muteHttpExceptions: boolean;
}

export default class ClickupRequest_ {
  apiToken: string;
  options: Options;
  path: string;

  constructor(path: string, apiToken: string, options?: Options) {
    this.path = path;
    this.options = options || {
      headers: {
        "Content-Type": "application/json",
        Authorization: apiToken,
      },
      muteHttpExceptions: true,
    };
  }

  private baseURL: string = "https://api.clickup.com/api/v2/";

  /**
   * Function that connects base url and path
   *
   * @param path - the path to API
   * @returns - Created endpoint
   *
   */
  createEndpoint_(path: string): string {
    return `${this.baseURL}${path}`;
  }

  get_() {
    this.options.method = "get";
    const url: string = this.createEndpoint_(this.path);
    const response = UrlFetchApp.fetch(url, this.options);
    const responseObj = JSON.parse(response.getContentText());

    if (responseObj.error) {
      throw new Error(responseObj.error.message);
    }

    return responseObj;
  }

  post_(payLoad) {
    this.options.method = "post";
    this.options.payload = JSON.stringify(payLoad);

    const url: string = this.createEndpoint_(this.path);
    const response = UrlFetchApp.fetch(url, this.options);
    const responseObj = JSON.parse(response.getContentText());

    if (responseObj.error) {
      throw new Error(responseObj.error.message);
    }

    return responseObj;
  }

  put_(payLoad) {
    this.options.method = "put";
    this.options.payload = JSON.stringify(payLoad);

    const url: string = this.createEndpoint_(this.path);
    const response = UrlFetchApp.fetch(url, this.options);
    const responseObj = JSON.parse(response.getContentText());

    if (responseObj.error) {
      throw new Error(responseObj.error.message);
    }

    return responseObj;
  }

  delete_() {
    this.options.method = "delete";

    const url: string = this.createEndpoint_(this.path);
    const response = UrlFetchApp.fetch(url, this.options);
    const responseObj = JSON.parse(response.getContentText());

    if (responseObj.error) {
      throw new Error(responseObj.error.message);
    }

    return response.getResponseCode();
  }
}
