export const getLocation = () =>
  new Promise((resolve) => {
    let location = {};
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      location = { latitude, longitude };
      resolve(location);
    }

    function error() {
      resolve(location);
    }

    if (!navigator.geolocation) {
      resolve(location);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });
