# 機能仕様書（Auth.md）

## 📌 機能名

ユーザー認証（Auth）

## 🎯 機能概要

この機能は、アプリにアクセスするユーザーの認証を行う。
Firebase Authentication を用いて、ユーザーのサインイン／サインアウト／サインアップを管理し、状態に応じた UI を切り替える。
また、Firestore と連携してユーザー情報（表示名・アイコンなど）を保持・更新する。

## 🧩 機能要件

### 必須要件（MVP）

- [ ] Firebase Authentication による Email/Password 認証
- [ ] サインイン／サインアウト／サインアップ機能
- [ ] ヘッダーにユーザーのアイコンとメニュー（プロフィール／ログアウト）を表示
- [ ] Firestore でユーザー情報（表示名・画像 URL）を取得・保存
- [ ] `AuthProvider` による認証状態のグローバル管理
- [ ] 未認証時はプレイ画面を表示制限（ゲストアクセス不可）

### 任意要件（Nice to Have）

- [ ] Google 認証プロバイダへの対応
- [ ] アバターのアップロード機能
- [ ] メール確認やパスワードリセット機能の追加

## 🧪 UI 構成と挙動

### コンポーネント構成（概要）

```tsx
<Header>
  <ThemeToggle />
  <AuthMenu>
    <AvatarButton />
    <DropdownMenu>
      <ProfileLink />
      <SignOutButton />
    </DropdownMenu>
  </AuthMenu>
</Header>

<AuthProvider>
  <AppRouter />
</AuthProvider>
```
