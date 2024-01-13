import { siteConfig } from "@/config/site";

const formatDate = (date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const now = new Date(date).toLocaleDateString(siteConfig.locale, options);

  return now;
};

export default formatDate;
