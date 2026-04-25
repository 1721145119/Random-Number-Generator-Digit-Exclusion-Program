// ==UserScript==
// @name         随机数生成器数字排除程序
// @namespace    https://www.lddgo.net/
// @version      2026-04-19
// @description  对随机数生成器进行数字排除，防止课堂被抽选之利器！ ✅️程序实现方法简单，检查随机数生成结果显示框，抽中目标序号则快速自动触发重新生成。简单粗暴，但行之有效！✅️程序对任意网站迁移能力强，只需稍作修改即可使用。
// @author       518011宾泽胤
// @match        https://www.lddgo.net/string/randomnumber
// @icon         https://www.lddgo.net/img/icon.png
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';

    console.log('随机数生成器数字排除程序已启动'); // 向控制台输出结果，打开开发者工具可见

    const resultDiv = document.getElementById('generateResult'); // 获取id为"generateResult"的随机数生成结果显示框
    const startButton = document.getElementById('startGenerate'); // 获取id为"startGenerate"的随机数生成按钮

    if (resultDiv) console.log('找到id为"generateResult"的div元素'); else console.warn('未找到id为"generateResult"的div元素'); // 向控制台输出结果或警告，打开开发者工具可见
    if (startButton) console.log('找到id为"startGenerate"的按钮元素'); else console.warn('未找到id为"startGenerate"的按钮元素'); // 向控制台输出结果或警告，打开开发者工具可见

    const intervalId = setInterval(() => { // 设置一个定时检查的interval
        if (resultDiv) { // 如果找到了该元素
            const textContent = resultDiv.textContent || resultDiv.innerText; // 获取随机数生成结果显示框的文本内容
            if (textContent.includes('11') || textContent.includes('23')) { // 检查文本内容中是否包含字符串"11"或"23"
                if (startButton) { // 如果找到了按钮
                    startButton.click(); // 触发其点击事件
                    console.log('检测到"11"或"23"，已触发#startGenerate按钮点击事件'); // 向控制台输出结果，打开开发者工具可见
                }
            }
        }
    }, 1); // 间隔时间为1毫秒，实际效果会受浏览器限制

    function stopChecking() { // 可选：提供一个停止检查的函数
        clearInterval(intervalId);
        console.log('已停止定时检查');
    }
})();