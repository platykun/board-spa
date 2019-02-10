import LoginUserStore from '~/plugins/js/store/LoginUserStore';
import api from '~/plugins/js/helper/api';

// ログインされていないアプリへのアクセスをNGとする場合に設定
export default function ({redirect}) {
  // アクセストークンが有効かどうか、healthを叩くことで検査
  api.requestWithToken("GET", "/health", null).catch(
    (error) => {
      let statusCode = error.response.status;
      if (statusCode === 401) {
        LoginUserStore.storeLogout();
        return redirect('/');
      }
    }
  );

  if (!LoginUserStore.isLogining()) {
    return redirect('/');
  }
}