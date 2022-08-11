# Vitegil Tracker-SDK

## 工具使用

### 安装

```bash
pnpm install snq-tracker
```

### 引入项目



## 功能介绍

### 获取页面加载时间

`timeTracker`属性设置为`true`，同时开启`lazyReport`，在页面关闭前会自动将页面加载时间返回。

> 注意
> 计算页面加载时间至少需要2.5秒，若用户在计算工程中关闭页面，则不能获得响应数据。
