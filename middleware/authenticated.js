import LoginUserStore from '~/plugins/js/store/LoginUserStore';

// ログインされていないアプリへのアクセスをNGとする場合に設定
export default function ({redirect}) {
  if (!LoginUserStore.isLogining()) {
    return redirect('/');
  }
}