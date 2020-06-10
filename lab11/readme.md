# Lab11实验文档
> 19302010009 钱麒丹  
> GitHub地址:https://github.com/HakureiReimuOVO/fdu-19ss-web-lab/blob/master/lab11/
## Session和Cookie的作用
HTTP本身是无状态协议，但是在部分情况下服务器有合理理由在Web会话中通过一系列请求进而保持信息。Session和Cookie就是为了识别客户端的某些状态，进而调控网页的运作模式，对HTTP进行**状态管理**。
## Cookie的优缺点
### 优点
+ Cookie将数据保存在客户端，因此不需要占用服务器资源。
+ Cookie拥有良好的扩展性和可管理性。
+ Cookie作为简单的键值对，实现较为容易。
+ Cookie拥有时效性，并且可以根据需求灵活调整。
### 缺点
+ Cookie的存储大小和数量受到限制。
+ Cookie容易被篡改与访问，存在隐私和安全性问题。
+ Cookie需要磁盘I/O，运行速度较慢。
+ Cookie绑定于浏览器，不能跨浏览器访问。
## Session的优缺点
### 优点
+ Session保存在服务器上，安全性较好。
+ Session在每个客户端会产生唯一的session_id，不存在混淆情况。
### 缺点
+ Session的处理，包含服务器对数据库的查询操作，存在性能问题。
+ Session基于Cookie实现，同样绑定于浏览器，不能跨浏览器访问；禁用Cookie的同时也会禁用Session。