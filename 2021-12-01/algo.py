

def iterate(items):
    prev_no = None
    for item in items:
        item = int(item)
        action = "N/A"
        if prev_no:
            if item > prev_no:
                action = "increased"
            elif item < prev_no:
                action = "decreased"
            else:
                action = "no change"

        yield action
        prev_no = item


def algo(items):
    bank = list(iterate(items))
    return sum([1 for item in bank if item == "increased"])


def measurement_window_sumarizer(items):
    output = {}

    current = 0
    for idx, _ in enumerate(items):
        if len(items) > idx + 2:
            curr, n, nn = items[idx], items[idx+1], items[idx+2]
            output[current] = int(curr) + int(n) + int(nn)
        current = current+1

    keys = sorted(output.keys())
    results = []
    for item in keys:
        results.append(output[item])

    return results
