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

            yield action
        prev_no = item


def algo(items):
    return sum([1 for item in iterate(items) if item == "increased"])
