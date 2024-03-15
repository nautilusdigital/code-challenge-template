type CreateCSVPropTypes = {
  data: Record<string, any>;
}

export const createCSV = ({ data }: CreateCSVPropTypes) => {
  const rows = [];
  const headers = Object.keys(data[0]).join(',');
  rows.push(headers);

  data.forEach((item: any) => {
    const values = Object.keys(item).map((key) => `${item[key]}`).join(',');
    rows.push(values);
  });

  return rows.join('\n');
};
