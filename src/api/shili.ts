import ajax from "../tools/ajax";



export const register = (account: string, password: string): Promise<any> => ajax("/register", { account, password }, "post");