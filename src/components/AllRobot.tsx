import React, {FC, useState} from "react";
import {Avatar, Button, Collapse, Segmented, Space, Tag} from "antd";
import {SearchOutlined} from "@ant-design/icons";


const {CheckableTag} = Tag;

const tagsData = ['中文', '日语', '英语'];

interface ParagraphProps {
    setRouterIndex: (e) => void,
}

const AllRobot: FC<ParagraphProps> = ({setRouterIndex}) => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };
    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };
    const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);
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
    return (
            <>
                <div className={"w-full h-16 bg-bg1 relative box-border"}>
                    <div className={"text-text2 absolute top-4 left-4 text-2xl"}>全部机器人</div>
                    {/*<Segmented className={"mt-10"} block options={[123, 456, 'longtext-longtext-longtext-longtext']} />*/}
                </div>
                <div className={"w-10/12 m-auto"}>
                    <Space size="middle" direction="vertical" style={{display: 'flex'}}>
                        <Segmented
                            onChange={(e) => {
                                setRouterIndex(e)
                            }}
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
                                    value: 0,
                                },
                                {
                                    label: (
                                        <div style={{padding: 4}}>
                                            <Avatar src={"/iconfont/my.svg"}/>
                                            <div>我的AI</div>
                                        </div>
                                    ),
                                    value: 1,
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
            </>
    )
}

export default AllRobot
