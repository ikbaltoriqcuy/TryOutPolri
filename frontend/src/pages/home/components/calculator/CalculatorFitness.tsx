import React from "react";
import {
  Container,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";

interface FormData {
  lari: number;
  pullUp: number;
  sitUp: number;
  pushUp: number;
  shuttleRun: number;
  renang: number;
}

const genders = [
  { value: 'pria', label: 'Pria' },
  { value: 'wanita', label: 'Wanita' },
];

const CalculatorFitness: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    lari: 0,
    pullUp: 0,
    sitUp: 0,
    pushUp: 0,
    shuttleRun: 0,
    renang: 0,
  });

  

  const [jenisKelamin, setJenisKelamin] = React.useState<string>('pria');
  const [nilaiLari, setNilaiLari] = React.useState<number | null>(null);
  const [nilaiPullUp, setNilaiPullUp] = React.useState<number | null>(null);
  const [nilaiSitUp, setNilaiSitUp] = React.useState<number | null>(null);
  const [nilaiPushUp, setNilaiPushUp] = React.useState<number | null>(null);
  const [nilaiShuttleRun, setNilaiShuttleRun] = React.useState<number | null>(null);
  const [nilaiRenang, setNilaiRenang] = React.useState<number | null>(null);
  const [nilaiRataRata, setNilaiRataRata] = React.useState<number | null>(null);


  // Fungsi untuk menghitung nilai lari berdasarkan jenis kelamin
  const hitungNilaiLari = (jarak: number, jenisKelamin: string) => {
    if (jenisKelamin === 'pria') {
      if (jarak >= 1349 && jarak <= 1370) return 1;
      if (jarak >= 1371 && jarak <= 1391) return 2;
      if (jarak >= 1392 && jarak <= 1412) return 3;
      if (jarak >= 1413 && jarak <= 1433) return 4;
      if (jarak >= 1434 && jarak <= 1454) return 5;
      if (jarak >= 1455 && jarak <= 1475) return 6;
      if (jarak >= 1476 && jarak <= 1496) return 7;
      if (jarak >= 1497 && jarak <= 1517) return 8;
      if (jarak >= 1518 && jarak <= 1538) return 9;
      if (jarak >= 1539 && jarak <= 1560) return 10;
      if (jarak >= 1561 && jarak <= 1581) return 11;
      if (jarak >= 1582 && jarak <= 1602) return 12;
      if (jarak >= 1603 && jarak <= 1624) return 13;
      if (jarak >= 1625 && jarak <= 1644) return 14;
      if (jarak >= 1645 && jarak <= 1665) return 15;
      if (jarak >= 1666 && jarak <= 1686) return 16;
      if (jarak >= 1687 && jarak <= 1707) return 17;
      if (jarak >= 1708 && jarak <= 1728) return 18;
      if (jarak >= 1729 && jarak <= 1749) return 19;
      if (jarak >= 1750 && jarak <= 1771) return 20;
      if (jarak >= 1772 && jarak <= 1792) return 21;
      if (jarak >= 1793 && jarak <= 1813) return 22;
      if (jarak >= 1814 && jarak <= 1835) return 23;
      if (jarak >= 1836 && jarak <= 1856) return 24;
      if (jarak >= 1857 && jarak <= 1877) return 25;
      if (jarak >= 1878 && jarak <= 1898) return 26;
      if (jarak >= 1899 && jarak <= 1919) return 27;
      if (jarak >= 1920 && jarak <= 1940) return 28;
      if (jarak >= 1941 && jarak <= 1961) return 29;
      if (jarak >= 1962 && jarak <= 1983) return 30;
      if (jarak >= 1984 && jarak <= 2004) return 31;
      if (jarak >= 2005 && jarak <= 2025) return 32;
      if (jarak >= 2026 && jarak <= 2047) return 33;
      if (jarak >= 2048 && jarak <= 2068) return 34;
      if (jarak >= 2069 && jarak <= 2089) return 35;
      if (jarak >= 2090 && jarak <= 2110) return 36;
      if (jarak >= 2111 && jarak <= 2131) return 37;
      if (jarak >= 2132 && jarak <= 2152) return 38;
      if (jarak >= 2153 && jarak <= 2173) return 39;
      if (jarak >= 2174 && jarak <= 2194) return 40;
      if (jarak >= 2195 && jarak <= 2215) return 41;
      if (jarak >= 2216 && jarak <= 2236) return 42;
      if (jarak >= 2237 && jarak <= 2258) return 43;
      if (jarak >= 2259 && jarak <= 2279) return 44;
      if (jarak >= 2280 && jarak <= 2300) return 45;
      if (jarak >= 2301 && jarak <= 2321) return 46;
      if (jarak >= 2322 && jarak <= 2342) return 47;
      if (jarak >= 2343 && jarak <= 2363) return 48;
      if (jarak >= 2364 && jarak <= 2385) return 49;
      if (jarak >= 2386 && jarak <= 2406) return 50;
      if (jarak >= 2407 && jarak <= 2427) return 51;
      if (jarak >= 2428 && jarak <= 2448) return 52;
      if (jarak >= 2449 && jarak <= 2469) return 53;
      if (jarak >= 2470 && jarak <= 2490) return 54;
      if (jarak >= 2491 && jarak <= 2512) return 55;
      if (jarak >= 2513 && jarak <= 2533) return 56;
      if (jarak >= 2534 && jarak <= 2554) return 57;
      if (jarak >= 2555 && jarak <= 2575) return 58;
      if (jarak >= 2576 && jarak <= 2596) return 59;
      if (jarak >= 2597 && jarak <= 2617) return 60;
      if (jarak >= 2618 && jarak <= 2638) return 61;
      if (jarak >= 2639 && jarak <= 2660) return 62;
      if (jarak >= 2661 && jarak <= 2681) return 63;
      if (jarak >= 2682 && jarak <= 2702) return 64;
      if (jarak >= 2703 && jarak <= 2724) return 65;
      if (jarak >= 2725 && jarak <= 2745) return 66;
      if (jarak >= 2746 && jarak <= 2766) return 67;
      if (jarak >= 2767 && jarak <= 2787) return 68;
      if (jarak >= 2788 && jarak <= 2808) return 69;
      if (jarak >= 2809 && jarak <= 2819) return 70;
      if (jarak >= 2820 && jarak <= 2850) return 71;
      if (jarak >= 2851 && jarak <= 2871) return 72;
      if (jarak >= 2872 && jarak <= 2892) return 73;
      if (jarak >= 2893 && jarak <= 2913) return 74;
      if (jarak >= 2914 && jarak <= 2935) return 75;
      if (jarak >= 2936 && jarak <= 2956) return 76;
      if (jarak >= 2957 && jarak <= 2977) return 77;
      if (jarak >= 2978 && jarak <= 2998) return 78;
      if (jarak >= 2999 && jarak <= 3020) return 79;
      if (jarak >= 3021 && jarak <= 3040) return 80;
      if (jarak >= 3041 && jarak <= 3061) return 81;
      if (jarak >= 3062 && jarak <= 3083) return 82;
      if (jarak >= 3084 && jarak <= 3104) return 83;
      if (jarak >= 3105 && jarak <= 3125) return 84;
      if (jarak >= 3126 && jarak <= 3147) return 85;
      if (jarak >= 3148 && jarak <= 3168) return 86;
      if (jarak >= 3169 && jarak <= 3189) return 87;
      if (jarak >= 3190 && jarak <= 3210) return 88;
      if (jarak >= 3211 && jarak <= 3231) return 89;
      if (jarak >= 3232 && jarak <= 3252) return 90;
      if (jarak >= 3253 && jarak <= 3316) return 91;
      if (jarak >= 3317 && jarak <= 3337) return 94;
      if (jarak >= 3338 && jarak <= 3368) return 95;
      if (jarak >= 3369 && jarak <= 3178) return 96;
      if (jarak >= 3180 && jarak <= 3400) return 97;
      if (jarak >= 3401 && jarak <= 3421) return 98;
      if (jarak >= 3422 && jarak <= 3443) return 99;
      if (jarak >= 3444) return 100;
      return 0;
    } else {
      if (jarak >= 1013 && jarak <= 1033) return 1; // Contoh nilai untuk wanita
      if (jarak >= 1034 && jarak <= 1055) return 2;
      if (jarak >= 1056 && jarak <= 1075) return 3;
      if (jarak >= 1076 && jarak <= 1096) return 4;
      if (jarak >= 1097 && jarak <= 1117) return 5;
      if (jarak >= 1118 && jarak <= 1138) return 6;
      if (jarak >= 1139 && jarak <= 1160) return 7;
      if (jarak >= 1161 && jarak <= 1180) return 8;
      if (jarak >= 1181 && jarak <= 1201) return 9;
      if (jarak >= 1202 && jarak <= 1222) return 10;
      if (jarak >= 1223 && jarak <= 1243) return 11;
      if (jarak >= 1244 && jarak <= 1265) return 12;
      if (jarak >= 1266 && jarak <= 1286) return 13;
      if (jarak >= 1287 && jarak <= 1307) return 14;
      if (jarak >= 1308 && jarak <= 1330) return 15;
      if (jarak >= 1331 && jarak <= 1351) return 16;
      if (jarak >= 1352 && jarak <= 1370) return 17;
      if (jarak >= 1371 && jarak <= 1391) return 18;
      if (jarak >= 1392 && jarak <= 1411) return 19;
      if (jarak >= 1412 && jarak <= 1433) return 20;
      if (jarak >= 1434 && jarak <= 1454) return 21;
      if (jarak >= 1455 && jarak <= 1475) return 22;
      if (jarak >= 1476 && jarak <= 1496) return 23;
      if (jarak >= 1497 && jarak <= 1517) return 24;
      if (jarak >= 1518 && jarak <= 1538) return 25;
      if (jarak >= 1539 && jarak <= 1581) return 26;
      if (jarak >= 1582 && jarak <= 1602) return 28;
      if (jarak >= 1603 && jarak <= 1624) return 29;
      if (jarak >= 1625 && jarak <= 1644) return 30;
      if (jarak >= 1645 && jarak <= 1665) return 31;
      if (jarak >= 1666 && jarak <= 1686) return 32;
      if (jarak >= 1687 && jarak <= 1707) return 33;
      if (jarak >= 1708 && jarak <= 1728) return 34;
      if (jarak >= 1729 && jarak <= 1749) return 35;
      if (jarak >= 1750 && jarak <= 1771) return 36;
      if (jarak >= 1772 && jarak <= 1792) return 37;
      if (jarak >= 1793 && jarak <= 1813) return 38;
      if (jarak >= 1814 && jarak <= 1835) return 39;
      if (jarak >= 1836 && jarak <= 1856) return 40;
      if (jarak >= 1857 && jarak <= 1877) return 41;
      if (jarak >= 1878 && jarak <= 1898) return 42;
      if (jarak >= 1899 && jarak <= 1919) return 43;
      if (jarak >= 1920 && jarak <= 1940) return 44;
      if (jarak >= 1941 && jarak <= 1961) return 45;
      if (jarak >= 1962 && jarak <= 1983) return 46;
      if (jarak >= 1984 && jarak <= 2004) return 47;
      if (jarak >= 2005 && jarak <= 2025) return 48;
      if (jarak >= 2026 && jarak <= 2047) return 49;
      if (jarak >= 2048 && jarak <= 2068) return 50;
      if (jarak >= 2069 && jarak <= 2110) return 51;
      if (jarak >= 2111 && jarak <= 2131) return 53;
      if (jarak >= 2132 && jarak <= 2152) return 54;
      if (jarak >= 2153 && jarak <= 2173) return 55;
      if (jarak >= 2174 && jarak <= 2194) return 56;
      if (jarak >= 2195 && jarak <= 2215) return 57;
      if (jarak >= 2216 && jarak <= 2236) return 58;
      if (jarak >= 2237 && jarak <= 2258) return 59;
      if (jarak >= 2259 && jarak <= 2279) return 60;
      if (jarak >= 2280 && jarak <= 2300) return 61;
      if (jarak >= 2301 && jarak <= 2321) return 62;
      if (jarak >= 2322 && jarak <= 2342) return 63;
      if (jarak >= 2343 && jarak <= 2363) return 64;
      if (jarak >= 2364 && jarak <= 2385) return 65;
      if (jarak >= 2386 && jarak <= 2406) return 66;
      if (jarak >= 2407 && jarak <= 2427) return 67;
      if (jarak >= 2428 && jarak <= 2448) return 68;
      if (jarak >= 2449 && jarak <= 2469) return 69;
      if (jarak >= 2470 && jarak <= 2490) return 70;
      if (jarak >= 2491 && jarak <= 2512) return 71;
      if (jarak >= 2513 && jarak <= 2533) return 72;
      if (jarak >= 2534 && jarak <= 2554) return 73;
      if (jarak >= 2555 && jarak <= 2575) return 74;
      if (jarak >= 2576 && jarak <= 2596) return 75;
      if (jarak >= 2597 && jarak <= 2617) return 76;
      if (jarak >= 2618 && jarak <= 2638) return 77;
      if (jarak >= 2639 && jarak <= 2660) return 78;
      if (jarak >= 2661 && jarak <= 2681) return 79;
      if (jarak >= 2682 && jarak <= 2702) return 80;
      if (jarak >= 2703 && jarak <= 2724) return 81;
      if (jarak >= 2725 && jarak <= 2745) return 82;
      if (jarak >= 2746 && jarak <= 2766) return 83;
      if (jarak >= 2767 && jarak <= 2787) return 84;
      if (jarak >= 2788 && jarak <= 2808) return 85;
      if (jarak >= 2809 && jarak <= 2829) return 86;
      if (jarak >= 2830 && jarak <= 2850) return 87;
      if (jarak >= 2851 && jarak <= 2871) return 88;
      if (jarak >= 2872 && jarak <= 2892) return 89;
      if (jarak >= 2893 && jarak <= 2913) return 90;
      if (jarak >= 2914 && jarak <= 2935) return 91;
      if (jarak >= 2936 && jarak <= 2956) return 92;
      if (jarak >= 2957 && jarak <= 2977) return 93;
      if (jarak >= 2978 && jarak <= 2998) return 94;
      if (jarak >= 2999 && jarak <= 3020) return 95;
      if (jarak >= 3021 && jarak <= 3040) return 96;
      if (jarak >= 3041 && jarak <= 3061) return 97;
      if (jarak >= 3062 && jarak <= 3083) return 98;
      if (jarak >= 3084 && jarak <= 3104) return 99;
      if (jarak >= 3105 && jarak <= 3401) return 100;
      return 0;
    }
  };

  // Fungsi untuk menghitung nilai Pull Up berdasarkan jenis kelamin
  const hitungNilaiPullUp = (pullup: number, jenisKelamin: string) => {
    if (jenisKelamin === 'pria') {
      if (pullup >= 1) return 4;
      if (pullup >= 2) return 8;
      if (pullup >= 3) return 14;
      if (pullup >= 4) return 20;
      if (pullup >= 5) return 26;
      if (pullup >= 6) return 32;
      if (pullup >= 7) return 39;
      if (pullup >= 8) return 46;
      if (pullup >= 9) return 52;
      if (pullup >= 10) return 58;
      if (pullup >= 11) return 64;
      if (pullup >= 12) return 70;
      if (pullup >= 13) return 76;
      if (pullup >= 14) return 82;
      if (pullup >= 15) return 88;
      if (pullup >= 16) return 94;
      if (pullup >= 17) return 100;
  
      return 0;
    } else {
      if (pullup >= 33) return 2; // Contoh untuk nilai wanita
      if (pullup >= 34) return 5;
      if (pullup >= 35) return 7;
      if (pullup >= 36) return 10;
      if (pullup >= 37) return 12;
      if (pullup >= 38) return 14;
      if (pullup >= 39) return 17;
      if (pullup >= 40) return 20;
      if (pullup >= 41) return 22;
      if (pullup >= 42) return 25;
      if (pullup >= 43) return 27;
      if (pullup >= 44) return 30;
      if (pullup >= 45) return 32;
      if (pullup >= 46) return 34;
      if (pullup >= 47) return 37;
      if (pullup >= 48) return 39;
      if (pullup >= 49) return 42;
      if (pullup >= 50) return 44;
      if (pullup >= 51) return 47;
      if (pullup >= 52) return 52;
      if (pullup >= 53) return 55;
      if (pullup >= 54) return 56;
      if (pullup >= 55) return 59;
      if (pullup >= 56) return 62;
      if (pullup >= 57) return 64;
      if (pullup >= 58) return 67;
      if (pullup >= 59) return 69;
      if (pullup >= 60) return 72;
      if (pullup >= 61) return 74;
      if (pullup >= 62) return 75;
      if (pullup >= 63) return 77;
      if (pullup >= 64) return 80;
      if (pullup >= 65) return 82;
      if (pullup >= 66) return 85;
      if (pullup >= 67) return 87;
      if (pullup >= 68) return 90;
      if (pullup >= 69) return 92;
      if (pullup >= 70) return 95;
      if (pullup >= 71) return 97;
      if (pullup >= 72) return 100;
  
      return 0;
    }
  };

  
  // Fungsi untuk menghitung nilai Sit Up berdasarkan jenis kelamin
  const hitungNilaiSitUp = (situp: number, jenisKelamin: string) => {
    if (jenisKelamin === 'pria') {
      if (situp >= 6) return 1;
      if (situp >= 7) return 2;
      if (situp >= 8) return 4;
      if (situp >= 9) return 6;
      if (situp >= 10) return 8;
      if (situp >= 11) return 10;
      if (situp >= 12) return 12;
      if (situp >= 13) return 14;
      if (situp >= 14) return 16;
      if (situp >= 15) return 18;
      if (situp >= 16) return 20;
      if (situp >= 17) return 22;
      if (situp >= 18) return 24;
      if (situp >= 19) return 26;
      if (situp >= 20) return 28;
      if (situp >= 21) return 30;
      if (situp >= 22) return 32;
      if (situp >= 23) return 35;
      if (situp >= 24) return 38;
      if (situp >= 25) return 41;
      if (situp >= 26) return 44;
      if (situp >= 27) return 48;
      if (situp >= 28) return 52;
      if (situp >= 29) return 56;
      if (situp >= 30) return 60;
      if (situp >= 31) return 64;
      if (situp >= 32) return 68;
      if (situp >= 33) return 72;
      if (situp >= 34) return 76;
      if (situp >= 35) return 80;
      if (situp >= 36) return 84;
      if (situp >= 37) return 88;
      if (situp >= 38) return 92;
      if (situp >= 39) return 96;
      if (situp >= 40) return 100;
      return 0;
    } else {
      if (situp >= 17) return 1;  // Contoh untuk nilai wanita
      if (situp >= 18) return 3;
      if (situp >= 19) return 6;
      if (situp >= 20) return 10;
      if (situp >= 21) return 12;
      if (situp >= 22) return 15;
      if (situp >= 23) return 19;
      if (situp >= 24) return 21;
      if (situp >= 25) return 24;
      if (situp >= 26) return 26;
      if (situp >= 27) return 29;
      if (situp >= 28) return 33;
      if (situp >= 29) return 37;
      if (situp >= 30) return 39;
      if (situp >= 31) return 42;
      if (situp >= 32) return 46;
      if (situp >= 33) return 48;
      if (situp >= 34) return 51;
      if (situp >= 35) return 55;
      if (situp >= 36) return 57;
      if (situp >= 37) return 60;
      if (situp >= 38) return 64;
      if (situp >= 39) return 66;
      if (situp >= 40) return 69;
      if (situp >= 41) return 73;
      if (situp >= 42) return 75;
      if (situp >= 43) return 78;
      if (situp >= 44) return 82;
      if (situp >= 45) return 84;
      if (situp >= 46) return 87;
      if (situp >= 47) return 91;
      if (situp >= 48) return 93;
      if (situp >= 49) return 96;
      if (situp >= 50) return 100;

      return 0;
    }
  };



