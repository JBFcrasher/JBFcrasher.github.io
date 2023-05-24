function findLeastTime(boats, tracks) {
    // Generate all permutations of tracks
    const trackPermutations = permute(tracks);
  
    let leastTime = Infinity;
    let bestTrackOrder;
  
    // Iterate through each track permutation
    for (let i = 0; i < trackPermutations.length; i++) {
      const trackOrder = trackPermutations[i];
      let totalTime = 0;
  
      // Calculate total time for current track order
      for (let j = 0; j < boats.length; j++) {
        const boatTime = boats[j][trackOrder[j]];
        totalTime += boatTime;
      }
  
      // Update least time and best track order if the current time is lower
      if (totalTime < leastTime) {
        leastTime = totalTime;
        bestTrackOrder = trackOrder;
      }
    }
  
    return {
      leastTime: leastTime,
      bestTrackOrder: bestTrackOrder
    };
  }
  
  function permute(arr) {
    const result = [];
  
    // Base case: when array length is 1, return the array itself
    if (arr.length === 1) {
      result.push(arr);
      return result;
    }
  
    // Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];
      const remainingElements = arr.slice(0, i).concat(arr.slice(i + 1));
  
      // Recursively generate permutations of the remaining elements
      const permutations = permute(remainingElements);
  
      // Add current element to the beginning of each permutation
      for (let j = 0; j < permutations.length; j++) {
        result.push([currentElement].concat(permutations[j]));
      }
    }
  
    return result;
  }
  
  // Example usage
  const boats = [
    ["Damn the Torpedoes", "Midway", "Miss Behave", "Banshee", "Tidal Blade", "Thresher", "Cutthroat", "Rad Hazard", "Razorback", "Tinytanic", "Armed Response", "Blowfish", "Chumdinger"],
    ["1:40.23", "1:40.99", "1:32.63", "1:40.49", "1:47.36", "1:30.68", "1:39.06", "1:31.13", "1:44.96", "2:12.83", "1:44.53", "1:42.32", "2:59.26"],
    ["1:43.39", "1:43.18", "1:41.39", "1:37.18", "1:44.63", "1:31.82", "1:38.32", "1:34.29", "1:43.56", "2:13.56", "1:45.75", "1:44.23", "2:56.17"],
    ["1:38.75", "1:36.25", "1:34.89", "1:34.66", "1:45.79", "1:30.13", "1:38.23", "1:29.13", "1:41.23", "2:04.82", "1:43.13", "1:42.89", "2:51.20"],
    ["1:39.39", "1:36.99", "1:40.39", "1:31.29", "1:41.79", "1:26.23", "1:40.82", "1:26.13", "1:40.56", "2:05.32", "1:39.73", "1:37.73", "2:45.50"],
    ["1:38.89", "1:36.03", "1:32.29", "1:36.66", "1:39.03", "1:24.93", "1:40.23", "1:22.83", "1:39.43", "2:04.66", "1:39.36", "1:47.75", "2:55.00"],
    ["1:37.29", "1:32.53", "1:30.43", "1:26.09", "1:40.99", "1:18.56", "1:41.53", "1:21.65", "1:38.86", "1:58.89", "1:44.99", "1:46.29", "2:58.10"],
    ["1:35.99", "1:21.68", "1:42.09", "1:34.39", "1:40.32", "1:24.79", "1:32.18", "1:23.33", "1:36.66", "1:53.03", "1:36.09", "1:35.63", "2:41.62"],
    ["1:32.79", "1:29.99", "1:27.59", "1:26.03", "1:38.36", "1:18.65", "1:37.39", "1:22.43", "1:33.39", "1:56.09", "1:35.59", "1:33.73", "2:40.50"],
    ["1:39.53", "1:34.96", "1:37.23", "1:32.13", "1:41.56", "1:25.63", "1:37.73", "1:24.99", "1:40.49", "2:03.56", "1:41.23", "1:37.73", "2:55.14"],
    ["1:29.29", "1:35.75", "1:30.23", "1:23.23", "1:38.13", "1:26.53", "1:33.43", "1:18.65", "1:37.23", "1:54.23", "1:35.39", "1:28.23", "2:54.40"],
    ["1:35.73", "1:35.73", "1:33.49", "1:26.39", "1:40.16", "1:22.79", "1:37.06", "1:22.89", "1:39.99", "2:06.25", "1:33.68", "1:38.89", "2:48.50"],
    ["1:25.49", "1:20.96", "1:17.03", "1:18.15", "1:29.06", "1:12.49", "1:23.96", "1:13.36", "1:27.59", "1:46.39", "1:26.93", "1:28.49", "2:28.36"],
    ["1:43.66", "1:33.03", "1:31.46", "1:27.66", "1:39.79", "1:29.06", "1:43.82", "1:32.82", "1:45.43", "1:57.29", "1:40.03", "1:39.49", "2:52.74"]
  ];
  
  
  const tracks = [
    "Thunder Park", "Lost Island", "Arctic Circle", "Greek Isles", "Lake Powell",
    "The Far East", "Ship Graveyard", "Venice Canals", "New York Disaster",
    "Catacomb", "Hydro Speedway", "Castle Von Dandy", "Nile Adventure"
  ];
  
  const result = findLeastTime(boats, tracks);
  
  console.log("Least time:", result.leastTime);
  console.log("Best track order:", result.bestTrackOrder);
  

