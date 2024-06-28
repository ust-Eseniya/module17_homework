import { getPercents } from "../utils/percents.js";

describe("Проверка рассчёта процента от числа", () => {
    it("10% от 100 = 10", () => expect(getPercents(10, 100)).toBe(10));
    it("15% от 30 = 4.5", () => expect(getPercents(15, 30)).toBe(4.5));
    it("3% от 70 = 2.1", () => expect(getPercents(3, 70)).toBe(2.1));
    it("0% от 10 = 0", () => expect(getPercents(0, 10)).toBe(0));
});
