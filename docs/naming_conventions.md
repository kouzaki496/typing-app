# 命名規則

## コンポーネント

- PascalCase を使用（例：PlayScreen, ExampleDisplay）
- ファイル名はコンポーネント名と一致させる

## 変数

- 一般変数は camelCase（例：userInput, elapsedTime）
- 定数は UPPER_SNAKE_CASE（例：MAX_ATTEMPTS）

## 関数

- イベントハンドラ: handleXxx（例：handleSubmit）
- フック関数: useXxx（例：useAuth）
- ゲッター関数: getXxx（例：getRandomExample）

## ドメイン固有の用語

- accuracy: タイピングの正確性（%）
- wpm: 1 分あたりの単語数（Words Per Minute）
- challenge: 特定の難易度や条件を持つタイピング課題

## 認証関連の命名

- サインイン関連: `signIn`, `handleSignIn`, `isSignedIn`, `SignInForm`
- サインアウト関連: `signOut`, `handleSignOut`, `SignOutButton`
- サインアップ関連: `signUp`, `handleSignUp`, `SignUpForm`

注: `login`, `logIn`, `logout`, `register` などの用語は使用せず、上記の統一された用語を使用する
