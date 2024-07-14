const transformToInputDateType = (date) => {
  const newDate = new Date(date).toLocaleDateString();
  const [day, month, year] = newDate.split(".");

  return [year, month, day].join("-");
};

export default transformToInputDateType;
