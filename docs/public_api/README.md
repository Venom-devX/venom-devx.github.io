# 📘 Public API Documentation

Base path:

/public

All routes require authentication via Authorization header.

---

## 🔐 Authentication

Every `/public/*` route uses Bearer authentication.

### Header

Authorization: Bearer YOUR_SECRET

ou

Authorization: YOUR_SECRET

### Validation Flow

1. The API extracts the token from `Authorization`
2. Searches it in table `authenticated_users`
3. If valid, injects into request:

req.auth_data = {
    service_id,
    auth,
    settings
}

---

## ❌ Common Error Responses

| Status | Meaning |
|--------|----------|
| 400 | Bad request (invalid body / missing fields) |
| 401 | Unauthorized (invalid secret) |
| 404 | Resource not found |
| 500 | Internal server error |

When using `sendMsg(res, code)`, the API returns a standardized error response.

---

# 🔑 Keys

---

## POST /public/create-key

Create one or multiple keys.

### Body (JSON)

{
  "mode": "single" | "multiple",
  "prefix": "string (max 12 chars)",
  "quantity": number (only for multiple, max 10),
  "expires_in": number (hours, optional)
}

---

### 🟢 Single Mode

Requirements:
- mode = "single"
- prefix required
- prefix length ≤ 12

Example Request:

{
  "mode": "single",
  "prefix": "CHAOS-",
  "expires_in": 24
}

Success Response (201):

{
  "message": "successfully created your key",
  "key": "CHAOS-ABCD1234EFGH5678"
}

---

### 🟢 Multiple Mode

Requirements:
- mode = "multiple"
- prefix required
- quantity required
- quantity ≤ 10
- prefix length ≤ 12

Example Request:

{
  "mode": "multiple",
  "prefix": "VIP-",
  "quantity": 3,
  "expires_in": 48
}

Success Response (201):

{
  "message": "successfully generated your keys!",
  "generated_keys": [
    "VIP-XXXX",
    "VIP-YYYY",
    "VIP-ZZZZ"
  ]
}

---

### Internal Behavior

- Keys are generated using `gen_random_string(16)`
- expires_in (hours) is converted to ISO timestamp
- Stored fields:
    duration → original hours value
    expires_in → ISO date
- All keys are created with:
    premium: true

---

## DELETE /public/delete-key

Delete a key from your service.

### Body

{
  "key": "KEY_STRING"
}

### Success (200)

{
  "message": "successfully deleted the key",
  "key": "KEY_STRING"
}

### Errors

400 → invalid body  
404 → key not found  
500 → database error  

---

# 🚫 Blacklist

Blacklist is stored in `authenticated_users.blacklist` as an array.

Structure:

{
  "hwid": "string",
  "expires_in": "Date | null"
}

---

## POST /public/blacklist

Add HWID to blacklist.

### Body

{
  "hwid": "HWID_STRING",
  "expires_in": 24
}

expires_in = hours (optional)

### Success (200)

{
  "message": "successfully updated your blacklist"
}

---

## DELETE /public/blacklist

Remove HWID from blacklist.

### Body

{
  "hwid": "HWID_STRING"
}

### Success (200)

{
  "message": "successfully updated your blacklist"
}

If not found (404):

{
  "message": "This HWID is not in blacklist."
}

---

## GET /public/blacklist

Retrieve your blacklist.

### Success (200)

{
  "message": "successfully caught your blacklist",
  "blacklist": [
    {
      "hwid": "ABC123",
      "expires_in": "2026-02-27T15:00:00.000Z"
    }
  ]
}

---

# 🏓 Ping

## GET /public/ping

Used to validate authentication and fetch service info.

### Success (200)

{
  "message": "pong!",
  "service_id": "your_service_id",
  "settings": { ... }
}
