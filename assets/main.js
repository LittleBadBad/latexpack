/**
 * \cvskill{Python} {5+ yrs} {1} \\[-2pt]
 * @param name
 * @param yrs
 * @return {{name, yrs}}
 */
const skill = (name, yrs) => ({name, yrs})
const SkillFormat = ({rate, name, yrs}) => `\\cvskill{${name}} {${yrs}+ yrs} {${rate}} \\\\[-2pt]`
const skills = (sks) => sks.map(({name, yrs}, i, a) =>
    ({name, yrs, rate: (yrs / Math.max(...a.map(v1 => v1.yrs))).toFixed(1)}))
    .map(SkillFormat).join("\n")

/**
 * \cvmetaevent
 {2009 - 2011}
 {M. Sc. Physics.}
 {Universität Bonn}
 {Main thematic priority of those master studies was numerical time series analysis of non-linear dynamical systems. Besides data analysis and transformation, great importance was attached to fast algorithms and efficient software architecture.

            In the master thesis a numerical approach for the detection of the direction of interaction was proposed. Analysis of this new approach was performed with the help computer simulations to find out its limits and to compare it to another commonly used approaches.

            This numerical approach was highly optimised for cluster computing and implemented in c++ . For those purposes a distributed computing cluster had to be set up and administrated.}
 * @param yrs
 * @param degree
 * @param university
 * @param desc
 * @return {{university, degree, yrs, desc}}
 */
const education = (yrs, degree, university, desc = "") => ({yrs, degree, university, desc})
const educationFormat = ({yrs, degree, university, desc}) => `\\cvmetaevent
 {${yrs}}
 {${degree}}
 {${university}}
 {${desc}}`
const educations = (eds) => eds.map(educationFormat).join("\n")

/**
 * \cvevent
 {Sep 15 - NOW}
 {DevOps/FullStack developer}
 {Research and Development}
 {A large IAM project required an intuitive interface for role-based access and rights management. At the same time, new workfows for role based access, life time and monitoring had to be established}
 {\cvlist{
                \item Creation of a web portal for role- and rights management
                \item Establishing a connection to the existing MicroFocus role solution
                \item Development of new role-based workfows and processes, as well as training and support
                \item Maintenance of existing infrastructure
            }}
 {\cvlist {
                \item Django for the roles- and rights management tool backend (backend is a REST interface)
                \item Angular for the easy frontend interaction
                \item HTML5/CSS3/Bootstrap3 for the frontend
                \item Ansible + Docker for 1-click deployments
            }}
 {\cvlist{
                \item A web based tool for an intuitive role assignment and administration
                \item Online overview of company structures, projects, etc
                \item Tools for role review, reporting and troubleshooting
            }}
 \vfill\null
 * @param date
 * @param title
 * @param role
 * @param desc
 * @param details
 * @param tecs
 * @param achs
 * @return {{date, achs, role, work, tecs, desc}}
 */
const workExperience = (date = "", title = "", role = "", desc = "", details = [], tecs = [], achs = []) =>
    ({date, title, role, desc, details, tecs, achs})
const workExperienceFormat = ({date, title, role, desc, details = [], tecs = [], achs = []}) =>
    `\\cvevent
            {${date}}
            {${title}}
            {${role}}
            {${desc}}
            {${details && details.length ? `\\cvlist {
                ${details.map(v => `\\item ${v}`).join("\n")}
            }` : ""}}
            {${tecs && tecs.length ? `\\cvlist {
                ${tecs.map(v => `\\item ${v}`).join("\n")}
            }` : ""}}
            {${achs && achs.length ? `\\cvlist {
                ${achs.map(v => `\\item ${v}`).join("\n")}
            }` : ""}}\n`
const workExperiences = (ws) => ws.map(workExperienceFormat).join("\\vfill\\null\n")

/**
 *\cvmetaevent
 {LPIC 1 - Linux administrator}
 {1234}
 {5678}
 {Certificate issued by the Linux Professional Institute to prove abilities in Linux administration}
 * @param title
 * @param p2
 * @param p3
 * @param desc
 * @return {{p2: string, p3: string, title: string, desc: string}}
 */
