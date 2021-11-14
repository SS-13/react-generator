import React, { FC } from "react";
import useAsyncTask from "../../hooks/useAsyncTask";

function myApiRequest(data: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rnd = Math.random() * 10;
            if (rnd <= 5) {
                resolve(data);
            } else {
                reject(new Error("err"));
            }
        }, 2000);
    });
}

const Demo: FC = () => {
    const task = useAsyncTask(async (data: string) => myApiRequest(data));
    return (
        <>
            <div>{task.status}</div>
            <button type="button" onClick={() => task.run("s")}>
                test
            </button>
        </>
    );
};

console.log("Demo: ", Demo);

export default Demo;
