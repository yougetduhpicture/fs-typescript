interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (data: Array<number>, t: number): Result => {
    const periodLength: number = data.length;
    const trainingDays = data.filter((x: number) => x > 0 ).length;
    const trainingHours = data.reduce((acc, n) => acc + n, 0)
    const average: number = trainingHours / data.length;
    const success: boolean = average >= t;

    const rating = 
        average >= t ? 3
        : average < t ? 2
        : 1;

    const ratingDescription = rating === 3 ? "Target reached, keep it  going!" 
        : rating === 2 ? "Half way there, push just a bit more!"
        : rating === 1 ? "You're getting started, just get more hours in!"
        : "bad input"
    const target = t;

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }
}

try {
  console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
} catch (error) {
  console.log('Something went wrong: ');
}