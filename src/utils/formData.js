export function parseFormData(body) {
  let formData = new FormData(); // form data to send up a file
  Object.entries(body).forEach(([key, val]) => {
    formData.append(key, val);
  });

  return formData;
}
