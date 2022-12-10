export default function validateForm(data) {
  let errors = {};

  if (!data.email.trim()) {
    errors.email = "Email Required";
  }
  if (!data.password.trim()) {
    errors.password = "Password Required";
  }

  return errors;
}
