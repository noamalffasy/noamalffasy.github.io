const withTypescript = require("@zeit/next-typescript");
const debug = process.env.NODE_ENV !== "production";

module.export = withTypescript({
    exportPathMap: () => {
        return {
            "/": { page: "/" }
        }
    }
});