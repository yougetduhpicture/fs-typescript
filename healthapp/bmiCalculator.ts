

interface Stats {
    height: number;
    weight: number;
}
 
const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])


const calculateBmi = (height: number, weight: number) => {
    
    let bmi = weight / (height / 100)**2;
    if (bmi < 18.5) {
        return 'underweight range';
    } else if ( bmi >= 18.5 && bmi < 25) {
        return 'normal range';
    } else if (bmi >= 25 && bmi < 30) {
        return 'overweight range';
    } else return 'obese range';
}
