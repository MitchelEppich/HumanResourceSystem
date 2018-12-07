// User filters
const userFilters = ({ OR = [], is_admin }) => {
  const filter = is_admin ? {} : null;

  if (is_admin) {
    filter.admin = is_admin;
  }

  let filters = filter ? [filter] : [];
  for (let i = 0; i < OR.length; i++) {
    filters = filters.concat(userFilters(OR[i]));
  }

  return filters;
};

// Complaint filters
const complaintFilters = ({ OR = [], status }) => {
  const filter = status ? {} : null;

  if (status) {
    filter.status = status;
  }

  let filters = filter ? [filter] : [];
  for (let i = 0; i < OR.length; i++) {
    filters = filters.concat(complaintFilters(OR[i]));
  }

  return filters;
};

module.exports = {
  userFilters,
  complaintFilters
};
