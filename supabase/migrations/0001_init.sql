create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  base_price_inr integer not null,
  frame_price_inr integer not null,
  shipping_price_inr integer not null,
  three_d_model_path text not null,
  is_trending boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  size text not null check (size in ('A3','A4','A5','16:9')),
  material text not null check (material in ('Matte','Canvas','Acrylic')),
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  tracking_id text unique not null,
  user_id uuid not null references auth.users(id),
  payment_method text not null check (payment_method in ('Stripe','Razorpay','COD')),
  status text not null check (status in ('Pending','Shipped','Delivered')),
  total_inr integer not null,
  created_at timestamptz not null default now()
);

alter table public.orders enable row level security;

create policy "Users can view their own orders"
on public.orders
for select
using (auth.uid() = user_id);

create policy "Users can insert their own orders"
on public.orders
for insert
with check (auth.uid() = user_id);
