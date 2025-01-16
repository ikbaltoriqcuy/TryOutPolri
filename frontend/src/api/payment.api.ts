import getHeaders from "./header";
import { ApiResponse, ApiResponseError} from "./response";
import { BASE_URL_API, BASE_IPAYMU, REACT_APP_VA } from "../Config"
import { getCache, CACHE_KEY } from "../cache/CacheUtils";
import axios from "axios";
import CryptoJS from "crypto-js";

export interface Packet {
  packet_id: number,
  name: string;
  price: string;
  quota_per_day: number;
  login_quota: number,
}

export interface PacketPurchased {
    data: {
        user_id: number;
        price: number;
        current_quota: number;
        packet_id: number;
    };
}

export interface UpdatePacketPurchased {
    data: {
        user_id: number;
        current_quota: number;
    };
}


export interface PaymentResponse {
  SessionId: string;
  TransactionId: number;
  ReferenceId: string;
  Via: string;
  Channel: string;
  PaymentNo: string;
  QrString: string;
  PaymentName: string;
  SubTotal: number;
  Fee: number;
  Total: number;
  FeeDirection: string;
  Expired: string;
  QrImage: string;
  QrTemplate: string;
  Terminal: string;
  NNSCode: string;
  NMID: string;
  Note: string | null;
  Escrow: boolean;
};
  
export async function getAllPacket(): Promise<ApiResponse<Packet[]>> {

    const response = await fetch(BASE_URL_API + "/api/get-all-packet", {
        method: 'POST',
        headers: getHeaders(),
    });

    if (!response.ok) {
        const errorData: ApiResponseError = await response.json();
        throw errorData;
    }

    const data: ApiResponse<Packet[]> = await response.json();
    return data
 }


export async function insertPacketPurchased(data: PacketPurchased ): Promise<ApiResponse<String>> {

    const response = await fetch(BASE_URL_API + "/api/insert-packet-purchased", {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData: ApiResponseError = await response.json();
        throw errorData;
    }

    return {
        data: "success",
        message: "Request was successful",
        status: 200
    };
 }

 export async function updateQuotaPacketPurchased(data: UpdatePacketPurchased ): Promise<ApiResponse<String>> {

    const response = await fetch(BASE_URL_API + "/api/update-packet-quota", {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData: ApiResponseError = await response.json();
        throw errorData;
    }

    return {
        data: "success",
        message: "Request was successful",
        status: 200
    };
 }

 /*
 export async function submitPayment(amount: number): Promise<ApiResponse<String>> { 
      const cache = getCache(CACHE_KEY);
    
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("signature", "");
      myHeaders.append("va", REACT_APP_VA);
      myHeaders.append("timestamp", new Date().toISOString());

      const formData = new FormData();
      formData.append("name", cache?.name || "");
      formData.append("phone", cache?.phone || "");
      formData.append("email", cache?.email || "");
      formData.append("amount", amount.toString());
      formData.append("notifyUrl", "https://mywebsite.com");
    //   formData.append("expired", "24");
     formData.append("comments", "Payment to XYZ");
      formData.append("referenceId", "1");
      formData.append("paymentMethod", "qris");
      formData.append("paymentChannel", "mpm");
    //   formData.append("product[]", "produk 1");
    //   formData.append("qty[]", "1");
    //    formData.append("price[]", amount.toString());
    //   formData.append("weight[]", "1");
    //   formData.append("width[]", "1");
    //   formData.append("height[]", "1");
    //   formData.append("length[]", "1");
    //   formData.append("feeDirection", "BUYER");
    //   formData.append("escrow", "0");
    //    formData.append("account", "1179000899");
    //   formData.append("deliveryArea", "17473");
    //   formData.append(
    //     "deliveryAddress",
    //     "GROGOL, GROGOL PETAMBURAN, JAKARTA BARAT, 11450"
    //   );
    //   formData.append("shipping", "IDEXPRESS");
    //   formData.append("shippingService", "STD");

      const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow",
      };

      const response = await fetch(
        BASE_IPAYMU + "/api/v2/payment/direct",
        requestOptions
      );
      const result = await response.text();
      return {
        data: "success",
        message: "Request was successful",
        status: 200
    };
  };
  */

const VirtualAccount = "0000005157929917";
const ApiKey = "SANDBOX4AC6CE37-EC72-4F63-B16D-277BD49873C8";

export async function submitPayment(amount: number): Promise<PaymentResponse> {
  const cache = getCache("CACHE_KEY");

  const requestBody = {
    name: cache?.name || "",
    phone: cache?.phone || "",
    email: cache?.email || "",
    amount: amount.toString(),
    notifyUrl: "https://mywebsite.com",
    comments: "Payment to XYZ",
    referenceId: "1",
    paymentMethod: "qris",
    paymentChannel: "mpm",
  };

  // Step 1: Generate SHA-256 hash of the request body (lowercase)
  const bodyHash = getSHA256Hash(JSON.stringify(requestBody));

  // Step 2: Create the StringToSign
  const stringToSign = `POST:${VirtualAccount}:${bodyHash}:${ApiKey}`;

  // Step 3: Generate the HMAC-SHA256 signature
  const signature = sha256HMAC(ApiKey, stringToSign);

  try {
    const response = await axios.post(
      "/api",
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
          signature,
          va: VirtualAccount,
          timestamp: new Date().toISOString(),
        },
      }
    );

    return response.data as PaymentResponse;

  } catch (error: any) {
    console.error("Error during payment:", error);
    throw new Error(error.message || "An error occurred during payment");
  }
}

export async function checkTransactionId(amount: number): Promise<PaymentResponse> {
  const cache = getCache("CACHE_KEY");

  const requestBody = {
    name: cache?.name || "",
    phone: cache?.phone || "",
    email: cache?.email || "",
    amount: amount.toString(),
    notifyUrl: "https://mywebsite.com",
    comments: "Payment to XYZ",
    referenceId: "1",
    paymentMethod: "qris",
    paymentChannel: "mpm",
  };

  // Step 1: Generate SHA-256 hash of the request body (lowercase)
  const bodyHash = getSHA256Hash(JSON.stringify(requestBody));

  // Step 2: Create the StringToSign
  const stringToSign = `POST:${VirtualAccount}:${bodyHash}:${ApiKey}`;

  // Step 3: Generate the HMAC-SHA256 signature
  const signature = sha256HMAC(ApiKey, stringToSign);

  try {
    const response = await axios.post(
      "/api",
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
          signature,
          va: VirtualAccount,
          timestamp: new Date().toISOString(),
        },
      }
    );

    return response.data as PaymentResponse;

  } catch (error: any) {
    console.error("Error during payment:", error);
    throw new Error(error.message || "An error occurred during payment");
  }
}

function getSHA256Hash(data: string): string {
  return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
}

function sha256HMAC(secret: string, message: string): string {
  return CryptoJS.HmacSHA256(message, secret).toString(CryptoJS.enc.Hex);
}