export const parseCsv = (csvText: string) => {
  const [columnNames, ...rows] = csvText
    .split('\n')
    .filter(Boolean)
    .map((rowStr) => rowStr.split(','));

  return rows.map((row) => {
    return Object.fromEntries(
      columnNames.map((columnName, columnIndex) => {
        return [columnName, row[columnIndex]];
      }),
    );
  });
};
