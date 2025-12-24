/**
 * Gets the user's current geographical coordinates using the browser's Geolocation API
 * Falls back to IP-based geolocation if browser geolocation fails
 * @param {Object} fallbackCoordinates - Fallback coordinates if all methods fail
 * @returns {Promise} Promise that resolves with coordinates object {latitude, longitude}
 */
export const getUserCoordinates = (fallbackCoordinates = null) => {
  return new Promise((resolve) => {
    if ("geolocation" in navigator) {
      const timeoutId = setTimeout(() => {
        console.warn(
          "Browser geolocation request timed out, trying IP-based geolocation"
        );
        getIPBasedLocation(fallbackCoordinates).then(resolve);
      }, 5000); // 5 second timeout for browser geolocation

      navigator.geolocation.getCurrentPosition(
        (position) => {
          clearTimeout(timeoutId);
          const { latitude, longitude } = position.coords;
          console.log("User location obtained from browser:", {
            latitude,
            longitude,
          });
          resolve({ latitude, longitude });
        },
        (error) => {
          clearTimeout(timeoutId);
          console.warn("Browser geolocation error:", error.message);
          console.log("Trying IP-based geolocation as fallback");
          getIPBasedLocation(fallbackCoordinates).then(resolve);
        },
        {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 300000, // Cache location for 5 minutes
        }
      );
    } else {
      console.warn("Geolocation is not supported by this browser");
      console.log("Trying IP-based geolocation");
      getIPBasedLocation(fallbackCoordinates).then(resolve);
    }
  });
};

/**
 * Gets user location based on their IP address using a free geolocation API
 * @param {Object} fallbackCoordinates - Fallback coordinates if IP geolocation fails
 * @returns {Promise} Promise that resolves with coordinates object {latitude, longitude}
 */
const getIPBasedLocation = (fallbackCoordinates) => {
  return fetch("https://ipapi.co/json/")
    .then((res) => res.json())
    .then((data) => {
      if (data.latitude && data.longitude) {
        console.log("User location obtained from IP:", {
          latitude: data.latitude,
          longitude: data.longitude,
          city: data.city,
          region: data.region,
        });
        return {
          latitude: data.latitude,
          longitude: data.longitude,
          city: data.city,
          state: data.region,
        };
      } else {
        throw new Error("Invalid IP geolocation response");
      }
    })
    .catch((error) => {
      console.warn("IP-based geolocation failed:", error.message);
      if (fallbackCoordinates) {
        console.log("Using fallback coordinates:", fallbackCoordinates);
        return fallbackCoordinates;
      } else {
        console.error("No fallback coordinates available");
        return null;
      }
    });
};
