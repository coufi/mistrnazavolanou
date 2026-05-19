import { IconName } from "@/data/siteContent";

type IconProps = {
  name: IconName;
  className?: string;
};

const baseClassName = "stroke-current";

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const classes = `${baseClassName} ${className}`;

  switch (name) {
    case "chat":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="M7 10h10M7 14h6m7-2a8 8 0 1 1-3.44-6.58L20 4l-1.42 3.44A7.97 7.97 0 0 1 20 12Z"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="m5 12 4.2 4.2L19 6.5"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <circle cx="12" cy="12" r="8" strokeWidth="1.8" />
          <path
            d="M12 8v4l2.5 2.5"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "drill":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="M4 12h8.5l2-2H18l2 2v4H9l-2 2H4v-6Zm4-3V6h4l2 2"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "electric":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="M13 2 6 13h5l-1 9 8-12h-5l0-8Z"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "furniture":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="M5 10a3 3 0 1 1 6 0v2H5v-2Zm8 0a3 3 0 1 1 6 0v2h-6v-2ZM4 12h16v6H4v-6Zm2 6v3m12-3v3"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "hammer":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="m14 5 5 5M9 10l5-5h4v4l-5 5m-4 6 7-7M5 13l6 6"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.8" />
          <path
            d="m4 7 8 6 8-6"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "paint":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="M4 14h10l4 4v2H8l-4-4v-2Zm2-3 7-7 4 4-7 7H6v-4Z"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="M6.5 4h3L11 8l-2 2a14 14 0 0 0 5 5l2-2 4 1.5v3a1.5 1.5 0 0 1-1.5 1.5C11 19 5 13 5 5.5A1.5 1.5 0 0 1 6.5 4Z"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "renovation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="m3 11 9-7 9 7M5 10v9h14v-9M10 19v-5h4v5"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="M12 3 5 6v5c0 4.2 2.6 8 7 10 4.4-2 7-5.8 7-10V6l-7-3Zm-3.5 9 2.3 2.3L15.5 9.5"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="m12 4 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8L12 4Z"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "van":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="M3 8h10v8H3V8Zm10 3h3l3 3v2h-6v-5Zm-7 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "water":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="M12 3c2.5 3.2 5 6 5 9a5 5 0 1 1-10 0c0-3 2.5-5.8 5-9Z"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "wood":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes}>
          <path
            d="M6 5h12v14H6V5Zm3 2.5v9m6-9v9M6 12h12"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
