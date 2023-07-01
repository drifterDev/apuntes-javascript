export enum ROLES {
  STUDENT = 'student',
  TEACHER = 'teacher',
  ADMIN = 'admin',
}

export type User = {
  userName: string;
  userId: number;
  role: ROLES;
};

const user1: User = {
  userName: 'Mateo',
  userId: 12345,
  role: ROLES.STUDENT,
};
