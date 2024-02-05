from sum_pairs import sum_pairs
import pytest

def test_01_one_pair():
    assert sum_pairs([1, 2, 3, 4, 5], 9) == [[4, 5]]

def test_02_two_pairs():
    assert sum_pairs([1, 2, 3, 4, 5], 7) == [[2, 5], [3, 4]]

def test_03_no_pairs():
    assert sum_pairs([3, 1, 5, 8, 2], 27) == "unable to find pairs"
