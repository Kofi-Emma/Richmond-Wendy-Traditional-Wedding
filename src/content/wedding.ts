export type WeddingColour = {
  readonly name: string;
  readonly hex: `#${string}`;
};

export type WeddingDetails = {
  readonly couple: {
    readonly first: string;
    readonly second: string;
    readonly display: string;
  };
  readonly event: string;
  readonly date: {
    readonly iso: `${number}-${number}-${number}`;
    readonly display: string;
  };
  readonly time: {
    readonly display: string;
    readonly iso: `${number}:${number}:${number}${"+" | "-"}${number}:${number}`;
    readonly timeZone: "Africa/Accra";
    readonly label: string;
    readonly abbreviation: string;
  };
  readonly venue: {
    readonly address: {
      readonly label: "GhanaPostGPS";
      readonly street: string;
      readonly postalCode: string;
      readonly display: string;
    };
    readonly locality: string;
    readonly coordinates: {
      readonly latitude: number;
      readonly longitude: number;
    };
    readonly mapsUrl: `https://${string}`;
  };
  readonly colours: readonly WeddingColour[];
  readonly hashtag: `#${string}`;
};

export const weddingDetails = {
  couple: {
    first: "Richmond Kweku Sam",
    second: "Wendy Enyonam Tay",
    display: "Richmond & Wendy",
  },
  event: "Traditional Wedding Ceremony",
  date: {
    iso: "2026-11-13",
    display: "Friday, 13 November 2026",
  },
  time: {
    display: "9:00 AM",
    iso: "09:00:00+00:00",
    timeZone: "Africa/Accra",
    label: "Ghana time",
    abbreviation: "GMT",
  },
  venue: {
    address: {
      label: "GhanaPostGPS",
      street: "7 SHAMROCK ST",
      postalCode: "GA-536-0748",
      display: "7 SHAMROCK ST GA-536-0748",
    },
    locality: "Dansoman, Accra",
    coordinates: {
      latitude: 5.563787,
      longitude: -0.264753,
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=5.563787%2C-0.264753",
  },
  colours: [
    { name: "Burgundy", hex: "#6D1833" },
    { name: "Champagne gold", hex: "#C7A45D" },
    { name: "Olive green", hex: "#6E753C" },
  ],
  hashtag: "#RW2026",
} as const satisfies WeddingDetails;
