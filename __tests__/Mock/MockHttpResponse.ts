export default class MockHTTPResponse implements GoogleAppsScript.URL_Fetch.HTTPResponse {
    responseBody: string;
    constructor(body: any) {
        this.responseBody = body;
    }
    getContentText(): string {
        return JSON.stringify(this.responseBody);
    }
    getAllHeaders(): object {
        return {};
    }
    getHeaders(): object {
        return {};
    }
    getAs(contentType: string): any {
        return "";
    }
    getBlob(): any {
        return "";
    }
    getContent(): any {
        return "";
    }
    getResponseCode(): number {
        return 200;
    }
    setResponseBody(body) {
        this.responseBody = body;
    }

}
