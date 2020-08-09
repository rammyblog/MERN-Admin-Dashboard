import decode from 'jwt-decode';
const checkAdminAuth = () => {
  const token = localStorage.getItem('mern_admin_dashboard');
  if (!token) return false;

  try {
    console.log(decode(token));

    const { exp, role } = decode(token);
    console.log(role);

    if (exp < new Date().getTime() / 1000) {
      return false;
    }
    if (role !== 'admin') {
      return false;
    }
  } catch (e) {
    return false;
  }

  return true;
};

export default checkAdminAuth;
