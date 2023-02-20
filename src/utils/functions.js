export const mapCsvToFormData = (data) => {
  const formData = data.map((row) => {
    return {
      tasks: row[0],
      backendHoursW: row[1],
      backendHoursR: row[2],
      backendHoursB: row[3],
      backendAverage: row[4],
      frontendHoursW: row[5],
      frontendHoursR: row[6],
      frontendHoursB: row[7],
      frontendAverage: row[8],
      costBackend: row[9],
      costFrontEnd: row[10],
      totalCost: row[11],
    };
  });

  return formData;
};
