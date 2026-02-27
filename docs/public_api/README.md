# 📘 Venom Armor Public API Documentation

Base path:

/public

All routes require authentication via Authorization header.

---

## 🔐 Authentication

Every `/public/*` route requires a valid API secret.

### Header

Authorization: Bearer YOUR_SECRET

ou

Authorization: YOUR_SECRET

If the token is invalid or missing, the API returns:

401 Unauthorized

---

## ❌ Common Error Responses

| Status | Meaning |
|--------|----------|
| 400 | Bad request (invalid body / missing fields) |
| 401 | Unauthorized (invalid or missing secret) |
| 404 | Resource not found |
| 500 | Internal server error |

---

# 🔑 Keys

---

## POST /public/create-key

Create one or multiple keys.

### Body (JSON)
```json
{
  "mode": "single" | "multiple",
  "prefix": "string (max 12 chars)",
  "quantity": number (only for multiple, max 10),
  "expires_in": number (hours, optional)
}
```
### Field Rules

- `mode` is required
- `prefix` is required
- `prefix.length` ≤ 12
- `quantity` required only when mode = "multiple"
- `quantity` ≤ 10
- `expires_in` represents hours until expiration (optional)

---

### 🟢 Single Mode

Example Request:
```json
{
  "mode": "single",
  "prefix": "CHAOS-",
  "expires_in": 24
}
```
Success Response (201):
```json
{
  "message": "successfully created your key",
  "key": "CHAOS-ABCD1234EFGH5678"
}
```
---

### 🟢 Multiple Mode

Example Request:
```json
{
  "mode": "multiple",
  "prefix": "VIP-",
  "quantity": 3,
  "expires_in": 48
}
```
Success Response (201):
```json
{
  "message": "successfully generated your keys!",
  "generated_keys": [
    "VIP-XXXX",
    "VIP-YYYY",
    "VIP-ZZZZ"
  ]
}
```
---

## DELETE /public/delete-key

Delete a key belonging to your service.

### Body
```json
{
  "key": "KEY_STRING"
}
```
### Success (200)
```json
{
  "message": "successfully deleted the key",
  "key": "KEY_STRING"
}
```
### Possible Errors

400 → Invalid body  
404 → Key not found  
500 → Internal error  

---

# 🚫 Blacklist

The blacklist contains blocked HWIDs for your service.

Each entry:
```json
{
  "hwid": "string",
  "expires_in": "ISO Date string | null"
}
```

---

## POST /public/blacklist

Add an HWID to the blacklist.

### Body
```json
{
  "hwid": "HWID_STRING",
  "expires_in": 24
}
```
- `hwid` is required
- `expires_in` is optional (hours until automatic removal)

### Success (200)
```json
{
  "message": "successfully updated your blacklist"
}
```
---

## DELETE /public/blacklist

Remove an HWID from the blacklist.

### Body
```json
{
  "hwid": "HWID_STRING"
}
```
### Success (200)
```json
{
  "message": "successfully updated your blacklist"
}
```
If the HWID is not found (404):
```json
{
  "message": "This HWID is not in blacklist."
}
```
---

## GET /public/blacklist

Retrieve the current blacklist.

### Success (200)
```json
{
  "message": "successfully caught your blacklist",
  "blacklist": [
    {
      "hwid": "ABC123",
      "expires_in": "2026-02-27T15:00:00.000Z"
    }
  ]
}
```
---

# 🏓 Ping

## GET /public/ping

Used to validate authentication and fetch service metadata.

### Success (200)
```json
{
  "message": "pong!",
  "service_id": "your_service_id",
  "settings": { ... }
}
```
