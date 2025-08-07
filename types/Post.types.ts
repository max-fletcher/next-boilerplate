import { Comment } from "./Comment.types"
import { User } from "./User.types"

export interface TPost {
  id: number
  title: string
  text: string
  created_at: string
  user_id: number
  user: User
  comments: Comment[]
  reactions?: {
    thumbsUp: 0,
    wow: 0,
    heart: 0,
    rocket: 0,
    coffee: 0,
  }
}

export type TNewPost = Omit<TPost, 'id'|'created_at'|'user'|'comments'|'reactions'>;

export type TUpdatePost = Omit<TPost, 'created_at'|'user'|'comments'|'reactions'>;