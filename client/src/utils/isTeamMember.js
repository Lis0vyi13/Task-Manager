export const isTeamMember = (task, user) => {
  return task?.team?.find((member) => member._id === user?._id);
};
