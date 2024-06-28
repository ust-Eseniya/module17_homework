export function getPercents ( number, percent) {

    if (percent < 0)
        return "Процент не может быть меньше нуля.";

    if (percent > 100)
        return "Процент не может быть больше ста.";

    if (number < 0)
        return "Ожидается положительное число.";

    return number / 100 * percent;
}
