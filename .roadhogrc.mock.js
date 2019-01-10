export default {
    "entry": "src/index.js",
    port: 1234,
    "proxy": {
        "/api": {
            "target": "http://172.31.18.251:8088/",
            "changeOrigin": true,
            "pathRewrite": {
                "^/api": ""
            }
        }
    },
    "env": {
        "development":
            {
                "extraBabelPlugins":
                    [
                        "dva-hmr",
                        "transform-runtime",
                        ["import", {"libraryName": "antd", "style": "css"}]
                    ]
            }
        ,
        "production": {
            "extraBabelPlugins":
                [
                    "transform-runtime",
                    ["import", {"libraryName": "antd", "style": "css"}]
                ]
        }
    }
}
