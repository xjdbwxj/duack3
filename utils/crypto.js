import aesCrypto from 'crypto-js/aes.js';
import utf8Encode from 'crypto-js/enc-utf8.js';

import dotenv from 'dotenv';
dotenv.config();
const secretKey = process.env.SECRET_KEY;
// 加密
export const encrypt = (text) => {
	let encryptedText = aesCrypto
		.encrypt(utf8Encode.parse(text), secretKey)
		.toString();
	return encryptedText;
};

// 解密
export const decrypt = (text) => {
	let decryptText = aesCrypto.decrypt(text, secretKey).toString(utf8Encode);
	return decryptText.toString(utf8Encode);
};
