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

export const calculateSums = (formData) => {
  const sums = {
    tasks: "Total",
    backendHoursW: 0,
    backendHoursR: 0,
    backendHoursB: 0,
    frontendHoursW: 0,
    frontendHoursR: 0,
    frontendHoursB: 0,
    costBackend: 0,
    costFrontEnd: 0,
  };

  formData.forEach((row) => {
    sums.backendHoursW += parseFloat(row.backendHoursW);
    sums.backendHoursR += parseFloat(row.backendHoursR);
    sums.backendHoursB += parseFloat(row.backendHoursB);
    sums.frontendHoursW += parseFloat(row.frontendHoursW);
    sums.frontendHoursR += parseFloat(row.frontendHoursR);
    sums.frontendHoursB += parseFloat(row.frontendHoursB);
    sums.costBackend += parseFloat(row.costBackend);
    sums.costFrontEnd += parseFloat(row.costFrontEnd);
  });

  return sums;
};
