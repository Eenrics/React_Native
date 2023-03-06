import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(
        `${this.namespace}:token`,
      );
  
      return accessToken ? accessToken : null;
    }

  async setAccessToken(accessToken) {
    const isTokenSet = await this.getAccessToken();
    if (isTokenSet) return

    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      accessToken,
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;