import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Fixedfield from "../../components/fixedfield";
import React, { useEffect, useState } from "react";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Pagebx from "../../components/pagebx";
import Mycart from "../../components/mycart";
import Head from "next/head";

export default function ProviderSearch() {
    const [showCoverLogin, setShowCoverLogin] = useState(false);

    const _loginShow = () => {
        setShowCoverLogin(!showCoverLogin);
    };

    return (
        <>
            <Head>
                <title>我的购物车</title>
                <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon" />
            </Head>
            <Navibar _loginShow={_loginShow} />
            {showCoverLogin && <Coverlogin _loginShow={_loginShow} />}
            <Fixedfield />
            <Pagebx>
                <Mycart />
            </Pagebx>
            <Wangyiyunfooter />
        </>
    );
}