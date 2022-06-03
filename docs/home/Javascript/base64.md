### Base64

#### 1、[开源的 base64.js](https://github.com/dankogai/js-base64)

```bash
# 编码
Base64.encode('cx') # 返回：'Y3g='
# 解码
Base64.decode('Y3g=') # 返回：'cx'
```

#### 2、atob 和 btoa

```bash
# 编码
window.atob('Y3g=') # 返回：'cx'
# 解码
window.btoa('cx') # 返回：'Y3g='
```

#### 3、Base64 图片

img/url: 'data:image/gif;base64,' + Base64 图片地址

```html
<img src="data:image/gif;base64,R0lGODlhAwADAIABAL6+vv///yH5BAEAAAEALAAAAAADAAMAAAIDjA9WADs="/>
```

```css
background-image: url(data:image/gif;base64,R0lGODlhBAABAIABAMLBwfLx8SH5BAEAAAEALAAAAAAEAAEAAAICRF4AOw==);
```

#### 4、转换文件

```js
const dataURLtoFile = (dataurl: string, filename: string) => {
  const arr: string[] = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};
```
