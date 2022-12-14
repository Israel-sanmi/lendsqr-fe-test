const paginate = (users: any) => {
  const itemsPerPage = 12;
  const pages = Math.ceil(users.length / itemsPerPage);
  const newUsers = Array.from({ length: pages }, (_, index) => {
    const start: any = index * itemsPerPage;
    return users.slice(start, start + itemsPerPage);
  });
  return newUsers;
};

export default paginate;
