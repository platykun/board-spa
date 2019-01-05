import LoginUserStore from '~/plugins/js/store/LoginUserStore';

// ログインされているときにアクセスNGとする場合に設定
export default function ({redirect}) {
  if (LoginUserStore.isLogining()) {
    return redirect('/top');
  }
}