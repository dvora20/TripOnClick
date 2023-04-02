//this function get otigin = at first of day will be the user address and wiil be the attraction that you want to find what near her
// and destinations = array of addreses to check
// return obj with the index of nearestAttractin and the distance and duration
// the minDistanceAddressIndex will be the same index of the attraction in your array
const findNearesAttraction = async (origin, destinations) => {

    let obj = {
        minDistanceAddressIndex: 0,
        distance: 0,
        duration: 0
    };
    const service = new window.google.maps.DistanceMatrixService();
    await service.getDistanceMatrix(
        {
            origins: [origin],
            destinations: destinations,
            travelMode: 'DRIVING',
            unitSystem: window.google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
        },
        (response, status) => {
            if (status === 'OK') {
                const distances = response.rows[0].elements.map(element => element.distance.value);
                // console.log(distances);
                const index = distances.indexOf(Math.min(...distances));
                obj.minDistanceAddressIndex = index;
                // console.log(obj.minDistanceAddressIndex)
                // console.log(response.rows[0].elements);
                obj.distance = response.rows[0].elements[index].distance.value;
                obj.duration = response.rows[0].elements[index].duration.value;
                // console.log(obj);
            } else {
                console.error(`Error: ${status}`);
            }
        }
    );

    return obj;
}
export default findNearesAttraction;