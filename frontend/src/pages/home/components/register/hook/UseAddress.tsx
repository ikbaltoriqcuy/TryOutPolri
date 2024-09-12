import { useEffect, useState } from 'react';
import { getProvince, getCity, getSubdistrict, Province, City, SubDistrict } from "../../../../../api/address.api";

const useAddressForm = () => {
  const [provinceId, setProvinceId] = useState("");
  const [cityId, setCityId] = useState("");
  const [subdistrictId, setSubDistrictId] = useState("");

  const [province, setProvince] = useState<Province[]>([]);
  const [city, setCity] = useState<City[]>([]);
  const [subdistrict, setSubdistrict] = useState<SubDistrict[]>([]);

  const [loadingAddress, setLoadingAddress] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProvince = async () => {
      setLoadingAddress(true);
      try {
        const result = await getProvince();
        setProvince(result.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoadingAddress(false);
      }
    };
    fetchProvince();
  }, []);

  useEffect(() => {
    if (provinceId) {
      const fetchCity = async () => {
        setLoadingAddress(true);
        try {
          const result = await getCity(provinceId);
          setCity(result.data);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoadingAddress(false);
        }
      };
      fetchCity();
    }
  }, [provinceId]);

  useEffect(() => {
    if (cityId) {
      const fetchSubdistrict = async () => {
        setLoadingAddress(true);
        try {
          const result = await getSubdistrict(provinceId, cityId);
          setSubdistrict(result.data);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoadingAddress(false);
        }
      };
      fetchSubdistrict();
    }
  }, [cityId]);
  

  const handleChangeProvince = (eventValue: String) => {
    try {
      const data = eventValue.split("|");
      setProvinceId(data[0]);
      setCity([]);
      setSubdistrict([]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeCity = (eventValue: String) => {
    try {
      const data = eventValue.split("|");
      const getCityId = data[0].split(".")[1];
      setCityId(getCityId);
      setSubdistrict([]);
    } catch (e) {}
  };

  const handleChangeSubDistrict = (eventValue: String) => {
    try {
      const data = eventValue.split("|");
      setSubDistrictId(data[0]);
    } catch (e) {}
  };


  return {
    province,
    city,
    subdistrict,
    setProvince,
    setCity,
    setSubdistrict,

    provinceId,
    cityId,
    subdistrictId,
    setProvinceId,
    setCityId,
    setSubDistrictId,

    loadingAddress,
    error,

    handleChangeProvince,
    handleChangeCity,
    handleChangeSubDistrict
  };
};

export default useAddressForm;
