import { User, ROLES } from './01-enum';

const currentUser: User = {
  userName: 'Mateo',
  userId: 24,
  role: ROLES.STUDENT,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

console.log('CheckAdminRole', checkAdminRole());

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  } else if (currentUser.role === role2) {
    return true;
  } else {
    return false;
  }
};

const rta = checkRole(ROLES.ADMIN, ROLES.TEACHER);
console.log('CheckRole', rta);

export const checkRole2 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  } else {
    return false;
  }
};

const rta2 = checkRole2(ROLES.ADMIN, ROLES.STUDENT, ROLES.TEACHER);
console.log('CheckRole2', rta2);
