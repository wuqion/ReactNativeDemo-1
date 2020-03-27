export class FetchInterceptor {
    public interceptors: any[] = [];
    public interceptor(fetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>,
        options: { input: RequestInfo, init?: RequestInit | undefined }) {
        const reversedInterceptors = this.interceptors.reduce((array, interceptor) => [...[interceptor], array]);
        let promise = Promise.resolve(options);
        reversedInterceptors.forEach(({ request, requestError }: any) => {
            if (request || requestError) {
                promise = promise.then(opt => request(opt.input, opt.init), requestError);
            }
        });
        let responsePromise = promise.then(opt => fetch(opt.input, opt.init));
        reversedInterceptors.forEach(({ response, responseError }: any) => {
            if (response || responseError) {
                responsePromise = responsePromise.then((resp: Response) => {
                    return response(resp);
                });
            }
        });
        return responsePromise;
    }
}

window.fetch = ((fetch) => {
    return (input: RequestInfo, init?: RequestInit | undefined) => {
        return fetchInterceptor.interceptor(fetch, { input, init });
    };
})(window.fetch);

export const fetchInterceptor = new FetchInterceptor();

//how to use?
fetchInterceptor.interceptors.push({
    request: (input: string, init: RequestInit) => {
        // const token = store.getters.getToken;
        let headers = new Headers(init.headers);
        headers.append('Authorization', '');//这里是自定义请求头
        init.headers = headers;
        return { input, init };
    }
}, {
    response: (response: Response) => {
        console.log('拦截方法');
        
        /*自定义方法拦截服务器返回码*/
        if (this.response.status === '') {
            // router.replace('signin'); //登录
           
            
        }
        return response;
    }
})