type DownloadCSVPropTypes = {
  data: string;
  filename: string;
}

export const downloadCSV = ({ data, filename }: DownloadCSVPropTypes) => {
  const blob = new Blob([data], { type: 'text/csv' });

  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.csv`;
  a.click();
};
