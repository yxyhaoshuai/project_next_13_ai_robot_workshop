let Txt2imgArgs:Record<string, unknown>  = {
    enable_hr: false,
    denoising_strength: 0.0,
    firstphase_width: 0,
    firstphase_height: 0,
    hr_scale: 0,
    hr_upscaler: "",
    hr_second_pass_steps: 0,
    hr_resize_x: 0,
    hr_resize_y: 0,
    prompt: "",
    styles: "",
    seed: 0,
    subseed: 0,
    subseed_strength: 0,
    seed_resize_from_h: 0,
    seed_resize_from_w: 0,
    sampler_name: "",
    batch_size: 0,
    n_iter: 0,
    steps: 0,
    cfg_scale: 0,
    width: 0,
    height: 0,
    restore_faces: false,
    tiling: false,
    do_not_save_samples: false,
    do_not_save_grid: false,
    negative_prompt: "",
    eta: 0,
    s_min_uncond: 0,
    s_churn: 0,
    s_tmax: 0,
    s_tmin: 0,
    s_noise: 0,
    override_settings: {},
    //{}字典
    override_settings_restore_afterwards: false,
    script_args: [{}],
    sampler_index: "",
    script_name: "",
    send_images: false,
    save_image: false,
    alwayson_scripts: {},
    options: {},
}

let Img2imgArgs:Record<string, unknown> = {method:"get",content:"这里是内容"}



export const headers = (data: Record<string, unknown> = {}) => {
    return { ...Txt2imgArgs, ...data };
};