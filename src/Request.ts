type Method = 'get' | 'post' | 'put' | 'delete';

interface Options {
    method?: Method;
    headers: {
        'Content-Type': string;
        'Authorization': string;
    };
    payload?: string;
    muteHttpExceptions: boolean;

};

class ClickupRequest_ {
    url: string;
    apiToken: string;
    options: Options;

    constructor(url: string, apiToken: string, options?: Options) {
        this.url = url;
        this.options = options || {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': apiToken
            },
            muteHttpExceptions: true
        };
    }

    get_() {
        this.options.method = 'get';
        const response = UrlFetchApp.fetch(this.url, this.options);
        const responseObj = JSON.parse(response.getContentText());

        if (responseObj.error) {
            throw new Error(responseObj.error.message);
        }

        return responseObj;
    }

    post_(payLoad) {
        this.options.method = 'post';
        this.options.payload = JSON.stringify(payLoad);

        const response = UrlFetchApp.fetch(this.url, this.options);
        const responseObj = JSON.parse(response.getContentText());

        if (responseObj.error) {
            throw new Error(responseObj.error.message);
        }

        return responseObj;
    }

    put_(payLoad) {
        this.options.method = 'put';
        this.options.payload = JSON.stringify(payLoad);

        const response = UrlFetchApp.fetch(this.url, this.options);
        const responseObj = JSON.parse(response.getContentText());

        if (responseObj.error) {
            throw new Error(responseObj.error.message);
        }

        return responseObj;
    }

    delete_() {
        this.options.method = 'delete';

        const response = UrlFetchApp.fetch(this.url, this.options);
        const responseObj = JSON.parse(response.getContentText());

        if (responseObj.error) {
            throw new Error(responseObj.error.message);
        }

        return response.getResponseCode();
    }
}
