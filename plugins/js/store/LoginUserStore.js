/* eslint-disable-next-line */
export default class LoginUserStore {
  // ログイン情報をlocalStorageに格納する
  static storeLoginInfo(userId, token, authList) {
    localStorage.userId = userId;
    localStorage.token = token;
    localStorage.authList = authList;
    localStorage.logined = true;
  }

  // ユーザ情報をlocalStorageに格納する
  static storeUserInfo(icon, hueColor, chromaColor) {
    localStorage.icon = icon;
    localStorage.hueColor = hueColor;
    localStorage.chromaColor = chromaColor;
  }

  // アクセストークンの有無でログイン状態を返却する
  // localStorage.tokenがnull or 'null' の場合falseを返却
  // localStorage.tokenに値が格納されている場合trueを返却
  static isLogining() {
    return !(localStorage.token == null
      || localStorage.token === 'null');
  }

  // アクセストークンを破棄してログアウト状態にする
  static storeLogout() {
    localStorage.removeItem("token");
    localStorage.userId = null;
    localStorage.token = null;
    localStorage.authList = null;
  }

  // ユーザIDを取得する
  static getUserId() {
    return localStorage.userId;
  }

  static getToken() {
    return localStorage.token;
  }

  static getAuthList() {
    return localStorage.authList;
  }

  static getIcon() {
    return localStorage.icon;
  }

  static getHueColor() {
    return localStorage.hueColor;
  }

  static getChromaColor() {
    return localStorage.chromaColor;
  }

  // 将来このメソッドを作る予定
  // isUser
  // isAdmin

}
