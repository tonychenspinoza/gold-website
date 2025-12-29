# 🔧 解决 GitHub 连接问题

## 问题
```
fatal: unable to access 'https://github.com/...': Failed to connect to github.com port 443
```

## 解决方案

### 方案一：使用 GitHub Desktop（推荐，最简单）⭐

1. **下载 GitHub Desktop**：
   - 访问：https://desktop.github.com/
   - 下载并安装

2. **使用 GitHub Desktop 推送**：
   - 打开 GitHub Desktop
   - File → Add Local Repository
   - 选择项目目录：`C:\Users\ROG\.cursor\ethereum-nft-marketplace-boilerplate`
   - 点击 "Publish repository" 或 "Push origin"
   - 选择 `gold-website01` 仓库

**优点**：图形界面，更稳定，自动处理网络问题

---

### 方案二：配置 Git 使用代理（如果有代理）

如果你有代理服务器：

```bash
# 设置 HTTP 代理
git config --global http.proxy http://proxy.example.com:8080
git config --global https.proxy https://proxy.example.com:8080

# 推送
git push gold-website01 main

# 使用完后，取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

---

### 方案三：使用 SSH 连接（如果已配置 SSH 密钥）

1. **检查是否有 SSH 密钥**：
   ```bash
   ls ~/.ssh/id_rsa.pub
   ```

2. **如果没有，生成 SSH 密钥**：
   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

3. **添加 SSH 密钥到 GitHub**：
   - 复制公钥内容：`cat ~/.ssh/id_rsa.pub`
   - 访问：https://github.com/settings/keys
   - 点击 "New SSH key"，粘贴公钥

4. **改用 SSH 连接**：
   ```bash
   git remote set-url gold-website01 git@github.com:tonychenspinoza/gold-website01.git
   git push gold-website01 main
   ```

---

### 方案四：使用 VPN 或更换网络

- 尝试使用 VPN 连接
- 更换网络（如使用手机热点）
- 稍后重试（可能是临时网络问题）

---

### 方案五：使用 GitHub 网页上传（临时方案）

如果代码已经准备好，可以直接在 GitHub 网页上：

1. 访问：https://github.com/tonychenspinoza/gold-website01
2. 点击 "uploading an existing file"
3. 拖拽 `gold-website` 文件夹中的所有文件
4. 提交更改

---

### 方案六：检查防火墙设置

1. **Windows 防火墙**：
   - 打开 Windows Defender 防火墙
   - 允许 Git 通过防火墙
   - 或临时关闭防火墙测试

2. **杀毒软件**：
   - 检查杀毒软件是否阻止 Git
   - 将 Git 添加到白名单

---

## 推荐操作流程

**最快方式**：
1. 下载并安装 GitHub Desktop
2. 使用 GitHub Desktop 推送代码
3. 完成！

**如果必须使用命令行**：
1. 尝试使用 VPN
2. 或稍后重试（网络恢复后）

---

## 当前状态

- ✅ 代码已准备好（提交 ID: `cbdf76d`）
- ✅ 远程仓库已配置：`gold-website01`
- ⏳ 等待推送到 GitHub

建议使用 **GitHub Desktop**，这是最简单可靠的方法！

