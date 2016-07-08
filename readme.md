# Royal Components Library

## 启动项目
欢迎fork这个项目，然后clone到本地，使用`npm`安装package.json里的Node模块:

```
    "dependencies": {
        "react": "^15.2.0",
        "react-dom": "^15.2.0",
        "react-router": "^2.5.2"
    },
    "devDependencies": {
        "webpack": "^1.13.1",
        "babel-core": "^6.10.4",
        "babel-loader": "^6.2.4",
        "babel-preset-es2015": "^6.9.0",
        "babel-preset-react": "^6.11.1",
        "babel-preset-stage-1": "^6.5.0",
        "css-loader": "^0.23.1",
        "file-loader": "^0.9.0",
        "img-loader": "^1.2.2",
        "less": "^2.7.1",
        "less-loader": "^2.2.3",
        "style-loader": "^0.13.1",
        "url-loader": "^0.5.7"
    }
```

启动前，先全局安装 `webpack` ：

```
    $ sudo npm install webpack -g
```

然后启动编译

```
    $ webpack --progress -w
```

最后启动Http服务，这里我用Node写了一个最简单的本地Http服务器：

```
    $ node app.js
```

默认监听 `3000` 端口，赶紧 打开浏览器 看看吧！
