defmodule LeaseCalculatorWeb.ChannelsController do
  use LeaseCalculatorWeb, :controller

  def home(conn, %{"channel_id" => channel_id}) do
    # The home page is often custom made,
    # so skip the default app layout.

    IO.inspect(channel_id)

    render(conn, :home, layout: false, options: %{"channel_id": channel_id})
  end
end
