# 命名規則

## コンポーネント

- PascalCase を使用
  例: `PlayScreen`, `ExampleDisplay`
- ファイル名はコンポーネント名と一致させる

## 変数

- 一般変数：camelCase
  例: `userInput`, `elapsedTime`
- 定数：UPPER_SNAKE_CASE
  例: `MAX_ATTEMPTS`, `DEFAULT_LANGUAGE`

## 関数

- イベントハンドラ：`handleXxx`
  例: `handleSubmit`, `handleKeyPress`
- フック関数：`useXxx`
  例: `useAuth`, `useTypingTimer`
- ゲッター関数：`getXxx`
  例: `getRandomExample`, `getUserScore`

## ドメイン用語（統一された用語の定義）

| 用語        | 意味                                   |
| ----------- | -------------------------------------- |
| `accuracy`  | タイピングの正確性（%）                |
| `wpm`       | 1 分あたりの単語数（Words Per Minute） |
| `challenge` | 特定の難易度や条件を持つタイピング課題 |

## 認証関連の命名ルール

- サインイン関連
  `signIn`, `handleSignIn`, `isSignedIn`, `SignInForm`
- サインアウト関連
  `signOut`, `handleSignOut`, `SignOutButton`
- サインアップ関連
  `signUp`, `handleSignUp`, `SignUpForm`

> ✅ 注：`login`, `logIn`, `logout`, `register` などの用語は使用しません。上記の命名に統一します。
