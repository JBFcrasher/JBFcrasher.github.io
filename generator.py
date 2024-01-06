from itertools import permutations

# Define the list of boats and tracks
boats = ["Damn the Torpedoes", "Midway", "Miss Behave", "Banshee", "Tidal Blade", "Thresher", "Cutthroat", "Rad Hazard", "Razorback", "Tinytanic", "Armed Response", "Blowfish", "Chumdinger"]
tracks = ["Thunder Park", "Lost Island", "Arctic Circle", "Greek Isles", "Lake Powell", "The Far East", "Ship Graveyard", "Venice Canals", "NY Disaster", "Catacomb", "Hydro Speedway", "Castle Von Dandy", "Nile Adventure"]

# Generate all possible combinations using permutations
combinations = list(permutations(zip(boats, tracks)))

# Display the combinations
for combo in combinations:
    print(combo)
