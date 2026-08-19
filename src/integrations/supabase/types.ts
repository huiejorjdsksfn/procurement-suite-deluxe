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
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      ack_audit_logs: {
        Row: {
          action: string
          created_at: string
          id: string
          new_values: Json | null
          old_values: Json | null
          record_id: string | null
          table_name: string
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name: string
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      ack_blog_posts: {
        Row: {
          author_id: string | null
          author_name: string | null
          category: string | null
          content: string
          content_ki: string | null
          created_at: string
          excerpt: string | null
          excerpt_ki: string | null
          featured_image: string | null
          id: string
          ministry_id: string | null
          published: boolean
          published_at: string | null
          slug: string
          tags: string[]
          title: string
          title_ki: string | null
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          author_name?: string | null
          category?: string | null
          content?: string
          content_ki?: string | null
          created_at?: string
          excerpt?: string | null
          excerpt_ki?: string | null
          featured_image?: string | null
          id?: string
          ministry_id?: string | null
          published?: boolean
          published_at?: string | null
          slug: string
          tags?: string[]
          title: string
          title_ki?: string | null
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          author_name?: string | null
          category?: string | null
          content?: string
          content_ki?: string | null
          created_at?: string
          excerpt?: string | null
          excerpt_ki?: string | null
          featured_image?: string | null
          id?: string
          ministry_id?: string | null
          published?: boolean
          published_at?: string | null
          slug?: string
          tags?: string[]
          title?: string
          title_ki?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ack_blog_posts_ministry_id_fkey"
            columns: ["ministry_id"]
            isOneToOne: false
            referencedRelation: "ack_ministries"
            referencedColumns: ["id"]
          },
        ]
      }
      ack_collection_items: {
        Row: {
          collection_id: string
          created_at: string
          id: string
          item_id: string
          item_type: string
          sort_order: number
        }
        Insert: {
          collection_id: string
          created_at?: string
          id?: string
          item_id: string
          item_type: string
          sort_order?: number
        }
        Update: {
          collection_id?: string
          created_at?: string
          id?: string
          item_id?: string
          item_type?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "ack_collection_items_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "ack_collections"
            referencedColumns: ["id"]
          },
        ]
      }
      ack_collections: {
        Row: {
          cover_image_url: string | null
          created_at: string
          description: string | null
          id: string
          is_published: boolean
          slug: string
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_published?: boolean
          slug: string
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_published?: boolean
          slug?: string
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      ack_contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          is_read: boolean
          message: string
          name: string
          phone: string | null
          subject: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_read?: boolean
          message: string
          name: string
          phone?: string | null
          subject?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_read?: boolean
          message?: string
          name?: string
          phone?: string | null
          subject?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      ack_event_registrations: {
        Row: {
          created_at: string
          email: string | null
          event_id: string
          id: string
          name: string
          number_of_attendees: number
          phone: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          event_id: string
          id?: string
          name: string
          number_of_attendees?: number
          phone?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          event_id?: string
          id?: string
          name?: string
          number_of_attendees?: number
          phone?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ack_event_registrations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "ack_events"
            referencedColumns: ["id"]
          },
        ]
      }
      ack_events: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          description_ki: string | null
          end_date: string | null
          id: string
          image_url: string | null
          is_featured: boolean
          location: string | null
          location_ki: string | null
          ministry_id: string | null
          recurrence: string | null
          registration_required: boolean
          slug: string
          start_date: string
          title: string
          title_ki: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          description_ki?: string | null
          end_date?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean
          location?: string | null
          location_ki?: string | null
          ministry_id?: string | null
          recurrence?: string | null
          registration_required?: boolean
          slug: string
          start_date: string
          title: string
          title_ki?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          description_ki?: string | null
          end_date?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean
          location?: string | null
          location_ki?: string | null
          ministry_id?: string | null
          recurrence?: string | null
          registration_required?: boolean
          slug?: string
          start_date?: string
          title?: string
          title_ki?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ack_events_ministry_id_fkey"
            columns: ["ministry_id"]
            isOneToOne: false
            referencedRelation: "ack_ministries"
            referencedColumns: ["id"]
          },
        ]
      }
      ack_financial_reports: {
        Row: {
          breakdown: Json
          generated_at: string
          generated_by: string | null
          grand_total: number
          id: string
          notes: string | null
          period_month: string
          source_breakdown: Json
          txn_count: number
        }
        Insert: {
          breakdown?: Json
          generated_at?: string
          generated_by?: string | null
          grand_total?: number
          id?: string
          notes?: string | null
          period_month: string
          source_breakdown?: Json
          txn_count?: number
        }
        Update: {
          breakdown?: Json
          generated_at?: string
          generated_by?: string | null
          grand_total?: number
          id?: string
          notes?: string | null
          period_month?: string
          source_breakdown?: Json
          txn_count?: number
        }
        Relationships: []
      }
      ack_form_approvals: {
        Row: {
          action: string
          approver_id: string | null
          approver_role: Database["public"]["Enums"]["ack_role"]
          comment: string | null
          created_at: string
          form_submission_id: string
          id: string
          signature_data: string | null
          signed_at: string | null
          step_order: number
        }
        Insert: {
          action: string
          approver_id?: string | null
          approver_role: Database["public"]["Enums"]["ack_role"]
          comment?: string | null
          created_at?: string
          form_submission_id: string
          id?: string
          signature_data?: string | null
          signed_at?: string | null
          step_order?: number
        }
        Update: {
          action?: string
          approver_id?: string | null
          approver_role?: Database["public"]["Enums"]["ack_role"]
          comment?: string | null
          created_at?: string
          form_submission_id?: string
          id?: string
          signature_data?: string | null
          signed_at?: string | null
          step_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "ack_form_approvals_form_submission_id_fkey"
            columns: ["form_submission_id"]
            isOneToOne: false
            referencedRelation: "ack_form_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      ack_form_attachments: {
        Row: {
          created_at: string
          doc_type: string
          form_submission_id: string
          id: string
          media_asset_id: string
          uploaded_by: string | null
        }
        Insert: {
          created_at?: string
          doc_type?: string
          form_submission_id: string
          id?: string
          media_asset_id: string
          uploaded_by?: string | null
        }
        Update: {
          created_at?: string
          doc_type?: string
          form_submission_id?: string
          id?: string
          media_asset_id?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ack_form_attachments_form_submission_id_fkey"
            columns: ["form_submission_id"]
            isOneToOne: false
            referencedRelation: "ack_form_submissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ack_form_attachments_media_asset_id_fkey"
            columns: ["media_asset_id"]
            isOneToOne: false
            referencedRelation: "ack_media_assets"
            referencedColumns: ["id"]
          },
        ]
      }
      ack_form_submissions: {
        Row: {
          created_at: string
          data: Json
          email: string | null
          form_type: string
          full_name: string
          handled_by: string | null
          id: string
          member_no: string | null
          notes: string | null
          phone: string | null
          reference_no: string | null
          status: string
          submitted_by: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          data?: Json
          email?: string | null
          form_type: string
          full_name: string
          handled_by?: string | null
          id?: string
          member_no?: string | null
          notes?: string | null
          phone?: string | null
          reference_no?: string | null
          status?: string
          submitted_by?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          data?: Json
          email?: string | null
          form_type?: string
          full_name?: string
          handled_by?: string | null
          id?: string
          member_no?: string | null
          notes?: string | null
          phone?: string | null
          reference_no?: string | null
          status?: string
          submitted_by?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      ack_fund_transfers: {
        Row: {
          amount: number
          approved_at: string | null
          approved_by: string | null
          approved_signature: string | null
          bank_confirmation_ref: string | null
          banked_at: string | null
          created_at: string
          diocesan_approved_at: string | null
          diocesan_approved_by: string | null
          diocesan_reference: string | null
          from_account: string
          id: string
          reason: string
          requested_by: string | null
          requested_signature: string | null
          requires_diocesan_approval: boolean
          status: string
          to_account: string
          transfer_no: string | null
        }
        Insert: {
          amount: number
          approved_at?: string | null
          approved_by?: string | null
          approved_signature?: string | null
          bank_confirmation_ref?: string | null
          banked_at?: string | null
          created_at?: string
          diocesan_approved_at?: string | null
          diocesan_approved_by?: string | null
          diocesan_reference?: string | null
          from_account: string
          id?: string
          reason: string
          requested_by?: string | null
          requested_signature?: string | null
          requires_diocesan_approval?: boolean
          status?: string
          to_account: string
          transfer_no?: string | null
        }
        Update: {
          amount?: number
          approved_at?: string | null
          approved_by?: string | null
          approved_signature?: string | null
          bank_confirmation_ref?: string | null
          banked_at?: string | null
          created_at?: string
          diocesan_approved_at?: string | null
          diocesan_approved_by?: string | null
          diocesan_reference?: string | null
          from_account?: string
          id?: string
          reason?: string
          requested_by?: string | null
          requested_signature?: string | null
          requires_diocesan_approval?: boolean
          status?: string
          to_account?: string
          transfer_no?: string | null
        }
        Relationships: []
      }
      ack_gallery_albums: {
        Row: {
          cover_photo_url: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          title: string
        }
        Insert: {
          cover_photo_url?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          title: string
        }
        Update: {
          cover_photo_url?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          title?: string
        }
        Relationships: []
      }
      ack_gallery_photos: {
        Row: {
          album_id: string
          caption: string | null
          created_at: string
          id: string
          sort_order: number
          url: string
        }
        Insert: {
          album_id: string
          caption?: string | null
          created_at?: string
          id?: string
          sort_order?: number
          url: string
        }
        Update: {
          album_id?: string
          caption?: string | null
          created_at?: string
          id?: string
          sort_order?: number
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "ack_gallery_photos_album_id_fkey"
            columns: ["album_id"]
            isOneToOne: false
            referencedRelation: "ack_gallery_albums"
            referencedColumns: ["id"]
          },
        ]
      }
      ack_giving_transactions: {
        Row: {
          account_reference: string
          amount: number
          checkout_request_id: string | null
          created_at: string
          giver_email: string | null
          giver_name: string | null
          id: string
          member_no: string | null
          merchant_request_id: string | null
          mpesa_receipt_number: string | null
          notes: string | null
          phone: string | null
          raw_callback_data: Json | null
          receipt_sent_at: string | null
          source: string
          status: string
          transaction_date: string
          updated_at: string
          void_reason: string | null
          voided_at: string | null
          voided_by: string | null
        }
        Insert: {
          account_reference?: string
          amount: number
          checkout_request_id?: string | null
          created_at?: string
          giver_email?: string | null
          giver_name?: string | null
          id?: string
          member_no?: string | null
          merchant_request_id?: string | null
          mpesa_receipt_number?: string | null
          notes?: string | null
          phone?: string | null
          raw_callback_data?: Json | null
          receipt_sent_at?: string | null
          source?: string
          status?: string
          transaction_date?: string
          updated_at?: string
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Update: {
          account_reference?: string
          amount?: number
          checkout_request_id?: string | null
          created_at?: string
          giver_email?: string | null
          giver_name?: string | null
          id?: string
          member_no?: string | null
          merchant_request_id?: string | null
          mpesa_receipt_number?: string | null
          notes?: string | null
          phone?: string | null
          raw_callback_data?: Json | null
          receipt_sent_at?: string | null
          source?: string
          status?: string
          transaction_date?: string
          updated_at?: string
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Relationships: []
      }
      ack_import_logs: {
        Row: {
          created_at: string
          errors: Json
          file_name: string | null
          id: string
          rows_added: number
          rows_attempted: number
          rows_failed: number
          rows_updated: number
          source: string
          target_table: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          errors?: Json
          file_name?: string | null
          id?: string
          rows_added?: number
          rows_attempted?: number
          rows_failed?: number
          rows_updated?: number
          source?: string
          target_table: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          errors?: Json
          file_name?: string | null
          id?: string
          rows_added?: number
          rows_attempted?: number
          rows_failed?: number
          rows_updated?: number
          source?: string
          target_table?: string
          user_id?: string | null
        }
        Relationships: []
      }
      ack_liturgy_resources: {
        Row: {
          body: string
          body_ki: string | null
          category: string
          created_at: string
          hymn_number: number | null
          id: string
          is_published: boolean
          reference: string | null
          slug: string
          sort_order: number
          subtitle: string | null
          tags: string[]
          title: string
          title_ki: string | null
          updated_at: string
        }
        Insert: {
          body?: string
          body_ki?: string | null
          category: string
          created_at?: string
          hymn_number?: number | null
          id?: string
          is_published?: boolean
          reference?: string | null
          slug: string
          sort_order?: number
          subtitle?: string | null
          tags?: string[]
          title: string
          title_ki?: string | null
          updated_at?: string
        }
        Update: {
          body?: string
          body_ki?: string | null
          category?: string
          created_at?: string
          hymn_number?: number | null
          id?: string
          is_published?: boolean
          reference?: string | null
          slug?: string
          sort_order?: number
          subtitle?: string | null
          tags?: string[]
          title?: string
          title_ki?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      ack_login_audit: {
        Row: {
          created_at: string
          email: string
          failure_reason: string | null
          id: string
          ip_address: string | null
          success: boolean
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          failure_reason?: string | null
          id?: string
          ip_address?: string | null
          success: boolean
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          failure_reason?: string | null
          id?: string
          ip_address?: string | null
          success?: boolean
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      ack_media_assets: {
        Row: {
          alt_text: string | null
          created_at: string
          created_by: string | null
          duration_seconds: number | null
          id: string
          kind: string
          mime_type: string | null
          size_bytes: number | null
          storage_path: string | null
          tags: string[]
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          alt_text?: string | null
          created_at?: string
          created_by?: string | null
          duration_seconds?: number | null
          id?: string
          kind?: string
          mime_type?: string | null
          size_bytes?: number | null
          storage_path?: string | null
          tags?: string[]
          title: string
          updated_at?: string
          url: string
        }
        Update: {
          alt_text?: string | null
          created_at?: string
          created_by?: string | null
          duration_seconds?: number | null
          id?: string
          kind?: string
          mime_type?: string | null
          size_bytes?: number | null
          storage_path?: string | null
          tags?: string[]
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      ack_members: {
        Row: {
          alternative_phone: string | null
          created_at: string
          created_by: string | null
          date_of_birth: string | null
          department: string | null
          district: string | null
          email: string | null
          family_id: string | null
          full_name: string
          gender: string | null
          id: string
          is_active: boolean
          joined_on: string | null
          marital_status: string | null
          member_no: string
          ministry_id: string | null
          notes: string | null
          phone: string | null
          profile_photo_url: string | null
          residence: string | null
          updated_at: string
          updated_by: string | null
          user_id: string | null
        }
        Insert: {
          alternative_phone?: string | null
          created_at?: string
          created_by?: string | null
          date_of_birth?: string | null
          department?: string | null
          district?: string | null
          email?: string | null
          family_id?: string | null
          full_name: string
          gender?: string | null
          id?: string
          is_active?: boolean
          joined_on?: string | null
          marital_status?: string | null
          member_no: string
          ministry_id?: string | null
          notes?: string | null
          phone?: string | null
          profile_photo_url?: string | null
          residence?: string | null
          updated_at?: string
          updated_by?: string | null
          user_id?: string | null
        }
        Update: {
          alternative_phone?: string | null
          created_at?: string
          created_by?: string | null
          date_of_birth?: string | null
          department?: string | null
          district?: string | null
          email?: string | null
          family_id?: string | null
          full_name?: string
          gender?: string | null
          id?: string
          is_active?: boolean
          joined_on?: string | null
          marital_status?: string | null
          member_no?: string
          ministry_id?: string | null
          notes?: string | null
          phone?: string | null
          profile_photo_url?: string | null
          residence?: string | null
          updated_at?: string
          updated_by?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ack_members_family_id_fkey"
            columns: ["family_id"]
            isOneToOne: false
            referencedRelation: "ack_members"
            referencedColumns: ["id"]
          },
        ]
      }
      ack_ministries: {
        Row: {
          created_at: string
          description: string | null
          description_ki: string | null
          id: string
          image_url: string | null
          leader: string | null
          leader_user_id: string | null
          meeting_time: string | null
          name: string
          name_ki: string | null
          slug: string
          sort_order: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          description_ki?: string | null
          id?: string
          image_url?: string | null
          leader?: string | null
          leader_user_id?: string | null
          meeting_time?: string | null
          name: string
          name_ki?: string | null
          slug: string
          sort_order?: number
        }
        Update: {
          created_at?: string
          description?: string | null
          description_ki?: string | null
          id?: string
          image_url?: string | null
          leader?: string | null
          leader_user_id?: string | null
          meeting_time?: string | null
          name?: string
          name_ki?: string | null
          slug?: string
          sort_order?: number
        }
        Relationships: []
      }
      ack_newsletter_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      ack_notification_emails: {
        Row: {
          created_at: string
          error: string | null
          form_submission_id: string | null
          html_body: string
          id: string
          net_request_id: number | null
          recipient_email: string
          sent_at: string | null
          status: string
          subject: string
        }
        Insert: {
          created_at?: string
          error?: string | null
          form_submission_id?: string | null
          html_body: string
          id?: string
          net_request_id?: number | null
          recipient_email: string
          sent_at?: string | null
          status?: string
          subject: string
        }
        Update: {
          created_at?: string
          error?: string | null
          form_submission_id?: string | null
          html_body?: string
          id?: string
          net_request_id?: number | null
          recipient_email?: string
          sent_at?: string | null
          status?: string
          subject?: string
        }
        Relationships: [
          {
            foreignKeyName: "ack_notification_emails_form_submission_id_fkey"
            columns: ["form_submission_id"]
            isOneToOne: false
            referencedRelation: "ack_form_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      ack_notifications: {
        Row: {
          action_url: string | null
          created_at: string
          form_submission_id: string | null
          id: string
          is_read: boolean
          message: string
          title: string
          type: string
          user_id: string | null
        }
        Insert: {
          action_url?: string | null
          created_at?: string
          form_submission_id?: string | null
          id?: string
          is_read?: boolean
          message: string
          title: string
          type?: string
          user_id?: string | null
        }
        Update: {
          action_url?: string | null
          created_at?: string
          form_submission_id?: string | null
          id?: string
          is_read?: boolean
          message?: string
          title?: string
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ack_notifications_form_submission_id_fkey"
            columns: ["form_submission_id"]
            isOneToOne: false
            referencedRelation: "ack_form_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      ack_offering_counts: {
        Row: {
          banked_at: string | null
          banked_by: string | null
          banked_signature: string | null
          cash_total: number
          cheque_total: number
          count_no: string | null
          counter1_name: string
          counter1_signature: string | null
          counter2_name: string
          counter2_signature: string | null
          created_at: string
          created_by: string | null
          deposit_slip_ref: string | null
          giving_transaction_id: string | null
          id: string
          mpesa_total: number
          notes: string | null
          received_at: string | null
          received_by: string | null
          received_signature: string | null
          service_date: string
          service_label: string | null
          status: string
          total_amount: number | null
        }
        Insert: {
          banked_at?: string | null
          banked_by?: string | null
          banked_signature?: string | null
          cash_total?: number
          cheque_total?: number
          count_no?: string | null
          counter1_name: string
          counter1_signature?: string | null
          counter2_name: string
          counter2_signature?: string | null
          created_at?: string
          created_by?: string | null
          deposit_slip_ref?: string | null
          giving_transaction_id?: string | null
          id?: string
          mpesa_total?: number
          notes?: string | null
          received_at?: string | null
          received_by?: string | null
          received_signature?: string | null
          service_date?: string
          service_label?: string | null
          status?: string
          total_amount?: number | null
        }
        Update: {
          banked_at?: string | null
          banked_by?: string | null
          banked_signature?: string | null
          cash_total?: number
          cheque_total?: number
          count_no?: string | null
          counter1_name?: string
          counter1_signature?: string | null
          counter2_name?: string
          counter2_signature?: string | null
          created_at?: string
          created_by?: string | null
          deposit_slip_ref?: string | null
          giving_transaction_id?: string | null
          id?: string
          mpesa_total?: number
          notes?: string | null
          received_at?: string | null
          received_by?: string | null
          received_signature?: string | null
          service_date?: string
          service_label?: string | null
          status?: string
          total_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ack_offering_counts_giving_transaction_id_fkey"
            columns: ["giving_transaction_id"]
            isOneToOne: false
            referencedRelation: "ack_giving_transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      ack_payment_requisitions: {
        Row: {
          amount: number
          approval_tier: string | null
          approved_at: string | null
          approved_by: string | null
          approved_signature: string | null
          bank_signatory_1: string | null
          bank_signatory_1_signature: string | null
          bank_signatory_2: string | null
          bank_signatory_2_signature: string | null
          budget_checked_at: string | null
          budget_checked_by: string | null
          budget_line: string | null
          budget_note: string | null
          created_at: string
          filed_at: string | null
          filed_by: string | null
          id: string
          ministry: string | null
          paid_at: string | null
          payment_ref: string | null
          pcc_resolution_ref: string | null
          purpose: string
          rejection_reason: string | null
          requested_by: string | null
          status: string
          voucher_no: string | null
        }
        Insert: {
          amount: number
          approval_tier?: string | null
          approved_at?: string | null
          approved_by?: string | null
          approved_signature?: string | null
          bank_signatory_1?: string | null
          bank_signatory_1_signature?: string | null
          bank_signatory_2?: string | null
          bank_signatory_2_signature?: string | null
          budget_checked_at?: string | null
          budget_checked_by?: string | null
          budget_line?: string | null
          budget_note?: string | null
          created_at?: string
          filed_at?: string | null
          filed_by?: string | null
          id?: string
          ministry?: string | null
          paid_at?: string | null
          payment_ref?: string | null
          pcc_resolution_ref?: string | null
          purpose: string
          rejection_reason?: string | null
          requested_by?: string | null
          status?: string
          voucher_no?: string | null
        }
        Update: {
          amount?: number
          approval_tier?: string | null
          approved_at?: string | null
          approved_by?: string | null
          approved_signature?: string | null
          bank_signatory_1?: string | null
          bank_signatory_1_signature?: string | null
          bank_signatory_2?: string | null
          bank_signatory_2_signature?: string | null
          budget_checked_at?: string | null
          budget_checked_by?: string | null
          budget_line?: string | null
          budget_note?: string | null
          created_at?: string
          filed_at?: string | null
          filed_by?: string | null
          id?: string
          ministry?: string | null
          paid_at?: string | null
          payment_ref?: string | null
          pcc_resolution_ref?: string | null
          purpose?: string
          rejection_reason?: string | null
          requested_by?: string | null
          status?: string
          voucher_no?: string | null
        }
        Relationships: []
      }
      ack_permissions: {
        Row: {
          can_approve: boolean
          can_create: boolean
          can_export: boolean
          can_view: boolean
          resource: string
          role: Database["public"]["Enums"]["ack_role"]
          updated_at: string
        }
        Insert: {
          can_approve?: boolean
          can_create?: boolean
          can_export?: boolean
          can_view?: boolean
          resource: string
          role: Database["public"]["Enums"]["ack_role"]
          updated_at?: string
        }
        Update: {
          can_approve?: boolean
          can_create?: boolean
          can_export?: boolean
          can_view?: boolean
          resource?: string
          role?: Database["public"]["Enums"]["ack_role"]
          updated_at?: string
        }
        Relationships: []
      }
      ack_petty_cash_vouchers: {
        Row: {
          amount: number
          churchwarden_signature: string | null
          created_at: string
          id: string
          issued_at: string
          issued_by: string | null
          purpose: string
          receipts_note: string | null
          recipient_name: string
          recipient_signature: string | null
          reconciled_at: string | null
          reconciled_by_churchwarden: string | null
          reconciled_by_treasurer: string | null
          status: string
          treasurer_signature: string | null
          voucher_no: string | null
        }
        Insert: {
          amount: number
          churchwarden_signature?: string | null
          created_at?: string
          id?: string
          issued_at?: string
          issued_by?: string | null
          purpose: string
          receipts_note?: string | null
          recipient_name: string
          recipient_signature?: string | null
          reconciled_at?: string | null
          reconciled_by_churchwarden?: string | null
          reconciled_by_treasurer?: string | null
          status?: string
          treasurer_signature?: string | null
          voucher_no?: string | null
        }
        Update: {
          amount?: number
          churchwarden_signature?: string | null
          created_at?: string
          id?: string
          issued_at?: string
          issued_by?: string | null
          purpose?: string
          receipts_note?: string | null
          recipient_name?: string
          recipient_signature?: string | null
          reconciled_at?: string | null
          reconciled_by_churchwarden?: string | null
          reconciled_by_treasurer?: string | null
          status?: string
          treasurer_signature?: string | null
          voucher_no?: string | null
        }
        Relationships: []
      }
      ack_prayer_requests: {
        Row: {
          contact_me: boolean
          created_at: string
          email: string | null
          id: string
          is_anonymous: boolean
          name: string | null
          prayed_count: number
          request_text: string
          show_on_wall: boolean
          user_id: string | null
        }
        Insert: {
          contact_me?: boolean
          created_at?: string
          email?: string | null
          id?: string
          is_anonymous?: boolean
          name?: string | null
          prayed_count?: number
          request_text: string
          show_on_wall?: boolean
          user_id?: string | null
        }
        Update: {
          contact_me?: boolean
          created_at?: string
          email?: string | null
          id?: string
          is_anonymous?: boolean
          name?: string | null
          prayed_count?: number
          request_text?: string
          show_on_wall?: boolean
          user_id?: string | null
        }
        Relationships: []
      }
      ack_sermons: {
        Row: {
          audio_url: string | null
          book: string | null
          chapter_verse: string | null
          created_at: string
          description: string | null
          description_ki: string | null
          duration_seconds: number | null
          id: string
          image_url: string | null
          preacher: string
          preacher_id: string | null
          series: string | null
          sermon_date: string
          title: string
          title_ki: string | null
          updated_at: string
          video_url: string | null
        }
        Insert: {
          audio_url?: string | null
          book?: string | null
          chapter_verse?: string | null
          created_at?: string
          description?: string | null
          description_ki?: string | null
          duration_seconds?: number | null
          id?: string
          image_url?: string | null
          preacher?: string
          preacher_id?: string | null
          series?: string | null
          sermon_date?: string
          title: string
          title_ki?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          audio_url?: string | null
          book?: string | null
          chapter_verse?: string | null
          created_at?: string
          description?: string | null
          description_ki?: string | null
          duration_seconds?: number | null
          id?: string
          image_url?: string | null
          preacher?: string
          preacher_id?: string | null
          series?: string | null
          sermon_date?: string
          title?: string
          title_ki?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Relationships: []
      }
      ack_signing_authority: {
        Row: {
          countersign_role: string | null
          limit_amount: number | null
          may_sign: string
          notes: string | null
          role: Database["public"]["Enums"]["ack_role"]
          updated_at: string
        }
        Insert: {
          countersign_role?: string | null
          limit_amount?: number | null
          may_sign: string
          notes?: string | null
          role: Database["public"]["Enums"]["ack_role"]
          updated_at?: string
        }
        Update: {
          countersign_role?: string | null
          limit_amount?: number | null
          may_sign?: string
          notes?: string | null
          role?: Database["public"]["Enums"]["ack_role"]
          updated_at?: string
        }
        Relationships: []
      }
      ack_site_settings: {
        Row: {
          key: string
          updated_at: string
          value: Json
        }
        Insert: {
          key: string
          updated_at?: string
          value?: Json
        }
        Update: {
          key?: string
          updated_at?: string
          value?: Json
        }
        Relationships: []
      }
      ack_team_members: {
        Row: {
          bio: string | null
          created_at: string
          id: string
          image_url: string | null
          name: string
          role: string
          sort_order: number
        }
        Insert: {
          bio?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          name: string
          role?: string
          sort_order?: number
        }
        Update: {
          bio?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          name?: string
          role?: string
          sort_order?: number
        }
        Relationships: []
      }
      ack_user_roles: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          ministry_id: string | null
          role: Database["public"]["Enums"]["ack_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          ministry_id?: string | null
          role: Database["public"]["Enums"]["ack_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          ministry_id?: string | null
          role?: Database["public"]["Enums"]["ack_role"]
          user_id?: string
        }
        Relationships: []
      }
      allowed_emails: {
        Row: {
          added_by: string | null
          created_at: string | null
          email: string
          note: string | null
        }
        Insert: {
          added_by?: string | null
          created_at?: string | null
          email: string
          note?: string | null
        }
        Update: {
          added_by?: string | null
          created_at?: string | null
          email?: string
          note?: string | null
        }
        Relationships: []
      }
      appointments: {
        Row: {
          appointment_date: string
          appointment_time: string
          consultation_fee: number | null
          created_at: string
          created_by: string | null
          department_id: string | null
          doctor_id: string
          duration_minutes: number | null
          id: string
          notes: string
          patient_id: string
          payment_id: string | null
          payment_status: string | null
          reason: string
          status: string
          updated_at: string
        }
        Insert: {
          appointment_date: string
          appointment_time: string
          consultation_fee?: number | null
          created_at?: string
          created_by?: string | null
          department_id?: string | null
          doctor_id: string
          duration_minutes?: number | null
          id?: string
          notes: string
          patient_id: string
          payment_id?: string | null
          payment_status?: string | null
          reason: string
          status?: string
          updated_at?: string
        }
        Update: {
          appointment_date?: string
          appointment_time?: string
          consultation_fee?: number | null
          created_at?: string
          created_by?: string | null
          department_id?: string | null
          doctor_id?: string
          duration_minutes?: number | null
          id?: string
          notes?: string
          patient_id?: string
          payment_id?: string | null
          payment_status?: string | null
          reason?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_appointments_department"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_appointments_patient"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      attendance: {
        Row: {
          break_end: string | null
          break_start: string | null
          check_in: string
          check_out: string | null
          created_at: string
          id: string
          notes: string | null
          overtime_hours: number | null
          staff_id: string
          status: string
          updated_at: string
        }
        Insert: {
          break_end?: string | null
          break_start?: string | null
          check_in?: string
          check_out?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          overtime_hours?: number | null
          staff_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          break_end?: string | null
          break_start?: string | null
          check_in?: string
          check_out?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          overtime_hours?: number | null
          staff_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "attendance_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_attendance_staff"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
        ]
      }
      chart_of_accounts: {
        Row: {
          category: string
          code: string
          created_at: string
          id: string
          is_active: boolean
          name: string
          updated_at: string
        }
        Insert: {
          category: string
          code: string
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          updated_at?: string
        }
        Update: {
          category?: string
          code?: string
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      communications: {
        Row: {
          attachment_url: string | null
          created_at: string
          id: string
          message: string
          priority: string
          read_at: string | null
          recipient_id: string
          recipient_type: string
          sender_id: string
          sent_at: string
          status: string
          subject: string
        }
        Insert: {
          attachment_url?: string | null
          created_at?: string
          id?: string
          message: string
          priority?: string
          read_at?: string | null
          recipient_id: string
          recipient_type: string
          sender_id: string
          sent_at?: string
          status?: string
          subject: string
        }
        Update: {
          attachment_url?: string | null
          created_at?: string
          id?: string
          message?: string
          priority?: string
          read_at?: string | null
          recipient_id?: string
          recipient_type?: string
          sender_id?: string
          sent_at?: string
          status?: string
          subject?: string
        }
        Relationships: []
      }
      db_heartbeat: {
        Row: {
          checked_at: string
          detail: Json | null
          id: number
          prev_hash: string | null
          row_hash: string | null
          source: string
          status: string
          trace_id: string | null
        }
        Insert: {
          checked_at?: string
          detail?: Json | null
          id?: number
          prev_hash?: string | null
          row_hash?: string | null
          source: string
          status: string
          trace_id?: string | null
        }
        Update: {
          checked_at?: string
          detail?: Json | null
          id?: number
          prev_hash?: string | null
          row_hash?: string | null
          source?: string
          status?: string
          trace_id?: string | null
        }
        Relationships: []
      }
      departments: {
        Row: {
          code: string
          created_at: string
          description: string | null
          head_doctor_id: string | null
          id: string
          is_active: boolean | null
          location: string | null
          name: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          description?: string | null
          head_doctor_id?: string | null
          id?: string
          is_active?: boolean | null
          location?: string | null
          name: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          description?: string | null
          head_doctor_id?: string | null
          id?: string
          is_active?: boolean | null
          location?: string | null
          name?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_departments_head_doctor"
            columns: ["head_doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
        ]
      }
      doctors: {
        Row: {
          consultation_fee: number
          created_at: string
          department_id: string
          education: string
          id: string
          is_available: boolean
          license_number: string
          profile_id: string
          specialization: string
          updated_at: string
          years_experience: number
        }
        Insert: {
          consultation_fee: number
          created_at?: string
          department_id: string
          education: string
          id?: string
          is_available?: boolean
          license_number: string
          profile_id: string
          specialization: string
          updated_at?: string
          years_experience: number
        }
        Update: {
          consultation_fee?: number
          created_at?: string
          department_id?: string
          education?: string
          id?: string
          is_available?: boolean
          license_number?: string
          profile_id?: string
          specialization?: string
          updated_at?: string
          years_experience?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_doctors_profile_id"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          content: string
          created_at: string
          created_by: string | null
          doc_type: string
          id: string
          meta: Json
          patient_id: string | null
          reference_no: string
          search_vector: unknown
          status: string
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          content?: string
          created_at?: string
          created_by?: string | null
          doc_type?: string
          id?: string
          meta?: Json
          patient_id?: string | null
          reference_no: string
          search_vector?: unknown
          status?: string
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          created_by?: string | null
          doc_type?: string
          id?: string
          meta?: Json
          patient_id?: string | null
          reference_no?: string
          search_vector?: unknown
          status?: string
          tags?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "documents_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory: {
        Row: {
          category: string
          created_at: string
          description: string | null
          expiry_date: string | null
          id: string
          item_name: string
          minimum_stock: number | null
          quantity: number
          status: string
          supplier: string | null
          unit: string
          unit_cost: number | null
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          expiry_date?: string | null
          id?: string
          item_name: string
          minimum_stock?: number | null
          quantity?: number
          status?: string
          supplier?: string | null
          unit: string
          unit_cost?: number | null
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          expiry_date?: string | null
          id?: string
          item_name?: string
          minimum_stock?: number | null
          quantity?: number
          status?: string
          supplier?: string | null
          unit?: string
          unit_cost?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      invoice_items: {
        Row: {
          amount: number
          created_at: string
          description: string
          id: string
          invoice_id: string
          line_no: number
          quantity: number
          unit_price: number
        }
        Insert: {
          amount?: number
          created_at?: string
          description: string
          id?: string
          invoice_id: string
          line_no?: number
          quantity?: number
          unit_price?: number
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string
          id?: string
          invoice_id?: string
          line_no?: number
          quantity?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          amount_paid: number
          bill_to: string | null
          created_at: string
          created_by: string | null
          due_date: string | null
          id: string
          invoice_no: string
          issue_date: string
          notes: string | null
          patient_id: string | null
          status: string
          subtotal: number
          tax: number
          total: number
          updated_at: string
        }
        Insert: {
          amount_paid?: number
          bill_to?: string | null
          created_at?: string
          created_by?: string | null
          due_date?: string | null
          id?: string
          invoice_no: string
          issue_date?: string
          notes?: string | null
          patient_id?: string | null
          status?: string
          subtotal?: number
          tax?: number
          total?: number
          updated_at?: string
        }
        Update: {
          amount_paid?: number
          bill_to?: string | null
          created_at?: string
          created_by?: string | null
          due_date?: string | null
          id?: string
          invoice_no?: string
          issue_date?: string
          notes?: string | null
          patient_id?: string | null
          status?: string
          subtotal?: number
          tax?: number
          total?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      kb_articles: {
        Row: {
          author_id: string
          category: string | null
          content: string
          created_at: string
          helpful_count: number | null
          id: string
          not_helpful_count: number | null
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          category?: string | null
          content: string
          created_at?: string
          helpful_count?: number | null
          id?: string
          not_helpful_count?: number | null
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          category?: string | null
          content?: string
          created_at?: string
          helpful_count?: number | null
          id?: string
          not_helpful_count?: number | null
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      keepalive_audit_reports: {
        Row: {
          chain_intact: boolean
          id: number
          rows_checked: number
          run_at: string
        }
        Insert: {
          chain_intact: boolean
          id?: number
          rows_checked: number
          run_at?: string
        }
        Update: {
          chain_intact?: boolean
          id?: number
          rows_checked?: number
          run_at?: string
        }
        Relationships: []
      }
      keepalive_bot_control: {
        Row: {
          backoff_until: string | null
          consecutive_trips: number
          enabled: boolean
          id: number
          updated_at: string
        }
        Insert: {
          backoff_until?: string | null
          consecutive_trips?: number
          enabled?: boolean
          id?: number
          updated_at?: string
        }
        Update: {
          backoff_until?: string | null
          consecutive_trips?: number
          enabled?: boolean
          id?: number
          updated_at?: string
        }
        Relationships: []
      }
      keepalive_dump_data: {
        Row: {
          created_at: string
          id: number
          payload: Json
        }
        Insert: {
          created_at?: string
          id?: number
          payload: Json
        }
        Update: {
          created_at?: string
          id?: number
          payload?: Json
        }
        Relationships: []
      }
      keepalive_hourly_digest: {
        Row: {
          degraded_count: number
          down_count: number
          hour_start: string
          id: number
          latency_anomaly_count: number
          ok_count: number
          total_checks: number
          uptime_pct: number | null
        }
        Insert: {
          degraded_count: number
          down_count: number
          hour_start: string
          id?: number
          latency_anomaly_count: number
          ok_count: number
          total_checks: number
          uptime_pct?: number | null
        }
        Update: {
          degraded_count?: number
          down_count?: number
          hour_start?: string
          id?: number
          latency_anomaly_count?: number
          ok_count?: number
          total_checks?: number
          uptime_pct?: number | null
        }
        Relationships: []
      }
      keepalive_incidents: {
        Row: {
          detail: Json | null
          id: number
          opened_at: string
          reason: string
          resolved_at: string | null
        }
        Insert: {
          detail?: Json | null
          id?: number
          opened_at?: string
          reason: string
          resolved_at?: string | null
        }
        Update: {
          detail?: Json | null
          id?: number
          opened_at?: string
          reason?: string
          resolved_at?: string | null
        }
        Relationships: []
      }
      keepalive_response_shape: {
        Row: {
          id: number
          keys: string[]
          updated_at: string
        }
        Insert: {
          id?: number
          keys: string[]
          updated_at?: string
        }
        Update: {
          id?: number
          keys?: string[]
          updated_at?: string
        }
        Relationships: []
      }
      keepalive_table_growth_log: {
        Row: {
          checked_at: string
          id: number
          row_count: number
          table_name: string
          within_bounds: boolean
        }
        Insert: {
          checked_at?: string
          id?: number
          row_count: number
          table_name: string
          within_bounds: boolean
        }
        Update: {
          checked_at?: string
          id?: number
          row_count?: number
          table_name?: string
          within_bounds?: boolean
        }
        Relationships: []
      }
      medical_records: {
        Row: {
          created_at: string
          diagnosis: string
          doctor_id: string
          follow_up_date: string | null
          id: string
          medications: string | null
          notes: string | null
          patient_id: string
          symptoms: string | null
          treatment: string | null
          updated_at: string
          visit_date: string
        }
        Insert: {
          created_at?: string
          diagnosis: string
          doctor_id: string
          follow_up_date?: string | null
          id?: string
          medications?: string | null
          notes?: string | null
          patient_id: string
          symptoms?: string | null
          treatment?: string | null
          updated_at?: string
          visit_date: string
        }
        Update: {
          created_at?: string
          diagnosis?: string
          doctor_id?: string
          follow_up_date?: string | null
          id?: string
          medications?: string | null
          notes?: string | null
          patient_id?: string
          symptoms?: string | null
          treatment?: string | null
          updated_at?: string
          visit_date?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          body: string
          created_at: string
          id: string
          metadata: Json | null
          sender_id: string
          thread_id: string
          updated_at: string
        }
        Insert: {
          body: string
          created_at?: string
          id?: string
          metadata?: Json | null
          sender_id: string
          thread_id: string
          updated_at?: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          sender_id?: string
          thread_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          action_url: string | null
          communication_id: string | null
          created_at: string
          id: string
          is_read: boolean | null
          message: string
          sms_phone: string | null
          sms_sent: boolean | null
          sms_status: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          action_url?: string | null
          communication_id?: string | null
          created_at?: string
          id?: string
          is_read?: boolean | null
          message: string
          sms_phone?: string | null
          sms_sent?: boolean | null
          sms_status?: string | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          action_url?: string | null
          communication_id?: string | null
          created_at?: string
          id?: string
          is_read?: boolean | null
          message?: string
          sms_phone?: string | null
          sms_sent?: boolean | null
          sms_status?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_communication_id_fkey"
            columns: ["communication_id"]
            isOneToOne: false
            referencedRelation: "communications"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications_audit: {
        Row: {
          communication_id: string | null
          created_at: string | null
          id: string
          notification_id: string
          recipient_user_id: string | null
          sent_at: string | null
          status: string | null
        }
        Insert: {
          communication_id?: string | null
          created_at?: string | null
          id?: string
          notification_id: string
          recipient_user_id?: string | null
          sent_at?: string | null
          status?: string | null
        }
        Update: {
          communication_id?: string | null
          created_at?: string | null
          id?: string
          notification_id?: string
          recipient_user_id?: string | null
          sent_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_notifications_audit_communication"
            columns: ["communication_id"]
            isOneToOne: false
            referencedRelation: "communications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_notifications_audit_notification"
            columns: ["notification_id"]
            isOneToOne: false
            referencedRelation: "notifications"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications_skip_log: {
        Row: {
          attempted_at: string | null
          id: number
          payload: Json | null
          reason: string | null
        }
        Insert: {
          attempted_at?: string | null
          id?: never
          payload?: Json | null
          reason?: string | null
        }
        Update: {
          attempted_at?: string | null
          id?: never
          payload?: Json | null
          reason?: string | null
        }
        Relationships: []
      }
      otp_codes: {
        Row: {
          attempts: number | null
          code: string
          created_at: string | null
          expires_at: string
          id: string
          phone: string
          purpose: string
          used_at: string | null
          user_id: string | null
        }
        Insert: {
          attempts?: number | null
          code: string
          created_at?: string | null
          expires_at: string
          id?: string
          phone: string
          purpose: string
          used_at?: string | null
          user_id?: string | null
        }
        Update: {
          attempts?: number | null
          code?: string
          created_at?: string | null
          expires_at?: string
          id?: string
          phone?: string
          purpose?: string
          used_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      patient_visits: {
        Row: {
          bp: string | null
          created_at: string
          fp_method: string | null
          id: string
          notes: string | null
          patient_id: string
          pr: string | null
          recorded_by: string | null
          tca: string | null
          updated_at: string
          visit_date: string
          wt: number | null
        }
        Insert: {
          bp?: string | null
          created_at?: string
          fp_method?: string | null
          id?: string
          notes?: string | null
          patient_id: string
          pr?: string | null
          recorded_by?: string | null
          tca?: string | null
          updated_at?: string
          visit_date?: string
          wt?: number | null
        }
        Update: {
          bp?: string | null
          created_at?: string
          fp_method?: string | null
          id?: string
          notes?: string | null
          patient_id?: string
          pr?: string | null
          recorded_by?: string | null
          tca?: string | null
          updated_at?: string
          visit_date?: string
          wt?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "patient_visits_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      patients: {
        Row: {
          address: string | null
          age: number | null
          allergies: string | null
          blood_type: string | null
          created_at: string
          date_of_birth: string | null
          email: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          fp_method: string | null
          full_name: string
          gender: string
          id: string
          patient_id: string
          phone: string | null
          residence: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          age?: number | null
          allergies?: string | null
          blood_type?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          fp_method?: string | null
          full_name: string
          gender: string
          id?: string
          patient_id: string
          phone?: string | null
          residence?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          age?: number | null
          allergies?: string | null
          blood_type?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          fp_method?: string | null
          full_name?: string
          gender?: string
          id?: string
          patient_id?: string
          phone?: string | null
          residence?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          created_at: string
          description: string
          id: string
          mpesa_code: string | null
          patient_id: string
          payment_date: string
          payment_method: string
          payment_status: string
          processed_by: string
          receipt_number: string
          transaction_id: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          description: string
          id?: string
          mpesa_code?: string | null
          patient_id: string
          payment_date?: string
          payment_method: string
          payment_status?: string
          processed_by: string
          receipt_number: string
          transaction_id?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string
          id?: string
          mpesa_code?: string | null
          patient_id?: string
          payment_date?: string
          payment_method?: string
          payment_status?: string
          processed_by?: string
          receipt_number?: string
          transaction_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          created_at: string
          date_of_birth: string | null
          department_id: string | null
          email: string
          emergency_contact: string | null
          emergency_phone: string | null
          employee_id: string | null
          full_name: string
          hire_date: string | null
          id: string
          is_active: boolean | null
          is_approved: boolean | null
          must_change_password: boolean | null
          phone: string | null
          phone_verification_code: string | null
          phone_verification_expires: string | null
          phone_verified: boolean | null
          role: string
          salary: number | null
          staff_id: number | null
          staff_uuid: string | null
          status: string | null
          updated_at: string
          user_id: string | null
          verified_by: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          created_at?: string
          date_of_birth?: string | null
          department_id?: string | null
          email: string
          emergency_contact?: string | null
          emergency_phone?: string | null
          employee_id?: string | null
          full_name: string
          hire_date?: string | null
          id?: string
          is_active?: boolean | null
          is_approved?: boolean | null
          must_change_password?: boolean | null
          phone?: string | null
          phone_verification_code?: string | null
          phone_verification_expires?: string | null
          phone_verified?: boolean | null
          role: string
          salary?: number | null
          staff_id?: number | null
          staff_uuid?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string | null
          verified_by?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          created_at?: string
          date_of_birth?: string | null
          department_id?: string | null
          email?: string
          emergency_contact?: string | null
          emergency_phone?: string | null
          employee_id?: string | null
          full_name?: string
          hire_date?: string | null
          id?: string
          is_active?: boolean | null
          is_approved?: boolean | null
          must_change_password?: boolean | null
          phone?: string | null
          phone_verification_code?: string | null
          phone_verification_expires?: string | null
          phone_verified?: boolean | null
          role?: string
          salary?: number | null
          staff_id?: number | null
          staff_uuid?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_profiles_department_id"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_profiles_staff_uuid"
            columns: ["staff_uuid"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
        ]
      }
      queue: {
        Row: {
          appointment_id: string | null
          called_at: string | null
          completed_at: string | null
          counter_assigned: string | null
          created_at: string
          created_by: string | null
          department_id: string
          doctor_id: string | null
          estimated_wait_time: number | null
          id: string
          notes: string | null
          patient_id: string
          priority_level: string
          queue_number: number
          service_type: string
          status: string
        }
        Insert: {
          appointment_id?: string | null
          called_at?: string | null
          completed_at?: string | null
          counter_assigned?: string | null
          created_at?: string
          created_by?: string | null
          department_id: string
          doctor_id?: string | null
          estimated_wait_time?: number | null
          id: string
          notes?: string | null
          patient_id: string
          priority_level?: string
          queue_number: number
          service_type: string
          status?: string
        }
        Update: {
          appointment_id?: string | null
          called_at?: string | null
          completed_at?: string | null
          counter_assigned?: string | null
          created_at?: string
          created_by?: string | null
          department_id?: string
          doctor_id?: string | null
          estimated_wait_time?: number | null
          id?: string
          notes?: string | null
          patient_id?: string
          priority_level?: string
          queue_number?: number
          service_type?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "queue_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "queue_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "queue_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "queue_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      receipts: {
        Row: {
          created_at: string
          id: string
          issued_at: string
          issued_by: string
          items: Json
          patient_id: string
          payment_id: string | null
          printed_at: string | null
          receipt_number: string
          total_amount: number
        }
        Insert: {
          created_at?: string
          id?: string
          issued_at?: string
          issued_by: string
          items?: Json
          patient_id: string
          payment_id?: string | null
          printed_at?: string | null
          receipt_number: string
          total_amount: number
        }
        Update: {
          created_at?: string
          id?: string
          issued_at?: string
          issued_by?: string
          items?: Json
          patient_id?: string
          payment_id?: string | null
          printed_at?: string | null
          receipt_number?: string
          total_amount?: number
        }
        Relationships: [
          {
            foreignKeyName: "receipts_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receipts_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      router_logs: {
        Row: {
          created_at: string
          event_data: Json | null
          event_type: string
          id: string
          router_id: string
        }
        Insert: {
          created_at?: string
          event_data?: Json | null
          event_type: string
          id?: string
          router_id: string
        }
        Update: {
          created_at?: string
          event_data?: Json | null
          event_type?: string
          id?: string
          router_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "router_logs_router_id_fkey"
            columns: ["router_id"]
            isOneToOne: false
            referencedRelation: "routers"
            referencedColumns: ["id"]
          },
        ]
      }
      routers: {
        Row: {
          created_at: string
          id: string
          ip_address: string
          is_active: boolean | null
          last_connected_at: string | null
          mac_address: string | null
          password_encrypted: string
          port: number | null
          router_model: string
          router_name: string
          updated_at: string
          user_id: string
          username: string
        }
        Insert: {
          created_at?: string
          id?: string
          ip_address: string
          is_active?: boolean | null
          last_connected_at?: string | null
          mac_address?: string | null
          password_encrypted: string
          port?: number | null
          router_model: string
          router_name: string
          updated_at?: string
          user_id: string
          username: string
        }
        Update: {
          created_at?: string
          id?: string
          ip_address?: string
          is_active?: boolean | null
          last_connected_at?: string | null
          mac_address?: string | null
          password_encrypted?: string
          port?: number | null
          router_model?: string
          router_name?: string
          updated_at?: string
          user_id?: string
          username?: string
        }
        Relationships: []
      }
      scanned_documents: {
        Row: {
          created_at: string
          created_by: string | null
          doc_type: string
          extracted_fields: Json
          extracted_text: string | null
          id: string
          mime_type: string | null
          page_count: number
          patient_id: string | null
          review_status: string
          storage_path: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          doc_type?: string
          extracted_fields?: Json
          extracted_text?: string | null
          id?: string
          mime_type?: string | null
          page_count?: number
          patient_id?: string | null
          review_status?: string
          storage_path?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          doc_type?: string
          extracted_fields?: Json
          extracted_text?: string | null
          id?: string
          mime_type?: string | null
          page_count?: number
          patient_id?: string | null
          review_status?: string
          storage_path?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "scanned_documents_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      sla_policies: {
        Row: {
          created_at: string
          id: string
          is_active: boolean | null
          name: string
          priority: string
          resolution_time_hours: number
          response_time_hours: number
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean | null
          name: string
          priority: string
          resolution_time_hours: number
          response_time_hours: number
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean | null
          name?: string
          priority?: string
          resolution_time_hours?: number
          response_time_hours?: number
        }
        Relationships: []
      }
      staff: {
        Row: {
          created_at: string
          department_id: string | null
          employee_id: string
          hire_date: string
          id: string
          position: string
          profile_id: string
          salary: number | null
          shift_pattern: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          department_id?: string | null
          employee_id: string
          hire_date: string
          id?: string
          position: string
          profile_id: string
          salary?: number | null
          shift_pattern?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          department_id?: string | null
          employee_id?: string
          hire_date?: string
          id?: string
          position?: string
          profile_id?: string
          salary?: number | null
          shift_pattern?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_staff_profile"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_staff_profile_id"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      summarization_jobs: {
        Row: {
          attempts: number
          created_at: string
          id: string
          result: Json | null
          scheduled_at: string
          status: string
          thread_id: string
          updated_at: string
        }
        Insert: {
          attempts?: number
          created_at?: string
          id?: string
          result?: Json | null
          scheduled_at?: string
          status?: string
          thread_id: string
          updated_at?: string
        }
        Update: {
          attempts?: number
          created_at?: string
          id?: string
          result?: Json | null
          scheduled_at?: string
          status?: string
          thread_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "summarization_jobs_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["id"]
          },
        ]
      }
      test_accounts: {
        Row: {
          created_at: string | null
          email: string
          full_name: string
          phone: string
          role: string
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name: string
          phone: string
          role: string
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string
          phone?: string
          role?: string
        }
        Relationships: []
      }
      thread_participants: {
        Row: {
          id: string
          joined_at: string
          thread_id: string
          user_id: string
        }
        Insert: {
          id?: string
          joined_at?: string
          thread_id: string
          user_id: string
        }
        Update: {
          id?: string
          joined_at?: string
          thread_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "thread_participants_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["id"]
          },
        ]
      }
      thread_summaries: {
        Row: {
          generated_at: string
          id: string
          model: string | null
          summary: string
          thread_id: string
          tokens_used: number | null
        }
        Insert: {
          generated_at?: string
          id?: string
          model?: string | null
          summary: string
          thread_id: string
          tokens_used?: number | null
        }
        Update: {
          generated_at?: string
          id?: string
          model?: string | null
          summary?: string
          thread_id?: string
          tokens_used?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "thread_summaries_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["id"]
          },
        ]
      }
      threads: {
        Row: {
          created_at: string
          created_by: string
          id: string
          summary_threshold: number | null
          title: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          id?: string
          summary_threshold?: number | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          summary_threshold?: number | null
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      ticket_comments: {
        Row: {
          author_id: string
          body: string
          created_at: string
          id: string
          is_internal: boolean
          ticket_id: string
        }
        Insert: {
          author_id: string
          body: string
          created_at?: string
          id?: string
          is_internal?: boolean
          ticket_id: string
        }
        Update: {
          author_id?: string
          body?: string
          created_at?: string
          id?: string
          is_internal?: boolean
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_comments_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      tickets: {
        Row: {
          assigned_agent_id: string | null
          category: string | null
          closed_at: string | null
          created_at: string
          customer_id: string
          description: string
          id: string
          priority: string
          resolved_at: string | null
          sla_due_at: string | null
          status: string
          subject: string
          tags: string[] | null
          ticket_number: number
          updated_at: string
        }
        Insert: {
          assigned_agent_id?: string | null
          category?: string | null
          closed_at?: string | null
          created_at?: string
          customer_id: string
          description: string
          id?: string
          priority?: string
          resolved_at?: string | null
          sla_due_at?: string | null
          status?: string
          subject: string
          tags?: string[] | null
          ticket_number?: number
          updated_at?: string
        }
        Update: {
          assigned_agent_id?: string | null
          category?: string | null
          closed_at?: string | null
          created_at?: string
          customer_id?: string
          description?: string
          id?: string
          priority?: string
          resolved_at?: string | null
          sla_due_at?: string | null
          status?: string
          subject?: string
          tags?: string[] | null
          ticket_number?: number
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      voucher_lines: {
        Row: {
          account_code: string | null
          account_id: string | null
          created_at: string
          credit: number
          debit: number
          description: string | null
          id: string
          line_no: number
          voucher_id: string
        }
        Insert: {
          account_code?: string | null
          account_id?: string | null
          created_at?: string
          credit?: number
          debit?: number
          description?: string | null
          id?: string
          line_no?: number
          voucher_id: string
        }
        Update: {
          account_code?: string | null
          account_id?: string | null
          created_at?: string
          credit?: number
          debit?: number
          description?: string | null
          id?: string
          line_no?: number
          voucher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "voucher_lines_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "chart_of_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "voucher_lines_voucher_id_fkey"
            columns: ["voucher_id"]
            isOneToOne: false
            referencedRelation: "vouchers"
            referencedColumns: ["id"]
          },
        ]
      }
      vouchers: {
        Row: {
          approved_by: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          narration: string | null
          payee: string | null
          status: string
          total_amount: number
          updated_at: string
          voucher_date: string
          voucher_no: string
          voucher_type: string
        }
        Insert: {
          approved_by?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          narration?: string | null
          payee?: string | null
          status?: string
          total_amount?: number
          updated_at?: string
          voucher_date?: string
          voucher_no: string
          voucher_type?: string
        }
        Update: {
          approved_by?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          narration?: string | null
          payee?: string | null
          status?: string
          total_amount?: number
          updated_at?: string
          voucher_date?: string
          voucher_no?: string
          voucher_type?: string
        }
        Relationships: []
      }
    }
    Views: {
      ack_giving_monthly_subtotals: {
        Row: {
          account_reference: string | null
          period_month: string | null
          total_amount: number | null
          txn_count: number | null
        }
        Relationships: []
      }
      ack_giving_monthly_totals: {
        Row: {
          period_month: string | null
          total_amount: number | null
          txn_count: number | null
        }
        Relationships: []
      }
      ack_giving_source_totals: {
        Row: {
          period_month: string | null
          source: string | null
          total_amount: number | null
          txn_count: number | null
        }
        Relationships: []
      }
      ack_prayer_wall: {
        Row: {
          created_at: string | null
          first_name: string | null
          id: string | null
          prayed_count: number | null
          request_text: string | null
        }
        Insert: {
          created_at?: string | null
          first_name?: never
          id?: string | null
          prayed_count?: number | null
          request_text?: string | null
        }
        Update: {
          created_at?: string | null
          first_name?: never
          id?: string | null
          prayed_count?: number | null
          request_text?: string | null
        }
        Relationships: []
      }
      keepalive_uptime_stats: {
        Row: {
          checks_1h: number | null
          checks_24h: number | null
          ok_24h: number | null
          uptime_pct_1h: number | null
          uptime_pct_24h: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      ack_admin_find_user_by_email: {
        Args: { _email: string }
        Returns: {
          email: string
          has_role: boolean
          user_id: string
        }[]
      }
      ack_admin_list_login_audit: {
        Args: { _limit?: number; _search?: string }
        Returns: {
          created_at: string
          email: string
          failure_reason: string | null
          id: string
          ip_address: string | null
          success: boolean
          user_agent: string | null
          user_id: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "ack_login_audit"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      ack_admin_list_staff: {
        Args: never
        Returns: {
          account_created_at: string
          email: string
          email_confirmed_at: string
          granted_at: string
          last_sign_in_at: string
          ministry_id: string
          ministry_name: string
          role: Database["public"]["Enums"]["ack_role"]
          user_id: string
        }[]
      }
      ack_admin_revoke_staff_role: {
        Args: {
          old_role: Database["public"]["Enums"]["ack_role"]
          target_email: string
        }
        Returns: undefined
      }
      ack_admin_security_stats: {
        Args: never
        Returns: {
          distinct_ips_last_24h: number
          failed_last_24h: number
          failed_last_7d: number
          success_last_24h: number
        }[]
      }
      ack_admin_set_staff_role: {
        Args: {
          new_role: Database["public"]["Enums"]["ack_role"]
          target_email: string
          target_ministry_id?: string
        }
        Returns: undefined
      }
      ack_advent_sunday: { Args: { _year: number }; Returns: string }
      ack_approve_fund_transfer: {
        Args: { _id: string; _signature: string }
        Returns: {
          amount: number
          approved_at: string | null
          approved_by: string | null
          approved_signature: string | null
          bank_confirmation_ref: string | null
          banked_at: string | null
          created_at: string
          diocesan_approved_at: string | null
          diocesan_approved_by: string | null
          diocesan_reference: string | null
          from_account: string
          id: string
          reason: string
          requested_by: string | null
          requested_signature: string | null
          requires_diocesan_approval: boolean
          status: string
          to_account: string
          transfer_no: string | null
        }
        SetofOptions: {
          from: "*"
          to: "ack_fund_transfers"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      ack_approve_payment: {
        Args: { _id: string; _pcc_resolution_ref?: string; _signature: string }
        Returns: {
          amount: number
          approval_tier: string | null
          approved_at: string | null
          approved_by: string | null
          approved_signature: string | null
          bank_signatory_1: string | null
          bank_signatory_1_signature: string | null
          bank_signatory_2: string | null
          bank_signatory_2_signature: string | null
          budget_checked_at: string | null
          budget_checked_by: string | null
          budget_line: string | null
          budget_note: string | null
          created_at: string
          filed_at: string | null
          filed_by: string | null
          id: string
          ministry: string | null
          paid_at: string | null
          payment_ref: string | null
          pcc_resolution_ref: string | null
          purpose: string
          rejection_reason: string | null
          requested_by: string | null
          status: string
          voucher_no: string | null
        }
        SetofOptions: {
          from: "*"
          to: "ack_payment_requisitions"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      ack_bank_fund_transfer: {
        Args: { _confirmation_ref: string; _id: string }
        Returns: {
          amount: number
          approved_at: string | null
          approved_by: string | null
          approved_signature: string | null
          bank_confirmation_ref: string | null
          banked_at: string | null
          created_at: string
          diocesan_approved_at: string | null
          diocesan_approved_by: string | null
          diocesan_reference: string | null
          from_account: string
          id: string
          reason: string
          requested_by: string | null
          requested_signature: string | null
          requires_diocesan_approval: boolean
          status: string
          to_account: string
          transfer_no: string | null
        }
        SetofOptions: {
          from: "*"
          to: "ack_fund_transfers"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      ack_bank_offering_count: {
        Args: { _deposit_slip_ref: string; _id: string; _signature: string }
        Returns: {
          banked_at: string | null
          banked_by: string | null
          banked_signature: string | null
          cash_total: number
          cheque_total: number
          count_no: string | null
          counter1_name: string
          counter1_signature: string | null
          counter2_name: string
          counter2_signature: string | null
          created_at: string
          created_by: string | null
          deposit_slip_ref: string | null
          giving_transaction_id: string | null
          id: string
          mpesa_total: number
          notes: string | null
          received_at: string | null
          received_by: string | null
          received_signature: string | null
          service_date: string
          service_label: string | null
          status: string
          total_amount: number | null
        }
        SetofOptions: {
          from: "*"
          to: "ack_offering_counts"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      ack_budget_check_payment: {
        Args: { _id: string; _note: string }
        Returns: {
          amount: number
          approval_tier: string | null
          approved_at: string | null
          approved_by: string | null
          approved_signature: string | null
          bank_signatory_1: string | null
          bank_signatory_1_signature: string | null
          bank_signatory_2: string | null
          bank_signatory_2_signature: string | null
          budget_checked_at: string | null
          budget_checked_by: string | null
          budget_line: string | null
          budget_note: string | null
          created_at: string
          filed_at: string | null
          filed_by: string | null
          id: string
          ministry: string | null
          paid_at: string | null
          payment_ref: string | null
          pcc_resolution_ref: string | null
          purpose: string
          rejection_reason: string | null
          requested_by: string | null
          status: string
          voucher_no: string | null
        }
        SetofOptions: {
          from: "*"
          to: "ack_payment_requisitions"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      ack_can_manage_finance: { Args: { _user_id: string }; Returns: boolean }
      ack_can_manage_members: { Args: { _user_id: string }; Returns: boolean }
      ack_can_view_members: { Args: { _user_id: string }; Returns: boolean }
      ack_current_liturgical_theme: {
        Args: { _as_of?: string }
        Returns: {
          blurb: string
          color: string
          color_hex: string
          days_until_next: number
          next_observance: string
          next_observance_color: string
          next_observance_color_hex: string
          next_observance_date: string
          season: string
          today_observance: string
          today_observance_activities: string
        }[]
      }
      ack_dashboard_stats: { Args: never; Returns: Json }
      ack_diocesan_approve_transfer: {
        Args: { _id: string; _officer_name: string; _reference: string }
        Returns: {
          amount: number
          approved_at: string | null
          approved_by: string | null
          approved_signature: string | null
          bank_confirmation_ref: string | null
          banked_at: string | null
          created_at: string
          diocesan_approved_at: string | null
          diocesan_approved_by: string | null
          diocesan_reference: string | null
          from_account: string
          id: string
          reason: string
          requested_by: string | null
          requested_signature: string | null
          requires_diocesan_approval: boolean
          status: string
          to_account: string
          transfer_no: string | null
        }
        SetofOptions: {
          from: "*"
          to: "ack_fund_transfers"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      ack_easter_sunday: { Args: { _year: number }; Returns: string }
      ack_failed_login_count: {
        Args: { _email: string; _minutes?: number }
        Returns: number
      }
      ack_file_payment: {
        Args: { _id: string }
        Returns: {
          amount: number
          approval_tier: string | null
          approved_at: string | null
          approved_by: string | null
          approved_signature: string | null
          bank_signatory_1: string | null
          bank_signatory_1_signature: string | null
          bank_signatory_2: string | null
          bank_signatory_2_signature: string | null
          budget_checked_at: string | null
          budget_checked_by: string | null
          budget_line: string | null
          budget_note: string | null
          created_at: string
          filed_at: string | null
          filed_by: string | null
          id: string
          ministry: string | null
          paid_at: string | null
          payment_ref: string | null
          pcc_resolution_ref: string | null
          purpose: string
          rejection_reason: string | null
          requested_by: string | null
          status: string
          voucher_no: string | null
        }
        SetofOptions: {
          from: "*"
          to: "ack_payment_requisitions"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      ack_finance_signatories: {
        Args: never
        Returns: {
          email: string
          role: Database["public"]["Enums"]["ack_role"]
          user_id: string
        }[]
      }
      ack_form_type_role: {
        Args: { _form_type: string }
        Returns: Database["public"]["Enums"]["ack_role"]
      }
      ack_generate_monthly_report: {
        Args: { _notes?: string; _period_month: string }
        Returns: {
          breakdown: Json
          generated_at: string
          generated_by: string | null
          grand_total: number
          id: string
          notes: string | null
          period_month: string
          source_breakdown: Json
          txn_count: number
        }
        SetofOptions: {
          from: "*"
          to: "ack_financial_reports"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      ack_generate_weekly_income_report: {
        Args: { _week_start: string }
        Returns: {
          cash_total: number
          cheque_total: number
          count_no: string
          deposit_slip_ref: string
          mpesa_total: number
          service_date: string
          service_label: string
          total_amount: number
        }[]
      }
      ack_get_vault_secret: { Args: { _name: string }; Returns: string }
      ack_has_permission: {
        Args: { _action: string; _resource: string; _user_id: string }
        Returns: boolean
      }
      ack_has_role: {
        Args: {
          _role: Database["public"]["Enums"]["ack_role"]
          _user_id: string
        }
        Returns: boolean
      }
      ack_is_admin: { Args: { _user_id: string }; Returns: boolean }
      ack_is_admin_desk: { Args: { _user_id: string }; Returns: boolean }
      ack_is_content_editor: { Args: { _user_id: string }; Returns: boolean }
      ack_is_staff: { Args: { _user_id: string }; Returns: boolean }
      ack_list_members: {
        Args: {
          _department?: string
          _page?: number
          _page_size?: number
          _search?: string
        }
        Returns: {
          department: string
          email: string
          full_name: string
          id: string
          is_active: boolean
          joined_on: string
          member_no: string
          phone: string
          total_count: number
        }[]
      }
      ack_liturgical_events_for_year: {
        Args: { _year: number }
        Returns: {
          activities: string
          color: string
          color_hex: string
          event_date: string
          event_name: string
          season: string
        }[]
      }
      ack_liturgical_season_on: {
        Args: { _date: string }
        Returns: {
          blurb: string
          color: string
          color_hex: string
          season: string
        }[]
      }
      ack_member_giving_history: {
        Args: { _member_no: string }
        Returns: {
          account_reference: string
          amount: number
          id: string
          source: string
          status: string
          transaction_date: string
        }[]
      }
      ack_member_profile: { Args: { _member_id: string }; Returns: Json }
      ack_member_statement: {
        Args: { _member_no: string; _phone: string }
        Returns: Json
      }
      ack_my_ministry_ids: { Args: { _user_id: string }; Returns: string[] }
      ack_pay_payment: {
        Args: {
          _id: string
          _payment_ref: string
          _sig1: string
          _sig2: string
          _signatory1: string
          _signatory2: string
        }
        Returns: {
          amount: number
          approval_tier: string | null
          approved_at: string | null
          approved_by: string | null
          approved_signature: string | null
          bank_signatory_1: string | null
          bank_signatory_1_signature: string | null
          bank_signatory_2: string | null
          bank_signatory_2_signature: string | null
          budget_checked_at: string | null
          budget_checked_by: string | null
          budget_line: string | null
          budget_note: string | null
          created_at: string
          filed_at: string | null
          filed_by: string | null
          id: string
          ministry: string | null
          paid_at: string | null
          payment_ref: string | null
          pcc_resolution_ref: string | null
          purpose: string
          rejection_reason: string | null
          requested_by: string | null
          status: string
          voucher_no: string | null
        }
        SetofOptions: {
          from: "*"
          to: "ack_payment_requisitions"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      ack_process_notification_emails: { Args: never; Returns: undefined }
      ack_receive_offering_count: {
        Args: { _id: string; _signature: string }
        Returns: {
          banked_at: string | null
          banked_by: string | null
          banked_signature: string | null
          cash_total: number
          cheque_total: number
          count_no: string | null
          counter1_name: string
          counter1_signature: string | null
          counter2_name: string
          counter2_signature: string | null
          created_at: string
          created_by: string | null
          deposit_slip_ref: string | null
          giving_transaction_id: string | null
          id: string
          mpesa_total: number
          notes: string | null
          received_at: string | null
          received_by: string | null
          received_signature: string | null
          service_date: string
          service_label: string | null
          status: string
          total_amount: number | null
        }
        SetofOptions: {
          from: "*"
          to: "ack_offering_counts"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      ack_reconcile_petty_cash: {
        Args: {
          _churchwarden_id: string
          _churchwarden_sig: string
          _id: string
          _note: string
          _treasurer_sig: string
        }
        Returns: {
          amount: number
          churchwarden_signature: string | null
          created_at: string
          id: string
          issued_at: string
          issued_by: string | null
          purpose: string
          receipts_note: string | null
          recipient_name: string
          recipient_signature: string | null
          reconciled_at: string | null
          reconciled_by_churchwarden: string | null
          reconciled_by_treasurer: string | null
          status: string
          treasurer_signature: string | null
          voucher_no: string | null
        }
        SetofOptions: {
          from: "*"
          to: "ack_petty_cash_vouchers"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      ack_record_login_attempt: {
        Args: {
          _email: string
          _failure_reason?: string
          _ip?: string
          _success: boolean
          _user_agent?: string
        }
        Returns: undefined
      }
      ack_reject_payment: {
        Args: { _id: string; _reason: string }
        Returns: {
          amount: number
          approval_tier: string | null
          approved_at: string | null
          approved_by: string | null
          approved_signature: string | null
          bank_signatory_1: string | null
          bank_signatory_1_signature: string | null
          bank_signatory_2: string | null
          bank_signatory_2_signature: string | null
          budget_checked_at: string | null
          budget_checked_by: string | null
          budget_line: string | null
          budget_note: string | null
          created_at: string
          filed_at: string | null
          filed_by: string | null
          id: string
          ministry: string | null
          paid_at: string | null
          payment_ref: string | null
          pcc_resolution_ref: string | null
          purpose: string
          rejection_reason: string | null
          requested_by: string | null
          status: string
          voucher_no: string | null
        }
        SetofOptions: {
          from: "*"
          to: "ack_payment_requisitions"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      ack_resolve_pending_notification_emails: {
        Args: never
        Returns: undefined
      }
      check_and_update_response_shape: {
        Args: { new_keys: string[] }
        Returns: boolean
      }
      clean_expired_otp: { Args: never; Returns: undefined }
      get_dashboard_stats: { Args: never; Returns: Json }
      has_any_role: {
        Args: {
          _roles: Database["public"]["Enums"]["app_role"][]
          _user_id: string
        }
        Returns: boolean
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_church_staff: { Args: { _user_id: string }; Returns: boolean }
      is_ticket_staff: { Args: { _user_id: string }; Returns: boolean }
      keepalive_avg_latency: { Args: { dependency: string }; Returns: number }
      keepalive_build_hourly_digest: { Args: never; Returns: undefined }
      keepalive_circuit_ok: { Args: never; Returns: boolean }
      keepalive_cron_health_check: { Args: never; Returns: undefined }
      keepalive_data_freshness_check: { Args: never; Returns: undefined }
      keepalive_db_ping: { Args: never; Returns: undefined }
      keepalive_dump_cycle: { Args: never; Returns: undefined }
      keepalive_health_check: { Args: never; Returns: Json }
      keepalive_run_audit_report: { Args: never; Returns: undefined }
      keepalive_secret_rotation_check: { Args: never; Returns: undefined }
      keepalive_table_growth_guard: { Args: never; Returns: undefined }
      keepalive_verify_chain_integrity: {
        Args: { check_last?: number }
        Returns: boolean
      }
      prune_db_heartbeat: { Args: never; Returns: undefined }
      request_password_reset: { Args: { user_email: string }; Returns: Json }
      verify_keepalive_secret: { Args: { input: string }; Returns: boolean }
    }
    Enums: {
      ack_role:
        | "admin"
        | "vicar"
        | "evangelist"
        | "treasurer"
        | "secretary"
        | "ministry_leader"
        | "member"
        | "churchwarden"
      app_role:
        | "admin"
        | "doctor"
        | "nurse"
        | "receptionist"
        | "hr"
        | "finance"
        | "technician"
      tamara: "0"
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
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
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      ack_role: [
        "admin",
        "vicar",
        "evangelist",
        "treasurer",
        "secretary",
        "ministry_leader",
        "member",
        "churchwarden",
      ],
      app_role: [
        "admin",
        "doctor",
        "nurse",
        "receptionist",
        "hr",
        "finance",
        "technician",
      ],
      tamara: ["0"],
    },
  },
} as const
