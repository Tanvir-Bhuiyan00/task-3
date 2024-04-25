const crypto = require("crypto");

class KeyGenerator {
  static generateKey() {
    return crypto.randomBytes(32).toString("hex");
  }

  static calculateHMAC(key, message) {
    const hmac = crypto.createHmac("sha256", key);
    hmac.update(message);
    return hmac.digest("hex");
  }
}

module.exports = KeyGenerator;
