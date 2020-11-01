import MockHTTPResponse from "./MockHttpResponse"; 

export const createMockFetch = (expectedValue) => {
    return jest.fn(() => {
        return new MockHTTPResponse(expectedValue);
    });
};
