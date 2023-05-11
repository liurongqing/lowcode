# 基于 lowcode-engine 开发

https://lowcode-engine.cn/


## Todo

- 不用nextfd，到时全部改用 antd



## 问题
1. 不能自动刷新
    在 package.json 中去掉 --disable-reload
    ```shell
    "start": "build-scripts start --disable-reload --port 5556",
    ```