import ajax from "../tools/ajax";



export const register = (prompt): Promise<any> => ajax("/sdapi/v1/txt2img", {prompt}, "post");