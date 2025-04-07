# データモデル設計

## ユーザー（users）

| フィールド  | 型        | 説明                 |
| ----------- | --------- | -------------------- |
| id          | string    | Firebase Auth の UID |
| name        | string    | 表示名               |
| email       | string    | メールアドレス       |
| streakCount | number    | 連続プレイ日数       |
| createdAt   | timestamp | 作成日時             |

## スニペット（snippets）

| フィールド | 型        | 説明                  |
| ---------- | --------- | --------------------- |
| id         | string    | ドキュメント ID       |
| language   | string    | JavaScript, Python 等 |
| content    | string    | タイピング用コード    |
| createdBy  | string    | 管理者の UID          |
| createdAt  | timestamp | 作成日時              |

## 履歴（typingHistories）

| フィールド | 型        | 説明                  |
| ---------- | --------- | --------------------- |
| userId     | string    | ユーザー ID           |
| snippetId  | string    | 使用したスニペット ID |
| wpm        | number    | 速度                  |
| accuracy   | number    | 正確度（%）           |
| timestamp  | timestamp | 実施日時              |
