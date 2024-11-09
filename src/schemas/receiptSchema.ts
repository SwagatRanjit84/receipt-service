// schema for receipt to check the validate receipt based on api.yml
export const receiptSchema = {
  type: "object",
  required: ["retailer", "purchaseDate", "purchaseTime", "items", "total"],
  properties: {
    retailer: { type: "string", pattern: "^[\\w\\s\\-&]+$" },
    purchaseDate: { type: "string", format: "date" },
    purchaseTime: {
      type: "string",
      pattern: "^([01]?[0-9]|2[0-3]):([0-5][0-9])$", // Custom regex for HH:mm format
    },
    items: {
      type: "array",
      minItems: 1,
      items: {
        type: "object",
        required: ["shortDescription", "price"],
        properties: {
          shortDescription: { type: "string", pattern: "^[\\w\\s\\-]+$" },
          price: { type: "string", pattern: "^\\d+\\.\\d{2}$" },
        },
      },
    },
    total: { type: "string", pattern: "^\\d+\\.\\d{2}$" },
  },
};
