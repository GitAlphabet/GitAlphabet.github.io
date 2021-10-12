### 数据库查询操作

#### 查询 SQL 语句

```bash
#查看表结构语句
DESC <tableName>

#查询所有列
SELECT * FROM <tableName>

#查询指定列
SELECT <fieldName> FROM <tableName>

#查询指定行
SELECT * FROM <tableName> WHERE <fieldName> = <value>

#模糊查询: % 表示一个或多个字符，_ 表示一个字符
SELECT * FROM <tableName> WHERE <fieldName> LIKE "%<value>%"

#使用逻辑操作符
SELECT  * FROM <tableName> WHERE (<fieldName>=<value> OR <fieldName>=<value>) AND <fieldName> LIKE '%<value>%';

#将查询结果按字段的值进行排序
SELECT  * FROM <tableName> ORDER BY <fieldName> DESC

#查询数据的、最大说、最小数、平均值、和
SELECT MAX(<fieldName>),MIN(<fieldName>),AVG(<fieldName>),SUM(<fieldName>) FROM <tableName>

#查询数据表中某一字段值最大的数据
SELECT * FROM <tableName> WHERE <fieldName>=(SELECT MAX(<fieldName>) FROM <tableName>))

#查询数据表中的总条数
SELECT COUNT(*) FROM <tableName>

#查询数据表中某一字段值最大的数据
SELECT * FROM <tableName> WHERE <fieldName>=(SELECT MAX(<fieldName>) FROM <tableName>))
```
