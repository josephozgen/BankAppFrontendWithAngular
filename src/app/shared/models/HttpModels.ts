export interface IAuthResult {
    principal: {
        username: string,
        authorities: Array<{key:string, value:string}>,
        accountNonExpired: boolean,
        accountNonLocked: boolean,
        enabled: boolean,
    },
    authenticated: boolean
}

export interface ILoginResponse {
    jwtToken?: string,
    authResult?: IAuthResult
}