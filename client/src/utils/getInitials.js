const getInitials = (fullName) => {
  const names = fullName.split(" ");

  return names.slice(0, 2).reduce((total, curr) => total + curr[0], "");
};
export default getInitials;
