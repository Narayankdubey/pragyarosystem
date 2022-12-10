export default function validateForm(data) {
  let errors = {};

  if (!data.product_name.trim()) {
    errors.product_name = "Product Name Required";
  }
  if (!data.color.trim()) {
    errors.color = "Client Name Required";
  }
  if (!data.capacity.length) {
    errors.capacity = "Client Name Required";
  }
  if (!data.purifying_technology.trim()) {
    errors.purifying_technology = "Purifiying Technology Required";
  }
  if (!data.booster_pump.trim()) {
    errors.booster_pump = "Booster Pump Required";
  }
  if (!data.voltage.length) {
    errors.voltage = "Voltage Required";
  }
  if (!data.price.length) {
    errors.price = "Price Required";
  }
  // if (!data.img.trim()) {
  //   errors.img = "Image Required";
  // }

  return errors;
}