// Fungsi untuk menghitung nilai Push Up berdasarkan jenis kelamin
const hitungNilaiPushUp = (pushup: number, jenisKelamin: string) => {
  if (jenisKelamin === 'pria') {
    if (pushup >= 1) return 3;
    if (pushup >= 2) return 4;
    if (pushup >= 3) return 5;
    if (pushup >= 4) return 6;
    if (pushup >= 5) return 7;
    if (pushup >= 6) return 9;
    if (pushup >= 7) return 11;
    if (pushup >= 8) return 13;
    if (pushup >= 9) return 15;
    if (pushup >= 10) return 17;
    if (pushup >= 11) return 19;
    if (pushup >= 12) return 21;
    if (pushup >= 13) return 23;
    if (pushup >= 14) return 26;
    if (pushup >= 15) return 29;
    if (pushup >= 16) return 32;
    if (pushup >= 17) return 34;
    if (pushup >= 18) return 36;
    if (pushup >= 19) return 38;
    if (pushup >= 20) return 40;
    if (pushup >= 21) return 42;
    if (pushup >= 22) return 44;
    if (pushup >= 23) return 46;
    if (pushup >= 24) return 48;
    if (pushup >= 25) return 50;
    if (pushup >= 26) return 52;
    if (pushup >= 27) return 55;
    if (pushup >= 28) return 58;
    if (pushup >= 29) return 61;
    if (pushup >= 30) return 64;
    if (pushup >= 31) return 67;
    if (pushup >= 32) return 70;
    if (pushup >= 33) return 73;
    if (pushup >= 34) return 76;
    if (pushup >= 35) return 79;
    if (pushup >= 36) return 82;
    if (pushup >= 37) return 85;
    if (pushup >= 38) return 88;
    if (pushup >= 39) return 91;
    if (pushup >= 40) return 94;
    if (pushup >= 41) return 97;
    if (pushup >= 42) return 100;
    if (pushup > 43) return 100;
    return 0;
  } else {
    if (pushup >= 1 && pushup <= 8) return 1; // Contoh nilai untuk wanita
    if (pushup >= 9) return 2;
    if (pushup >= 10) return 6;
    if (pushup >= 11) return 9;
    if (pushup >= 12) return 13;
    if (pushup >= 13) return 16;
    if (pushup >= 14) return 20;
    if (pushup >= 15) return 23;
    if (pushup >= 16) return 27;
    if (pushup >= 17) return 30;
    if (pushup >= 18) return 34;
    if (pushup >= 19) return 37;
    if (pushup >= 20) return 41;
    if (pushup >= 21) return 44;
    if (pushup >= 22) return 48;
    if (pushup >= 23) return 51;
    if (pushup >= 24) return 55;
    if (pushup >= 25) return 58;
    if (pushup >= 26) return 62;
    if (pushup >= 27) return 65;
    if (pushup >= 28) return 69;
    if (pushup >= 29) return 72;
    if (pushup >= 30) return 76;
    if (pushup >= 31) return 79;
    if (pushup >= 32) return 83;
    if (pushup >= 33) return 86;
    if (pushup >= 34) return 90;
    if (pushup >= 35) return 93;
    if (pushup >= 36) return 97;
    if (pushup >= 37) return 100;

    return 0;
  }
};

