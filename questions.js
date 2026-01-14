window.QUESTIONS = [
  {
    "id": 1,
    "q": "在 TCP/IP 网络中，HTTP（超文本传输协议）服务默认使用的端口号是（）。",
    "options": [
      "80",
      "443",
      "21",
      "53"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（80）：HTTP 默认端口是 80。 B（443）：443 是 HTTPS 的默认端口。 C（21）：21 是 FTP 控制连接端口。 D（53）：53 是 DNS 服务端口。"
  },
  {
    "id": 2,
    "q": "HTTP 的中文名称及英文全称分别是（）。",
    "options": [
      "文件传输协议（File Transfer Protocol, FTP）",
      "域名系统（Domain Name System, DNS）",
      "超文本传输协议（Hypertext Transfer Protocol, HTTP）",
      "安全外壳协议（Secure Shell, SSH）"
    ],
    "answerIndex": 2,
    "explain": "正确答案：C。 A（文件传输协议（File Transfer Protocol, FTP））：FTP 是文件传输协议，不是 HTTP。 B（域名系统（Domain Name System, DNS））：DNS 用于域名解析，不是 HTTP。 C（超文本传输协议（Hypertext Transfer Protocol, HTTP））：HTTP 的中文名为“超文本传输协议”，英文为 Hypertext Transfer Protocol。 D（安全外壳协议（Secure Shell, SSH））：SSH 用于安全远程登录，不是 HTTP。"
  },
  {
    "id": 3,
    "q": "关于 HTTP 的作用，下列哪一项描述最准确？（）。",
    "options": [
      "用于浏览器与 Web 服务器之间传输网页/超文本内容，是 WWW 的基础应用层协议",
      "用于在主机之间传输文件，采用控制连接与数据连接（双通道）",
      "将域名映射到 IP 地址，实现域名解析",
      "用于在不安全网络上提供加密的远程登录与隧道服务"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（用于浏览器与 Web 服务器之间传输网页/超文本内容，是 WWW 的基础应用层协议）：这是 HTTP 的典型用途：Web 浏览与超文本传输。 B（用于在主机之间传输文件，采用控制连接与数据连接（双通道））：这是 FTP 的用途（文件传输、控制/数据连接），不是 HTTP。 C（将域名映射到 IP 地址，实现域名解析）：这是 DNS 的用途（域名解析），不是 HTTP。 D（用于在不安全网络上提供加密的远程登录与隧道服务）：这是 SSH 的用途（安全远程登录），不是 HTTP。"
  },
  {
    "id": 4,
    "q": "FTP 采用“控制连接+数据连接”两条连接。其控制连接与数据连接的默认端口号分别是（）。",
    "options": [
      "控制连接 21，数据连接 20",
      "控制连接 20，数据连接 21",
      "控制连接 25，数据连接 110",
      "控制连接 22，数据连接 23"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（控制连接 21，数据连接 20）：FTP 的控制连接默认使用 21 端口，传统主动模式下数据连接常用 20 端口。 B（控制连接 20，数据连接 21）：端口顺序写反了：21 才是控制连接端口。 C（控制连接 25，数据连接 110）：25 是 SMTP，110 是 POP3，与 FTP 无关。 D（控制连接 22，数据连接 23）：22 是 SSH，23 常见于 Telnet，与 FTP 无关。"
  },
  {
    "id": 5,
    "q": "FTP 的中文名称及英文全称分别是（）。",
    "options": [
      "邮局协议第 3 版（Post Office Protocol v3, POP3）",
      "文件传输协议（File Transfer Protocol, FTP）",
      "边界网关协议（Border Gateway Protocol, BGP）",
      "超文本传输协议（Hypertext Transfer Protocol, HTTP）"
    ],
    "answerIndex": 1,
    "explain": "正确答案：B。 A（邮局协议第 3 版（Post Office Protocol v3, POP3））：POP3 用于收取邮件，不是 FTP。 B（文件传输协议（File Transfer Protocol, FTP））：FTP 的中文名是“文件传输协议”，英文为 File Transfer Protocol。 C（边界网关协议（Border Gateway Protocol, BGP））：BGP 用于自治系统间路由，不是 FTP。 D（超文本传输协议（Hypertext Transfer Protocol, HTTP））：HTTP 用于 Web 超文本传输，不是 FTP。"
  },
  {
    "id": 6,
    "q": "FTP 与其他应用层协议相比，其最典型的功能特征是（）。",
    "options": [
      "用于在主机之间传输文件，支持上传/下载，采用控制连接与数据连接（双通道）",
      "用于浏览器与 Web 服务器之间传输网页/超文本内容",
      "将域名映射到 IP 地址，实现域名解析",
      "用于发送电子邮件和邮件服务器之间的转发"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（用于在主机之间传输文件，支持上传/下载，采用控制连接与数据连接（双通道））：这是 FTP 的典型特征：文件传输，控制/数据两条连接。 B（用于浏览器与 Web 服务器之间传输网页/超文本内容）：这是 HTTP 的功能，不是 FTP。 C（将域名映射到 IP 地址，实现域名解析）：这是 DNS 的功能，不是 FTP。 D（用于发送电子邮件和邮件服务器之间的转发）：这是 SMTP 的功能，不是 FTP。"
  },
  {
    "id": 7,
    "q": "POP3（邮局协议第 3 版）服务默认使用的端口号是（）。",
    "options": [
      "110",
      "143",
      "25",
      "993"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（110）：110 是 POP3 默认端口。 B（143）：143 是 IMAP 默认端口。 C（25）：25 是 SMTP 默认端口。 D（993）：993 是 IMAP over SSL/TLS（IMAPS）常用端口，不是 POP3。"
  },
  {
    "id": 8,
    "q": "POP3 的中文名称及英文全称分别是（）。",
    "options": [
      "邮局协议第 3 版（Post Office Protocol v3, POP3）",
      "互联网邮件访问协议（Internet Message Access Protocol, IMAP）",
      "简单邮件传输协议（Simple Mail Transfer Protocol, SMTP）",
      "地址解析协议（Address Resolution Protocol, ARP）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（邮局协议第 3 版（Post Office Protocol v3, POP3））：POP3 的英文全称为 Post Office Protocol v3。 B（互联网邮件访问协议（Internet Message Access Protocol, IMAP））：IMAP 是另一种邮件访问协议，侧重服务器端管理，不是 POP3。 C（简单邮件传输协议（Simple Mail Transfer Protocol, SMTP））：SMTP 用于发送/转发邮件，不是 POP3。 D（地址解析协议（Address Resolution Protocol, ARP））：ARP 用于解析 IP→MAC，与邮件无关。"
  },
  {
    "id": 9,
    "q": "关于 POP3 的主要用途，下列哪一项正确？（）。",
    "options": [
      "客户端从邮件服务器上下载邮件到本地（以“收取”为主）",
      "客户端在服务器上在线管理邮件与文件夹并保持同步",
      "用于发送邮件并在邮件服务器之间转发",
      "在不安全网络上提供加密的远程登录与隧道服务"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（客户端从邮件服务器上下载邮件到本地（以“收取”为主））：这是 POP3 的典型用途：以下载收信为主。 B（客户端在服务器上在线管理邮件与文件夹并保持同步）：这是 IMAP 的典型用途：服务器端管理与同步，不是 POP3。 C（用于发送邮件并在邮件服务器之间转发）：这是 SMTP 的用途：发送/转发邮件，不是 POP3。 D（在不安全网络上提供加密的远程登录与隧道服务）：这是 SSH 的用途：安全远程登录，不是 POP3。"
  },
  {
    "id": 10,
    "q": "ICMP 的中文名称及英文全称分别是（）。",
    "options": [
      "网际控制报文协议（Internet Control Message Protocol, ICMP）",
      "互联网组管理协议（Internet Group Management Protocol, IGMP）",
      "地址解析协议（Address Resolution Protocol, ARP）",
      "传输控制协议（Transmission Control Protocol, TCP）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（网际控制报文协议（Internet Control Message Protocol, ICMP））：ICMP 用于差错报告与控制信息传递。 B（互联网组管理协议（Internet Group Management Protocol, IGMP））：IGMP 用于 IPv4 组播成员管理，不是 ICMP。 C（地址解析协议（Address Resolution Protocol, ARP））：ARP 用于 IP→MAC 地址解析，不是 ICMP。 D（传输控制协议（Transmission Control Protocol, TCP））：TCP 是传输层可靠传输协议，不是 ICMP。"
  },
  {
    "id": 11,
    "q": "关于 ICMP 协议的作用，下列哪项描述正确？（）。",
    "options": [
      "在主机与路由器之间传递差错报告和控制信息（如 Ping 的回显报文）",
      "用于在主机之间传输文件，支持上传/下载",
      "用于自治系统之间的路由选择（策略性强）",
      "用于把域名解析为 IP 地址"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（在主机与路由器之间传递差错报告和控制信息（如 Ping 的回显报文））：ICMP 的典型作用是差错报告/控制，Ping 使用 ICMP Echo。 B（用于在主机之间传输文件，支持上传/下载）：这是 FTP 的功能，不是 ICMP。 C（用于自治系统之间的路由选择（策略性强））：这是 BGP 的功能，不是 ICMP。 D（用于把域名解析为 IP 地址）：这是 DNS 的功能，不是 ICMP。"
  },
  {
    "id": 12,
    "q": "RIP 的中文名称及英文全称分别是（）。",
    "options": [
      "路由信息协议（Routing Information Protocol, RIP）",
      "开放式最短路径优先（Open Shortest Path First, OSPF）",
      "边界网关协议（Border Gateway Protocol, BGP）",
      "网际协议（Internet Protocol, IP）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（路由信息协议（Routing Information Protocol, RIP））：RIP 的英文全称是 Routing Information Protocol。 B（开放式最短路径优先（Open Shortest Path First, OSPF））：OSPF 是另一种 IGP（链路状态），不是 RIP。 C（边界网关协议（Border Gateway Protocol, BGP））：BGP 是 EGP（自治系统间），不是 RIP。 D（网际协议（Internet Protocol, IP））：IP 是网络层协议，不是路由协议 RIP。"
  },
  {
    "id": 13,
    "q": "关于 RIP 的工作机制，下列哪项描述正确？（）。",
    "options": [
      "内部网关协议（IGP），基于距离向量算法，以跳数作为度量",
      "内部网关协议（IGP），基于链路状态算法，支持区域划分",
      "外部网关协议（EGP），用于自治系统之间路由选择（策略性强）",
      "将 IP 地址解析为 MAC 地址"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（内部网关协议（IGP），基于距离向量算法，以跳数作为度量）：这是 RIP 的特征：距离向量、跳数度量。 B（内部网关协议（IGP），基于链路状态算法，支持区域划分）：这是 OSPF 的特征：链路状态、区域划分。 C（外部网关协议（EGP），用于自治系统之间路由选择（策略性强））：这是 BGP 的特征：自治系统间路由与策略。 D（将 IP 地址解析为 MAC 地址）：这是 ARP 的功能，与路由协议无关。"
  },
  {
    "id": 14,
    "q": "OSPF 的中文名称及英文全称分别是（）。",
    "options": [
      "开放式最短路径优先（Open Shortest Path First, OSPF）",
      "路由信息协议（Routing Information Protocol, RIP）",
      "边界网关协议（Border Gateway Protocol, BGP）",
      "网际控制报文协议（Internet Control Message Protocol, ICMP）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（开放式最短路径优先（Open Shortest Path First, OSPF））：OSPF 的英文全称为 Open Shortest Path First。 B（路由信息协议（Routing Information Protocol, RIP））：RIP 是距离向量 IGP，不是 OSPF。 C（边界网关协议（Border Gateway Protocol, BGP））：BGP 用于自治系统间路由，不是 OSPF。 D（网际控制报文协议（Internet Control Message Protocol, ICMP））：ICMP 用于差错控制报文，不是路由协议 OSPF。"
  },
  {
    "id": 15,
    "q": "关于 OSPF 的主要功能特征，下列哪项正确？（）。",
    "options": [
      "内部网关协议（IGP），基于链路状态算法，收敛快并支持区域划分",
      "内部网关协议（IGP），基于距离向量算法，以跳数为度量",
      "外部网关协议（EGP），用于自治系统之间路由选择",
      "用于在主机与路由器之间传递差错控制报文"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（内部网关协议（IGP），基于链路状态算法，收敛快并支持区域划分）：这是 OSPF 的典型特征：链路状态、区域、收敛快。 B（内部网关协议（IGP），基于距离向量算法，以跳数为度量）：这是 RIP 的特征：距离向量、跳数。 C（外部网关协议（EGP），用于自治系统之间路由选择）：这是 BGP 的特征：自治系统间路由。 D（用于在主机与路由器之间传递差错控制报文）：这是 ICMP 的作用，不是 OSPF。"
  },
  {
    "id": 16,
    "q": "BGP 的中文名称及英文全称分别是（）。",
    "options": [
      "边界网关协议（Border Gateway Protocol, BGP）",
      "路由信息协议（Routing Information Protocol, RIP）",
      "开放式最短路径优先（Open Shortest Path First, OSPF）",
      "动态主机配置协议（Dynamic Host Configuration Protocol, DHCP）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（边界网关协议（Border Gateway Protocol, BGP））：BGP 的英文全称为 Border Gateway Protocol。 B（路由信息协议（Routing Information Protocol, RIP））：RIP 是 IGP，不是 BGP。 C（开放式最短路径优先（Open Shortest Path First, OSPF））：OSPF 是 IGP，不是 BGP。 D（动态主机配置协议（Dynamic Host Configuration Protocol, DHCP））：DHCP 用于自动分配网络参数，不是路由协议 BGP。"
  },
  {
    "id": 17,
    "q": "关于 BGP 的主要用途，下列哪项描述正确？（）。",
    "options": [
      "用于自治系统（AS）之间的路由选择，策略性强（典型 EGP）",
      "用于同一自治系统内部的最短路径计算（链路状态 IGP）",
      "用于同一自治系统内部基于跳数的距离向量路由（IGP）",
      "用于将域名解析为 IP 地址"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（用于自治系统（AS）之间的路由选择，策略性强（典型 EGP））：这是 BGP 的典型作用：AS 间路由与策略控制。 B（用于同一自治系统内部的最短路径计算（链路状态 IGP））：这是 OSPF 的作用：链路状态 IGP，不是 BGP。 C（用于同一自治系统内部基于跳数的距离向量路由（IGP））：这是 RIP 的作用：距离向量 IGP，不是 BGP。 D（用于将域名解析为 IP 地址）：这是 DNS 的作用，不是路由协议。"
  },
  {
    "id": 18,
    "q": "HDLC 的中文名称及英文全称分别是（）。",
    "options": [
      "高级数据链路控制（High-Level Data Link Control, HDLC）",
      "点对点协议（Point-to-Point Protocol, PPP）",
      "网际协议（Internet Protocol, IP）",
      "传输控制协议（Transmission Control Protocol, TCP）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（高级数据链路控制（High-Level Data Link Control, HDLC））：HDLC 的英文全称为 High-Level Data Link Control。 B（点对点协议（Point-to-Point Protocol, PPP））：PPP 也是链路层协议，但不是 HDLC。 C（网际协议（Internet Protocol, IP））：IP 是网络层协议，不是 HDLC。 D（传输控制协议（Transmission Control Protocol, TCP））：TCP 是传输层协议，不是 HDLC。"
  },
  {
    "id": 19,
    "q": "关于 HDLC 协议的层次与用途，下列哪项正确？（）。",
    "options": [
      "数据链路层协议，用于同步的点对点或多点链路传输与链路控制",
      "应用层协议，用于浏览器与 Web 服务器传输网页数据",
      "网络层协议，用于实现主机到主机的分组转发",
      "传输层协议，用于提供可靠的端到端字节流传输"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（数据链路层协议，用于同步的点对点或多点链路传输与链路控制）：HDLC 属于数据链路层，典型用于同步串行链路的封装与控制。 B（应用层协议，用于浏览器与 Web 服务器传输网页数据）：这是 HTTP 的功能，不是 HDLC。 C（网络层协议，用于实现主机到主机的分组转发）：这是 IP 的功能，不是 HDLC。 D（传输层协议，用于提供可靠的端到端字节流传输）：这是 TCP 的功能，不是 HDLC。"
  },
  {
    "id": 20,
    "q": "WWW 的中文名称及英文含义分别是（）。",
    "options": [
      "万维网（World Wide Web, WWW）",
      "万维网传输协议（World Wide Web Transport Protocol）",
      "无线局域网（Wireless LAN, WLAN）",
      "网际控制报文协议（Internet Control Message Protocol, ICMP）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（万维网（World Wide Web, WWW））：WWW 的中文是“万维网”，英文是 World Wide Web。 B（万维网传输协议（World Wide Web Transport Protocol））：该名称并非标准术语，WWW 也不是一个单独的“传输协议”。 C（无线局域网（Wireless LAN, WLAN））：WLAN 是无线局域网，不是 WWW。 D（网际控制报文协议（Internet Control Message Protocol, ICMP））：ICMP 是控制报文协议，不是 WWW。"
  },
  {
    "id": 21,
    "q": "关于 WWW（万维网）的概念，下列哪项描述正确？（）。",
    "options": [
      "利用 HTTP/HTTPS 等协议在互联网上发布、链接与浏览超媒体资源的系统（服务体系，不是单一协议）",
      "一种链路层介质访问控制协议，用于检测和处理碰撞",
      "一种将域名映射到 IP 地址的解析系统",
      "一种用于在主机之间传输文件的应用层协议"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（利用 HTTP/HTTPS 等协议在互联网上发布、链接与浏览超媒体资源的系统（服务体系，不是单一协议））：WWW 是基于 Web 相关协议与资源组织方式形成的服务体系，不是单一协议。 B（一种链路层介质访问控制协议，用于检测和处理碰撞）：这是 CSMA/CD 的描述，不是 WWW。 C（一种将域名映射到 IP 地址的解析系统）：这是 DNS 的描述，不是 WWW。 D（一种用于在主机之间传输文件的应用层协议）：这是 FTP 的描述，不是 WWW。"
  },
  {
    "id": 22,
    "q": "DNS（域名系统）默认使用的端口号是（）。",
    "options": [
      "53",
      "80",
      "443",
      "110"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（53）：53 是 DNS 的默认端口（UDP/TCP）。 B（80）：80 是 HTTP 端口。 C（443）：443 是 HTTPS 端口。 D（110）：110 是 POP3 端口。"
  },
  {
    "id": 23,
    "q": "DNS 的中文名称及英文全称分别是（）。",
    "options": [
      "域名系统（Domain Name System, DNS）",
      "动态主机配置协议（Dynamic Host Configuration Protocol, DHCP）",
      "安全超文本传输协议（Hypertext Transfer Protocol Secure, HTTPS）",
      "安全外壳协议（Secure Shell, SSH）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（域名系统（Domain Name System, DNS））：DNS 的英文全称为 Domain Name System。 B（动态主机配置协议（Dynamic Host Configuration Protocol, DHCP））：DHCP 用于自动分配网络参数，不是 DNS。 C（安全超文本传输协议（Hypertext Transfer Protocol Secure, HTTPS））：HTTPS 是安全 Web 协议，不是 DNS。 D（安全外壳协议（Secure Shell, SSH））：SSH 用于安全远程登录，不是 DNS。"
  },
  {
    "id": 24,
    "q": "DNS 的主要作用是（）。",
    "options": [
      "将域名解析为 IP 地址（名称解析服务）",
      "将 IP 地址解析为 MAC 地址（局域网内）",
      "自动为主机分配 IP 地址、网关、DNS 等参数",
      "在不安全网络上提供加密的远程登录服务"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（将域名解析为 IP 地址（名称解析服务））：这是 DNS 的核心功能：域名→IP 的解析。 B（将 IP 地址解析为 MAC 地址（局域网内））：这是 ARP 的功能：IP→MAC，不是 DNS。 C（自动为主机分配 IP 地址、网关、DNS 等参数）：这是 DHCP 的功能：自动分配配置，不是 DNS。 D（在不安全网络上提供加密的远程登录服务）：这是 SSH 的功能：安全远程登录，不是 DNS。"
  },
  {
    "id": 25,
    "q": "HTTPS（安全超文本传输协议）默认使用的端口号是（）。",
    "options": [
      "443",
      "80",
      "22",
      "53"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（443）：443 是 HTTPS 默认端口。 B（80）：80 是 HTTP 默认端口。 C（22）：22 是 SSH 默认端口。 D（53）：53 是 DNS 端口。"
  },
  {
    "id": 26,
    "q": "HTTPS 的中文名称及英文全称分别是（）。",
    "options": [
      "安全超文本传输协议（Hypertext Transfer Protocol Secure, HTTPS）",
      "超文本传输协议（Hypertext Transfer Protocol, HTTP）",
      "安全外壳协议（Secure Shell, SSH）",
      "域名系统（Domain Name System, DNS）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（安全超文本传输协议（Hypertext Transfer Protocol Secure, HTTPS））：HTTPS 是 HTTP 之上结合 TLS 的安全版本。 B（超文本传输协议（Hypertext Transfer Protocol, HTTP））：HTTP 本身不包含 TLS 加密，不是 HTTPS。 C（安全外壳协议（Secure Shell, SSH））：SSH 是远程登录协议，不是 HTTPS。 D（域名系统（Domain Name System, DNS））：DNS 是域名解析系统，不是 HTTPS。"
  },
  {
    "id": 27,
    "q": "HTTPS 与 HTTP 相比，其核心功能增强点是（）。",
    "options": [
      "在 HTTP 之上使用 TLS/SSL 提供加密、完整性保护与身份认证的 Web 通信",
      "用于浏览器与服务器之间传输网页内容，但不提供加密保护",
      "用于在主机之间传输文件，支持上传/下载",
      "用于将域名解析为 IP 地址"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（在 HTTP 之上使用 TLS/SSL 提供加密、完整性保护与身份认证的 Web 通信）：HTTPS = HTTP + TLS/SSL，是加密的 Web 通信。 B（用于浏览器与服务器之间传输网页内容，但不提供加密保护）：这描述的是 HTTP（明文传输），不是 HTTPS。 C（用于在主机之间传输文件，支持上传/下载）：这是 FTP 的用途，不是 HTTPS。 D（用于将域名解析为 IP 地址）：这是 DNS 的用途，不是 HTTPS。"
  },
  {
    "id": 28,
    "q": "WLAN 的中文含义及英文全称是（）。",
    "options": [
      "无线局域网（Wireless Local Area Network, WLAN）",
      "广域网（Wide Area Network, WAN）",
      "万维网（World Wide Web, WWW）",
      "虚拟局域网（Virtual Local Area Network, VLAN）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（无线局域网（Wireless Local Area Network, WLAN））：WLAN 指无线局域网。 B（广域网（Wide Area Network, WAN））：WAN 是广域网概念，不是 WLAN。 C（万维网（World Wide Web, WWW））：WWW 是万维网服务体系，不是 WLAN。 D（虚拟局域网（Virtual Local Area Network, VLAN））：VLAN 是二层逻辑隔离技术，不是无线局域网。"
  },
  {
    "id": 29,
    "q": "关于 WLAN 的主要技术特征，下列哪项正确？（）。",
    "options": [
      "遵循 IEEE 802.11 标准实现无线局域网接入与通信",
      "遵循 IEEE 802.3 标准实现有线以太网通信",
      "用于在主机之间传输文件（控制+数据双连接）",
      "用于在主机与路由器之间传递差错控制报文"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（遵循 IEEE 802.11 标准实现无线局域网接入与通信）：WLAN 通常指基于 802.11 的 Wi‑Fi 无线局域网。 B（遵循 IEEE 802.3 标准实现有线以太网通信）：802.3 是有线以太网标准，不是 WLAN。 C（用于在主机之间传输文件（控制+数据双连接））：这是 FTP 的描述，不是 WLAN。 D（用于在主机与路由器之间传递差错控制报文）：这是 ICMP 的描述，不是 WLAN。"
  },
  {
    "id": 30,
    "q": "SMTP（简单邮件传输协议）默认使用的端口号是（）。",
    "options": [
      "25",
      "110",
      "143",
      "53"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（25）：25 是 SMTP 默认端口。 B（110）：110 是 POP3 端口。 C（143）：143 是 IMAP 端口。 D（53）：53 是 DNS 端口。"
  },
  {
    "id": 31,
    "q": "SMTP 的中文名称及英文全称分别是（）。",
    "options": [
      "简单邮件传输协议（Simple Mail Transfer Protocol, SMTP）",
      "邮局协议第 3 版（Post Office Protocol v3, POP3）",
      "互联网邮件访问协议（Internet Message Access Protocol, IMAP）",
      "安全外壳协议（Secure Shell, SSH）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（简单邮件传输协议（Simple Mail Transfer Protocol, SMTP））：SMTP 的英文全称为 Simple Mail Transfer Protocol。 B（邮局协议第 3 版（Post Office Protocol v3, POP3））：POP3 用于收取邮件，不是 SMTP。 C（互联网邮件访问协议（Internet Message Access Protocol, IMAP））：IMAP 用于在线访问/管理邮件，不是 SMTP。 D（安全外壳协议（Secure Shell, SSH））：SSH 用于安全远程登录，不是邮件协议。"
  },
  {
    "id": 32,
    "q": "SMTP 在电子邮件系统中的主要作用是（）。",
    "options": [
      "用于发送电子邮件，并在邮件服务器之间转发邮件",
      "用于从邮件服务器下载邮件到本地",
      "用于客户端在服务器端管理邮件与文件夹并保持同步",
      "用于将域名解析为 IP 地址"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（用于发送电子邮件，并在邮件服务器之间转发邮件）：这是 SMTP 的功能：发送/转发邮件。 B（用于从邮件服务器下载邮件到本地）：这是 POP3 的功能：下载收信，不是 SMTP。 C（用于客户端在服务器端管理邮件与文件夹并保持同步）：这是 IMAP 的功能：服务器端管理，不是 SMTP。 D（用于将域名解析为 IP 地址）：这是 DNS 的功能，不是 SMTP。"
  },
  {
    "id": 33,
    "q": "以太网中经典的介质访问控制技术 CSMA/CD 的中文含义是（）。",
    "options": [
      "载波侦听多点接入/碰撞检测（CSMA/CD）",
      "载波侦听多点接入/碰撞避免（CSMA/CA）",
      "时分多址（TDMA）",
      "令牌传递（Token Passing）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（载波侦听多点接入/碰撞检测（CSMA/CD））：CSMA/CD 是经典共享以太网的介质访问控制方式。 B（载波侦听多点接入/碰撞避免（CSMA/CA））：CSMA/CA 常用于无线局域网（802.11），不是 CSMA/CD。 C（时分多址（TDMA））：TDMA 是一种多址/复用方式，不是 CSMA/CD。 D（令牌传递（Token Passing））：令牌传递用于令牌环/令牌总线等，不是 CSMA/CD。"
  },
  {
    "id": 34,
    "q": "关于 CSMA/CD 的工作机制，下列哪项描述正确？（）。",
    "options": [
      "先侦听信道，空闲则发送；发送中检测碰撞，碰撞则停止并退避重传",
      "通过令牌控制发送权，只有持令牌者才能发送",
      "通过最短路径计算路由并支持区域划分",
      "通过端口号将域名解析为 IP 地址"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（先侦听信道，空闲则发送；发送中检测碰撞，碰撞则停止并退避重传）：这是 CSMA/CD 的工作流程：侦听、发送、检测碰撞、退避重传。 B（通过令牌控制发送权，只有持令牌者才能发送）：这是令牌环/令牌总线思想，不是 CSMA/CD。 C（通过最短路径计算路由并支持区域划分）：这是 OSPF 的描述，不是 CSMA/CD。 D（通过端口号将域名解析为 IP 地址）：DNS 不依赖“端口号解析域名”，该描述不正确且不是 CSMA/CD。"
  },
  {
    "id": 35,
    "q": "ARP 的中文名称及英文全称分别是（）。",
    "options": [
      "地址解析协议（Address Resolution Protocol, ARP）",
      "动态主机配置协议（Dynamic Host Configuration Protocol, DHCP）",
      "网际控制报文协议（Internet Control Message Protocol, ICMP）",
      "边界网关协议（Border Gateway Protocol, BGP）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（地址解析协议（Address Resolution Protocol, ARP））：ARP 的英文全称为 Address Resolution Protocol。 B（动态主机配置协议（Dynamic Host Configuration Protocol, DHCP））：DHCP 用于自动分配 IP 等配置，不是 ARP。 C（网际控制报文协议（Internet Control Message Protocol, ICMP））：ICMP 用于差错控制报文，不是 ARP。 D（边界网关协议（Border Gateway Protocol, BGP））：BGP 用于自治系统间路由，不是 ARP。"
  },
  {
    "id": 36,
    "q": "ARP 协议的主要作用是（）。",
    "options": [
      "在局域网中把 IPv4 地址解析为 MAC 地址",
      "把域名解析为 IP 地址",
      "为主机自动分配 IP 地址与网关等参数",
      "在主机与路由器之间传递差错控制报文"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（在局域网中把 IPv4 地址解析为 MAC 地址）：ARP 的核心功能是 IP→MAC 的地址解析。 B（把域名解析为 IP 地址）：这是 DNS 的功能，不是 ARP。 C（为主机自动分配 IP 地址与网关等参数）：这是 DHCP 的功能，不是 ARP。 D（在主机与路由器之间传递差错控制报文）：这是 ICMP 的功能，不是 ARP。"
  },
  {
    "id": 37,
    "q": "DHCP 的中文名称及英文全称分别是（）。",
    "options": [
      "动态主机配置协议（Dynamic Host Configuration Protocol, DHCP）",
      "动态路由协议（Dynamic Host Control Protocol）",
      "域名系统（Domain Name System, DNS）",
      "地址解析协议（Address Resolution Protocol, ARP）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（动态主机配置协议（Dynamic Host Configuration Protocol, DHCP））：DHCP 的英文全称为 Dynamic Host Configuration Protocol。 B（动态路由协议（Dynamic Host Control Protocol））：该英文全称是伪造/错误的，不是 DHCP。 C（域名系统（Domain Name System, DNS））：DNS 用于域名解析，不是 DHCP。 D（地址解析协议（Address Resolution Protocol, ARP））：ARP 用于 IP→MAC 解析，不是 DHCP。"
  },
  {
    "id": 38,
    "q": "DHCP 协议的主要功能是（）。",
    "options": [
      "自动为主机分配 IP 地址、子网掩码、默认网关、DNS 等网络参数",
      "在局域网中把 IP 地址解析为 MAC 地址",
      "用于在邮件服务器之间转发电子邮件",
      "用于浏览器与 Web 服务器之间传输网页数据"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（自动为主机分配 IP 地址、子网掩码、默认网关、DNS 等网络参数）：这是 DHCP 的典型用途：自动分配与下发网络配置。 B（在局域网中把 IP 地址解析为 MAC 地址）：这是 ARP 的用途，不是 DHCP。 C（用于在邮件服务器之间转发电子邮件）：这是 SMTP 的用途，不是 DHCP。 D（用于浏览器与 Web 服务器之间传输网页数据）：这是 HTTP 的用途，不是 DHCP。"
  },
  {
    "id": 39,
    "q": "从计算机网络的基本目标来看，计算机互联（组网）的主要目的是什么？（）。",
    "options": [
      "实现资源共享（软硬件/数据/服务共享）",
      "保证链路层无碰撞传输",
      "实现域名到 MAC 地址的解析",
      "实现自治系统间路由策略控制"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（实现资源共享（软硬件/数据/服务共享））：计算机互联的核心目的之一是资源共享（如共享数据、设备和服务）。 B（保证链路层无碰撞传输）：链路层是否无碰撞取决于 MAC 机制（如 CSMA/CD/交换机），不是互联的“主要目的”。 C（实现域名到 MAC 地址的解析）：域名到 MAC 的解析不是典型目标，且 DNS/ARP 也不是“域名→MAC”。 D（实现自治系统间路由策略控制）：自治系统间路由策略控制是 BGP 的职责，不是互联的主要目的本身。"
  },
  {
    "id": 40,
    "q": "从网络边缘（端系统）组织通信的角度看，端系统之间常见的两类通信模式是（）。",
    "options": [
      "电路交换与分组交换",
      "客户—服务器（C/S）与对等（P2P）",
      "单工、半双工与全双工",
      "有线局域网与无线局域网"
    ],
    "answerIndex": 1,
    "explain": "正确答案：B。 A（电路交换与分组交换）：这是按交换方式分类，不是端系统通信方式分类。 B（客户—服务器（C/S）与对等（P2P））：端系统之间的通信组织方式常分为 C/S 与 P2P 两大类。 C（单工、半双工与全双工）：这是按通信方向性分类，不是端系统通信方式。 D（有线局域网与无线局域网）：这是按接入介质/技术分类，不是端系统通信方式。"
  },
  {
    "id": 41,
    "q": "在“报文交换”和“分组交换”两种方式中，通常认为更能体现链路资源共享与公平性的是（）。",
    "options": [
      "电路交换",
      "报文交换",
      "分组交换",
      "时分复用（TDM）"
    ],
    "answerIndex": 2,
    "explain": "正确答案：C。 A（电路交换）：电路交换为连接独占资源，可能导致其他业务等待，不能体现“按需公平共享”。 B（报文交换）：报文交换一次发送整份报文，长报文会长时间占用链路，对短业务不公平。 C（分组交换）：分组交换把数据切分成分组交替传输，更容易在链路上实现统计复用与公平共享。 D（时分复用（TDM））：TDM 是一种复用方式，不是报文/分组两类交换方式的答案。"
  },
  {
    "id": 42,
    "q": "一个 URL 用于定位互联网上的资源。下列哪项给出了 URL 的主要组成信息？（）。",
    "options": [
      "资源的服务器主机名（或 IP） + 资源路径（path）",
      "源主机 MAC 地址 + 目的主机 MAC 地址",
      "应用层端口号 + 传输层序号",
      "子网掩码 + 默认网关地址"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（资源的服务器主机名（或 IP） + 资源路径（path））：URL 的核心定位信息通常包括主机名（或 IP）以及资源路径等。 B（源主机 MAC 地址 + 目的主机 MAC 地址）：MAC 地址属于链路层寻址，不是 URL 组成部分。 C（应用层端口号 + 传输层序号）：端口号/序号不构成 URL 的主要组成（端口可选），序号更不是。 D（子网掩码 + 默认网关地址）：子网掩码和网关属于主机配置参数，不是 URL。"
  },
  {
    "id": 43,
    "q": "在 OSI 参考模型中，提供端到端可靠传输服务的主要是哪个层次？（）。",
    "options": [
      "传输层",
      "网络层",
      "数据链路层",
      "物理层"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（传输层）：端到端可靠性（确认、重传、流量控制等）由传输层提供（如 TCP）。 B（网络层）：网络层主要负责寻址与转发，不保证端到端可靠性。 C（数据链路层）：数据链路层只保证单链路（相邻节点间）可靠性，不是端到端。 D（物理层）：物理层只负责比特传输，不涉及可靠性机制。"
  },
  {
    "id": 44,
    "q": "在网络测试工具 Ping 中，主机发出的探测报文属于哪一种？（）。",
    "options": [
      "ICMP 回显请求（Echo Request）报文",
      "ARP 请求报文",
      "TCP SYN 报文段",
      "DNS 查询报文"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（ICMP 回显请求（Echo Request）报文）：Ping 用于连通性测试，发送的是 ICMP Echo Request。 B（ARP 请求报文）：ARP 用于局域网 IP→MAC 解析，不是 Ping 的核心报文。 C（TCP SYN 报文段）：TCP SYN 用于建立 TCP 连接，不是 Ping。 D（DNS 查询报文）：DNS 查询用于域名解析，不是 Ping。"
  },
  {
    "id": 45,
    "q": "IPv4 与 IPv6 的首部长度常考：IPv4 的最小（固定部分）首部长度与 IPv6 的基本首部分别是（）。",
    "options": [
      "IPv4 固定首部 20B，IPv6 基本首部 40B",
      "IPv4 固定首部 40B，IPv6 基本首部 20B",
      "IPv4 固定首部 20B，IPv6 基本首部 60B",
      "IPv4 固定首部 24B，IPv6 基本首部 40B"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（IPv4 固定首部 20B，IPv6 基本首部 40B）：IPv4 的最小首部长度为 20B；IPv6 基本首部固定为 40B。 B（IPv4 固定首部 40B，IPv6 基本首部 20B）：两者长度写反了。 C（IPv4 固定首部 20B，IPv6 基本首部 60B）：IPv6 基本首部固定为 40B，不是 60B（扩展首部另算）。 D（IPv4 固定首部 24B，IPv6 基本首部 40B）：IPv4 最小首部是 20B，不是 24B。"
  },
  {
    "id": 46,
    "q": "按经典 TCP/IP 协议模型（自顶向下）划分，通常包含哪四个层次？（）。",
    "options": [
      "应用层、运输层、网络层、网络接口层",
      "应用层、表示层、会话层、运输层、网络层、数据链路层、物理层",
      "应用层、运输层、网络层、数据链路层、物理层",
      "物理层、数据链路层、网络层、运输层、应用层"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（应用层、运输层、网络层、网络接口层）：经典 TCP/IP 模型通常分为 4 层：应用、运输、网络、网络接口（链路）。 B（应用层、表示层、会话层、运输层、网络层、数据链路层、物理层）：这是 OSI 七层模型，不是 TCP/IP。 C（应用层、运输层、网络层、数据链路层、物理层）：这是常见的“五层”教学模型（把链路再分成数据链路+物理），不是经典 TCP/IP 四层表述。 D（物理层、数据链路层、网络层、运输层、应用层）：顺序虽自底向上列出五层，但同样不是经典 TCP/IP 四层，并且选项与题干“自顶向下”不匹配。"
  },
  {
    "id": 47,
    "q": "从组成结构的角度，计算机网络通常可划分为哪两部分？（）。",
    "options": [
      "通信子网和资源子网",
      "传输介质和端口号",
      "IP 地址和 MAC 地址",
      "路由器和交换机"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（通信子网和资源子网）：经典教材中计算机网络由通信子网（传输与交换）和资源子网（主机/应用资源）构成。 B（传输介质和端口号）：传输介质是通信子网的一部分，端口号是传输层概念，不能概括网络组成。 C（IP 地址和 MAC 地址）：IP/MAC 是地址体系，不是网络组成结构。 D（路由器和交换机）：路由器和交换机是网络设备，但不是对网络结构的完整分类。"
  },
  {
    "id": 48,
    "q": "从传输层的视角来看，“端到端通信”指的是（）。",
    "options": [
      "应用进程之间的通信",
      "主机之间的通信",
      "相邻节点之间的帧传输",
      "比特在信道上的传输"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（应用进程之间的通信）：传输层提供的是进程到进程（端到端）通信服务。 B（主机之间的通信）：主机到主机属于网络层（IP）关注的范围。 C（相邻节点之间的帧传输）：相邻节点帧传输属于数据链路层。 D（比特在信道上的传输）：比特传输属于物理层。"
  },
  {
    "id": 49,
    "q": "面向连接/无连接会影响服务特性，但要实现“可靠传输”，通常需要依赖哪类机制？（）。",
    "options": [
      "通过确认（ACK）与重传等差错恢复机制来实现可靠传输",
      "仅依靠路由选择即可保证可靠传输",
      "仅依靠 MAC 层碰撞检测即可保证可靠传输",
      "仅依靠加密即可保证可靠传输"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（通过确认（ACK）与重传等差错恢复机制来实现可靠传输）：可靠传输通常依赖确认与重传（以及校验/序号等）等机制。 B（仅依靠路由选择即可保证可靠传输）：路由选择解决“走哪条路”，不保证数据不丢不重不乱。 C（仅依靠 MAC 层碰撞检测即可保证可靠传输）：碰撞检测只影响共享介质上的链路层接入，不能保证端到端可靠。 D（仅依靠加密即可保证可靠传输）：加密保证机密性/完整性等安全属性，不等同于“可靠传输”。"
  },
  {
    "id": 50,
    "q": "在 IPv4 子网中，如果某个 IP 地址的主机号（主机部分）全为 1，则该地址表示（）。",
    "options": [
      "广播地址",
      "网络地址",
      "主机单播地址",
      "回环地址（127.0.0.1）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（广播地址）：主机位全 1 表示该子网的广播地址。 B（网络地址）：主机位全 0 才是网络地址。 C（主机单播地址）：主机单播地址的主机位不要求全 1。 D（回环地址（127.0.0.1））：回环地址是特殊用途地址段，与“主机位全 1”的定义无关。"
  },
  {
    "id": 51,
    "q": "在 IPv4 子网中，如果某个 IP 地址的主机号（主机部分）全为 0，则该地址表示（）。",
    "options": [
      "网络地址",
      "广播地址",
      "主机单播地址",
      "多播地址（224.0.0.0/4）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（网络地址）：主机位全 0 表示该子网的网络地址。 B（广播地址）：广播地址的主机位全 1。 C（主机单播地址）：主机单播地址主机位既非全 0 也非全 1（通常）。 D（多播地址（224.0.0.0/4））：多播地址属于特定地址段，与主机位全 0 的含义无关。"
  },
  {
    "id": 52,
    "q": "若要实现不同 VLAN 之间的互通，需要哪类设备在三层进行转发？（）。",
    "options": [
      "路由器或三层交换机",
      "集线器（Hub）",
      "二层交换机（仅二层转发）",
      "中继器（Repeater）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（路由器或三层交换机）：不同 VLAN 属于不同二层广播域，跨 VLAN 转发需要三层设备进行路由。 B（集线器（Hub））：集线器工作在物理层，不能实现跨 VLAN 三层转发。 C（二层交换机（仅二层转发））：二层交换机只在二层转发，不能在不同 VLAN 间路由（除非具备三层功能）。 D（中继器（Repeater））：中继器只做信号再生，不能进行 VLAN 间转发。"
  },
  {
    "id": 53,
    "q": "OSI 七层参考模型从上到下的正确层次顺序是（）。",
    "options": [
      "应用层、表示层、会话层、运输层、网络层、数据链路层、物理层",
      "应用层、会话层、表示层、运输层、网络层、数据链路层、物理层",
      "应用层、表示层、会话层、网络层、运输层、数据链路层、物理层",
      "应用层、表示层、会话层、运输层、数据链路层、网络层、物理层"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（应用层、表示层、会话层、运输层、网络层、数据链路层、物理层）：这是 OSI 七层模型从上到下的标准顺序。 B（应用层、会话层、表示层、运输层、网络层、数据链路层、物理层）：表示层与会话层顺序写反了（应为表示层在会话层之下？实际上是：应用-表示-会话）。 C（应用层、表示层、会话层、网络层、运输层、数据链路层、物理层）：运输层与网络层顺序写反了（运输在网络之上）。 D（应用层、表示层、会话层、运输层、数据链路层、网络层、物理层）：数据链路层与网络层顺序写反了（网络在链路之上）。"
  },
  {
    "id": 54,
    "q": "教材常说影响局域网性能的三要素是（）。",
    "options": [
      "拓扑结构、传输介质、介质访问控制方法（MAC）",
      "拓扑结构、路由协议、应用层协议",
      "传输介质、IP 地址规划、DNS 解析",
      "拓扑结构、传输介质、端口号分配"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（拓扑结构、传输介质、介质访问控制方法（MAC））：局域网性能常由拓扑、介质、MAC 方法等因素决定。 B（拓扑结构、路由协议、应用层协议）：路由协议/应用层协议不属于局域网介质访问层面的“三要素”。 C（传输介质、IP 地址规划、DNS 解析）：IP 规划/DNS 属于网络层/应用层配置，不是局域网性能三要素。 D（拓扑结构、传输介质、端口号分配）：端口号是传输层概念，与局域网介质访问性能三要素不对应。"
  },
  {
    "id": 55,
    "q": "下列哪一组协议都属于内部网关协议（IGP）？（）。",
    "options": [
      "RIP 和 OSPF",
      "BGP 和 OSPF",
      "RIP 和 BGP",
      "OSPF 和 FTP"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（RIP 和 OSPF）：RIP 与 OSPF 都属于内部网关协议（IGP）。 B（BGP 和 OSPF）：BGP 属于外部网关协议（EGP），不与 OSPF 一起作为“主要 IGP”组合。 C（RIP 和 BGP）：同理，BGP 不是 IGP。 D（OSPF 和 FTP）：FTP 是应用层文件传输协议，不是路由协议。"
  },
  {
    "id": 56,
    "q": "在 Internet 中，负责“电子邮件传送/转发”的典型协议是（）。",
    "options": [
      "SMTP",
      "POP3",
      "IMAP",
      "FTP"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（SMTP）：SMTP 用于邮件发送与服务器间转发，是邮件传送（transfer）协议。 B（POP3）：POP3 主要用于客户端收取（下载）邮件，不是传送协议。 C（IMAP）：IMAP 主要用于邮件访问/管理，不是传送协议。 D（FTP）：FTP 是文件传输协议，与邮件传送无关。"
  },
  {
    "id": 57,
    "q": "在有固定基础设施的 WLAN（AP 模式）中，IEEE 802.11 MAC 帧通常使用的三个地址字段是（）。",
    "options": [
      "源地址、目的地址、AP 地址（BSSID）",
      "源地址、目的地址、子网掩码",
      "源地址、目的地址、默认网关 IP",
      "源 MAC、目的 MAC、源 IP"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（源地址、目的地址、AP 地址（BSSID））：在有固定基础设施（AP）场景下，802.11 常用三个地址字段：源/目的/AP(BSSID)。 B（源地址、目的地址、子网掩码）：子网掩码是三层配置，不是 802.11 MAC 地址字段。 C（源地址、目的地址、默认网关 IP）：默认网关 IP 也是三层配置，不是 MAC 帧地址字段。 D（源 MAC、目的 MAC、源 IP）：混入了 IP 地址（网络层），且缺少 AP/BSSID 地址字段。"
  },
  {
    "id": 58,
    "q": "在 Internet 体系中，实现“主机到主机（host-to-host）”通信与分组转发的基本协议是（）。",
    "options": [
      "IP 协议",
      "TCP 协议",
      "UDP 协议",
      "HTTP 协议"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（IP 协议）：IP 位于网络层，提供主机到主机的分组转发与寻址。 B（TCP 协议）：TCP/UDP 位于传输层，提供进程到进程通信。 C（UDP 协议）：同理，UDP 是传输层协议，不是主机到主机的网络层协议。 D（HTTP 协议）：HTTP 是应用层协议，建立在 TCP 之上。"
  },
  {
    "id": 59,
    "q": "下列哪项最符合“标准 URL”的主要组成部分？（）。",
    "options": [
      "协议方案（scheme）+ 主机名（host）+ 资源路径（path）",
      "源 MAC 地址 + 目的 MAC 地址 + 以太类型",
      "IP 地址 + 子网掩码 + 默认网关",
      "端口号 + 序列号 + 确认号"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（协议方案（scheme）+ 主机名（host）+ 资源路径（path））：标准 URL 常由 scheme、host、path 等构成（端口/查询等为可选）。 B（源 MAC 地址 + 目的 MAC 地址 + 以太类型）：这是以太网帧相关字段，不是 URL。 C（IP 地址 + 子网掩码 + 默认网关）：这是主机网络配置参数，不是 URL。 D（端口号 + 序列号 + 确认号）：这是 TCP 报文段字段，不是 URL。"
  },
  {
    "id": 60,
    "q": "为提高服务器对并发请求的处理能力，常见的两种服务器实现方式是（）。",
    "options": [
      "并发服务器（多进程/多线程）与迭代（重复）服务器",
      "电路交换与分组交换",
      "RIP 与 OSPF",
      "CSMA/CD 与 CSMA/CA"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（并发服务器（多进程/多线程）与迭代（重复）服务器）：处理并发请求常见两种组织方式：并发（多进程/线程）或迭代（重复、串行）处理。 B（电路交换与分组交换）：这是网络交换方式分类，不是服务器并发处理方案。 C（RIP 与 OSPF）：这是路由协议，不是服务器模型。 D（CSMA/CD 与 CSMA/CA）：这是介质访问控制机制，不是服务器模型。"
  },
  {
    "id": 61,
    "q": "TCP 之所以能提供可靠传输，主要依靠下列哪组机制的共同作用？（）。",
    "options": [
      "超时重传、序号与确认、流量控制、拥塞控制、连接管理",
      "仅依靠 IP 层转发即可保证可靠性",
      "仅依靠 MAC 层碰撞检测即可保证可靠性",
      "仅依靠应用层重试即可保证可靠性"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（超时重传、序号与确认、流量控制、拥塞控制、连接管理）：TCP 的可靠性来自序号/ACK、重传、连接管理以及流量/拥塞控制等机制的组合。 B（仅依靠 IP 层转发即可保证可靠性）：IP 提供尽力而为转发，不保证可靠。 C（仅依靠 MAC 层碰撞检测即可保证可靠性）：碰撞检测只影响局部链路接入，不保证端到端可靠。 D（仅依靠应用层重试即可保证可靠性）：应用层重试可补救部分场景，但不是 TCP 可靠性的定义机制。"
  },
  {
    "id": 62,
    "q": "下列哪一组“应用协议 ↔ 默认端口号”对应关系全部正确？（）。",
    "options": [
      "HTTP:80，FTP 控制:21，SMTP:25，POP3:110",
      "HTTP:443，FTP 控制:21，SMTP:25，POP3:110",
      "HTTP:80，FTP 控制:20，SMTP:25，POP3:110",
      "HTTP:80，FTP 控制:21，SMTP:110，POP3:25"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（HTTP:80，FTP 控制:21，SMTP:25，POP3:110）：这组端口对应关系都是常见默认值。 B（HTTP:443，FTP 控制:21，SMTP:25，POP3:110）：HTTP 443 实际是 HTTPS 的默认端口。 C（HTTP:80，FTP 控制:20，SMTP:25，POP3:110）：FTP 控制连接端口是 21，不是 20（20 常用于数据连接）。 D（HTTP:80，FTP 控制:21，SMTP:110，POP3:25）：SMTP 25、POP3 110；该选项把二者端口对调了。"
  },
  {
    "id": 63,
    "q": "按交换方式分类，通信网络通常可分为哪两大类？分组交换网络又可进一步分为哪些类型？（）。",
    "options": [
      "电路交换网络与分组交换网络；分组交换又可分为数据报网络与虚电路网络",
      "总线型网络与星型网络；分组交换又可分为 CSMA/CD 与 CSMA/CA",
      "电路交换网络与报文交换网络；报文交换又可分为 RIP 与 OSPF",
      "分组交换网络与路由交换网络；路由交换又可分为 DNS 与 DHCP"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（电路交换网络与分组交换网络；分组交换又可分为数据报网络与虚电路网络）：这是经典分类：电路交换/分组交换；分组交换进一步分为数据报/虚电路。 B（总线型网络与星型网络；分组交换又可分为 CSMA/CD 与 CSMA/CA）：总线/星型是拓扑；CSMA/CD/CA 是 MAC 机制，不是分组交换子类。 C（电路交换网络与报文交换网络；报文交换又可分为 RIP 与 OSPF）：报文交换不是分组交换的子类；RIP/OSPF 是路由协议，不是交换子类。 D（分组交换网络与路由交换网络；路由交换又可分为 DNS 与 DHCP）：“路由交换网络”并非该分类术语；DNS/DHCP 也不是交换子类。"
  },
  {
    "id": 64,
    "q": "为使网络层（IP）能够在局域网上找到目标的链路层地址（MAC），需要使用哪种协议把 IP 地址解析为 MAC 地址？（）。",
    "options": [
      "ARP",
      "DNS",
      "DHCP",
      "ICMP"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（ARP）：ARP 用于在局域网中把 IPv4 地址解析为 MAC 地址，从而让网络层与链路层配合工作。 B（DNS）：DNS 做域名解析（域名→IP），不负责 IP→MAC。 C（DHCP）：DHCP 负责分配 IP 等配置，不负责解析 MAC。 D（ICMP）：ICMP 负责差错控制报文，不负责地址解析。"
  },
  {
    "id": 65,
    "q": "在不考虑 NAT 的前提下，IP 数据报从源主机到目的主机跨越多个链路转发时，哪一项通常保持不变？（）。",
    "options": [
      "源/目的 IP 地址",
      "目的 MAC 地址",
      "源 MAC 地址",
      "以太网帧的 FCS 校验值"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（源/目的 IP 地址）：在不考虑 NAT 的情况下，IP 数据报的源/目的 IP 地址端到端保持不变。 B（目的 MAC 地址）：MAC 地址是逐跳变化的：每到一跳都会重新封装链路层帧。 C（源 MAC 地址）：同理，源 MAC 也会逐跳变化。 D（以太网帧的 FCS 校验值）：FCS 是链路层帧校验，帧每跳重封装都会重新计算，不保持不变。"
  },
  {
    "id": 66,
    "q": "路由器转发 IPv4 数据报时，如果发现该数据报首部的 TTL 值已经为 0，则应如何处理？（）。",
    "options": [
      "丢弃该数据报，并向源主机发送 ICMP“时间超过”（Time Exceeded）报文",
      "继续转发该数据报但不改变 TTL",
      "将 TTL 置为 255 后继续转发",
      "向目的主机发送 ARP 请求以获取 MAC 地址后再转发"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（丢弃该数据报，并向源主机发送 ICMP“时间超过”（Time Exceeded）报文）：TTL 递减到 0（或收到时为 0）表示寿命耗尽，路由器应丢弃并回 ICMP Time Exceeded。 B（继续转发该数据报但不改变 TTL）：TTL 必须递减，且为 0 时不能继续转发。 C（将 TTL 置为 255 后继续转发）：路由器不会把 TTL 重新置大以继续转发。 D（向目的主机发送 ARP 请求以获取 MAC 地址后再转发）：ARP 只用于同一链路上解析 MAC，且与 TTL=0 的处理无关。"
  },
  {
    "id": 67,
    "q": "与 HTTP 相比，FTP 在连接使用方式上的典型差异是（）。",
    "options": [
      "FTP 进行文件传输通常使用控制连接和数据连接两条 TCP 连接，而 HTTP 通常只需一条连接传输请求/响应",
      "HTTP 使用 UDP 传输而 FTP 使用 TCP 传输",
      "FTP 只用于网页浏览，而 HTTP 只用于文件下载",
      "HTTP 必须使用 21 端口，而 FTP 必须使用 80 端口"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（FTP 进行文件传输通常使用控制连接和数据连接两条 TCP 连接，而 HTTP 通常只需一条连接传输请求/响应）：FTP 的典型特征是控制/数据双连接；HTTP 一般是单连接请求/响应（HTTP/1.1 可复用连接）。 B（HTTP 使用 UDP 传输而 FTP 使用 TCP 传输）：HTTP/FTP 都主要基于 TCP，不是 UDP vs TCP 的区别。 C（FTP 只用于网页浏览，而 HTTP 只用于文件下载）：用途说反了：HTTP 用于 Web，FTP 用于文件传输。 D（HTTP 必须使用 21 端口，而 FTP 必须使用 80 端口）：端口号写反了：HTTP 常用 80，FTP 控制 21。"
  },
  {
    "id": 68,
    "q": "IPv6 地址由多少比特（bit）组成？（）。",
    "options": [
      "32 位",
      "48 位",
      "128 位",
      "64 位"
    ],
    "answerIndex": 2,
    "explain": "正确答案：C。 A（32 位）：32 位是 IPv4 地址长度，不是 IPv6。 B（48 位）：48 位是以太网 MAC 地址长度，不是 IPv6。 C（128 位）：IPv6 地址长度为 128 位。 D（64 位）：64 位常见于 IPv6 接口标识（IID）长度，但 IPv6 地址总体是 128 位。"
  },
  {
    "id": 69,
    "q": "在采用电信号表达数据的通信系统中，按信号形态通常把数据分为（）。",
    "options": [
      "数字数据和模拟数据",
      "报文数据和分组数据",
      "明文数据和密文数据",
      "并行数据和串行数据"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（数字数据和模拟数据）：用电信号表达数据时，常按信号形态分为数字数据与模拟数据。 B（报文数据和分组数据）：报文/分组是交换方式相关概念，不是信号形态分类。 C（明文数据和密文数据）：明文/密文是安全属性分类，不是信号形态分类。 D（并行数据和串行数据）：并行/串行是传输方式分类，不是信号形态分类。"
  },
  {
    "id": 70,
    "q": "一个 IPv4 地址从逻辑上可看作由哪两部分组成？（）。",
    "options": [
      "网络号（网络前缀）和主机号",
      "源端口号和目的端口号",
      "源 MAC 地址和目的 MAC 地址",
      "路由器 ID 和 AS 号"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（网络号（网络前缀）和主机号）：IPv4 地址通常由网络号（前缀）与主机号两部分组成（具体边界由子网掩码决定）。 B（源端口号和目的端口号）：端口号是传输层概念，不属于 IP 地址。 C（源 MAC 地址和目的 MAC 地址）：MAC 地址是链路层地址，不属于 IP 地址。 D（路由器 ID 和 AS 号）：路由器 ID/AS 号是路由协议概念，不属于 IP 地址。"
  },
  {
    "id": 71,
    "q": "局域网常见拓扑有总线、星形、环形等。经典以太网（Ethernet）的逻辑结构通常被描述为（）。",
    "options": [
      "总线型（共享介质）拓扑（经典以太网的逻辑结构）",
      "环形拓扑",
      "树形拓扑",
      "全网状拓扑"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（总线型（共享介质）拓扑（经典以太网的逻辑结构））：经典共享介质以太网（如总线/集线器）在逻辑上是总线型广播介质。 B（环形拓扑）：环形典型是令牌环，不是以太网经典逻辑结构。 C（树形拓扑）：树形可用于网络层级设计，但不是以太网经典逻辑拓扑表述。 D（全网状拓扑）：全网状通常用于骨干冗余，不是以太网经典逻辑拓扑。"
  },
  {
    "id": 72,
    "q": "在常见路由协议中，哪一组能正确对应“距离向量路由”和“链路状态路由”的代表协议？（）。",
    "options": [
      "RIP（距离向量）和 OSPF（链路状态）",
      "RIP（链路状态）和 OSPF（距离向量）",
      "BGP（距离向量）和 RIP（路径向量）",
      "DNS（距离向量）和 DHCP（链路状态）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（RIP（距离向量）和 OSPF（链路状态））：RIP 典型是距离向量路由；OSPF 典型是链路状态路由。 B（RIP（链路状态）和 OSPF（距离向量））：把两者算法类型对调了。 C（BGP（距离向量）和 RIP（路径向量））：BGP 不是距离向量，RIP 也不是路径向量；该描述不正确。 D（DNS（距离向量）和 DHCP（链路状态））：DNS/DHCP 不是路由协议。"
  },
  {
    "id": 73,
    "q": "令牌总线网（Token Bus）的物理拓扑与逻辑拓扑分别是（）。",
    "options": [
      "物理上是总线型，逻辑上是环型",
      "物理上是环型，逻辑上是总线型",
      "物理上是星型，逻辑上是总线型",
      "物理上是树型，逻辑上是环型"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（物理上是总线型，逻辑上是环型）：令牌总线（Token Bus）物理为总线结构，但通过令牌传递形成逻辑环。 B（物理上是环型，逻辑上是总线型）：说反了：它不是物理环。 C（物理上是星型，逻辑上是总线型）：令牌总线不是物理星型。 D（物理上是树型，逻辑上是环型）：也不是物理树型结构的典型描述。"
  },
  {
    "id": 74,
    "q": "计算机网络体系结构中影响最广的两种参考模型/体系结构是（）。",
    "options": [
      "OSI 参考模型与 TCP/IP 模型",
      "RIP 与 OSPF",
      "HTTP 与 FTP",
      "CSMA/CD 与 CSMA/CA"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（OSI 参考模型与 TCP/IP 模型）：体系结构模型影响最大的是 OSI 与 TCP/IP。 B（RIP 与 OSPF）：RIP/OSPF 是路由协议，不是体系结构模型。 C（HTTP 与 FTP）：HTTP/FTP 是应用层协议，不是体系结构模型。 D（CSMA/CD 与 CSMA/CA）：CSMA/CD/CA 是 MAC 机制，不是体系结构模型。"
  },
  {
    "id": 75,
    "q": "电路交换与虚电路（VC）交换的关键区别之一是（）。",
    "options": [
      "虚电路交换属于分组交换，需要先建立逻辑连接但数据仍以分组方式转发",
      "虚电路交换属于电路交换，建立连接后传输比特流",
      "电路交换不需要建立连接即可直接发送",
      "电路交换与虚电路交换完全一样"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（虚电路交换属于分组交换，需要先建立逻辑连接但数据仍以分组方式转发）：虚电路（VC）是分组交换的一种：先建立逻辑连接/状态，但仍是分组转发。 B（虚电路交换属于电路交换，建立连接后传输比特流）：VC 不是电路交换；电路交换建立后占用专用资源。 C（电路交换不需要建立连接即可直接发送）：电路交换的特点之一就是先建立连接。 D（电路交换与虚电路交换完全一样）：两者不同：一个是专用电路，一个是分组+逻辑连接。"
  },
  {
    "id": 76,
    "q": "在路由器内部，负责运行路由协议并进行路由计算的主要部件是（）。",
    "options": [
      "CPU（控制平面）",
      "交换结构（Switching Fabric）",
      "接口缓存（Buffer）",
      "网线/光纤（传输介质）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（CPU（控制平面））：路由协议处理、路由计算等通常由路由器 CPU（控制平面）完成。 B（交换结构（Switching Fabric））：交换结构负责数据转发（数据平面），不负责运行路由协议计算。 C（接口缓存（Buffer））：缓存用于排队/暂存分组，不负责路由计算。 D（网线/光纤（传输介质））：介质只负责传输，不负责路由协议处理。"
  },
  {
    "id": 77,
    "q": "主机获得 IPv4 地址的常见方式有两种：一种手工配置静态地址，另一种是（）。",
    "options": [
      "手工配置静态地址与 DHCP 自动分配",
      "RIP 与 OSPF 自动分配",
      "ARP 与 ICMP 自动分配",
      "DNS 与 HTTP 自动分配"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（手工配置静态地址与 DHCP 自动分配）：主机 IP 获取常见两种方式：静态手工配置或通过 DHCP 动态获取。 B（RIP 与 OSPF 自动分配）：RIP/OSPF 是路由协议，不分配主机 IP。 C（ARP 与 ICMP 自动分配）：ARP/ICMP 也不分配 IP。 D（DNS 与 HTTP 自动分配）：DNS/HTTP 与地址分配无关。"
  },
  {
    "id": 78,
    "q": "当 IP 数据报在以太网等物理网络中传输时，需要使用链路层地址进行投递，IP 地址会通过解析得到（）。",
    "options": [
      "MAC 地址（链路层地址）",
      "域名（URL）",
      "端口号",
      "TTL 值"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（MAC 地址（链路层地址））：在以太网等链路上传输时，需要封装成帧并使用 MAC 地址进行逐跳投递。 B（域名（URL））：域名属于应用层命名，不是链路投递地址。 C（端口号）：端口号属于传输层进程标识，不用于链路投递。 D（TTL 值）：TTL 是 IP 首部字段，与“地址转换”无关。"
  },
  {
    "id": 79,
    "q": "通信线路按连接方式通常可分为哪两类？（）。",
    "options": [
      "点对点与广播（点对多点）",
      "单工与全双工",
      "电路交换与分组交换",
      "星形与环形"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（点对点与广播（点对多点））：通信线路按连接方式常分为点对点与广播（多点接入）两类。 B（单工与全双工）：单工/全双工是方向性分类，不是连接方式分类。 C（电路交换与分组交换）：电路/分组是交换方式分类。 D（星形与环形）：星形/环形是拓扑分类。"
  },
  {
    "id": 80,
    "q": "从格式结构来看，一封电子邮件通常由哪两部分组成？（）。",
    "options": [
      "邮件头和邮件体",
      "源 IP 和目的 IP",
      "源端口和目的端口",
      "密文和明文"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（邮件头和邮件体）：电子邮件一般由邮件头（Header）与邮件体（Body）构成。 B（源 IP 和目的 IP）：IP 地址属于网络层字段，不是邮件组成部分。 C（源端口和目的端口）：端口号属于传输层，不是邮件组成部分。 D（密文和明文）：密文/明文是内容形态，不能概括邮件结构组成。"
  },
  {
    "id": 81,
    "q": "IPv4 地址长度为多少（以 bit/字节表示）？（）。",
    "options": [
      "32 比特（4 字节）",
      "48 比特（6 字节）",
      "64 比特（8 字节）",
      "128 比特（16 字节）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（32 比特（4 字节））：IPv4 地址长度为 32 bit，即 4 字节。 B（48 比特（6 字节））：48 bit 是 MAC 地址长度，不是 IPv4。 C（64 比特（8 字节））：64 bit 不是 IPv4 地址长度。 D（128 比特（16 字节））：128 bit 是 IPv6 地址长度，不是 IPv4。"
  },
  {
    "id": 82,
    "q": "在计算机网络中，常用“四种基本时延”来分析端到端时延，它们分别是（）。",
    "options": [
      "传输时延、传播时延、处理时延、排队时延",
      "传输时延、传播时延、路由时延、加密时延",
      "传播时延、处理时延、访问时延、缓存时延",
      "传输时延、处理时延、交换时延、编码时延"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（传输时延、传播时延、处理时延、排队时延）：网络中常分析的四种基本时延是：传输、传播、处理、排队。 B（传输时延、传播时延、路由时延、加密时延）：路由/加密不是四种基本时延的标准表述。 C（传播时延、处理时延、访问时延、缓存时延）：访问/缓存不是标准四类基本时延。 D（传输时延、处理时延、交换时延、编码时延）：交换/编码也不是标准四类基本时延。"
  },
  {
    "id": 83,
    "q": "ALOHA、CSMA、CSMA/CA、CSMA/CD 等随机接入 MAC 协议的共同核心思想是（）。",
    "options": [
      "通过争用（竞争）信道，胜者获得发送权",
      "通过路由算法计算最短路径后发送",
      "通过 DNS 解析到 IP 地址后才能发送",
      "通过令牌传递决定发送顺序"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（通过争用（竞争）信道，胜者获得发送权）：随机接入协议（ALOHA、CSMA 系列等）的核心思想是争用：竞争到信道就发送。 B（通过路由算法计算最短路径后发送）：最短路径是网络层路由问题，不是随机接入 MAC 核心。 C（通过 DNS 解析到 IP 地址后才能发送）：DNS 解析是应用层名称解析，与随机接入 MAC 核心无关。 D（通过令牌传递决定发送顺序）：令牌传递属于受控接入，不是随机接入。"
  },
  {
    "id": 84,
    "q": "串行数据通信按“通信方向性”可分为哪三种工作方式？（）。",
    "options": [
      "单工、半双工、全双工",
      "同步、异步、等时",
      "基带、宽带、超宽带",
      "电路交换、报文交换、分组交换"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（单工、半双工、全双工）：串行数据通信按方向性分为单工、半双工、全双工。 B（同步、异步、等时）：同步/异步/等时是按时钟与传输方式分类，不是方向性。 C（基带、宽带、超宽带）：基带/宽带等是按信号带宽/调制方式分类，不是方向性。 D（电路交换、报文交换、分组交换）：这些是交换方式分类，不是方向性。"
  },
  {
    "id": 85,
    "q": "某 IPv4 数据报首部 20B、数据 2000B，先经过 MTU=1500B，再经过 MTU=576B 的网络。到达目的主机时被分成 4 个分片。按片偏移从小到大，4 个分片的数据部分长度分别是（）。",
    "options": [
      "552B、552B、376B、520B",
      "556B、556B、368B、520B",
      "552B、552B、400B、496B",
      "552B、376B、552B、520B"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（552B、552B、376B、520B）：MTU=576 时最大数据=556B，但片偏移要求除最后一片外数据长度为 8B 的整数倍，所以取 552；1480 被分成 552+552+376，另一个分片 520 不再分割。 B（556B、556B、368B、520B）：556 不是 8 的整数倍（不满足片偏移单位 8B 的要求），且分割值不符合分片规则。 C（552B、552B、400B、496B）：数据部分总长度应仍为 2000B；该组长度之和不为 2000B，且分片边界不符合前述规则。 D（552B、376B、552B、520B）：只是把同一组长度打乱顺序，但题目若按到达顺序/偏移递增给出，应为 552、552、376、520。"
  },
  {
    "id": 86,
    "q": "IPv4 地址长度为多少比特（bit）？（）。",
    "options": [
      "32 个比特",
      "48 个比特",
      "64 个比特",
      "128 个比特"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（32 个比特）：IPv4 地址长度为 32 bit。 B（48 个比特）：48 bit 是 MAC 地址长度。 C（64 个比特）：64 bit 不是 IPv4 地址长度。 D（128 个比特）：128 bit 是 IPv6 地址长度。"
  },
  {
    "id": 87,
    "q": "UDP 数据报首部包含哪些字段？（）。",
    "options": [
      "源端口、目的端口、长度、校验和",
      "序号、确认号、窗口大小、校验和",
      "版本号、首部长度、TTL、协议号",
      "源 MAC、目的 MAC、类型、FCS"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（源端口、目的端口、长度、校验和）：UDP 首部固定包含 4 个字段：源端口、目的端口、长度、校验和。 B（序号、确认号、窗口大小、校验和）：这是 TCP 首部常见字段（序号/确认/窗口等），不是 UDP。 C（版本号、首部长度、TTL、协议号）：这是 IPv4 首部字段，不是 UDP。 D（源 MAC、目的 MAC、类型、FCS）：这是以太网帧字段，不是 UDP。"
  },
  {
    "id": 88,
    "q": "差错控制编码从功能上可分为两类，它们是（）。",
    "options": [
      "检错码与纠错码",
      "分组码与报文码",
      "哈希码与签名码",
      "明文码与密文码"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（检错码与纠错码）：差错控制编码按能力常分为检错码（检测错误）与纠错码（纠正错误）。 B（分组码与报文码）：分组/报文是交换方式概念，不是差错控制编码分类。 C（哈希码与签名码）：哈希/签名属于密码学与完整性验证，不是传统差错控制编码分类。 D（明文码与密文码）：明文/密文与编码分类无关。"
  },
  {
    "id": 89,
    "q": "计算机网络中常见的拓扑结构类型包括（）。",
    "options": [
      "星形、环形、树形、总线型、网状等",
      "星形、环形、CSMA/CD、总线型、网状等",
      "树形、总线型、RIP、OSPF、网状等",
      "环形、星形、SMTP、POP3、网状等"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（星形、环形、树形、总线型、网状等）：这些都是常见网络拓扑结构类型。 B（星形、环形、CSMA/CD、总线型、网状等）：CSMA/CD 是介质访问控制机制，不是拓扑结构。 C（树形、总线型、RIP、OSPF、网状等）：RIP/OSPF 是路由协议，不是拓扑结构。 D（环形、星形、SMTP、POP3、网状等）：SMTP/POP3 是应用层邮件协议，不是拓扑结构。"
  },
  {
    "id": 90,
    "q": "计算机网络中常用的三种有线传输介质是（）。",
    "options": [
      "双绞线、同轴电缆、光纤",
      "无线电波、红外、同轴电缆",
      "双绞线、蓝牙、光纤",
      "同轴电缆、Wi‑Fi、光纤"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（双绞线、同轴电缆、光纤）：三种常见有线传输介质是双绞线、同轴电缆和光纤。 B（无线电波、红外、同轴电缆）：无线电波/红外是无线介质，不属于“有线媒体三种”。 C（双绞线、蓝牙、光纤）：蓝牙是无线技术，不是有线媒体。 D（同轴电缆、Wi‑Fi、光纤）：Wi‑Fi 是无线局域网技术，不是有线媒体。"
  },
  {
    "id": 91,
    "q": "路由信息协议 RIP 的路由计算思想属于哪一类？（）。",
    "options": [
      "基于距离向量路由算法",
      "基于链路状态路由算法",
      "基于路径向量路由算法",
      "基于洪泛（flooding）转发算法"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（基于距离向量路由算法）：RIP 属于距离向量路由协议（跳数度量）。 B（基于链路状态路由算法）：链路状态的代表是 OSPF/IS‑IS，不是 RIP。 C（基于路径向量路由算法）：路径向量的代表是 BGP，不是 RIP。 D（基于洪泛（flooding）转发算法）：洪泛是一种转发策略，不是 RIP 的路由算法。"
  },
  {
    "id": 92,
    "q": "关于 SSH 协议的“名称 + 主要功能”描述，哪一项是正确的？（）。",
    "options": [
      "安全外壳协议（Secure Shell, SSH）：用于加密的远程登录、命令执行与隧道转发",
      "超文本传输协议（HTTP）：用于浏览器与 Web 服务器之间传输网页",
      "互联网邮件访问协议（IMAP）：用于客户端在线管理邮件与文件夹",
      "路由信息协议（RIP）：用于自治系统内部的路由交换（距离向量）"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（安全外壳协议（Secure Shell, SSH）：用于加密的远程登录、命令执行与隧道转发）：SSH 的名称与用途匹配：安全远程登录/隧道等。 B（超文本传输协议（HTTP）：用于浏览器与 Web 服务器之间传输网页）：HTTP 名称与用途匹配但不是 SSH。 C（互联网邮件访问协议（IMAP）：用于客户端在线管理邮件与文件夹）：IMAP 是邮件访问协议，不是 SSH。 D（路由信息协议（RIP）：用于自治系统内部的路由交换（距离向量））：RIP 是路由协议，不是 SSH。"
  },
  {
    "id": 93,
    "q": "关于 IMAP 协议的“名称 + 主要功能”描述，哪一项是正确的？（）。",
    "options": [
      "互联网邮件访问协议（Internet Message Access Protocol, IMAP）：用于客户端在服务器端访问/管理邮件与文件夹",
      "邮局协议第 3 版（POP3）：用于客户端在服务器端管理邮件文件夹并同步",
      "简单邮件传输协议（SMTP）：用于客户端从邮件服务器下载邮件",
      "安全外壳协议（SSH）：用于发送电子邮件并在服务器间转发"
    ],
    "answerIndex": 0,
    "explain": "正确答案：A。 A（互联网邮件访问协议（Internet Message Access Protocol, IMAP）：用于客户端在服务器端访问/管理邮件与文件夹）：IMAP 用于在线访问/管理服务器端邮件与文件夹，这是正确描述。 B（邮局协议第 3 版（POP3）：用于客户端在服务器端管理邮件文件夹并同步）：POP3 以下载收信为主，不强调服务器端文件夹管理与同步。 C（简单邮件传输协议（SMTP）：用于客户端从邮件服务器下载邮件）：SMTP 用于发送/转发邮件，不用于下载收信。 D（安全外壳协议（SSH）：用于发送电子邮件并在服务器间转发）：SSH 是安全远程登录协议，不是邮件发送/转发协议。"
  }
];
