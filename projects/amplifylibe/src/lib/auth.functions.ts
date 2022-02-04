import { Auth } from "aws-amplify";

/**
 * @returns The promise result
 */
export function signOut() {
    return Auth.signOut();
  }


  export async function getCurrentAuthenticatedUserAttributes() {
    const { attributes } = await Auth.currentAuthenticatedUser();
    return attributes
  }

  /**
   * @param firstName The first name
   * @param lastName The last name
   * @param email The email
   * @param password The password
   * @returns The signup result
   */
   export function signUp(
    firstName: string,
    lastName: string,
    email: string,
    password: string) {
    return Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
        name: firstName,
        given_name: firstName,
        family_name: lastName
      }
    });
  }