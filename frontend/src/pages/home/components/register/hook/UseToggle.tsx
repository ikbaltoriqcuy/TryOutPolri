import { useState } from 'react';

const useToggle = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    try {
    setShowPassword(!showPassword);
  } catch (e) {}
  };

  return {
    handleClickShowPassword,
    showPassword
  }
}

export default useToggle;
