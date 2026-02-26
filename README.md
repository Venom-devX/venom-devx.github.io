# 🔐 Key System & Update Checker

This system provides automatic key validation, monetized link generation, version control, and secure logging.

⚠️ Important:  
You do NOT manually import this library using `loadstring` or similar methods.

The system is automatically injected into your script when you upload a file and enable the corresponding options in the panel.

---

# 🚀 Injection System

When uploading your script, you may enable:

- ✅ **Key System**
- ✅ **Update Checker**

If enabled, the selected system will be automatically injected into your script before distribution.

No manual setup required inside your Lua file.

---

# 🔐 Key System

When the **"Key System"** option is enabled during upload, your script will automatically receive access to a verification table.

## Available Functions

- `KeySystem.verify_key(key: string) -> table`
- `KeySystem.copy_link(mode: string) -> string`

---

## 🔎 verify_key

Validates a user key.

### Syntax

    local result = KeySystem.verify_key(key)

### Parameters

| Name | Type   | Required | Description |
|------|--------|----------|------------|
| key  | string | Yes      | The key provided by the user |

### Returns

    {
        discord_id = string,
        premium = boolean,
        valid = boolean
    }

### Return Fields

| Field        | Type    | Description |
|-------------|---------|------------|
| discord_id  | string  | Discord ID associated with the key |
| premium     | boolean | Indicates premium access |
| valid       | boolean | Indicates whether the key is valid |

### Example

    local data = KeySystem.verify_key(userKey)

    if not data.valid then
        warn("Invalid key.")
        return
    end

    print("Authenticated user:", data.discord_id)

---

## 🔗 copy_link

Generates a monetized access link.

⚠️ The selected mode must be configured in your dashboard.

### Syntax

    local link = KeySystem.copy_link(mode)

### Available Modes

- `"linkvertise"`
- `"lootlabs"`
- `"workink"`

### Returns

| Type   | Description |
|--------|------------|
| string | Generated shortened link |

### Example

    local link = KeySystem.copy_link("linkvertise")
    print("Get your key here:", link)

---

# 🔄 Update Checker

When the **"Update Checker"** option is enabled during upload, your script will automatically receive version monitoring logic.

## What It Does

- Checks if your script has updates available.
- Verifies if your script has been disabled remotely.
- Runs periodic heartbeat validation.
- Prevents execution if the script is marked as disabled.

---

## 🫀 Heartbeat System

The injected update checker communicates with the backend to:

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
- ❌ (Optional) Other relevant security events

### Logged Events

| Event | Description |
|-------|------------|
| Auth Success | A user inserted a valid key |
| Script Execution | A user executed your script |

Logs are sent securely to the configured webhook.

---

# 🛡 Security Design

- Injection happens server-side during upload.
- Sensitive logic is not exposed before injection.
- Remote disable system prevents unauthorized distribution.
- Monetization links are controlled via backend configuration.
- Webhook sending uses a protected system.

---

# ⚙ Upload Options Summary

| Option | Injected Features |
|--------|-------------------|
| Key System | Key validation + monetized link generator |
| Update Checker | Version control + heartbeat + remote disable + safe webhook logs |

---

# 📌 Important Notes

- Do not manually attempt to recreate injected logic.
- Always check `valid` before trusting user data.
- Ensure your webhook URL is properly configured in the panel.
- Remote disable affects all distributed versions instantly.

---

© Key System Infrastructure
