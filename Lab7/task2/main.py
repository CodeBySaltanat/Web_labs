from models import Animal, Dog, Cat


def main():
    animal = Animal("Charlie", 4, "brown")
    dog = Dog("Buddy", 3, "black", "Labrador")
    cat = Cat("Luna", 2, "white", True)

    animals = [animal, dog, cat]

    print("=== Object Information ===")
    for item in animals:
        print(item)

    print("\n=== Basic Methods ===")
    for item in animals:
        print(item.eat())
        print(item.sleep())

    print("\n=== Polymorphism: speak() ===")
    for item in animals:
        print(item.speak())

    print("\n=== Child Class Unique Methods ===")
    print(dog.fetch())
    print(cat.climb())


if __name__ == "__main__":
    main()