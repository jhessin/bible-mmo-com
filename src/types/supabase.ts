export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          content: string | null
          created_at: string | null
          id: number
          thread_id: number | null
          user_account_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: number
          thread_id?: number | null
          user_account_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: number
          thread_id?: number | null
          user_account_id?: string | null
        }
      }
      threads: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          subject: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          subject: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          subject?: string
        }
      }
      user_accounts: {
        Row: {
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
