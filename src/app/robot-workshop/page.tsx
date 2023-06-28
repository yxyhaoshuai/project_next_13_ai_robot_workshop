"use client";
import React, {useState} from "react";
import {Avatar, Button, Collapse, Segmented, Space, Tag} from 'antd';
import {SearchOutlined} from '@ant-design/icons';


const {CheckableTag} = Tag;

const tagsData = ['中文', '日语', '英语'];


export default function Page() {
    const [focusNavBar, setFocusNavBar] = useState(0);

    const onClickNavBar = (index) => {
        setFocusNavBar(index)
    }

    //############
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);

    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <div>语言：
                <Tag color="orange">中文</Tag>
                <Tag color="lime">日语</Tag>
            </div>,
            children: <div>
                <span className={"text-text555"} style={{marginRight: 8}}>选择语言:</span>
                <Space size={[0, 8]} wrap>
                    {tagsData.map((tag) => (
                        <CheckableTag
                            key={tag}
                            checked={selectedTags.includes(tag)}
                            onChange={(checked) => handleChange(tag, checked)}
                        >
                            {tag}
                        </CheckableTag>
                    ))}
                </Space>
            </div>,
        },
        {
            key: '2',
            label: <div>类型：</div>,
            children: <p>这里是内容</p>,
        },
        {
            key: '3',
            label: <div>标签：</div>,
            children: <p>这里是内容</p>,
        },
    ];
    //############


    return (
        <div className={"flex overflow-hidden"}>
            <div className={"navBar left-NavBar bg-navbar w-20 h-screen"}>
                <div className={"logo w-20 flex justify-center mt-6 mb-6"}>
                    <img src="/logo/logo.png" alt="" className={"w-2/3"}/>
                </div>
                <div className={"icon w-full flex-col pb-4 pt-4 mt-10"}>
                    <div onClick={() => {
                        onClickNavBar(0)
                    }}
                         className={`all rounded-md w-14 h-14 mb-2 m-auto text-5xl flex justify-center ali ${focusNavBar === 0 ? "bg-black2" : ""} hover:bg-black2 hover:cursor-pointer`}>
                        <img className={"w-12 text-center m-auto align-middle"}
                             src={focusNavBar === 0 ? "iconfont/all(1).svg" : "iconfont/all.svg"}
                             alt=""/>
                    </div>
                    <div onClick={() => {
                        onClickNavBar(1)
                    }}
                         className={`all rounded-md w-14 h-14 mb-2 m-auto text-5xl flex justify-center ali ${focusNavBar === 1 ? "bg-black2" : ""} hover:bg-black2 hover:cursor-pointer`}>
                        <img className={"w-40px text-center m-auto align-middle"}
                             src={focusNavBar === 1 ? "iconfont/chat(1).svg" : "iconfont/chat.svg"}
                             alt=""/>
                    </div>
                    <div onClick={() => {
                        onClickNavBar(2)
                    }}
                         className={`all rounded-md w-14 h-14 mb-2 m-auto text-5xl flex justify-center ali ${focusNavBar === 2 ? "bg-black2" : ""} hover:bg-black2 hover:cursor-pointer`}>
                        <img className={"w-40px text-center m-auto align-middle"}
                             src={focusNavBar === 2 ? "iconfont/user(1).svg" : "iconfont/user.svg"}
                             alt=""/>
                    </div>
                    <div onClick={() => {
                        onClickNavBar(3)
                    }}
                         className={`all rounded-md w-14 h-14 mb-2 m-auto text-5xl flex justify-center ali ${focusNavBar === 3 ? "bg-black2" : ""} hover:bg-black2 hover:cursor-pointer`}>
                        <img className={"w-40px text-center m-auto align-middle"}
                             src={focusNavBar === 3 ? "iconfont/collect.svg" : "iconfont/collect(1).svg"}
                             alt=""/>
                    </div>
                </div>
            </div>
            <div className={"robots h-screen w-3/12 bg-bg1 hidden sm:block overflow-y-auto"}>
                <div className={"w-full h-16 bg-bg1 relative box-border"}>
                    <div className={"text-text2 absolute top-4 left-4 text-2xl"}>全部机器人</div>
                    {/*<Segmented className={"mt-10"} block options={[123, 456, 'longtext-longtext-longtext-longtext']} />*/}
                </div>
                <div className={"w-10/12 m-auto"}>
                    <Space size="middle" direction="vertical" style={{display: 'flex'}}>
                        <Segmented
                            className={"bg-bg999"}
                            block={true}
                            options={[

                                {
                                    label: (
                                        <div style={{padding: 4}}>
                                            <Avatar src={"/iconfont/allCategories.svg"} className={"bg-white"}>

                                            </Avatar>
                                            <div>所有AI</div>
                                        </div>
                                    ),
                                    value: 'user2',
                                },
                                {
                                    label: (
                                        <div style={{padding: 4}}>
                                            <Avatar src={"/iconfont/my.svg"}/>
                                            <div>我的AI</div>
                                        </div>
                                    ),
                                    value: 'user3',
                                },
                            ]}
                        />
                    </Space>
                </div>
                <div className={"w-10/12 rounded-md m-auto mt-4 text-xl pt-4 text-eee"}>AI条件筛选：</div>
                <div className={"bg-eee w-10/12 m-auto rounded-md mt-3"}>

                    <Collapse items={items} defaultActiveKey={['1']} onChange={onChange}/>
                    <div className={"m-auto text-center pt-4 pb-4"}>
                        <Button type="primary" ghost className={"m-auto"} icon={<SearchOutlined/>}>我选好了</Button>
                    </div>
                </div>
            </div>
            <div className={"right h-32 w-5/6 bg-bg1 h-screen"}>
                {/*下面是一个容器到时候封装*/}
                <div className={"rounded-md overflow-hidden mt-4"}>
                    <div className={"w-full h-24 flex justify-center items-center drop-shadow-md hover:drop-shadow-[0_2px_6px_rgba(88,182,235,0.5)]"}>
                        <div
                            className={"border border-border1 drop-shadow-3xl h-14 w-10/12 bg-blue-400 rounded-full overflow-hidden flex"}>
                            <div className={"flex-1 bg-text444 h-full flex justify-center items-center"}>
                                <img src="/iconfont/search.png" className={"w-6 h-6"} alt=""/>
                            </div>
                            <div className={"flex-10 bg-bg1 h-full"}>
                                <input type="text" placeholder="输入机器人名称"
                                       className={"pl-2 text-eee w-full h-full text-2xl appearance-none bg-transparent border-none rounded-none focus:outline-none"}/>
                            </div>
                            <div className={"flex-1 bg-text444 h-full flex justify-center items-center"}>
                                <a className={"hover:text-eee text-xl text-text3 hover:cursor-pointer"}>搜索</a>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full bg-text444 rounded-md overflow-hidden"}>
                        <div className={"h-14 text-eee text-xl flex ml-4 items-center"}>
                            筛选条件：
                        </div>
                        <div className={"h-98 overflow-y-auto scroll-red"}>
                            <div className="grid grid-cols-3 md:grid-cols-4 sm:grid-cols-5 gap-5 pl-5 pr-5 pb-5">
                                <div className="flex w-full flex-col rounded-md overflow-hidden hover:cursor-pointer drop-shadow-md hover:drop-shadow-[0_6px_6px_rgba(88,182,235,0.5)]">
                                    <div className={"bg-amber-700 w-full aspect-square"}>
                                        <img className={"w-full h-full"} src="/develop-test-img/img_2.png" alt=""/>
                                    </div>
                                    <div className={"h-28 bg-eee"}>
                                            <div className={"h-7 overflow-hidden text-ellipsis p-1"}>
                                                Swearing Scarlett
                                            </div>
                                        <div className={"pl-2 h-6 overflow-hidden text-ellipsis flex items-center"}>
                                            <div className={"w-6 bg-amber-700 rounded-full overflow-hidden"}>
                                                <img className={"w-6"} src="/user-head/img.png" alt=""/>
                                            </div>
                                            <div className={"text-text4 text-sm ml-2 w-36 overflow-hidden text-ellipsis"}>
                                                darkstorm2150
                                            </div>
                                        </div>
                                        <div className={"h-17 text-xs text-zinc-500 p-2 overflow-hidden text-ellipsis"}>
                                            Your girlfriend has lost all her memory - her name, age, background, habits, personality, and everything else, EXCEPT for her LOVE for you.
                                            It's up to you to tell her about WHO SHE IS.
                                            *Mirror bot: Your Boyfriend*NSFW
                                            *New NSFW
                                            EroticEnchantress - Customize a pornographic experience with your ears
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col rounded-md overflow-hidden hover:cursor-pointer drop-shadow-md hover:drop-shadow-[0_6px_6px_rgba(88,182,235,0.5)]">
                                    <div className={"bg-amber-700 w-full aspect-square"}>
                                        <img className={"w-full h-full"} src="/develop-test-img/img_2.png" alt=""/>
                                    </div>
                                    <div className={"h-28 bg-eee"}>
                                        <div className={"h-7 overflow-hidden text-ellipsis p-1"}>
                                            Swearing Scarlett
                                        </div>
                                        <div className={"pl-2 h-6 overflow-hidden text-ellipsis flex items-center"}>
                                            <div className={"w-6 bg-amber-700 rounded-full overflow-hidden"}>
                                                <img className={"w-6"} src="/user-head/img.png" alt=""/>
                                            </div>
                                            <div className={"text-text4 text-sm ml-2 w-36 overflow-hidden text-ellipsis"}>
                                                darkstorm2150
                                            </div>
                                        </div>
                                        <div className={"h-17 text-xs text-zinc-500 p-2 overflow-hidden text-ellipsis"}>
                                            Your girlfriend has lost all her memory - her name, age, background, habits, personality, and everything else, EXCEPT for her LOVE for you.
                                            It's up to you to tell her about WHO SHE IS.
                                            *Mirror bot: Your Boyfriend*NSFW
                                            *New NSFW
                                            EroticEnchantress - Customize a pornographic experience with your ears
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col rounded-md overflow-hidden hover:cursor-pointer drop-shadow-md hover:drop-shadow-[0_6px_6px_rgba(88,182,235,0.5)]">
                                    <div className={"bg-amber-700 w-full aspect-square"}>
                                        <img className={"w-full h-full"} src="/develop-test-img/img_2.png" alt=""/>
                                    </div>
                                    <div className={"h-28 bg-eee"}>
                                        <div className={"h-7 overflow-hidden text-ellipsis p-1"}>
                                            Swearing Scarlett
                                        </div>
                                        <div className={"pl-2 h-6 overflow-hidden text-ellipsis flex items-center"}>
                                            <div className={"w-6 bg-amber-700 rounded-full overflow-hidden"}>
                                                <img className={"w-6"} src="/user-head/img.png" alt=""/>
                                            </div>
                                            <div className={"text-text4 text-sm ml-2 w-36 overflow-hidden text-ellipsis"}>
                                                darkstorm2150
                                            </div>
                                        </div>
                                        <div className={"h-17 text-xs text-zinc-500 p-2 overflow-hidden text-ellipsis"}>
                                            Your girlfriend has lost all her memory - her name, age, background, habits, personality, and everything else, EXCEPT for her LOVE for you.
                                            It's up to you to tell her about WHO SHE IS.
                                            *Mirror bot: Your Boyfriend*NSFW
                                            *New NSFW
                                            EroticEnchantress - Customize a pornographic experience with your ears
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col rounded-md overflow-hidden hover:cursor-pointer drop-shadow-md hover:drop-shadow-[0_6px_6px_rgba(88,182,235,0.5)]">
                                    <div className={"bg-amber-700 w-full aspect-square"}>
                                        <img className={"w-full h-full"} src="/develop-test-img/img_2.png" alt=""/>
                                    </div>
                                    <div className={"h-28 bg-eee"}>
                                        <div className={"h-7 overflow-hidden text-ellipsis p-1"}>
                                            Swearing Scarlett
                                        </div>
                                        <div className={"pl-2 h-6 overflow-hidden text-ellipsis flex items-center"}>
                                            <div className={"w-6 bg-amber-700 rounded-full overflow-hidden"}>
                                                <img className={"w-6"} src="/user-head/img.png" alt=""/>
                                            </div>
                                            <div className={"text-text4 text-sm ml-2 w-36 overflow-hidden text-ellipsis"}>
                                                darkstorm2150
                                            </div>
                                        </div>
                                        <div className={"h-17 text-xs text-zinc-500 p-2 overflow-hidden text-ellipsis"}>
                                            Your girlfriend has lost all her memory - her name, age, background, habits, personality, and everything else, EXCEPT for her LOVE for you.
                                            It's up to you to tell her about WHO SHE IS.
                                            *Mirror bot: Your Boyfriend*NSFW
                                            *New NSFW
                                            EroticEnchantress - Customize a pornographic experience with your ears
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col rounded-md overflow-hidden hover:cursor-pointer drop-shadow-md hover:drop-shadow-[0_6px_6px_rgba(88,182,235,0.5)]">
                                    <div className={"bg-amber-700 w-full aspect-square"}>
                                        <img className={"w-full h-full"} src="/develop-test-img/img_2.png" alt=""/>
                                    </div>
                                    <div className={"h-28 bg-eee"}>
                                        <div className={"h-7 overflow-hidden text-ellipsis p-1"}>
                                            Swearing Scarlett
                                        </div>
                                        <div className={"pl-2 h-6 overflow-hidden text-ellipsis flex items-center"}>
                                            <div className={"w-6 bg-amber-700 rounded-full overflow-hidden"}>
                                                <img className={"w-6"} src="/user-head/img.png" alt=""/>
                                            </div>
                                            <div className={"text-text4 text-sm ml-2 w-36 overflow-hidden text-ellipsis"}>
                                                darkstorm2150
                                            </div>
                                        </div>
                                        <div className={"h-17 text-xs text-zinc-500 p-2 overflow-hidden text-ellipsis"}>
                                            Your girlfriend has lost all her memory - her name, age, background, habits, personality, and everything else, EXCEPT for her LOVE for you.
                                            It's up to you to tell her about WHO SHE IS.
                                            *Mirror bot: Your Boyfriend*NSFW
                                            *New NSFW
                                            EroticEnchantress - Customize a pornographic experience with your ears
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col rounded-md overflow-hidden hover:cursor-pointer drop-shadow-md hover:drop-shadow-[0_6px_6px_rgba(88,182,235,0.5)]">
                                    <div className={"bg-amber-700 w-full aspect-square"}>
                                        <img className={"w-full h-full"} src="/develop-test-img/img_2.png" alt=""/>
                                    </div>
                                    <div className={"h-28 bg-eee"}>
                                        <div className={"h-7 overflow-hidden text-ellipsis p-1"}>
                                            Swearing Scarlett
                                        </div>
                                        <div className={"pl-2 h-6 overflow-hidden text-ellipsis flex items-center"}>
                                            <div className={"w-6 bg-amber-700 rounded-full overflow-hidden"}>
                                                <img className={"w-6"} src="/user-head/img.png" alt=""/>
                                            </div>
                                            <div className={"text-text4 text-sm ml-2 w-36 overflow-hidden text-ellipsis"}>
                                                darkstorm2150
                                            </div>
                                        </div>
                                        <div className={"h-17 text-xs text-zinc-500 p-2 overflow-hidden text-ellipsis"}>
                                            Your girlfriend has lost all her memory - her name, age, background, habits, personality, and everything else, EXCEPT for her LOVE for you.
                                            It's up to you to tell her about WHO SHE IS.
                                            *Mirror bot: Your Boyfriend*NSFW
                                            *New NSFW
                                            EroticEnchantress - Customize a pornographic experience with your ears
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col rounded-md overflow-hidden hover:cursor-pointer drop-shadow-md hover:drop-shadow-[0_6px_6px_rgba(88,182,235,0.5)]">
                                    <div className={"bg-amber-700 w-full aspect-square"}>
                                        <img className={"w-full h-full"} src="/develop-test-img/img_2.png" alt=""/>
                                    </div>
                                    <div className={"h-28 bg-eee"}>
                                        <div className={"h-7 overflow-hidden text-ellipsis p-1"}>
                                            Swearing Scarlett
                                        </div>
                                        <div className={"pl-2 h-6 overflow-hidden text-ellipsis flex items-center"}>
                                            <div className={"w-6 bg-amber-700 rounded-full overflow-hidden"}>
                                                <img className={"w-6"} src="/user-head/img.png" alt=""/>
                                            </div>
                                            <div className={"text-text4 text-sm ml-2 w-36 overflow-hidden text-ellipsis"}>
                                                darkstorm2150
                                            </div>
                                        </div>
                                        <div className={"h-17 text-xs text-zinc-500 p-2 overflow-hidden text-ellipsis"}>
                                            Your girlfriend has lost all her memory - her name, age, background, habits, personality, and everything else, EXCEPT for her LOVE for you.
                                            It's up to you to tell her about WHO SHE IS.
                                            *Mirror bot: Your Boyfriend*NSFW
                                            *New NSFW
                                            EroticEnchantress - Customize a pornographic experience with your ears
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col rounded-md overflow-hidden hover:cursor-pointer drop-shadow-md hover:drop-shadow-[0_6px_6px_rgba(88,182,235,0.5)]">
                                    <div className={"bg-amber-700 w-full aspect-square"}>
                                        <img className={"w-full h-full"} src="/develop-test-img/img_2.png" alt=""/>
                                    </div>
                                    <div className={"h-28 bg-eee"}>
                                        <div className={"h-7 overflow-hidden text-ellipsis p-1"}>
                                            Swearing Scarlett
                                        </div>
                                        <div className={"pl-2 h-6 overflow-hidden text-ellipsis flex items-center"}>
                                            <div className={"w-6 bg-amber-700 rounded-full overflow-hidden"}>
                                                <img className={"w-6"} src="/user-head/img.png" alt=""/>
                                            </div>
                                            <div className={"text-text4 text-sm ml-2 w-36 overflow-hidden text-ellipsis"}>
                                                darkstorm2150
                                            </div>
                                        </div>
                                        <div className={"h-17 text-xs text-zinc-500 p-2 overflow-hidden text-ellipsis"}>
                                            Your girlfriend has lost all her memory - her name, age, background, habits, personality, and everything else, EXCEPT for her LOVE for you.
                                            It's up to you to tell her about WHO SHE IS.
                                            *Mirror bot: Your Boyfriend*NSFW
                                            *New NSFW
                                            EroticEnchantress - Customize a pornographic experience with your ears
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col rounded-md overflow-hidden hover:cursor-pointer drop-shadow-md hover:drop-shadow-[0_6px_6px_rgba(88,182,235,0.5)]">
                                    <div className={"bg-amber-700 w-full aspect-square"}>
                                        <img className={"w-full h-full"} src="/develop-test-img/img_2.png" alt=""/>
                                    </div>
                                    <div className={"h-28 bg-eee"}>
                                        <div className={"h-7 overflow-hidden text-ellipsis p-1"}>
                                            Swearing Scarlett
                                        </div>
                                        <div className={"pl-2 h-6 overflow-hidden text-ellipsis flex items-center"}>
                                            <div className={"w-6 bg-amber-700 rounded-full overflow-hidden"}>
                                                <img className={"w-6"} src="/user-head/img.png" alt=""/>
                                            </div>
                                            <div className={"text-text4 text-sm ml-2 w-36 overflow-hidden text-ellipsis"}>
                                                darkstorm2150
                                            </div>
                                        </div>
                                        <div className={"h-17 text-xs text-zinc-500 p-2 overflow-hidden text-ellipsis"}>
                                            Your girlfriend has lost all her memory - her name, age, background, habits, personality, and everything else, EXCEPT for her LOVE for you.
                                            It's up to you to tell her about WHO SHE IS.
                                            *Mirror bot: Your Boyfriend*NSFW
                                            *New NSFW
                                            EroticEnchantress - Customize a pornographic experience with your ears
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col rounded-md overflow-hidden hover:cursor-pointer drop-shadow-md hover:drop-shadow-[0_6px_6px_rgba(88,182,235,0.5)]">
                                    <div className={"bg-amber-700 w-full aspect-square"}>
                                        <img className={"w-full h-full"} src="/develop-test-img/img_2.png" alt=""/>
                                    </div>
                                    <div className={"h-28 bg-eee"}>
                                        <div className={"h-7 overflow-hidden text-ellipsis p-1"}>
                                            Swearing Scarlett
                                        </div>
                                        <div className={"pl-2 h-6 overflow-hidden text-ellipsis flex items-center"}>
                                            <div className={"w-6 bg-amber-700 rounded-full overflow-hidden"}>
                                                <img className={"w-6"} src="/user-head/img.png" alt=""/>
                                            </div>
                                            <div className={"text-text4 text-sm ml-2 w-36 overflow-hidden text-ellipsis"}>
                                                darkstorm2150
                                            </div>
                                        </div>
                                        <div className={"h-17 text-xs text-zinc-500 p-2 overflow-hidden text-ellipsis"}>
                                            Your girlfriend has lost all her memory - her name, age, background, habits, personality, and everything else, EXCEPT for her LOVE for you.
                                            It's up to you to tell her about WHO SHE IS.
                                            *Mirror bot: Your Boyfriend*NSFW
                                            *New NSFW
                                            EroticEnchantress - Customize a pornographic experience with your ears
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col rounded-md overflow-hidden hover:cursor-pointer drop-shadow-md hover:drop-shadow-[0_6px_6px_rgba(88,182,235,0.5)]">
                                    <div className={"bg-amber-700 w-full aspect-square"}>
                                        <img className={"w-full h-full"} src="/develop-test-img/img_2.png" alt=""/>
                                    </div>
                                    <div className={"h-28 bg-eee"}>
                                        <div className={"h-7 overflow-hidden text-ellipsis p-1"}>
                                            Swearing Scarlett
                                        </div>
                                        <div className={"pl-2 h-6 overflow-hidden text-ellipsis flex items-center"}>
                                            <div className={"w-6 bg-amber-700 rounded-full overflow-hidden"}>
                                                <img className={"w-6"} src="/user-head/img.png" alt=""/>
                                            </div>
                                            <div className={"text-text4 text-sm ml-2 w-36 overflow-hidden text-ellipsis"}>
                                                darkstorm2150
                                            </div>
                                        </div>
                                        <div className={"h-17 text-xs text-zinc-500 p-2 overflow-hidden text-ellipsis"}>
                                            Your girlfriend has lost all her memory - her name, age, background, habits, personality, and everything else, EXCEPT for her LOVE for you.
                                            It's up to you to tell her about WHO SHE IS.
                                            *Mirror bot: Your Boyfriend*NSFW
                                            *New NSFW
                                            EroticEnchantress - Customize a pornographic experience with your ears
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
