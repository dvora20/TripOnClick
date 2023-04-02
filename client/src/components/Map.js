// // export default function Map() {
    const DistanceAndDuration= async (origin, destination) =>{

        let obj = {
           distance: "",
           duration: "",
          // distancesArr: []
         };
         const service = new window.google.maps.DistanceMatrixService();
         await service.getDistanceMatrix(
           {
             origins: [origin],
             destinations: [destination],
             travelMode: 'DRIVING',
             unitSystem: window.google.maps.UnitSystem.METRIC,
             avoidHighways: false,
             avoidTolls: false,
           },
            (response, status) => {
             if (status === 'OK') {
               obj.distance = response.rows[0].elements[0].distance.value;
               obj.duration = response.rows[0].elements[0].duration.value;
              // obj.distancesArr = response.rows[0].elements.map(element=> element.distance.value)
       
       
       
             //  console.log(`The distance between the addresses is ${obj.distance}.`);
              //  console.log(`The duration between the addresses is ${obj.duration}.`);
       
             } else {
               console.error(`Error: ${status}`);
             }
           }
         );
       
          return obj;
       }
       
       //   const printRes = async () => {
       //       const origin = "יאיר שטרן 7 נתניה";
       //       const destination = "אגמים נתניה";
       //  const x= (await DistanceAndDuration(origin, destination))
       //       console.log(await x.distance);
       //       console.log(await x.duration);
       //     // console.log(await (await DistanceAndDuration(origin, destination)).duration);
       //       console.log("printing after return");
       
       //   }
       
       //   printRes();
       
        export default DistanceAndDuration;
       //}