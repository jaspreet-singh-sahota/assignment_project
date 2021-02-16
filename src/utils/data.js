import faker from "faker";

const tableTitle = [
  "Vendor",
  "Vendor Code",
  "PO#",
  "PO Line",
  "Description",
  "PO Value INR",
  "Qty Ordered",
  "Qty Shipped",
  "GR Quantity",
  "UOM",
  "Due Date",
  "Commented Date",
  "Status",
];

const status = [
  "All",
  "GRN Posted",
  "Accepted",
  "Rejected",
  "Review Req",
  "Dispatch",
  "Open",
];

const fakerData = () => {
  const data = [];

  for (let i = 0; i < 20; i += 1) {
    const fakerRandomData = {
      Vendor: faker.company.companyName(),
      VendorCode: faker.random.number({
        min: 100000,
        max: 999999,
      }),
      "PO#": faker.random.number({
        min: 1000000000,
        max: 9999999999,
      }),
      POLine: faker.helpers.randomize([1, 2]),
      Description: faker.commerce.productName(),
      POValueINR: faker.random.number({
        min: 10000,
        max: 999999,
      }),
      QtyOrdered: faker.random.number({
        min: 1000,
        max: 30000,
      }),
      QtyShipped: faker.helpers.randomize([
        faker.random.number({
          min: 1000,
          max: 30000,
        }),
        "-",
      ]),
      GRQuantity: faker.helpers.randomize([
        faker.random.number({
          min: 1000,
          max: 30000,
        }),
        "-",
      ]),
      UOM: faker.helpers.randomize(["EA", "KG"]),
      DueDate: faker.date.future(),
      CommentedDate: faker.date.future(),
      Status: faker.helpers.randomize([
        "GRN Posted",
        "Accepted",
        "Rejected",
        "Review Req",
        "Dispatch",
        "Open",
      ]),
    };

    data.push({ id: i, ...fakerRandomData });
  }

  return data;
};

const dataKeysGetter = () => {
  const obj = data[0];
  return Object.keys(obj).filter((key) => key !== "id");
};

const statusCountFunction = () => {
  const result = {};

  data.map((obj) =>
    result[obj["Status"]]
      ? result[obj["Status"]] = result[obj["Status"]] + 1
      : (result[obj["Status"]] = 1)
  );

  return result;
};

const data = fakerData();
const dataKeys = dataKeysGetter();
const statusCount = statusCountFunction();

export { status, data, tableTitle, dataKeys, statusCount };
