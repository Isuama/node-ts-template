interface Distance {
    text: string;
    value: number;
}

interface Leg {
    distance: Distance;
}

interface Route {
    legs: Leg[];
}

interface RoutesResponse {
    routes: Route[];
}

{
  "routes" : [
    {
      "legs" : [
        {
          "distance" : {
            "text" : "2,064 mi",
            "value" : 3321004
          }
        }
      ]
    }
  ]
}

$.routes[0].legs[0].distance.value
