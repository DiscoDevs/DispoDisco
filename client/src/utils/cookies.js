export const createCookie = (cookieName, cookieValue, daysToExpire) => {
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  const cookieString = JSON.stringify(cookieValue);
  document.cookie = `${cookieName}=${cookieString}; expires=${date.toGMTString()}`;
};

export const accessCookie = (cookieName) => {
  const cookieArray = document.cookie;
  let cookie = "";
  if (cookieArray.length > 0) {
    cookie = cookieArray
      .split("; ")
      .find((row) => row.startsWith(cookieName))
      .split("=")[1];
  }
  return cookie;
};

export const deleteCookie = (cookieName) => {
  document.cookie = `${cookieName}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
};
