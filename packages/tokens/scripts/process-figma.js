const FigmaTokenParser = require('./figma-parser');
const fs = require('fs');
const path = require('path');

/**
 * Process Figma Design Tokens
 * This script processes the Figma export and generates our design system tokens
 */

// Your Figma JSON data
const figmaData = {
  "Primitive colour/Mode 1": {
    "base primitives": {
      "base-white": {
        "$value": "#ffffff",
        "$type": "color"
      },
      "base-black": {
        "$value": "#000000",
        "$type": "color"
      }
    },
    "brand primitives": {
      "grey": {
        "grey-95": {
          "$value": "#f2f2f2",
          "$type": "color"
        },
        "grey-90": {
          "$value": "#e0e0e0",
          "$type": "color"
        },
        "grey-80": {
          "$value": "#cccccc",
          "$type": "color"
        },
        "grey-70": {
          "$value": "#b3b3b3",
          "$type": "color"
        },
        "grey-60": {
          "$value": "#999999",
          "$type": "color"
        },
        "grey-50": {
          "$value": "#808080",
          "$type": "color"
        },
        "grey-40": {
          "$value": "#666666",
          "$type": "color"
        },
        "grey-30": {
          "$value": "#4d4d4d",
          "$type": "color"
        },
        "grey-20": {
          "$value": "#333333",
          "$type": "color"
        },
        "grey-10": {
          "$value": "#1a1a1a",
          "$type": "color"
        }
      },
      "sand": {
        "sand-95 (brand)": {
          "$value": "#f5f3ef",
          "$type": "color"
        },
        "sand-90": {
          "$value": "#ece7df",
          "$type": "color"
        },
        "sand-80": {
          "$value": "#d8cebf",
          "$type": "color"
        },
        "sand-70": {
          "$value": "#c2b4a3",
          "$type": "color"
        },
        "sand-60": {
          "$value": "#aa9c88",
          "$type": "color"
        },
        "sand-50": {
          "$value": "#93806c",
          "$type": "color"
        },
        "sand-40": {
          "$value": "#7a6752",
          "$type": "color"
        },
        "sand-30": {
          "$value": "#5c4d3e",
          "$type": "color"
        },
        "sand-20": {
          "$value": "#3f3627",
          "$type": "color"
        },
        "sand-10": {
          "$value": "#201b13",
          "$type": "color"
        }
      },
      "orange": {
        "orange-95": {
          "$value": "#ffefe5",
          "$type": "color"
        },
        "orange-90": {
          "$value": "#ffdfcc",
          "$type": "color"
        },
        "orange-80": {
          "$value": "#ffbe99",
          "$type": "color"
        },
        "orange-70 (brand)": {
          "$value": "#ff9d66",
          "$type": "color"
        },
        "orange-60": {
          "$value": "#ff7e34",
          "$type": "color"
        },
        "orange-50": {
          "$value": "#ff5c00",
          "$type": "color"
        },
        "orange-40": {
          "$value": "#cc4b00",
          "$type": "color"
        },
        "orange-30": {
          "$value": "#993800",
          "$type": "color"
        },
        "orange-20": {
          "$value": "#662500",
          "$type": "color"
        },
        "orange-10": {
          "$value": "#331300",
          "$type": "color"
        }
      },
      "red": {
        "red-95": {
          "$value": "#faecea",
          "$type": "color"
        },
        "red-90": {
          "$value": "#f6dad5",
          "$type": "color"
        },
        "red-80": {
          "$value": "#ecb3ac",
          "$type": "color"
        },
        "red-70": {
          "$value": "#e38c82",
          "$type": "color"
        },
        "red-60": {
          "$value": "#d96659",
          "$type": "color"
        },
        "red-50 (brand)": {
          "$value": "#d03e2f",
          "$type": "color"
        },
        "red-40": {
          "$value": "#a63326",
          "$type": "color"
        },
        "red-30": {
          "$value": "#7c261d",
          "$type": "color"
        },
        "red-20": {
          "$value": "#531913",
          "$type": "color"
        },
        "red-10": {
          "$value": "#2a0d0a",
          "$type": "color"
        }
      }
    },
    "UI primitives": {
      "success": {
        "success-95": {
          "$value": "#eafbec",
          "$type": "color"
        },
        "success-90": {
          "$value": "#d5f7da",
          "$type": "color"
        },
        "success-80": {
          "$value": "#abeaaa",
          "$type": "color"
        },
        "success-70": {
          "$value": "#82dd8d",
          "$type": "color"
        },
        "success-60": {
          "$value": "#58cf70",
          "$type": "color"
        },
        "success-50": {
          "$value": "#2fc253",
          "$type": "color"
        },
        "success-40": {
          "$value": "#259b42",
          "$type": "color"
        },
        "success-30": {
          "$value": "#1c7532",
          "$type": "color"
        },
        "success-20": {
          "$value": "#134e21",
          "$type": "color"
        },
        "success-10": {
          "$value": "#092711",
          "$type": "color"
        }
      },
      "warning": {
        "warning-95": {
          "$value": "#fefadc",
          "$type": "color"
        },
        "warning-90": {
          "$value": "#fef5b8",
          "$type": "color"
        },
        "warning-80": {
          "$value": "#fdec71",
          "$type": "color"
        },
        "warning-70": {
          "$value": "#fbe23e",
          "$type": "color"
        },
        "warning-60": {
          "$value": "#fad70a",
          "$type": "color"
        },
        "warning-50": {
          "$value": "#f0c100",
          "$type": "color"
        },
        "warning-40": {
          "$value": "#c09a00",
          "$type": "color"
        },
        "warning-30": {
          "$value": "#907400",
          "$type": "color"
        },
        "warning-20": {
          "$value": "#604d00",
          "$type": "color"
        },
        "warning-10": {
          "$value": "#302700",
          "$type": "color"
        }
      },
      "error": {
        "error-95": {
          "$value": "#feebeb",
          "$type": "color"
        },
        "error-90": {
          "$value": "#fcd8d7",
          "$type": "color"
        },
        "error-80": {
          "$value": "#f8b1b0",
          "$type": "color"
        },
        "error-70": {
          "$value": "#f48a88",
          "$type": "color"
        },
        "error-60": {
          "$value": "#f06360",
          "$type": "color"
        },
        "error-50": {
          "$value": "#e82c28",
          "$type": "color"
        },
        "error-40": {
          "$value": "#b92320",
          "$type": "color"
        },
        "error-30": {
          "$value": "#8b1a18",
          "$type": "color"
        },
        "error-20": {
          "$value": "#5c1110",
          "$type": "color"
        },
        "error-10": {
          "$value": "#2e0908",
          "$type": "color"
        }
      },
      "information": {
        "info-95": {
          "$value": "#ecf3fd",
          "$type": "color"
        },
        "info-90": {
          "$value": "#d8e6fb",
          "$type": "color"
        },
        "info-80": {
          "$value": "#b1cdfa",
          "$type": "color"
        },
        "info-70": {
          "$value": "#8ab3f8",
          "$type": "color"
        },
        "info-60": {
          "$value": "#6299f5",
          "$type": "color"
        },
        "info-50": {
          "$value": "#397ef1",
          "$type": "color"
        },
        "info-40": {
          "$value": "#2d65c1",
          "$type": "color"
        },
        "info-30": {
          "$value": "#224c91",
          "$type": "color"
        },
        "info-20": {
          "$value": "#163260",
          "$type": "color"
        },
        "info-10": {
          "$value": "#0b1930",
          "$type": "color"
        }
      }
    }
  },
  "Semantic colour/Light mode": {
    "content": {
      "primary": {
        "$value": "{brand primitives.grey.grey-10}",
        "$type": "color"
      },
      "secondary": {
        "$value": "{brand primitives.grey.grey-30}",
        "$type": "color"
      },
      "tertiary": {
        "$value": "{brand primitives.grey.grey-40}",
        "$type": "color"
      },
      "disabled": {
        "$value": "{brand primitives.grey.grey-70}",
        "$type": "color"
      },
      "placeholder": {
        "$value": "{brand primitives.grey.grey-30}",
        "$type": "color"
      },
      "inverse": {
        "$value": "{base primitives.base-white}",
        "$type": "color"
      },
      "success": {
        "$value": "{UI primitives.success.success-20}",
        "$type": "color"
      },
      "warning": {
        "$value": "{UI primitives.warning.warning-20}",
        "$type": "color"
      },
      "error": {
        "$value": "{UI primitives.error.error-20}",
        "$type": "color"
      },
      "info": {
        "$value": "{UI primitives.information.info-20}",
        "$type": "color"
      }
    },
    "background": {
      "primary": {
        "$value": "{brand primitives.sand.sand-95 (brand)}",
        "$type": "color"
      },
      "secondary": {
        "$value": "{base primitives.base-white}",
        "$type": "color"
      },
      "contrast": {
        "$value": "{brand primitives.grey.grey-10}",
        "$type": "color"
      },
      "recessive": {
        "$value": "{brand primitives.sand.sand-90}",
        "$type": "color"
      }
    },
    "surface": {
      "primary": {
        "$value": "{base primitives.base-white}",
        "$type": "color"
      },
      "recessive": {
        "$value": "{brand primitives.sand.sand-90}",
        "$type": "color"
      },
      "secondary": {
        "$value": "{brand primitives.sand.sand-95 (brand)}",
        "$type": "color"
      },
      "inverse": {
        "$value": "{brand primitives.grey.grey-10}",
        "$type": "color"
      },
      "success": {
        "$value": "{UI primitives.success.success-95}",
        "$type": "color"
      },
      "warning": {
        "$value": "{UI primitives.warning.warning-95}",
        "$type": "color"
      },
      "error": {
        "$value": "{UI primitives.error.error-95}",
        "$type": "color"
      },
      "info": {
        "$value": "{UI primitives.information.info-95}",
        "$type": "color"
      }
    },
    "fill": {
      "primary": {
        "$value": "{brand primitives.grey.grey-10}",
        "$type": "color"
      },
      "primary-hover": {
        "$value": "{brand primitives.grey.grey-20}",
        "$type": "color"
      },
      "primary-active": {
        "$value": "{brand primitives.grey.grey-30}",
        "$type": "color"
      },
      "secondary": {
        "$value": "{brand primitives.sand.sand-90}",
        "$type": "color"
      },
      "secondary-hover": {
        "$value": "{brand primitives.sand.sand-80}",
        "$type": "color"
      },
      "secondary-active": {
        "$value": "{brand primitives.sand.sand-90}",
        "$type": "color"
      },
      "tertiary": {
        "$value": "{base primitives.base-white}",
        "$type": "color"
      },
      "tertiary-hover": {
        "$value": "{brand primitives.sand.sand-95 (brand)}",
        "$type": "color"
      },
      "tertiary-active": {
        "$value": "{brand primitives.sand.sand-95 (brand)}",
        "$type": "color"
      },
      "success": {
        "$value": "{UI primitives.success.success-90}",
        "$type": "color"
      },
      "warning": {
        "$value": "{UI primitives.warning.warning-90}",
        "$type": "color"
      },
      "error": {
        "$value": "{UI primitives.error.error-90}",
        "$type": "color"
      },
      "info": {
        "$value": "{UI primitives.information.info-90}",
        "$type": "color"
      },
      "success-hover": {
        "$value": "{UI primitives.success.success-80}",
        "$type": "color"
      },
      "success-active": {
        "$value": "{UI primitives.success.success-70}",
        "$type": "color"
      },
      "warning-hover": {
        "$value": "{UI primitives.warning.warning-80}",
        "$type": "color"
      },
      "warning-active": {
        "$value": "{UI primitives.warning.warning-70}",
        "$type": "color"
      },
      "error-hover": {
        "$value": "{UI primitives.error.error-80}",
        "$type": "color"
      },
      "error-active": {
        "$value": "{UI primitives.error.error-70}",
        "$type": "color"
      },
      "info-hover": {
        "$value": "{UI primitives.information.info-80}",
        "$type": "color"
      },
      "info-active": {
        "$value": "{UI primitives.information.info-70}",
        "$type": "color"
      },
      "secondary-pressed": {
        "$value": "{brand primitives.sand.sand-70}",
        "$type": "color"
      },
      "primary-pressed": {
        "$value": "{brand primitives.grey.grey-40}",
        "$type": "color"
      },
      "tertiary-pressed": {
        "$value": "{brand primitives.sand.sand-90}",
        "$type": "color"
      },
      "success-pressed": {
        "$value": "{UI primitives.success.success-60}",
        "$type": "color"
      },
      "warning-pressed": {
        "$value": "{UI primitives.warning.warning-60}",
        "$type": "color"
      },
      "error-pressed": {
        "$value": "{UI primitives.error.error-60}",
        "$type": "color"
      },
      "info-pressed": {
        "$value": "{UI primitives.information.info-60}",
        "$type": "color"
      },
      "Inactive": {
        "$value": "{brand primitives.grey.grey-95}",
        "$type": "color"
      },
      "rating-active": {
        "$value": "{brand primitives.orange.orange-60}",
        "$type": "color"
      },
      "rating-inactive": {
        "$value": "{brand primitives.orange.orange-95}",
        "$type": "color"
      }
    },
    "border": {
      "default": {
        "$value": "{brand primitives.sand.sand-90}",
        "$type": "color"
      },
      "active": {
        "$value": "{brand primitives.grey.grey-10}",
        "$type": "color"
      },
      "filled": {
        "$value": "{brand primitives.grey.grey-10}",
        "$type": "color"
      },
      "success": {
        "$value": "{UI primitives.success.success-80}",
        "$type": "color"
      },
      "warning": {
        "$value": "{UI primitives.warning.warning-80}",
        "$type": "color"
      },
      "error": {
        "$value": "{UI primitives.error.error-80}",
        "$type": "color"
      },
      "info": {
        "$value": "{UI primitives.information.info-80}",
        "$type": "color"
      },
      "strong": {
        "$value": "{brand primitives.sand.sand-80}",
        "$type": "color"
      },
      "stronger": {
        "$value": "{brand primitives.sand.sand-60}",
        "$type": "color"
      },
      "inactive": {
        "$value": "{brand primitives.grey.grey-95}",
        "$type": "color"
      }
    }
  },
  "Semantic colour/Dark mode": {
    "content": {
      "primary": {
        "$value": "{base primitives.base-white}",
        "$type": "color"
      },
      "secondary": {
        "$value": "{brand primitives.grey.grey-90}",
        "$type": "color"
      },
      "tertiary": {
        "$value": "{brand primitives.grey.grey-70}",
        "$type": "color"
      },
      "disabled": {
        "$value": "{brand primitives.grey.grey-20}",
        "$type": "color"
      },
      "placeholder": {
        "$value": "{brand primitives.grey.grey-80}",
        "$type": "color"
      },
      "inverse": {
        "$value": "{brand primitives.grey.grey-10}",
        "$type": "color"
      },
      "success": {
        "$value": "{UI primitives.success.success-95}",
        "$type": "color"
      },
      "warning": {
        "$value": "{UI primitives.warning.warning-95}",
        "$type": "color"
      },
      "error": {
        "$value": "{UI primitives.error.error-95}",
        "$type": "color"
      },
      "info": {
        "$value": "{UI primitives.information.info-95}",
        "$type": "color"
      }
    },
    "background": {
      "primary": {
        "$value": "{base primitives.base-black}",
        "$type": "color"
      },
      "secondary": {
        "$value": "{brand primitives.grey.grey-20}",
        "$type": "color"
      },
      "contrast": {
        "$value": "{brand primitives.grey.grey-50}",
        "$type": "color"
      },
      "recessive": {
        "$value": "{brand primitives.grey.grey-10}",
        "$type": "color"
      }
    },
    "surface": {
      "primary": {
        "$value": "{brand primitives.grey.grey-10}",
        "$type": "color"
      },
      "recessive": {
        "$value": "{brand primitives.grey.grey-20}",
        "$type": "color"
      },
      "secondary": {
        "$value": "{brand primitives.grey.grey-30}",
        "$type": "color"
      },
      "inverse": {
        "$value": "{brand primitives.grey.grey-80}",
        "$type": "color"
      },
      "success": {
        "$value": "{UI primitives.success.success-20}",
        "$type": "color"
      },
      "warning": {
        "$value": "{UI primitives.warning.warning-20}",
        "$type": "color"
      },
      "error": {
        "$value": "{UI primitives.error.error-20}",
        "$type": "color"
      },
      "info": {
        "$value": "{UI primitives.information.info-20}",
        "$type": "color"
      }
    },
    "fill": {
      "primary": {
        "$value": "{base primitives.base-white}",
        "$type": "color"
      },
      "primary-hover": {
        "$value": "{brand primitives.grey.grey-80}",
        "$type": "color"
      },
      "primary-active": {
        "$value": "{brand primitives.grey.grey-70}",
        "$type": "color"
      },
      "secondary": {
        "$value": "{brand primitives.grey.grey-20}",
        "$type": "color"
      },
      "secondary-hover": {
        "$value": "{brand primitives.grey.grey-40}",
        "$type": "color"
      },
      "secondary-active": {
        "$value": "{brand primitives.grey.grey-20}",
        "$type": "color"
      },
      "tertiary": {
        "$value": "{brand primitives.grey.grey-20}",
        "$type": "color"
      },
      "tertiary-hover": {
        "$value": "{brand primitives.grey.grey-20}",
        "$type": "color"
      },
      "tertiary-active": {
        "$value": "{brand primitives.grey.grey-10}",
        "$type": "color"
      },
      "success": {
        "$value": "{UI primitives.success.success-30}",
        "$type": "color"
      },
      "warning": {
        "$value": "{UI primitives.warning.warning-30}",
        "$type": "color"
      },
      "error": {
        "$value": "{UI primitives.error.error-30}",
        "$type": "color"
      },
      "info": {
        "$value": "{UI primitives.information.info-30}",
        "$type": "color"
      },
      "success-hover": {
        "$value": "{UI primitives.success.success-40}",
        "$type": "color"
      },
      "success-active": {
        "$value": "{UI primitives.success.success-50}",
        "$type": "color"
      },
      "warning-hover": {
        "$value": "{UI primitives.warning.warning-40}",
        "$type": "color"
      },
      "warning-active": {
        "$value": "{UI primitives.warning.warning-50}",
        "$type": "color"
      },
      "error-hover": {
        "$value": "{UI primitives.error.error-40}",
        "$type": "color"
      },
      "error-active": {
        "$value": "{UI primitives.error.error-50}",
        "$type": "color"
      },
      "info-hover": {
        "$value": "{UI primitives.information.info-40}",
        "$type": "color"
      },
      "info-active": {
        "$value": "{UI primitives.information.info-50}",
        "$type": "color"
      },
      "secondary-pressed": {
        "$value": "{UI primitives.grey.grey-60}",
        "$type": "color"
      },
      "primary-pressed": {
        "$value": "{UI primitives.grey.grey-60}",
        "$type": "color"
      },
      "tertiary-pressed": {
        "$value": "{UI primitives.grey.grey-20}",
        "$type": "color"
      },
      "success-pressed": {
        "$value": "{UI primitives.success.success-60}",
        "$type": "color"
      },
      "warning-pressed": {
        "$value": "{UI primitives.warning.warning-60}",
        "$type": "color"
      },
      "error-pressed": {
        "$value": "{UI primitives.error.error-60}",
        "$type": "color"
      },
      "info-pressed": {
        "$value": "{UI primitives.information.info-60}",
        "$type": "color"
      },
      "Inactive": {
        "$value": "{brand primitives.grey.grey-20}",
        "$type": "color"
      },
      "rating-active": {
        "$value": "{brand primitives.orange.orange-70 (brand)}",
        "$type": "color"
      },
      "rating-inactive": {
        "$value": "{brand primitives.orange.orange-20}",
        "$type": "color"
      }
    },
    "border": {
      "default": {
        "$value": "{brand primitives.grey.grey-30}",
        "$type": "color"
      },
      "active": {
        "$value": "{base primitives.base-white}",
        "$type": "color"
      },
      "filled": {
        "$value": "{base primitives.base-white}",
        "$type": "color"
      },
      "success": {
        "$value": "{UI primitives.success.success-20}",
        "$type": "color"
      },
      "warning": {
        "$value": "{UI primitives.warning.warning-20}",
        "$type": "color"
      },
      "error": {
        "$value": "{UI primitives.error.error-20}",
        "$type": "color"
      },
      "info": {
        "$value": "{UI primitives.information.info-20}",
        "$type": "color"
      },
      "strong": {
        "$value": "{brand primitives.grey.grey-50}",
        "$type": "color"
      },
      "stronger": {
        "$value": "{brand primitives.grey.grey-50}",
        "$type": "color"
      },
      "inactive": {
        "$value": "{base primitives.base-white}",
        "$type": "color"
      }
    }
  },
  "Typography/Desktop": {
    "font": {
      "family": {
        "visit-sans": {
          "$value": "Figtree",
          "$type": "text"
        }
      },
      "weight": {
        "Semibold": {
          "$value": "37.5rem",
          "$type": "dimension"
        },
        "Medium": {
          "$value": "31.25rem",
          "$type": "dimension"
        },
        "Regular": {
          "$value": "25rem",
          "$type": "dimension"
        },
        "Bold": {
          "$value": "43.75rem",
          "$type": "color"
        }
      },
      "size": {
        "2xs": {
          "$value": "1rem",
          "$type": "dimension"
        },
        "xs": {
          "$value": "1.125rem",
          "$type": "color"
        },
        "s": {
          "$value": "1.25rem",
          "$type": "dimension"
        },
        "m": {
          "$value": "1.375rem",
          "$type": "dimension"
        },
        "l": {
          "$value": "1.5rem",
          "$type": "dimension"
        },
        "xl": {
          "$value": "2.25rem",
          "$type": "dimension"
        },
        "2xl": {
          "$value": "3rem",
          "$type": "dimension"
        },
        "3xl": {
          "$value": "4rem",
          "$type": "dimension"
        },
        "4xl": {
          "$value": "6rem",
          "$type": "dimension"
        },
        "3xs": {
          "$value": "0.875rem",
          "$type": "dimension"
        },
        "4xs": {
          "$value": "0.75rem",
          "$type": "dimension"
        },
        "5xs": {
          "$value": "0.625rem",
          "$type": "dimension"
        }
      }
    }
  },
  "Typography/Tablet": {
    "font": {
      "family": {
        "visit-sans": {
          "$value": "Figtree",
          "$type": "text"
        }
      },
      "weight": {
        "Semibold": {
          "$value": "37.5rem",
          "$type": "dimension"
        },
        "Medium": {
          "$value": "31.25rem",
          "$type": "dimension"
        },
        "Regular": {
          "$value": "25rem",
          "$type": "dimension"
        },
        "Bold": {
          "$value": "43.75rem",
          "$type": "dimension"
        }
      },
      "size": {
        "2xs": {
          "$value": "0.875rem",
          "$type": "dimension"
        },
        "xs": {
          "$value": "1rem",
          "$type": "dimension"
        },
        "s": {
          "$value": "1rem",
          "$type": "dimension"
        },
        "m": {
          "$value": "1.25rem",
          "$type": "dimension"
        },
        "l": {
          "$value": "1.125rem",
          "$type": "dimension"
        },
        "xl": {
          "$value": "1.5rem",
          "$type": "color"
        },
        "2xl": {
          "$value": "1.5rem",
          "$type": "color"
        },
        "3xl": {
          "$value": "3rem",
          "$type": "dimension"
        },
        "4xl": {
          "$value": "3rem",
          "$type": "dimension"
        },
        "3xs": {
          "$value": "0.75rem",
          "$type": "color"
        },
        "4xs": {
          "$value": "0.688rem",
          "$type": "color"
        },
        "5xs": {
          "$value": "0.688rem",
          "$type": "color"
        }
      }
    }
  },
  "Typography/Mobile": {
    "font": {
      "family": {
        "visit-sans": {
          "$value": "Figtree",
          "$type": "text"
        }
      },
      "weight": {
        "Semibold": {
          "$value": "37.5rem",
          "$type": "dimension"
        },
        "Medium": {
          "$value": "31.25rem",
          "$type": "dimension"
        },
        "Regular": {
          "$value": "25rem",
          "$type": "color"
        },
        "Bold": {
          "$value": "43.75rem",
          "$type": "dimension"
        }
      },
      "size": {
        "2xs": {
          "$value": "0.75rem",
          "$type": "dimension"
        },
        "xs": {
          "$value": "0.875rem",
          "$type": "dimension"
        },
        "s": {
          "$value": "0.875rem",
          "$type": "dimension"
        },
        "m": {
          "$value": "1.125rem",
          "$type": "color"
        },
        "l": {
          "$value": "1rem",
          "$type": "color"
        },
        "xl": {
          "$value": "1.375rem",
          "$type": "dimension"
        },
        "2xl": {
          "$value": "1.125rem",
          "$type": "color"
        },
        "3xl": {
          "$value": "2.25rem",
          "$type": "color"
        },
        "4xl": {
          "$value": "1.75rem",
          "$type": "color"
        },
        "3xs": {
          "$value": "0.688rem",
          "$type": "color"
        },
        "4xs": {
          "$value": "0.625rem",
          "$type": "color"
        },
        "5xs": {
          "$value": "0.625rem",
          "$type": "color"
        }
      }
    }
  },
  "Spacing/Desktop": {
    "xxs": {
      "$value": "0.25rem",
      "$type": "dimension"
    },
    "xs": {
      "$value": "0.375rem",
      "$type": "dimension"
    },
    "s": {
      "$value": "0.5rem",
      "$type": "dimension"
    },
    "sm": {
      "$value": "0.75rem",
      "$type": "dimension"
    },
    "m": {
      "$value": "1rem",
      "$type": "color"
    },
    "ml": {
      "$value": "1.5rem",
      "$type": "color"
    },
    "l": {
      "$value": "2rem",
      "$type": "dimension"
    },
    "xl": {
      "$value": "3rem",
      "$type": "dimension"
    },
    "2xl": {
      "$value": "4rem",
      "$type": "dimension"
    },
    "3xl": {
      "$value": "6rem",
      "$type": "dimension"
    },
    "4xl": {
      "$value": "7.5rem",
      "$type": "color"
    },
    "5xl": {
      "$value": "15rem",
      "$type": "color"
    },
    "xxxs": {
      "$value": "0.125rem",
      "$type": "color"
    }
  },
  "Spacing/Tablet": {
    "xxs": {
      "$value": "0.25rem",
      "$type": "dimension"
    },
    "xs": {
      "$value": "0.375rem",
      "$type": "color"
    },
    "s": {
      "$value": "0.5rem",
      "$type": "color"
    },
    "sm": {
      "$value": "0.75rem",
      "$type": "color"
    },
    "m": {
      "$value": "1rem",
      "$type": "color"
    },
    "ml": {
      "$value": "1rem",
      "$type": "color"
    },
    "l": {
      "$value": "1.5rem",
      "$type": "color"
    },
    "xl": {
      "$value": "2rem",
      "$type": "color"
    },
    "2xl": {
      "$value": "3rem",
      "$type": "color"
    },
    "3xl": {
      "$value": "4rem",
      "$type": "color"
    },
    "4xl": {
      "$value": "6rem",
      "$type": "color"
    },
    "5xl": {
      "$value": "7.5rem",
      "$type": "color"
    },
    "xxxs": {
      "$value": "0.125rem",
      "$type": "color"
    }
  },
  "Spacing/Mobile": {
    "xxs": {
      "$value": "0.25rem",
      "$type": "color"
    },
    "xs": {
      "$value": "0.375rem",
      "$type": "color"
    },
    "s": {
      "$value": "0.5rem",
      "$type": "color"
    },
    "sm": {
      "$value": "0.75rem",
      "$type": "color"
    },
    "m": {
      "$value": "1rem",
      "$type": "color"
    },
    "ml": {
      "$value": "0.75rem",
      "$type": "color"
    },
    "l": {
      "$value": "1rem",
      "$type": "color"
    },
    "xl": {
      "$value": "1.5rem",
      "$type": "color"
    },
    "2xl": {
      "$value": "2rem",
      "$type": "color"
    },
    "3xl": {
      "$value": "3rem",
      "$type": "color"
    },
    "4xl": {
      "$value": "4rem",
      "$type": "color"
    },
    "5xl": {
      "$value": "6rem",
      "$type": "color"
    },
    "xxxs": {
      "$value": "0.125rem",
      "$type": "color"
    }
  },
  "Responsive/Desktop": {
    "layout-grid": {
      "columns": {
        "$value": "0.75rem",
        "$type": "dimension"
      },
      "gutter": {
        "$value": "2rem",
        "$type": "dimension"
      },
      "margin": {
        "$value": "2rem",
        "$type": "dimension"
      }
    },
    "breakpoint": {
      "max-width": {
        "$value": "90rem",
        "$type": "dimension"
      },
      "min-width": {
        "$value": "61.875rem",
        "$type": "color"
      }
    }
  },
  "Responsive/Tablet": {
    "layout-grid": {
      "columns": {
        "$value": "0.375rem",
        "$type": "dimension"
        },
      "gutter": {
        "$value": "1rem",
        "$type": "dimension"
      },
      "margin": {
        "$value": "1rem",
        "$type": "color"
      }
    },
    "breakpoint": {
      "max-width": {
        "$value": "61.812rem",
        "$type": "dimension"
      },
      "min-width": {
        "$value": "48rem",
        "$type": "color"
      }
    }
  },
  "Responsive/Mobile": {
    "layout-grid": {
      "columns": {
        "$value": "0.25rem",
        "$type": "dimension"
      },
      "gutter": {
        "$value": "0.5rem",
        "$type": "color"
      },
      "margin": {
        "$value": "0.75rem",
        "$type": "color"
      }
    },
    "breakpoint": {
      "max-width": {
        "$value": "47.938rem",
        "$type": "dimension"
      },
      "min-width": {
        "$value": "17.5rem",
        "$type": "color"
      }
    }
  },
  "Border/Desktop": {
    "radius": {
      "xs": {
        "$value": "0.5rem",
        "$type": "dimension"
      },
      "m": {
        "$value": "1.25rem",
        "$type": "dimension"
      },
      "l": {
        "$value": "3rem",
        "$type": "dimension"
      },
      "s": {
        "$value": "0.75rem",
        "$type": "dimension"
      },
      "xxs": {
        "$value": "0.125rem",
        "$type": "dimension"
      }
    },
    "width": {
      "xs": {
        "$value": "0rem",
        "$type": "dimension"
      },
      "s": {
        "$value": "0.062rem",
        "$type": "dimension"
      },
      "m": {
        "$value": "0.125rem",
        "$type": "dimension"
      }
    }
  },
  "Border/Tablet": {
    "radius": {
      "xs": {
        "$value": "0.5rem",
        "$type": "dimension"
      },
      "m": {
        "$value": "1rem",
        "$type": "dimension"
      },
      "l": {
        "$value": "3rem",
        "$type": "dimension"
      },
      "s": {
        "$value": "0.75rem",
        "$type": "dimension"
      },
      "xxs": {
        "$value": "0.5rem",
        "$type": "dimension"
      }
    },
    "width": {
      "xs": {
        "$value": "0rem",
        "$type": "dimension"
      },
      "s": {
        "$value": "0.062rem",
        "$type": "dimension"
      },
      "m": {
        "$value": "0.125rem",
        "$type": "dimension"
      }
    }
  },
  "Border/Mobile": {
    "radius": {
      "xs": {
        "$value": "0.25rem",
        "$type": "dimension"
      },
      "m": {
        "$value": "0.75rem",
        "$type": "dimension"
      },
      "l": {
        "$value": "3rem",
        "$type": "dimension"
      },
      "s": {
        "$value": "0.5rem",
        "$type": "dimension"
      },
      "xxs": {
        "$value": "0.25rem",
        "$type": "dimension"
      }
    },
    "width": {
      "xs": {
        "$value": "0rem",
        "$type": "dimension"
      },
      "s": {
        "$value": "0.062rem",
        "$type": "dimension"
      },
      "m": {
        "$value": "0.125rem",
        "$type": "dimension"
      }
    }
  }
};

// Create parser instance
const parser = new FigmaTokenParser();

// Parse tokens
const tokens = parser.parseTokens(figmaData);

// Save parsed tokens to JSON
const outputDir = path.join(__dirname, '../dist');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const tokensPath = path.join(outputDir, 'figma-tokens.json');
const cssPath = path.join(outputDir, 'figma-tokens.css');

parser.saveTokens(tokensPath);
parser.saveCSS(cssPath);

console.log('✅ Token processing complete!');
console.log(`📁 JSON: ${tokensPath}`);
console.log(`🎨 CSS: ${cssPath}`);
