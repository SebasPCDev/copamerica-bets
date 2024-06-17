export type UserSession = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  role: string;
};

export type SessionPayload = {
  user: UserSession;
  token: string;
};

export type LoginData = {
  email: string;
  password: string;
};
