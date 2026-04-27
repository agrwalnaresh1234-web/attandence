(() => {
  const host = window.location.hostname;
  const storedBase = window.localStorage.getItem("attendance_api_base");
  const isLocalHost =
    host === "127.0.0.1" ||
    host === "localhost" ||
    host === "::1";

  const guessedBase = isLocalHost
    ? window.location.origin
    : "https://advanced-attendance-system.onrender.com";

  window.ATTENDANCE_API_BASE =
    window.ATTENDANCE_API_BASE || storedBase || guessedBase;
})();
