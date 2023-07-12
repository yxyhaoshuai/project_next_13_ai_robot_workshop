import ajax from "../tools/ajax";



export const register = (prompt): Promise<any> => ajax("/txt2img", {prompt}, "post");

export const getImg = (request_id)=>ajax("/progress/"+request_id)
