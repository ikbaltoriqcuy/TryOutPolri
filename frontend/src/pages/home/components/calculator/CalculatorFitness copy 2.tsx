import React, { useState } from 'react';

interface FormData {
  lari: number;
  pullUp: number;
  sitUp: number;
  pushUp: number;
  shuttleRun: number;
  renang: number;
}

const HitungNilaiJasmani: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    lari: 0,
    pullUp: 0,
    sitUp: 0,
    pushUp: 0,
    shuttleRun: 0,
    renang: 0,
  });

  const [jenisKelamin, setJenisKelamin] = useState<string>('Pria');
  const [nilaiLari, setNilaiLari] = useState<number | null>(null);
  const [nilaiPullUp, setNilaiPullUp] = useState<number | null>(null);
  const [nilaiSitUp, setNilaiSitUp] = useState<number | null>(null);
  const [nilaiPushUp, setNilaiPushUp] = useState<number | null>(null);
  const [nilaiShuttleRun, setNilaiShuttleRun] = useState<number | null>(null);
  const [nilaiRenang, setNilaiRenang] = useState<number | null>(null);
  const [nilaiRataRata, setNilaiRataRata] = useState<number | null>(null);

  // Fungsi untuk menghitung nilai lari berdasarkan jenis kelamin
  const hitungNilaiLari = (jarak: number, jenisKelamin: string) => {
    if (jenisKelamin === 'Pria') {
      if (jarak >= 1349 && jarak <= 1370) return 1;
      if (jarak >= 1371 && jarak <= 1391) return 2;
      return  0;
    } else {
      if (jarak >= 1013 && jarak <= 1033) return 1; // Contoh nilai untuk Wanita
      if (jarak >= 1034 && jarak <= 1054) return 2;
      return 60;
    }
  };

  // Fungsi untuk menghitung nilai Pull Up berdasarkan jenis kelamin
  const hitungNilaiPullUp = (jumlah: number, jenisKelamin: string) => {
    if (jenisKelamin === 'Pria') {
      if (jumlah >= 100) return 101;
      if (jumlah >= 80) return 85;
      return 60;
    } else {
      if (jumlah >= 80) return 100; // Contoh nilai untuk Wanita
      if (jumlah >= 60) return 85;
      return 60;
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
      setNilaiSitUp(Number(value) >= 40 ? 90 : 70);
    } else if (name === 'pushUp') {
      setNilaiPushUp(Number(value) >= 50 ? 100 : 70);
    } else if (name === 'shuttleRun') {
      setNilaiShuttleRun(Number(value) <= 20 ? 100 : 70);
    } else if (name === 'renang') {
      setNilaiRenang(Number(value) <= 3 ? 100 : 80);
    }
  };

  // Fungsi handler ketika dropdown jenis kelamin berubah
  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
    <div>
      <h2>Hitung Nilai Jasmani Polri T.A. 2024</h2>

      <form onSubmit={handleSubmit}>
        {/* Dropdown untuk memilih jenis kelamin */}
        <div>
          <label>Jenis Kelamin:</label>
          <select value={jenisKelamin} onChange={handleGenderChange}>
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
          </select>
        </div>

        <div>
          <label>Jarak Lari 12 menit (meter):</label>
          <input
            type="number"
            name="lari"
            value={formData.lari}
            onChange={handleInputChange}
          />
          {nilaiLari !== null && <span>Nilai: {nilaiLari}</span>}
        </div>

        <div>
          <label>Pull UP (1 menit):</label>
          <input
            type="number"
            name="pullUp"
            value={formData.pullUp}
            onChange={handleInputChange}
          />
          {nilaiPullUp !== null && <span>Nilai: {nilaiPullUp}</span>}
        </div>

        <div>
          <label>Sit UP (1 menit):</label>
          <input
            type="number"
            name="sitUp"
            value={formData.sitUp}
            onChange={handleInputChange}
          />
          {nilaiSitUp !== null && <span>Nilai: {nilaiSitUp}</span>}
        </div>

        <div>
          <label>Push UP (1 menit):</label>
          <input
            type="number"
            name="pushUp"
            value={formData.pushUp}
            onChange={handleInputChange}
          />
          {nilaiPushUp !== null && <span>Nilai: {nilaiPushUp}</span>}
        </div>

        <div>
          <label>Shuttle Run:</label>
          <input
            type="number"
            name="shuttleRun"
            value={formData.shuttleRun}
            onChange={handleInputChange}
          />
          {nilaiShuttleRun !== null && <span>Nilai: {nilaiShuttleRun}</span>}
        </div>

        <div>
          <label>Renang:</label>
          <input
            type="number"
            name="renang"
            value={formData.renang}
            onChange={handleInputChange}
          />
          {nilaiRenang !== null && <span>Nilai: {nilaiRenang}</span>}
        </div>

        <button type="submit">Hitung</button>
      </form>

      {/* Tampilkan rata-rata setelah submit */}
      {nilaiRataRata !== null && (
        <div>
          <h3>Rata-rata Nilai: {nilaiRataRata}</h3>
        </div>
      )}
    </div>
  );
};

export default HitungNilaiJasmani;
