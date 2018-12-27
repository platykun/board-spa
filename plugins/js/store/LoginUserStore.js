/* eslint-disable-next-line */
export default class LoginUserStore {
  // ログイン情報をlocalStorageに格納する
  static storeLoginInfo(userId, token, authList) {
    localStorage.userId = userId;
    localStorage.token = token;
    localStorage.authList = authList;
    localStorage.logined = true;
  }

  // アクセストークンの有無でログイン状態を返却する
  static isLogining() {
    return (localStorage.token !== null);
  }

  // アクセストークンを破棄してログアウト状態にする
  static storeLogout() {
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

  // 将来このメソッドを作る予定
  // isUser
  // isAdmin

}
