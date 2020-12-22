export const createCookie = (cookieName, cookieValue, daysToExpire) => {
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue}; expires=${date.toGMTString()}`;
};

export const accessCookie = (cookieName) => {
  const name = cookieName + "=";
  const allCookieArray = document.cookie.split(";");
  for (const i = 0; i < allCookieArray.length; i++) {
    const temp = allCookieArray[i].trim();
    if (temp.indexOf(name) == 0)
      return temp.substring(name.length, temp.length);
  }
  return "";
};

export const deleteCookie = (cookieName) => {
  document.cookie = `${cookieName}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
};
