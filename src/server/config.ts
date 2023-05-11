import path from "path";

const env = process.env.NODE_ENV;

const getConfig = () => {
    if (env === "dev") {
        return {
            staticFilePath: path.join(__dirname, "../../build/dist"),
        };
    }
    return {
        staticFilePath: path.join(__dirname, "./dist"),
    };
};

export const config = getConfig();
