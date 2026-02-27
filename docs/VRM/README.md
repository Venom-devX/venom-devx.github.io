# 🔐 Key System & Update Checker

The **Key System** provides automatic key validation, monetized link generation, version control, and secure logging.

⚠️ Important:  
You do NOT manually import this system using `loadstring` or similar methods.

The system is automatically injected into your script when you upload a file and enable the corresponding options in the upload panel.

---

# 🚀 Injection System

When uploading your script, you may enable:

- ✅ **Key System**
- ✅ **Update Checker**

If enabled, the selected system will be automatically injected into your script before distribution.

No manual setup is required inside your Lua file.

---

# 🔐 Key System

When the **"Key System"** option is enabled during upload, your script will automatically receive access to the `VRM` table.

`VRM` is the integrated library responsible for key verification and link generation.

---

## Available Functions

- `VRM.verify_key(key: string) -> table`
- `VRM.copy_link(mode: string) -> string`

---

## 🔎 VRM.verify_key

Validates a user key.

### Syntax
```lua
    local result = VRM.verify_key(key)
```
### Parameters

| Name | Type   | Required | Description |
|------|--------|----------|------------|
| key  | string | Yes      | The key provided by the user |

### Returns
```lua
    {
        discord_id = string,
        premium = boolean,
        valid = boolean
    }
```
### Return Fields

| Field        | Type    | Description |
|-------------|---------|------------|
| discord_id  | string  | Discord ID associated with the key |
| premium     | boolean | Indicates premium access |
| valid       | boolean | Indicates whether the key is valid |

### Example
```lua
    local data = VRM.verify_key(userKey)

    if not data.valid then
        warn("Invalid key.")
        return
    end

    print("Authenticated user:", data.discord_id)

    if data.premium then
        print("Premium features unlocked.")
    end
```
---

## 🔗 VRM.copy_link

Generates a monetized access link.

⚠️ The selected mode must be configured in your dashboard.

### Syntax
```lua
    local link = VRM.copy_link(mode)
```
### Available Modes

- `"linkvertise"`
- `"lootlabs"`
- `"workink"`

### Returns

| Type   | Description |
|--------|------------|
| string | Generated shortened link |

### Example
```lua
    local link = VRM.copy_link("linkvertise")
    print("Complete the steps here:", link)
```
---

# 🔄 Update Checker

When the **"Update Checker"** option is enabled during upload, your script will automatically receive version monitoring logic.

This system works independently but integrates with the Key System when both are enabled.

---

## What It Does

- Checks if your script has updates available.
- Verifies if your script has been disabled remotely.
- Performs periodic heartbeat validation.
- Prevents execution if the script is marked as disabled.

---

## 🫀 Heartbeat System

The injected Update Checker communicates with the backend to:

- Confirm script integrity.
- Confirm active status.
- Block execution if the script has been disabled from the panel.

This allows remote control over distributed scripts.

---

# 📡 Safe Webhook Logging

The Update Checker includes integrated **safe webhook sending**.

This system logs:

- ✅ Successful key authentications
- ▶️ Script executions

### Logged Events

| Event | Description |
|-------|------------|
| Auth Success | A user inserted a valid key into your script |
| Script Execution | A user executed your script |

Logs are securely sent to the configured webhook.

---

# 🛡 Security Design

- Injection happens server-side during upload.
- Sensitive validation logic is protected.
- Remote disable instantly affects all distributed versions.
- Monetization links are controlled via backend configuration.
- Webhook sending uses a protected system.

---

# ⚙ Upload Options Summary

| Option | Injected Features |
|--------|-------------------|
| Key System | Key validation + monetized link generator (`VRM`) |
| Update Checker | Version control + heartbeat + remote disable + safe webhook logs |

---

# 📌 Important Notes

- Do not manually attempt to recreate injected logic.
- Always check `valid` before trusting user data.
- Ensure your webhook URL is properly configured in the panel.
- Remote disable affects all distributed versions instantly.

---

© Key System Infrastructure
