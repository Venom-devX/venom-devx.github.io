# 🔐 VRM – Key Verification Module

A lightweight Lua module designed for secure key validation and controlled link generation.

---

## 📦 Overview

`VRM` is a table containing two core functions:

- `VRM.verify_key(key: string) -> table`
- `VRM.copy_link(mode: string) -> string`

This module is responsible for validating user keys and generating monetized access links.

---

## 📚 API Reference

---

## 🔎 VRM.verify_key

Validates a key and returns verification data.

### 📌 Syntax

    local result = VRM.verify_key(key)

### 📥 Parameters

| Name | Type   | Required | Description |
|------|--------|----------|------------|
| key  | string | Yes      | The key to be verified |

### 📤 Returns

Returns a table:

    {
        discord_id = string,
        premium = boolean,
        valid = boolean
    }

### 📄 Return Fields

| Field        | Type    | Description |
|-------------|---------|------------|
| discord_id  | string  | Discord user ID associated with the key |
| premium     | boolean | Indicates whether the user has premium access |
| valid       | boolean | Indicates whether the key is valid |

### 🧠 Example

    local data = VRM.verify_key("ABC123-KEY")

    if data.valid then
        print("Key is valid!")
        print("Discord ID:", data.discord_id)

        if data.premium then
            print("Premium user detected.")
        end
    else
        print("Invalid key.")
    end

---

## 🔗 VRM.copy_link

Generates a monetized link based on the configured shortener.

⚠️ The selected mode must be configured in your backend system.

### 📌 Syntax

    local link = VRM.copy_link(mode)

### 📥 Parameters

| Name | Type   | Required | Description |
|------|--------|----------|------------|
| mode | string | Yes      | Defines which configured link shortener to use |

### ✅ Available Modes

- `"linkvertise"`
- `"lootlabs"`
- `"workink"`

### 📤 Returns

| Type   | Description |
|--------|------------|
| string | Generated shortened link |

### 🧠 Example

    local link = VRM.copy_link("linkvertise")
    print("Complete the steps here:", link)

---

## 🛡 Expected Behavior

- `verify_key` always returns a structured table.
- Always check `valid` before trusting other fields.
- `copy_link` only accepts configured modes.
- If an invalid mode is provided, the function should return `nil` or an error (depending on implementation).

---

## 💡 Recommended Usage Pattern

    local keyData = VRM.verify_key(userKey)

    if not keyData.valid then
        warn("Access denied.")
        return
    end

    if keyData.premium then
        print("Unlocking premium features...")
    else
        local monetizedLink = VRM.copy_link("linkvertise")
        print("Complete verification:", monetizedLink)
    end

---

## ⚙ Integration Example

    local VRM = loadstring(game:HttpGet("YOUR_API_URL"))()

    local keyInfo = VRM.verify_key("USER_KEY")

    if keyInfo.valid then
        print("Welcome!")
    end

---

## 📌 Notes

- Always validate `valid` before using other returned fields.
- Do not expose private endpoints.
- Use HTTPS for all requests.
- Avoid storing sensitive verification logic client-side.

---

© VRM System
