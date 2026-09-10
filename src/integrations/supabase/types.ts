export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string
          id: string
          password_hash: string
          username: string
        }
        Insert: {
          created_at?: string
          id?: string
          password_hash: string
          username: string
        }
        Update: {
          created_at?: string
          id?: string
          password_hash?: string
          username?: string
        }
        Relationships: []
      }
      game_settings: {
        Row: {
          brokerage_percentage: number
          closing_bell_round: number
          current_round: number
          id: string
          initial_team_balance: number
          is_game_active: boolean
          max_stocks: number
          total_rounds: number
          trading_allowed: boolean
          updated_at: string
        }
        Insert: {
          brokerage_percentage?: number
          closing_bell_round?: number
          current_round?: number
          id?: string
          initial_team_balance?: number
          is_game_active?: boolean
          max_stocks?: number
          total_rounds?: number
          trading_allowed?: boolean
          updated_at?: string
        }
        Update: {
          brokerage_percentage?: number
          closing_bell_round?: number
          current_round?: number
          id?: string
          initial_team_balance?: number
          is_game_active?: boolean
          max_stocks?: number
          total_rounds?: number
          trading_allowed?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      players: {
        Row: {
          created_at: string
          id: string
          name: string
          phone_number: string
          team_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          phone_number: string
          team_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          phone_number?: string
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "players_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      portfolio: {
        Row: {
          avg_buy_price: number
          id: string
          quantity: number
          stock_id: string
          team_id: string
          updated_at: string
        }
        Insert: {
          avg_buy_price?: number
          id?: string
          quantity?: number
          stock_id: string
          team_id: string
          updated_at?: string
        }
        Update: {
          avg_buy_price?: number
          id?: string
          quantity?: number
          stock_id?: string
          team_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "portfolio_stock_id_fkey"
            columns: ["stock_id"]
            isOneToOne: false
            referencedRelation: "stocks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "portfolio_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_prices: {
        Row: {
          created_at: string
          id: string
          max_price: number | null
          min_price: number | null
          price: number
          round_number: number
          stock_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          max_price?: number | null
          min_price?: number | null
          price: number
          round_number: number
          stock_id: string
        }
        Update: {
          created_at?: string
          id?: string
          max_price?: number | null
          min_price?: number | null
          price?: number
          round_number?: number
          stock_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "stock_prices_stock_id_fkey"
            columns: ["stock_id"]
            isOneToOne: false
            referencedRelation: "stocks"
            referencedColumns: ["id"]
          },
        ]
      }
      stocks: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          name: string
          symbol: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          symbol: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          symbol?: string
        }
        Relationships: []
      }
      teams: {
        Row: {
          cash_balance: number
          created_at: string
          id: string
          password_hash: string
          status: string
          team_number: number
          updated_at: string
        }
        Insert: {
          cash_balance?: number
          created_at?: string
          id?: string
          password_hash: string
          status?: string
          team_number: number
          updated_at?: string
        }
        Update: {
          cash_balance?: number
          created_at?: string
          id?: string
          password_hash?: string
          status?: string
          team_number?: number
          updated_at?: string
        }
        Relationships: []
      }
      trades: {
        Row: {
          brokerage: number
          created_at: string
          id: string
          price: number
          quantity: number
          round_number: number
          stock_id: string
          team_id: string
          total_amount: number
          trade_type: string
        }
        Insert: {
          brokerage: number
          created_at?: string
          id?: string
          price: number
          quantity: number
          round_number: number
          stock_id: string
          team_id: string
          total_amount: number
          trade_type: string
        }
        Update: {
          brokerage?: number
          created_at?: string
          id?: string
          price?: number
          quantity?: number
          round_number?: number
          stock_id?: string
          team_id?: string
          total_amount?: number
          trade_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "trades_stock_id_fkey"
            columns: ["stock_id"]
            isOneToOne: false
            referencedRelation: "stocks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trades_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
