### XLSX

#### 1、安装

```bash
yarn add  xlsx
```

#### 2、antd dom

```html
<Upload
  showUploadList={false}
  customRequest={customReq}
  accept="application/vnd.ms-excel,.xls,.xlsx"
>
  <Button>批量导入</Button>
</Upload>
```

#### 3、自定义请求处理

```js
import XLSX from 'xlsx';
import _forEach from 'lodash/forEach';

enum File2ArrayEnum {
  name = '材料名称',
  format = '规格型号',
  need = '需求量',
  unit = '单位',
  level = '档次',
  brand = '品牌',
  quotation = '报价数',
  remark = '备注',
}

// 自定义请求获取excle 数据
const customReq = (e: any) => {
  const f = e?.file;
  // 使用 FileReader 读取数据
  const reader = new FileReader(); 
  reader.onload = (ev: any) => {
    // 数据读取完成后的回调函数
    const data = new Uint8Array(ev?.target?.result);
    // workbook 是 xlsx 解析 excel 后返回的对象
    const workbook = XLSX.read(data, { type: 'array' }); 
    // 获取第一个 sheet 的名字
    const firstSheetName = workbook.SheetNames[0]; 
    // 获取第一个 sheet 的内容
    const worksheet = workbook.Sheets[firstSheetName]; 
    // 使用 utils 里的方法转换内容为便于使用的数组
    const res = XLSX.utils.sheet_to_json(worksheet);
    // 对数组进行处理
    const tempData = res.map((item: any) => {
      let temp = {};
      _forEach(File2ArrayEnum, (value, key) => {
        temp = { ...temp, [key]: item?.[value] };
      });
      return temp;
    });
    setList((pre) => [...pre, ...tempData]);
  };
  reader.readAsArrayBuffer(f); // 读取数据
};
```
