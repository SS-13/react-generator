import React, { FC } from "react";
import "../assets/styles/app.css";

type AppProps = {
    onSomething: Function;
    onClick: () => void;
    onClick1: (e: MouseEvent) => void;
    onClick2: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type Props = {
    msg: string;
};

interface AppProps2 {
    children1: JSX.Element; // 不考虑数组 React.createElement
    children2: JSX.Element | JSX.Element[]; // 一些特殊字符
    children3: React.ReactChildren; // 不是一个类型，应用程序
    children4: React.ReactChild[]; // 稍微好点 接受数组
    children5: React.ReactNode;
    style?: React.CSSProperties;
    onChange?: React.FormEventHandler<HTMLInputElement>;
    props: Props & React.ComponentPropsWithoutRef<"button">;
    // props2: Props & React.ComponentPropsWithRef<>
}

const xx = (e: MouseEvent) => {
    console.log(e.preventDefault());
};

const App: FC = () => {
    return <div className="app">App</div>;
};

export default App;
