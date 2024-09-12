import { useState } from 'react';
import { register, UserData } from "../../../../../api/user.api";
import { setCache, CACHE_KEY } from "../../../../../cache/CacheUtils";
import { useNavigate } from 'react-router-dom';

const useRegisterForm = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    province: "",
    city: "",
    district: "",
    address: "",
    username: "",
    email: "",
    whatsapp: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
    selectedPackage: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitError, setSubmitError] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isErrorShow, setIsErrorShow] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("handleFormSubmit ");
    if (formValues.password !== formValues.confirmPassword) {
      setErrorMessage("Passwords do not match");
      setSubmitError(true);
      setIsErrorShow(true);
      return;
    }


    const userData: UserData = {
      name: formValues.fullName,
      place_birth: "",
      date_birth: "",
      address: formValues.address,
      city: formValues.city,
      province: formValues.province,
      subdistrict: formValues.district,
      password: formValues.password,
      email: formValues.email,
      packet_id: -1,
      phone: formValues.whatsapp,
      username: formValues.username
    };

    let errors: string[] = [];
    if (!formValues.fullName) errors.push("Nama lengkap tidak boleh kosong.");
    if (!formValues.address) errors.push("Alamat tidak boleh kosong.");
    if (!formValues.city || !formValues.city.includes("|")) errors.push("Kota/Kabupaten tidak valid.");
    if (!formValues.province || !formValues.province.includes("|")) errors.push("Provinsi tidak valid.");
    if (!formValues.district || !formValues.district.includes("|")) errors.push("Kecamatan tidak valid.");
    if (!formValues.password) errors.push("Password tidak boleh kosong.");
    if (!formValues.email) errors.push("Email tidak boleh kosong.");
    if (!formValues.whatsapp) errors.push("No Whatsapp Aktif tidak boleh kosong.");
    if (!formValues.username) errors.push("Username tidak boleh kosong.");
    
    if (errors.length > 1) {
      setErrorMessage("Lengkapi Data");
      setIsErrorShow(true);
      return;
    }

    if (errors.length == 1) {
      setErrorMessage(errors[0]);
      setIsErrorShow(true);
      return;
    }

  
    setLoadingSubmit(true);
    try {
      await register(userData);
      setCache(CACHE_KEY, userData, 24 * 60 * 60 * 1000);
      navigate("/dashboard");
    } catch (error: any) {
      setErrorMessage(error.message);
      setIsErrorShow(true);
    } finally {
      setLoadingSubmit(false);
    }
  };

  return {
    formValues,
    setFormValues,
    errorMessage,
    isSubmitError,
    loadingSubmit,
    isErrorShow,
    setErrorMessage,
    setSubmitError,
    handleFormSubmit,
    setIsErrorShow,
  };
};

export default useRegisterForm;
