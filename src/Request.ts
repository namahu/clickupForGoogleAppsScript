type Method = "get" | "post" | "put" | "delete";

interface Options {
  method?: Method;
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
  contentType: string;
  payload?: string;
  muteHttpExceptions: boolean;
}

export default class ClickupRequest_ {
  private readonly apiToken: string;
  private readonly baseURL: string;

  constructor(baseURL: string, apiToken: string) {
    this.apiToken = apiToken;
    this.baseURL = baseURL;
  }

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

  get_(path: string) {
    const options: Options = {
      headers: {
        Authorization: this.apiToken,
        "Content-Type": "application/json",
      },
      contentType: "application/json",
      muteHttpExceptions: true,
    };
    const url: string = this.createEndpoint_(path);
    const response = UrlFetchApp.fetch(url, options);
    const responseObj = JSON.parse(response.getContentText());

    if (responseObj.error) {
      throw new Error(responseObj.error.message);
    }

    return responseObj;
  }

  post_(payLoad, path: string) {
    const options: Options = {
      method: "post",
      headers: {
        Authorization: this.apiToken,
        "Content-Type": "application/json",
      },
      payload: JSON.stringify(payLoad),
      contentType: "application/json",
      muteHttpExceptions: true,
    };

    const url: string = this.createEndpoint_(path);
    const response = UrlFetchApp.fetch(url, options);
    const responseObj = JSON.parse(response.getContentText());

    if (responseObj.error) {
      throw new Error(responseObj.error.message);
    }

    return responseObj;
  }

  put_(payLoad, path: string) {
    const options: Options = {
      method: "post",
      headers: {
        Authorization: this.apiToken,
        "Content-Type": "application/json",
      },
      payload: JSON.stringify(payLoad),
      contentType: "application/json",
      muteHttpExceptions: true,
    };

    const url: string = this.createEndpoint_(path);
    const response = UrlFetchApp.fetch(url, options);
    const responseObj = JSON.parse(response.getContentText());

    if (responseObj.error) {
      throw new Error(responseObj.error.message);
    }

    return responseObj;
  }

  delete_(path: string) {
    const options: Options = {
      method: "delete",
      headers: {
        Authorization: this.apiToken,
        "Content-Type": "application/json",
      },
      contentType: "application/json",
      muteHttpExceptions: true,
    };

    const url: string = this.createEndpoint_(path);
    const response = UrlFetchApp.fetch(url, options);
    const responseObj = JSON.parse(response.getContentText());

    if (responseObj.error) {
      throw new Error(responseObj.error.message);
    }

    return response.getResponseCode();
  }
}
