defmodule LeaseCalculatorWeb.RoomChannel do
  use Phoenix.Channel
  #use LeaseCaluclatorWeb, :channel

  def join("room:lobby", _message, socket) do
    #IO.inspect("joined")
    {:ok, socket}
  end

  #def join("room:12345", _params, _socket) do
  #  {:error, %{reason: "unauthorized"}}
  #end
end
