#!/bin/bash

source .env

npx supabase gen types typescript --project-id "$PUBLIC_SUPABASE_ID" > src/types/supabase.ts