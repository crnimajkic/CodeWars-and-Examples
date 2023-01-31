const billboard = (name, price = 30) => [...name].reduce(x => x + price, 0)
