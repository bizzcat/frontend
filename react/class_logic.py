"""
Finds the rolling average and the rolling maximum for windows of
two sizes: 3 and 20
Start with [0] index and i++ until i = N
Returns tuple with ((win1-avg), (win2-max), (win2-avg), (win2-max))
"""


def get_window(the_list, window_size, index):
    window_max = index + 1
    window_min = window_max - window_size
    window = the_list[window_min:window_max]
    return window


class AvgMedTuple_iter():

    def __init__(self):
        self.index = 0
        self.list = list(range(1, 41))
        self.window_sizes = [3, 20]

    def __iter__(self):
        return self

    def __next__(self):
        results = []

        if self.window_sizes[0] <= self.index + 1:
            window_one = get_window(
                self.list,
                self.window_sizes[0],
                self.index
                )
            window_one_average = int(sum(window_one)/len(window_one))
            window_one_max = max(window_one)
        else:
            window_one_average = None
            window_one_max = None

        if self.window_sizes[1] <= self.index + 1:
            window_two = get_window(
                self.list,
                self.window_sizes[1],
                self.index
                )
            window_two_average = int(sum(window_two)/len(window_two))
            window_two_max = max(window_two)
        else:
            window_two_average = None
            window_two_max = None

        results = [
            window_one_average,
            window_one_max,
            window_two_average,
            window_two_max
            ]

        if self.index < len(self.list):
            self.index += 1

        else:
            raise StopIteration

        return tuple(results)

for result in AvgMedTuple_iter():
    print(result)
