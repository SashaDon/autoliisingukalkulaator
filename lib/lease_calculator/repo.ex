defmodule LeaseCalculator.Repo do
  use Ecto.Repo,
    otp_app: :lease_calculator,
    adapter: Ecto.Adapters.Postgres
end
