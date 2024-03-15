type CreateCSVPropTypes = {
  data: Record<string, any>;
}

export const createCSV = ({ data }: CreateCSVPropTypes) => {
  const rows = [];
  const headers = Object.keys(data).join(',');
  const values = Object.values(data).join(',');

  rows.push(headers);
  rows.push(values);

  return rows.join('\n');
};
