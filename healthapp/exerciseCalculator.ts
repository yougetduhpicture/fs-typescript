interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

interface Args {
 t: number,
 data: Array<number>
}

const parseArgs = (args: string[]): Args => {
    if (args.length < 4) throw new Error('Not enough arguments');

    const t: number = Number(process.argv[2]);
    const data: Array<number> = process.argv.slice(3).map(x => Number(x));

    if ((!isNaN(Number(t))) && (data.every((x) => !isNaN(x)))) {
        return { t, data }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}


const calculateExercises = (data: Array<number>, t: number): Result => {
    const periodLength: number = data.length;
    const trainingDays = data.filter((x: number) => x > 0 ).length;
    const trainingHours = data.reduce((acc, n) => acc + n, 0)
    const average: number = trainingHours / data.length;
    const success: boolean = average >= t;

    const rating = 
        average >= t ? 3
        : average >= (t / 2) ? 2
        : 1;

    const ratingDescription = rating === 3 ? "Target reached, keep it going!" 
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
    const {t , data} = parseArgs(process.argv);
    console.log(calculateExercises(data, t));
} catch (error: unknown) {
   let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}

