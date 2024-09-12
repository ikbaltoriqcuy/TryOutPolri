// const editpassowrd = () => {
//   return (
//     <div>
//       <ErrorAlert
//         isOpen={isErrorShow}
//         message={errorMessage}
//         onClose={(error) => {
//           setIsErrorShow(error);
//         }}
//       />
//       <Loading isShow={loading} />
//       <Box sx={{ width: "100vw" }}>
//         <Grid component="main" maxWidth="xs" container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               error={isSubmitError}
//               required
//               fuxllWidth
//               type={showPassword ? "text" : "password"}
//               label="Password"
//               name="password"
//               value={formValues.password}
//               onChange={(e) => {
//                 setFormValues({
//                   ...formValues,
//                   password: e.target.value,
//                 });
//               }}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                     >
//                       {showPassword ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               error={isSubmitError}
//               required
//               fullWidth
//               type={showPassword ? "text" : "password"}
//               label="Ulangi Password"
//               name="confirmPassword"
//               value={formValues.confirmPassword}
//               onChange={(e) => {
//                 setFormValues({
//                   ...formValues,
//                   confirmPassword: e.target.value,
//                 });
//               }}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                     >
//                       {showPassword ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// };