// Fungsi untuk menghitung nilai Shuttle Run berdasarkan jenis kelamin
const hitungNilaiShuttleRun = (shuttlerun: number, jenisKelamin: string) => {
  if (jenisKelamin === 'pria') {
    if (shuttlerun <= 16.2) return 100;
    if (shuttlerun <= 16.3) return 99;
    if (shuttlerun <= 16.4) return 98;
    if (shuttlerun <= 16.5) return 97;
    if (shuttlerun <= 16.6) return 96;
    if (shuttlerun <= 16.7) return 95;
    if (shuttlerun <= 16.8) return 94;
    if (shuttlerun <= 16.9) return 92;
    if (shuttlerun <= 17) return 90;
    if (shuttlerun <= 17.1) return 88;
    if (shuttlerun <= 17.2) return 86;
    if (shuttlerun <= 17.3) return 84;
    if (shuttlerun <= 17.4) return 82;
    if (shuttlerun <= 17.5) return 80;
    if (shuttlerun <= 17.6) return 78;
    if (shuttlerun <= 17.7) return 76;
    if (shuttlerun <= 17.8) return 74;
    if (shuttlerun <= 17.9) return 72;
    if (shuttlerun <= 18) return 70;
    if (shuttlerun <= 18.1) return 68;
    if (shuttlerun <= 18.2) return 66;
    if (shuttlerun <= 18.3) return 64;
    if (shuttlerun <= 18.4) return 62;
    if (shuttlerun <= 18.5) return 60;
    if (shuttlerun <= 18.6) return 58;
    if (shuttlerun <= 18.7) return 56;
    if (shuttlerun <= 18.8) return 54;
    if (shuttlerun <= 18.9) return 52;
    if (shuttlerun <= 19) return 51;
    if (shuttlerun <= 19.1) return 49;
    if (shuttlerun <= 19.2) return 47;
    if (shuttlerun <= 19.3) return 45;
    if (shuttlerun <= 19.4) return 43;
    if (shuttlerun <= 19.5) return 41;
    if (shuttlerun <= 19.6) return 40;
    if (shuttlerun <= 19.7) return 38;
    if (shuttlerun <= 19.8) return 36;
    if (shuttlerun <= 19.9) return 34;
    if (shuttlerun <= 20) return 32;
    if (shuttlerun <= 20.1) return 30;
    if (shuttlerun <= 20.2) return 28;
    if (shuttlerun <= 20.3) return 26;
    if (shuttlerun <= 20.4) return 24;
    if (shuttlerun <= 20.5) return 22;
    if (shuttlerun <= 20.6) return 21;
    if (shuttlerun <= 20.7) return 19;
    if (shuttlerun <= 20.8) return 17;
    if (shuttlerun <= 20.9) return 15;
    if (shuttlerun <= 21) return 13;
    if (shuttlerun <= 21.1) return 11;
    if (shuttlerun <= 21.2) return 10;
    if (shuttlerun <= 21.3) return 8;
    if (shuttlerun <= 21.4) return 6;
    if (shuttlerun <= 21.5) return 4;
    if (shuttlerun <= 21.6) return 2;
    if (shuttlerun <= 21.7) return 0;
    return 0;
  } else {
    if (shuttlerun <= 17.6) return 100;
    if (shuttlerun <= 17.7) return 99;
    if (shuttlerun <= 17.8) return 98;
    if (shuttlerun <= 17.9) return 97;
    if (shuttlerun <= 18) return 96;
    if (shuttlerun <= 18.1) return 95;
    if (shuttlerun <= 18.2) return 94;
    if (shuttlerun <= 18.3) return 93;
    if (shuttlerun <= 18.4) return 92;
    if (shuttlerun <= 18.5) return 91;
    if (shuttlerun <= 18.6) return 90;
    if (shuttlerun <= 18.7) return 89;
    if (shuttlerun <= 18.8) return 88;
    if (shuttlerun <= 18.9) return 87;
    if (shuttlerun <= 19) return 86;
    if (shuttlerun <= 19.1) return 85;
    if (shuttlerun <= 19.2) return 84;
    if (shuttlerun <= 19.3) return 83;
    if (shuttlerun <= 19.4) return 82;
    if (shuttlerun <= 19.5) return 81;
    if (shuttlerun <= 19.6) return 80;
    if (shuttlerun <= 19.7) return 79;
    if (shuttlerun <= 19.8) return 78;
    if (shuttlerun <= 19.9) return 77;
    if (shuttlerun <= 20) return 76;
    if (shuttlerun <= 20.1) return 75;
    if (shuttlerun <= 20.2) return 74;
    if (shuttlerun <= 20.3) return 73;
    if (shuttlerun <= 20.4) return 72;
    if (shuttlerun <= 20.5) return 71;
    if (shuttlerun <= 20.6) return 70;
    if (shuttlerun <= 20.7) return 69;
    if (shuttlerun <= 20.8) return 68;
    if (shuttlerun <= 20.9) return 67;
    if (shuttlerun <= 21) return 66;
    if (shuttlerun <= 21.1) return 65;
    if (shuttlerun <= 21.2) return 64;
    if (shuttlerun <= 21.3) return 63;
    if (shuttlerun <= 21.4) return 62;
    if (shuttlerun <= 21.5) return 61;
    if (shuttlerun <= 21.6) return 60;
    if (shuttlerun <= 21.7) return 59;
    if (shuttlerun <= 21.8) return 58;
    if (shuttlerun <= 21.9) return 57;
    if (shuttlerun <= 22) return 56;
    if (shuttlerun <= 22.1) return 55;
    if (shuttlerun <= 22.2) return 54;
    if (shuttlerun <= 22.3) return 53;
    if (shuttlerun <= 22.4) return 52;
    if (shuttlerun <= 22.5) return 51;
    if (shuttlerun <= 22.6) return 50;
    if (shuttlerun <= 22.7) return 49;
    if (shuttlerun <= 22.8) return 48;
    if (shuttlerun <= 22.9) return 47;
    if (shuttlerun <= 23) return 46;
    if (shuttlerun <= 23.1) return 45;
    if (shuttlerun <= 23.2) return 44;
    if (shuttlerun <= 23.3) return 43;
    if (shuttlerun <= 23.4) return 42;
    if (shuttlerun <= 23.5) return 41;
    if (shuttlerun <= 23.6) return 40;
    if (shuttlerun <= 23.7) return 39;
    if (shuttlerun <= 23.8) return 38;
    if (shuttlerun <= 23.9) return 37;
    if (shuttlerun <= 24) return 36;
    if (shuttlerun <= 24.1) return 35;
    if (shuttlerun <= 24.2) return 34;
    if (shuttlerun <= 24.3) return 33;
    if (shuttlerun <= 24.4) return 32;
    if (shuttlerun <= 24.5) return 31;
    if (shuttlerun <= 24.6) return 30;
    if (shuttlerun <= 24.7) return 29;
    if (shuttlerun <= 24.8) return 28;
    if (shuttlerun <= 24.9) return 27;
    if (shuttlerun <= 25) return 26;
    if (shuttlerun <= 25.1) return 25;
    if (shuttlerun <= 25.2) return 24;
    if (shuttlerun <= 25.3) return 23;
    if (shuttlerun <= 25.4) return 22;
    if (shuttlerun <= 25.5) return 21;
    if (shuttlerun <= 25.6) return 20;
    if (shuttlerun <= 25.7) return 19;
    if (shuttlerun <= 25.8) return 18;
    if (shuttlerun <= 25.9) return 17;
    if (shuttlerun <= 26) return 16;
    if (shuttlerun <= 26.1) return 15;
    if (shuttlerun <= 26.2) return 14;
    if (shuttlerun <= 26.3) return 13;
    if (shuttlerun <= 26.4) return 12;
    if (shuttlerun <= 26.5) return 11;
    if (shuttlerun <= 26.6) return 10;
    if (shuttlerun <= 26.7) return 9;
    if (shuttlerun <= 26.8) return 8;
    if (shuttlerun <= 26.9) return 7;
    if (shuttlerun <= 27) return 6;
    if (shuttlerun <= 27.1) return 5;
    if (shuttlerun <= 27.2) return 4;
    if (shuttlerun <= 27.3) return 3;
    if (shuttlerun <= 27.4) return 2;
    if (shuttlerun <= 27.5) return 1;
    if (shuttlerun <= 27.6) return 0;

    return 0;
  }
};



    // Fungsi untuk menghitung nilai Renang berdasarkan jenis kelamin
    const hitungNilaiRenang = (renang: number, jenisKelamin: string) => {
      if (jenisKelamin === 'pria') {
        if (renang >= 14.00 && renang <= 14.49) return 100;
        if (renang >= 14.50 && renang <= 14.99) return 99;
        if (renang >= 15.00 && renang <= 15.49) return 98;
        if (renang >= 15.50 && renang <= 15.99) return 97;
        if (renang >= 16.00 && renang <= 16.39) return 96;
        if (renang >= 16.40 && renang <= 16.79) return 95;
        if (renang >= 16.80 && renang <= 17.19) return 94;
        if (renang >= 17.20 && renang <= 17.59) return 93;
        if (renang >= 17.60 && renang <= 17.99) return 92;
        if (renang >= 18.00 && renang <= 18.39) return 91;
        if (renang >= 18.40 && renang <= 18.79) return 90;
        if (renang >= 18.80 && renang <= 19.19) return 89;
        if (renang >= 19.20 && renang <= 19.59) return 88;
        if (renang >= 19.60 && renang <= 19.99) return 87;
        if (renang >= 20.00 && renang <= 20.49) return 86;
        if (renang >= 20.50 && renang <= 20.99) return 85;
        if (renang >= 21.00 && renang <= 21.49) return 84;
        if (renang >= 21.50 && renang <= 21.99) return 83;
        if (renang >= 22.00 && renang <= 22.49) return 82;
        if (renang >= 22.50 && renang <= 22.99) return 81;
        if (renang >= 23.00 && renang <= 23.49) return 80;
        if (renang >= 23.50 && renang <= 23.99) return 79;
        if (renang >= 24.00 && renang <= 24.49) return 78;
        if (renang >= 24.50 && renang <= 24.99) return 77;
        if (renang >= 25.00 && renang <= 25.49) return 76;
        if (renang >= 25.50 && renang <= 25.99) return 75;
        if (renang >= 26.00 && renang <= 26.49) return 74;
        if (renang >= 26.50 && renang <= 26.99) return 73;
        if (renang >= 27.00 && renang <= 27.49) return 72;
        if (renang >= 27.50 && renang <= 27.99) return 71;
        if (renang >= 28.00 && renang <= 28.49) return 70;
        if (renang >= 28.50 && renang <= 28.99) return 69;
        if (renang >= 29.00 && renang <= 29.49) return 68;
        if (renang >= 29.50 && renang <= 29.99) return 67;
        if (renang >= 30.00 && renang <= 30.49) return 66;
        if (renang >= 30.50 && renang <= 30.99) return 65;
        if (renang >= 31.00 && renang <= 31.49) return 64;
        if (renang >= 31.50 && renang <= 31.99) return 63;
        if (renang >= 32.00 && renang <= 32.49) return 62;
        if (renang >= 32.50 && renang <= 32.99) return 61;
        if (renang >= 33.00 && renang <= 33.49) return 60;
        if (renang >= 33.50 && renang <= 33.99) return 59;
        if (renang >= 34.00 && renang <= 34.29) return 58;
        if (renang >= 34.30 && renang <= 34.69) return 57;
        return 0;
      } else {
        if (renang >= 20.00 && renang <= 20.69) return 100; // Contoh untuk renang wanita
        if (renang >= 20.70 && renang <= 21.29) return 99;
        if (renang >= 21.30 && renang <= 21.99) return 98;
        if (renang >= 22.00 && renang <= 22.59) return 97;
        if (renang >= 22.60 && renang <= 23.29) return 96;
        if (renang >= 23.30 && renang <= 23.99) return 95;
        if (renang >= 24.00 && renang <= 24.69) return 94;
        if (renang >= 24.70 && renang <= 25.39) return 93;
        if (renang >= 25.40 && renang <= 25.99) return 92;
        if (renang >= 26.00 && renang <= 26.69) return 91;
        if (renang >= 26.70 && renang <= 27.39) return 90;
        if (renang >= 27.40 && renang <= 27.99) return 89;
        if (renang >= 28.00 && renang <= 28.69) return 88;
        if (renang >= 28.70 && renang <= 29.39) return 87;
        if (renang >= 29.40 && renang <= 30.09) return 86;
        if (renang >= 30.10 && renang <= 30.79) return 85;
        if (renang >= 30.80 && renang <= 31.39) return 84;
        if (renang >= 31.40 && renang <= 32.09) return 83;
        if (renang >= 32.10 && renang <= 32.69) return 82;
        if (renang >= 32.70 && renang <= 33.39) return 81;
        if (renang >= 33.40 && renang <= 34.09) return 80;
        if (renang >= 34.10 && renang <= 34.79) return 79;
        if (renang >= 34.80 && renang <= 35.49) return 78;
        if (renang >= 35.50 && renang <= 36.09) return 77;
        if (renang >= 36.10 && renang <= 36.79) return 76;
        if (renang >= 36.80 && renang <= 37.49) return 75;
        if (renang >= 37.50 && renang <= 38.19) return 74;
        if (renang >= 38.20 && renang <= 38.79) return 73;
        if (renang >= 38.80 && renang <= 39.49) return 72;
        if (renang >= 39.50 && renang <= 40.09) return 71;
        if (renang >= 40.10 && renang <= 40.79) return 70;
        if (renang >= 40.80 && renang <= 41.49) return 69;
        if (renang >= 41.50 && renang <= 42.19) return 68;
        if (renang >= 42.20 && renang <= 42.79) return 67;
        if (renang >= 42.80 && renang <= 43.49) return 66;
        if (renang >= 43.50 && renang <= 44.19) return 65;
        if (renang >= 44.20 && renang <= 44.89) return 64;
        if (renang >= 44.90 && renang <= 45.49) return 63;
        if (renang >= 45.50 && renang <= 46.19) return 62;
        if (renang >= 46.20 && renang <= 46.89) return 61;
        if (renang >= 46.90 && renang <= 47.59) return 60;
        if (renang >= 47.60 && renang <= 48.19) return 59;
        if (renang >= 48.20 && renang <= 48.89) return 58;
        if (renang >= 48.90 && renang <= 49.59) return 57;
        if (renang >= 49.60 && renang <= 50.19) return 56;
        if (renang >= 50.20 && renang <= 50.89) return 55;
        if (renang >= 50.90 && renang <= 51.59) return 54;
        if (renang >= 51.60 && renang <= 52.19) return 53;
        if (renang >= 52.20 && renang <= 52.89) return 52;
        if (renang >= 52.90 && renang <= 53.59) return 51;
        if (renang >= 53.60 && renang <= 54.29) return 50;
        if (renang >= 54.30 && renang <= 54.99) return 49;
        if (renang >= 55.00 && renang <= 55.59) return 48;
        if (renang >= 55.60 && renang <= 56.29) return 47;
        if (renang >= 56.30 && renang <= 56.99) return 46;
        if (renang >= 57.00 && renang <= 57.69) return 45;
        if (renang >= 57.70 && renang <= 58.29) return 44;
        if (renang >= 58.30 && renang <= 58.99) return 43;
        if (renang >= 59.00 && renang <= 59.69) return 42;
        if (renang >= 59.70 && renang <= 59.99) return 41;
        if (renang >= 60.00) return 40;
        return 0;
      }
    };



  // Fungsi handler ketika nilai input berubah
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: Number(value),
    });

    // Update nilai langsung saat mengetik
    if (name === 'lari') {
      setNilaiLari(hitungNilaiLari(Number(value), jenisKelamin));
    } else if (name === 'pullUp') {
      setNilaiPullUp(hitungNilaiPullUp(Number(value), jenisKelamin));
    } else if (name === 'sitUp') {
      setNilaiSitUp(hitungNilaiSitUp(Number(value), jenisKelamin));
    } else if (name === 'pushUp') {
      setNilaiPushUp(hitungNilaiPushUp(Number(value), jenisKelamin));
    } else if (name === 'shuttleRun') {
      setNilaiShuttleRun(hitungNilaiShuttleRun(Number(value), jenisKelamin));
    } else if (name === 'renang') {
      setNilaiRenang(hitungNilaiRenang(Number(value), jenisKelamin));
    }
  };

  // Fungsi handler ketika dropdown jenis kelamin berubah
  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJenisKelamin(e.target.value);
  };

    // Fungsi untuk menghitung rata-rata
    const hitungRataRata = (...nilai: (number | null)[]) => {
      const validNilai = nilai.filter((n) => n !== null) as number[];
      const total = validNilai.reduce((acc, curr) => acc + curr, 0);
      return validNilai.length > 0 ? total / validNilai.length : 0;
    };

     // Fungsi ketika tombol 'Hitung' ditekan
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Hitung rata-rata semua nilai
    const rataRata = hitungRataRata(
      nilaiLari,
      nilaiPullUp,
      nilaiSitUp,
      nilaiPushUp,
      nilaiShuttleRun,
      nilaiRenang
    );
    setNilaiRataRata(rataRata);
  };

  return (
    <Box
      sx={{
        paddingTop: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Grid component="main" maxWidth="xs" container spacing={2}>
        <Grid item xs={12} md={5} sx={{ backgroundColor: "#white" }}>
          <Box
            sx={{
              height: "50vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "35vw",
                marginTop: "320px",
              }}
              alt="The house from the offer."
              src="/images/calculator_fitness.jpg"
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box
            maxWidth="sm"
            sx={{ p: 3, borderRadius: 2, margin: "64px" }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              Hitung Nilai Jasmani Polri T.A. 2024
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Jenis Kelamin"
                    name="gender"
                    value={jenisKelamin}
                    onChange={handleGenderChange}
                  >
                    {genders.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}

                    
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Jarak Lari 12 menit (meter)"
                    name="lari"
                    value={formData.lari}
                    onChange={handleInputChange}
                    // placeholder="Enter a number between 1349 and 1413"
                    // value={formData.runDistance}
                    // onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    // label="Nilai"
                    name="lari"
                    value={nilaiLari}
                    // onChange={handleInputChange}
                    // variant="outlined"
                    // disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Pull UP (1 menit)"
                    name="pullUp"
                    value={formData.pullUp}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    // label="Nilai"
                    name="pullUp"
                    value={nilaiPullUp}
                    // onChange={handleInputChange}
                    // variant="outlined"
                    // disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Sit UP (1 menit)"
                    name="sitUp"
                    value={formData.sitUp}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    // label="Nilai"
                    name="sitUp"
                    value={nilaiSitUp}
                    // onChange={handleInputChange}
                    // disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Push UP (1 menit)"
                    name="pushUp"
                    value={formData.pushUp}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    // label="Nilai"
                    name="pushUp"
                    value={nilaiPushUp}
                    // onChange={handleInputChange}
                    // disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Shuttle Run"
                    name="shuttleRun"
                    value={formData.shuttleRun}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    // label="Nilai"
                    name="shuttleRun"
                    value={nilaiShuttleRun}
                    // onChange={handleInputChange}
                    // disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Renang"
                    name="renang"
                    value={formData.renang}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    // label="Nilai"
                    name="renang"
                    value={nilaiRenang}
                    // onChange={handleInputChange}
                    // disabled
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, background: "#f5cb42", boxShadow: "none" }}
              >
                Hitung
              </Button>


            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CalculatorFitness;
