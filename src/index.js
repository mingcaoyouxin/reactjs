import React from 'react';
import { render } from 'react-dom';
import routes from './routes';

import 'tinper-bee/assets/tinper-bee.css';

//这里index.html 默认引用这个js吗？好像并没有见到import，这里会渲染routes，routes是一个文件夹，里面有个index.js
render(
    routes,
    document.getElementById('app')
)




