import { useCallback, useState } from "react";

type TStatus = "IDLE" | "PROCESSING" | "ERROR" | "SUCCESS";

type UseAsyncTaskType<T extends unknown[], R> = {
    run: (...arg: T) => Promise<R>;
    reset: () => void;
    message: string;
    status: TStatus;
};

function useAsyncTask<T extends unknown[], R = unknown>(
    task: (...arg: T) => Promise<R>
): UseAsyncTaskType<T, R> {
    const [status, setState] = useState<TStatus>("IDLE");
    const [message, setMessage] = useState("");
    const run = useCallback(
        async (...arg: T) => {
            try {
                const resp = await task(...arg);
                setState("PROCESSING");
                console.log("resp", resp);
                return resp;
            } catch (e) {
                setState("ERROR");
                setMessage("业务捕获错误");
                throw new Error((<Error>e).toString());
            }
        },
        [task]
    );

    const reset = useCallback(() => {
        setState("IDLE");
        setMessage("");
    }, []);

    return {
        run,
        reset,
        message,
        status,
    };
}

export default useAsyncTask;
