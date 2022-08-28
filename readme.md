# CV-LATEX

输入模板自动生成简历latex代码的工具

## 使用方式

在assets里放入main.js和main.tex模板

```js
// main.js
module.exports = ({lang}) => (lang === "cn" && {
    NAME: "张楚研",
    DESC: "中国地质大学（武汉）2023届硕士研究生",
})
```

```latex
%变量名采用{{NAME}}的格式%
\fcolorbox{white}{darkcol}{\begin{minipage}[c][3.5cm][c]{1\mpwidth}
                               \begin {center}
                                   \HUGE{ \textbf{ \textcolor{white}{ \uppercase{ {{NAME}} } } } } \\[-24pt]
                                   \textcolor{white}{ \rule{0.1\textwidth}{1.25pt} } \\[4pt]
                                   \large{ \textcolor{white} {{{DESC}}} }
                               \end {center}
\end{minipage}} \\[14pt]
```

执行命令`npm run latexpack`，即可在dist中生成对应的latex文件


<div style="text-align: center;"><embed src="./out/cn_main.pdf" width="850" height="600"></div>
