ALTER TABLE public.stock_prices
  ADD COLUMN IF NOT EXISTS min_price numeric,
  ADD COLUMN IF NOT EXISTS max_price numeric;