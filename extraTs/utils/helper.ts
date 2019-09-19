export function validateEmail(email: string): boolean {
  const regex = RegExp('^[A-Za-z0-9._%+-]+@successive.tech$');
  return regex.test(email);
}
