import random

# Define a list of name components to be combined
name_components = ["kw", "gn", "gr", "kwag", "nak", "arl", "ish", "usk", "ust", "aug"]

# Generate 10 random names by combining two or three components
for i in range(10):
    name = ""
    num_components = random.randint(2, 3)
    for j in range(num_components):
        component = random.choice(name_components)
        # Add a random number of characters from the component, avoiding 3 consecutive consonants
        num_chars = random.randint(1, len(component))
        while num_chars > 1 and all(c in "bcdfghjklmnpqrstvwxyz" for c in component[:num_chars]):
            num_chars -= 1
        name += component[:num_chars]
    # Add a random suffix to the name
    suffixes = ["ish", "nak", "grak", "usk", "zok"]
    suffix = random.choice(suffixes)
    name += suffix
    # Capitalize the first letter of the name
    name = name.capitalize()
    print(name)