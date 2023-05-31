defmodule LeaseCalculatorWeb.LiveCalculator do
  use LeaseCalculatorWeb, :live_view

  @topic "pointer"
  @event_new_location "new_location"
  def render(assigns) do
    ~H"""
      <LiveSvelte.render
        name="Header"
        props={%{}}
      />



      <LiveSvelte.render
        name="Calculator"
        props={%{user_id: @user_id, pointers: @pointers, carData: @carData, carLease2: @carData["carLease"], percentages2: @carData["percentages"], typeOfPerson2: @carData["typeOfPerson"], typeOfLease2: @carData["typeOfLease"], checked2: @carData["checked"], customPercent: @carData["customPercent"]}}
        class=""
      />
    """
  end

  def mount(params, _session, socket) do
    if params["session"] == nil do
      {:ok,
       push_navigate(socket,
         to: "/" <> for(_ <- 1..10, into: "", do: <<Enum.random('0123456789abcdef')>>),
         replace: true
       )}
    else
      LeaseCalculatorWeb.Endpoint.subscribe(@topic)

      new_user_id = Enum.random(1..1_000_000)

      updated =
        socket
        |> assign(:x, 50)
        |> assign(:y, 50)
        |> assign(:carData, %{
          "carLease" => %{price: 25000, period: 60, self_finance: 2500, price_left: 10000},
          "percentages" => %{
            self_finance: 10,
            price_left: 40
          },
          "typeOfPerson" => "private",
          "typeOfLease" => "kasutus",
          "checked2" => true,
          "customPercent" => 3.7
        })
        |> assign(:customData, %{newCustomPercent: 3.8})
        |> assign(:user_id, new_user_id)
        |> assign(:session, params["session"])
        |> assign(:name, nil)
        |> assign(:pointers, %{})

      {:ok, updated}
    end
  end

  def handle_event("set_session", %{"session" => ""}, socket), do: {:noreply, socket}

  def handle_event("set_session", %{"session" => session}, socket) do
    {:noreply, push_navigate(socket, to: "/" <> session, replace: true)}
  end

  def handle_event("new_session", _unsigned_params, socket) do
    {:noreply,
     push_navigate(socket,
       to: "/" <> for(_ <- 1..10, into: "", do: <<Enum.random('0123456789abcdef')>>),
       replace: true
     )}
  end

  def handle_event("cursor-move", %{"new_x" => x, "new_y" => y}, socket) do
    # IO.puts "new_cordinates"
    # IO.inspect x
    # IO.inspect y

    {:ok, datetime} = DateTime.now("Etc/UTC")
    unixtime = DateTime.to_unix(datetime)

    updated_socket =
      socket
      |> assign(
        :pointers,
        Map.put(socket.assigns.pointers, socket.assigns.user_id, %{x: x, y: y, unixtime: unixtime})
      )

    # IO.puts "updated_socket"
    # IO.inspect updated_socket

    # payload =
    #   %{}
    #   |> Map.put(:x, x)
    #   |> Map.put(:y, y)

    LeaseCalculatorWeb.Endpoint.broadcast(@topic, @event_new_location, updated_socket)

    {:noreply, updated_socket}
  end

  def handle_info(%{topic: @topic, event: @event_new_location, payload: incoming_socket}, socket) do
    # IO.inspect(incoming_socket.assigns.session == socket.assigns.session)

    if incoming_socket.assigns.session == socket.assigns.session do
      {:ok, datetime} = DateTime.now("Etc/UTC")
      unixtime = DateTime.to_unix(datetime)

      updated_socket =
        socket
        |> assign(
          :pointers,
          Map.put(
            socket.assigns.pointers,
            incoming_socket.assigns.user_id,
            Map.put(
              incoming_socket.assigns.pointers[incoming_socket.assigns.user_id],
              :unixtime,
              unixtime
            )
          )
        )

      # IO.puts "updated_socket"
      # IO.inspect updated_socket

      {:noreply, updated_socket}
    else
      {:noreply, socket}
    end
  end

  def handle_event(
        "updated-data",
        %{
          "carLease2" => carLease,
          "percentages2" => percentages,
          "typeOfPerson2" => typeOfPerson,
          "typeOfLease2" => typeOfLease,
          "checkedInverse" => checked,
          "customPercentNew" => customPercent
        },
        socket
      ) do
    IO.puts("socket")
    IO.inspect(socket.assigns)

    payload =
      socket
      |> assign(
        :carData,
        %{
          "carLease" => carLease,
          "percentages" => percentages,
          "typeOfPerson" => typeOfPerson,
          "typeOfLease" => typeOfLease,
          "checked" => checked,
          "customPercent" => customPercent
        }
      )

    LeaseCalculatorWeb.Endpoint.broadcast(@topic, "updated-data", payload)

    {:noreply, payload}
  end

  def handle_info(%{topic: @topic, event: "updated-data", payload: payload}, socket) do
    IO.puts("socket 1")
    IO.inspect(socket.assigns)
    IO.puts("-")
    IO.inspect(payload)

    if payload.assigns.session == socket.assigns.session do
      updated =
        socket
        |> assign(
          :carData,
          %{
            "carLease" => payload.assigns.carData["carLease"],
            "percentages" => payload.assigns.carData["percentages"],
            "typeOfPerson" => payload.assigns.carData["typeOfPerson"],
            "typeOfLease" => payload.assigns.carData["typeOfLease"],
            "checked" => payload.assigns.carData["checked"],
            "customPercent" => payload.assigns.carData["customPercent"]
          }
        )

      {:noreply, updated}
    else
      {:noreply, socket}
    end
  end
end
