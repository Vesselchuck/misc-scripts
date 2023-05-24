import random

# Define a list of name components to be combined
name_components = ["ja", "ka", "ti", "fa", "va", "zor", "yak", "tho", "pra", "vok"]

# Define a list of vowels to insert between consonants
vowels = ["a", "e", "i", "o", "u"]

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
        # Insert vowels between consecutive consonants
        name += component[:num_chars]
        for k in range(num_chars - 1):
            if name[-1] in "bcdfghjklmnpqrstvwxyz" and name[-2] in "bcdfghjklmnpqrstvwxyz":
                name += random.choice(vowels)
        name += component[num_chars:]
    # Add a random suffix to the name
    suffixes = ["s", "th", "ak", "ir", "en"]
    suffix = random.choice(suffixes)
    name += suffix
    # Capitalize the first letter of the name
    name = name.capitalize()
    print(name)