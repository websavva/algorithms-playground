export const sortNumbers = (numbers: number[]) => {
  for (let i = 0; i < numbers.length; i++) {
    let currentMinNumberIndex = i;

    for (let j = i + 1; j <= numbers.length; j++) {
      if (numbers[currentMinNumberIndex] > numbers[j])
        currentMinNumberIndex = j;
    }

    [numbers[i], numbers[currentMinNumberIndex]] = [
      numbers[currentMinNumberIndex],
      numbers[i],
    ];
  }

  return numbers;
};
