      const api_url =
	
	// api from https://api.twitchfa.com/v2/docs/#/default/TwitchController_getStreamers
	
        "https://api.twitchfa.com/v2/twitch/streamers?page=1&limit=5";

      async function getData() {
        // get streamers and views name list
        const response = await fetch(api_url);
        const twitchData = await response.json();
        const streamers = [0];
        const views = [0];
        const twitchfaData = twitchData.data;
        for (let i = 0; i < twitchfaData.length; i++) {
          streamers.push(twitchfaData[i].displayName);
          views.push(twitchfaData[i].viewers);
        }
        const xs = streamers;
        const ys = views;
        return { xs, ys };
      }
      // creating chart
      async function chartIt() {
        const data = await getData();
        const ctx = document.getElementById("myChart").getContext("2d");
        const myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: data.xs,
            datasets: [
              {
                fill: false,
                label: "views",
                data: data.ys,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          },
        });
        //   async function adddata() {
        //     const new_data = await getData();

        // //     if (myChart.data.datasets[0].data != new_data.ys) {
        //       console.log("namosavi");
        //       console.log(myChart.data.datasets[0].data);
        //       console.log(new_data.ys);
        //     }
        //     myChart.data.datasets[0].data = new_data.ys;
        //     Chart.update;
        //   }
        //   adddata();
      }

      chartIt();

      //setInterval(chartIt, 1000);