const certification = (title = "", p2 = "", p3 = "", desc = "") =>
    ({title, p2, p3, desc})
const certificationFormat = ({title, p2, p3, desc}) => `\\cvmetaevent
            {${title}}
            {${p2}}
            {${p3}}
            {${desc}}`
const certifications = (cs = []) => cs.map(certificationFormat).join("\n")

module.exports = ({lang}) => (lang === "cn" && {
    NAME: "张楚研",
    DESC: "中国地质大学（武汉）2023届硕士研究生",
    SKILLS: "技能",
    skills: skills([
        skill("JavaScript", 3),
        skill("nodejs", 3),
        skill("typescript", 3),
        skill("python", 2),
        skill("full stack", 2),
        skill("java", 2),
        skill("database", 2),
        skill("c++", 2),
        skill("linux", 1),]),
    CONTACT: "联系方式",
    address: `中国地质大学（武汉）未来城校区`,
    phone: "+8615827362520",
    email: "littlebadbad@qq.com",
    EDUCATION: "教育经历",
    educations: educations([
        education("2020 - 2023",
            "硕士",
            "中国地质大学（武汉）",
            `硕士期间学习课程包括机器学习、组合数学、数据挖掘、高级计算机网络、网络安全等，
            硕士期间也跟随导师完成了一些工程项目，积累了大量的项目经验`),
        education("2016 - 2020",
            "学士",
            "中国地质大学（武汉）",
            `本科期间就读于计算机学院的空间信息与数字技术专业，属于与地质相关度较高的计算机
            学科，在学习一些地质相关的科目同时，也完成了计算机基础课程的学习，包括C语言、C++、
            java、计算机网络、计算机组成原理、数据结构、操作系统等科目`),]),
    CERTIFICATIONS: "语言",
    certifications: certifications([
        certification("", "英语CET-4", "", ""),
        certification("", "英语CET-6", "", "")
    ]),
    PROFILE: lang === "cn" && "个人简介",
    profile: `善于学习，接收新技术新知识能力强；涉猎广泛，入门快；善于学习、总结不同语言、不同框架之
    间的共同规律；善于信息检索以及信息筛选；对于工作中遇到的问题、bug，能够快速分析问题的核心并着手去
    解决；乐于学习新的技术新的知识，乐于从其他优秀的项目中吸取经验，并在自己的实际工作中加以应用；不足
    之处在于有些完美主义，工作过程中容易陷入寻找最简最优解的死角中`,
    WORK_EXPERIENCE: lang === "cn" && "工作经历",
    TechnologiesInclude: (lang === "cn" && "技术应用") || "Technologies include:",
    AchievementsInclude: (lang === "cn" && "工作成就") || "Achievements include:",
    workExperiences: workExperiences([
        workExperience("2021/09-现在",
            "铁路运输调度命令管理系统全栈",
            "全栈开发",
            `研究生期间参与的导师项目中，独自设计并全栈完成了此项目。出于跨平台和快速开发的考虑，
            客户端采用electron框架编写，并尽可能将大部分功能尽可能在页面端完成开发`,
            ["使用electron框架编写客户端",
                "客户端页面采用mvvm架构",
                "使用typescript+react+mui5完成了页面的编写",
                "使用C++完成了底层设备驱动程序的调用库的开发",
                "使用electron-boilerplate完成了windows桌面端的打包发布",
                "并使用Cordova完成Android平台移植的操作",
                "服务端采用基于Nodejs的快速开发框架strapi构建"],
            ["electron",
                "mvvm",
                "react",
                "typescript",
                "electron-boilerplate",
                "cordova",
                "strapi",
                "c++",
                "libusb"],
            ["完成读卡器写卡格式破解的demo页",
                `完成整个系统的登录、调度命令创建、管理、审核、分解、写卡等功能的前端展示和后端接口
                的编写`,
                "完成了系统的跨Windows、Linux、Android三个平台的发布"]),
        workExperience("2022/06 - 2022/09",
            "前端实习",
            "前端实习培训生",
            `参加金山办公的暑期前端培训实习，在培训期间，完成了十多项培训的任务和工作，
            并通过了实习`,
            ["学习基础前端开发工具vscode、nginx、postman、git等工具的使用",
                "完成css、html、js、ts、webpack、react等课程的培训学习",
                "完成css基础、flex和grid练习、响应式基础、算法练习、react基础等十余项课后大小作业",
                "完成中期团队项目：花光他的钱\\href{https://neal.fun/spend}{(原页面)}升级版本，" +
                "包括客户端页面和管理端页面，管理端包括richer、goods和order manager，管理员可以使用户决定花哪些richer的钱",
                "完成终期个人考核项目：金山表单\\href{https://f.wps.cn}{(原页面)}简略版本",
                "学习nodejs开发基础"],
            ["css+html+js", "ts", "es6", "webpack", "react", "nodejs"],
            ["完成了十余项课后作业任务，包括css训练、响应式布局训练、es6训练、typescript训练、webpack训练、react训练等",
                "完成了中期考核任务，本人负责解决客户端的复杂逻辑，以及管理器端的商品和订单管理，管理商品和订单项目，完成任务的同时并帮助团队成员解决项目中的问题",
                "完成了终期考核任务，完成了登录、注册和用户信息设置等全部的用户管理，并完成了七种类型问题的表单创建、编辑、预览、管理、填充、查看、表单二维码共享等功能"]),
        workExperience("2020/11-2021/03",
            "地质灾害信息管理系统",
            "前端开发",
            `研究生期间参与本项目，完成地质灾害信息的增删查改，以及其他复杂的逻辑，使用到了
            ruoyi快速构建，neo4j图数据库，直播，文本识别等技术`,
            ["使用ruoyi完成基础功能框架的搭建",
                "使用vue2+elementUI完成CRUD基础页面的开发",
                "完成除CRUD外，雨量计算、灾害等级计算、数据统计、neo4j可视化、直播等功能"],
            ["vue2", "elementUI", "neo4j", "neovis", "mpegts", "echarts", "react"],
            ["完成了基础CRUD页面的编写",
                "使用react+neovis完成了neo4j可视化插件的开发",
                "使用react完成了雨量计算和灾害等级计算组件的开发",
                "使用mpegts.js完成了直播功能的开发",
                "使用echarts完成了数据统计表展示的功能"]),
        workExperience("2021/09-2022/03",
            "工程安全质量考核app",
            "安卓端开发",
            `研究生期间参与本项目的开发，负责安卓前端的开发工作，实现了用户登录，工程项目打分，
            打分表修改、打印、下载等模块，工程打分提供了简易模式以及传统手写模式的填写，打印表提供了
            pdf预览、手写签字等功能（app下载地址）`),
        workExperience("2020/09-2022/11",
            "铁路运行揭示调度命令读卡驱动Linux移植",
            "驱动破解和开发",
            `研究生期间参与本项目，受铁路局项目机密性的限制，只有usb读卡器的驱动程序、软件程序，
            后对驱动以及软件和dll调用库等进行了反汇编和dubug，根据读卡器的芯片特性，破解出关键数据，
            以及关键ep地址和通讯协议，完成了调用库Linux的移植，并具有跨平台的能力，代码在原windows
            平台上依然可编译运行`),
        workExperience("2020/09-2020/12",
            "Python深度学习目标检测和字符识别",
            "模型代码编写",
            `在研究生学习期间，独立完成了此课题。主题是识别火车车厢上打印的数字，数字不能被普通
            OCR识别，上一个解决方案是使用一个模型来跟踪角色的位置，以排除无效信息，并使用另一个模型直
            接读取文本，在我的方案中视数字为logo，并训练一个YOLO模型来直接跟踪这些logo，并对其进行
            排序，一个模型使用的时间比两个要短得多`),
        workExperience("2019/06-2023/09",
            "其他",
            "个人业余开发",
            `课余时间自主学习了多种语言及框架，并帮助他人或自己使用开发了开发了多个脚本工具，
            爬虫，网站，接口，群聊机器人等，开发的网站包括校园问答百科（链接），社团值班排班工具
            （链接），校园新闻（链接），校园拼车平台（已下线）`),
    ])
}) || (lang === "en" && {
    NAME: "张楚研",
    DESC: "Graduate student of 2023 China University of Geosciences (Wuhan)",
    SKILLS: "",
    skills: skills([
        skill("JavaScript", 3),
        skill("nodejs", 3),
        skill("typescript", 3),
        skill("python", 2),
        skill("full stack", 2),
        skill("java", 2),
        skill("database", 2),
        skill("c++", 2),
        skill("linux", 1),]),
    CONTACT: "",
    address: "China University of Geosciences (Wuhan) Future City Campus",
    phone: "+8615827362520",
    email: "littlebadbad@qq.com",
    EDUCATION: "",
    educations: educations([
        education("2020 - 2023",
            "master degree",
            "China University of Geosciences (Wuhan)",
            `During the master's period, the learning courses include machine 
            learning, combinatorial mathematics, data mining, advanced computer 
            network, network security, etc. during the master's period, I also 
            completed some engineering projects with my tutor and accumulated a lot 
            of project experience`),
        education("2016 - 2020",
            "bachelor degree",
            "China University of Geosciences (Wuhan)",
            `During the undergraduate period, I studied in the specialty of 
            spatial information and digital technology of computer college, which 
            belongs to the computer discipline with high geological correlation. 
            While learning some geological related subjects, I also completed the 
            study of computer basic courses, including C language, C + +, Java, 
            computer network, computer composition principle, data structure, 
            operating system and other subjects`),]),
    CERTIFICATIONS: "LANGUAGE",
    certifications: certifications([
        certification("", "English CET-4", "", ""),
        certification("", "English CET-6", "", "")
    ]),
    PROFILE: "",
    profile: `Good at learning, strong ability to receive new technology and 
    knowledge; Wide range and fast entry; Good at information retrieval and 
    information screening; For problems and bugs encountered in work, the core 
    of the them can be quickly analyzed and start to solve it; Willing to learn 
    new technologies and knowledge, and willing to learn from other excellent 
    projects and apply them in their own practical work; The disadvantage lies 
    in some perfectionism, and it is easy to fall into the dead angle of finding 
    the simplest and optimal solution in the process of work`,
    WORK_EXPERIENCE: "WORK EXPERIENCE",
    TechnologiesInclude: "Technologies include:",
    AchievementsInclude: "Achievements include:",
    workExperiences: workExperiences([
        workExperience("2021/09 - now",
            "Full stack of railway transportation dispatching command management system",
            "Full stack development",
            `I participated in the tutor project during my graduate school, 
            and designed and completed this project by myself. In consideration of 
            cross platform and rapid development, the client is written in the 
            electron framework, and most functions are developed on the page side 
            as much as possible`,
            ["Using the electron framework to write the client",
                "The client page adopts MVVM architecture",
                "Use typescript + react + mui5 to complete the page",
                "Using C + + to complete the development of the call library of the underlying device driver",
                "The packaging and release of Windows desktop is completed by using electronic boilerplate",
                "Use Cordova to complete the operation of Android platform migration",
                "The server side is built with the rapid development framework strapi based on nodejs"],
            ["electron",
                "mvvm",
                "react",
                "typescript",
                "electron-boilerplate",
                "cordova",
                "strapi",
                "c++",
                "libusb"],
            ["Complete the page of card reader writing format cracking and debugging",
                `Complete the front-end interface and back-end interface of the login, 
                scheduling command creation, management, audit, decomposition, card writing 
                and other functions of the whole system`,
                "Completed the release of the system across windows, Linux and Android platforms"]),
        workExperience("2022/06 - 2022/09",
            "KingSoft front end Intern",
            "Front end Intern",
            `Participated in the summer front-end training internship 
            of Jinshan office, completed more than ten training tasks and work 
            during the training, and passed the internship`,
            ["Learn the use of basic front-end development tools (vscode, nginx, postman, GIT, etc.)",
                "Complete the training of CSS, HTML, JS, TS, webpack, react and other courses",
                `Complete more than ten after-school assignments such as CSS foundation, 
                flex and grid exercises, responsive foundation, algorithm exercises, and 
                react foundation`,
                `Complete the mid-term team project: spend all his money 
                \\href{ https://neal.fun/spend }{(original page)} upgrade version, 
                includes the client page and the management page. The management 
                side includes richer, goods and order manager. The administrator 
                can enable the user to decide which richer money to spend`,
                `Complete the final personal assessment item: KingSoft 
                form \\href{ https://f.wps.cn }{(original page)} 
                abbreviated version`,
                "Learn the fundamentals of nodejs development"],
            ["css+html+js", "ts", "es6", "webpack", "react", "nodejs"],
            [`Completed more than ten homework tasks, including CSS 
            training, responsive layout training, ES6 training, 
            typescript training, webpack training, react training, etc`,
                `Completed the mid-term assessment task, I am 
                responsible for solving the complex logic of the client 
                and managing the goods and orders on the manager side, 
                managing the goods and order projects, helping the 
                team members solve the problems in the project while 
                completing the task`,
                `Completed the final assessment task, completed all 
                user management such as login, registration and user 
                information setting, and completed the functions of 
                form creation, editing, preview, management, filling, 
                viewing, form QR code sharing, etc. for seven types 
                of questions`]),
        workExperience("2020/11-2021/03",
            "Geological disaster information management system",
            "Front end development",
            `During the postgraduate period, I participated in 
            the project, completed the addition, deletion, search 
            and modification of geological disaster information, 
            and other complex logic, and used ruoyi rapid construction, 
            neo4j map database, live broadcast, text recognition and 
            other technologies`,
            ["Use ruoyi to build the basic functional framework",
                "Use vue2 + element-ui to complete the development of CRUD basic page",
                "Besides CRUD, rainfall calculation, disaster grade calculation, data statistics, neo4j visualization, live broadcast and other functions are completed"],
            ["vue2", "elementUI", "neo4j", "neovis", "mpegts", "echarts", "react"],
            ["Finished the basic CRUD page writing",
                "Use react + neovis to complete the development of neo4j visual plug-in",
                "使用react完成了雨量计算和灾害等级计算组件的开发",
                "使用mpegts.js完成了直播功能的开发",
                "使用echarts完成了数据统计表展示的功能"]),
        workExperience("2021/09-2022/03",
            "工程安全质量考核app",
            "安卓端开发",
            "研究生期间参与本项目的开发，负责安卓前端的开发工作，实现了用户登录，工程项目打分，打分表修改、打印、下载等模块，工程打分提供了简易模式以及传统手写模式的填写，打印表提供了pdf预览、手写签字等功能（app下载地址）"),
        workExperience("2020/09-2022/11",
            "铁路运行揭示调度命令读卡驱动Linux移植",
            "驱动破解和开发",
            "研究生期间参与本项目，受铁路局项目机密性的限制，只有usb读卡器的驱动程序、软件程序，后对驱动以及软件和dll调用库等进行了反汇编和dubug，根据读卡器的芯片特性，破解出关键数据，以及关键ep地址和通讯协议，完成了调用库Linux的移植，并具有跨平台的能力，代码在原windows平台上依然可编译运行"),
        workExperience("2020/09-2020/12",
            "Python深度学习目标检测和字符识别",
            "模型代码编写",
            "在研究生学习期间，独立完成了此课题。主题是识别火车车厢上打印的数字，数字不能被普通OCR识别，上一个解决方案是使用一个模型来跟踪角色的位置，以排除无效信息，并使用另一个模型直接读取文本，在我的方案中视数字为logo，并训练一个YOLO模型来直接跟踪这些logo，并对其进行排序，一个模型使用的时间比两个要短得多"),
        workExperience("2019/06-2023/09",
            "其他",
            "个人业余开发",
            "课余时间自主学习了多种语言及框架，并帮助他人或自己使用开发了开发了多个脚本工具，爬虫，网站，接口，群聊机器人等，开发的网站包括校园问答百科（链接），社团值班排班工具（链接），校园新闻（链接），校园拼车平台（已下线）"),
    ])
})
