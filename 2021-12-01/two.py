from algo import measurement_window_sumarizer, algo
"""
with open('exampleinput', 'r') as o:
    items = o.read().strip()
    # print(items)

    oopa = measurement_window_sumarizer(items.splitlines())
    print(oopa)
    print(algo(oopa))
"""
with open('input', 'r') as o:
    items = o.read().strip()
    # print(items)

    oopa = measurement_window_sumarizer(items.splitlines())
    # print(oopa)
    print(algo(oopa))
