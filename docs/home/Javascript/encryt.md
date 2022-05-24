### CryptoJS AES 加密

`密钥必须16位`

#### 安装

```bash
npm install crypto-js --save-dev
yarn add crypto-js --dev
```

#### ECB 模式

```js
// 解密
decrypt(word) {
  var key = CryptoJS.enc.Utf8.parse('1234567890abcdef');
  var decrypt = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
},

// 解密事件
decryptionHandler(word) {
  var key = CryptoJS.enc.Utf8.parse("1234567890abcdef");
  var decrypt = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
```

#### CBC模式

注：CBC模式必须要偏移量 `iv`

```js
// 加密
encrypt(word) {
  let key = CryptoJS.enc.Utf8.parse('1234567890abcdef');
  let iv = CryptoJS.enc.Utf8.parse('');
  let srcs = CryptoJS.enc.Utf8.parse(word);

  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });
  return encrypted.toString();
},
// 解密
decrypt(word) {
  var key = CryptoJS.enc.Utf8.parse('1234567890abcdef');
  let iv = CryptoJS.enc.Utf8.parse('');

  var decrypt = CryptoJS.AES.decrypt(word, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });
  return decrypt.toString(CryptoJS.enc.Utf8);
}
```
