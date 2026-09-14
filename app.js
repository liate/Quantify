// 1. Массив формул
const formulas = [
  // --- 5 КЛАСС ---
  {
    id: 1,
    title: "Периметр прямоугольника",
    math: "P = 2 \\cdot (a + b)",
    grade: 5,
    subject: "geometry",
    category: "perimeters",
    description: "Сумма длин всех сторон прямоугольника.",
    inputs: [
      { key: "a", label: "Сторона a" },
      { key: "b", label: "Сторона b" },
    ],
    calculate: (v) => 2 * (v.a + v.b),
  },
  {
    id: 2,
    title: "Площадь прямоугольника",
    math: "S = a \\cdot b",
    grade: 5,
    subject: "geometry",
    category: "shapes",
    description: "Произведение длины на ширину.",
    inputs: [
      { key: "a", label: "Сторона a" },
      { key: "b", label: "Сторона b" },
    ],
    calculate: (v) => v.a * v.b,
  },
  {
    id: 3,
    title: "Периметр квадрата",
    math: "P = 4 \\cdot a",
    grade: 5,
    subject: "geometry",
    category: "perimeters",
    description: "Сумма длин четырёх равных сторон квадрата.",
    inputs: [{ key: "a", label: "Сторона a" }],
    calculate: (v) => 4 * v.a,
  },
  {
    id: 4,
    title: "Площадь квадрата",
    math: "S = a^2",
    grade: 5,
    subject: "geometry",
    category: "shapes",
    description: "Квадрат длины его стороны.",
    inputs: [{ key: "a", label: "Сторона a" }],
    calculate: (v) => Math.pow(v.a, 2),
  },
  {
    id: 5,
    title: "Объём параллелепипеда",
    math: "V = a \\cdot b \\cdot c",
    grade: 5,
    subject: "geometry",
    category: "stereometry",
    description: "Произведение трёх измерений: длины, ширины и высоты.",
    inputs: [
      { key: "a", label: "Длина (a)" },
      { key: "b", label: "Ширина (b)" },
      { key: "c", label: "Высота (c)" },
    ],
    calculate: (v) => v.a * v.b * v.c,
  },
  {
    id: 6,
    title: "Площадь поверхности параллелепипеда",
    math: "S = 2 \\cdot (ab + bc + ac)",
    grade: 5,
    subject: "geometry",
    category: "stereometry",
    description: "Сумма площадей всех шести граней параллелепипеда.",
    inputs: [
      { key: "a", label: "Ребро a" },
      { key: "b", label: "Ребро b" },
      { key: "c", label: "Ребро c" },
    ],
    calculate: (v) => 2 * (v.a * v.b + v.b * v.c + v.a * v.c),
  },
  {
    id: 7,
    title: "Сумма длин рёбер параллелепипеда",
    math: "L = 4 \\cdot (a + b + c)",
    grade: 5,
    subject: "geometry",
    category: "stereometry",
    description: "Сумма длин всех 12 рёбер прямоугольного параллелепипеда.",
    inputs: [
      { key: "a", label: "Ребро a" },
      { key: "b", label: "Ребро b" },
      { key: "c", label: "Ребро c" },
    ],
    calculate: (v) => 4 * (v.a + v.b + v.c),
  },
  {
    id: 8,
    title: "Объём куба",
    math: "V = a^3",
    grade: 5,
    subject: "geometry",
    category: "stereometry",
    description: "Куб длины ребра куба.",
    inputs: [{ key: "a", label: "Ребро a" }],
    calculate: (v) => Math.pow(v.a, 3),
  },
  {
    id: 9,
    title: "Площадь поверхности куба",
    math: "S = 6 \\cdot a^2",
    grade: 5,
    subject: "geometry",
    category: "stereometry",
    description: "Сумма площадей шести равных квадратных граней.",
    inputs: [{ key: "a", label: "Ребро a" }],
    calculate: (v) => 6 * Math.pow(v.a, 2),
  },
  {
    id: 10,
    title: "Формула пути (расстояние)",
    math: "S = v \\cdot t",
    grade: 5,
    subject: "algebra",
    category: "equations",
    description: "Пройденное расстояние при равномерном движении.",
    inputs: [
      { key: "v", label: "Скорость (v)" },
      { key: "t", label: "Время (t)" },
    ],
    calculate: (v) => v.v * v.t,
  },
  {
    id: 11,
    title: "Формула скорости",
    math: "v = \\frac{S}{t}",
    grade: 5,
    subject: "algebra",
    category: "equations",
    description: "Скорость движения как отношение пути ко времени.",
    inputs: [
      { key: "S", label: "Расстояние (S)" },
      { key: "t", label: "Время (t)" },
    ],
    calculate: (v) => (v.t !== 0 ? v.S / v.t : "Время не может быть равно 0"),
  },
  {
    id: 12,
    title: "Формула времени движения",
    math: "t = \\frac{S}{v}",
    grade: 5,
    subject: "algebra",
    category: "equations",
    description: "Время движения как отношение пути к скорости.",
    inputs: [
      { key: "S", label: "Расстояние (S)" },
      { key: "v", label: "Скорость (v)" },
    ],
    calculate: (v) =>
      v.v !== 0 ? v.S / v.v : "Скорость не может быть равна 0",
  },
  {
    id: 13,
    title: "Скорость по течению реки",
    math: "v_{\\text{по теч.}} = v_{\\text{собст.}} + v_{\\text{теч.}}",
    grade: 5,
    subject: "algebra",
    category: "equations",
    description: "Сумма собственной скорости объекта и скорости течения.",
    inputs: [
      { key: "v_self", label: "Собственная скорость" },
      { key: "v_flow", label: "Скорость течения" },
    ],
    calculate: (v) => v.v_self + v.v_flow,
  },
  {
    id: 14,
    title: "Скорость против течения реки",
    math: "v_{\\text{против теч.}} = v_{\\text{собст.}} - v_{\\text{теч.}}",
    grade: 5,
    subject: "algebra",
    category: "equations",
    description: "Разность собственной скорости объекта и скорости течения.",
    inputs: [
      { key: "v_self", label: "Собственная скорость" },
      { key: "v_flow", label: "Скорость течения" },
    ],
    calculate: (v) => v.v_self - v.v_flow,
  },
  {
    id: 15,
    title: "Стоимость покупки",
    math: "C = a \\cdot n",
    grade: 5,
    subject: "algebra",
    category: "equations",
    description:
      "Общая стоимость как произведение цены за единицу товара на количество.",
    inputs: [
      { key: "a", label: "Цена товара (a)" },
      { key: "n", label: "Количество (n)" },
    ],
    calculate: (v) => v.a * v.n,
  },
  {
    id: 16,
    title: "Работа (производительность)",
    math: "A = v \\cdot t",
    grade: 5,
    subject: "algebra",
    category: "equations",
    description: "Объём выполненной работы через производительность и время.",
    inputs: [
      { key: "v", label: "Производительность (v)" },
      { key: "t", label: "Время (t)" },
    ],
    calculate: (v) => v.v * v.t,
  },
  {
    id: 17,
    title: "Деление с остатком",
    math: "a = b \\cdot q + r",
    grade: 5,
    subject: "algebra",
    category: "equations",
    description:
      "Представление делимого через делитель, неполное частное и остаток.",
    inputs: [
      { key: "b", label: "Делитель (b)" },
      { key: "q", label: "Неполное частное (q)" },
      { key: "r", label: "Остаток (r)" },
    ],
    calculate: (v) => v.b * v.q + v.r,
  },
  {
    id: 18,
    title: "Среднее арифметическое",
    math: "M = \\frac{a_1 + a_2 + \\dots + a_n}{n}",
    grade: 5,
    subject: "algebra",
    category: "equations",
    description:
      "Вычисляет среднее арифметическое двух или трёх введённых чисел.",
    inputs: [
      { key: "a1", label: "Число 1" },
      { key: "a2", label: "Число 2" },
      { key: "a3", label: "Число 3 (опционально: 0)" },
    ],
    calculate: (v) => (v.a1 + v.a2 + v.a3) / (v.a3 !== 0 ? 3 : 2),
  },
  {
    id: 19,
    title: "Нахождение 1% от числа",
    math: "\\frac{A}{100}",
    grade: 5,
    subject: "algebra",
    category: "powers_and_logs",
    description: "Сотая часть от заданного числа A.",
    inputs: [{ key: "A", label: "Число A" }],
    calculate: (v) => v.A / 100,
  },
  {
    id: 20,
    title: "Нахождение p% от числа A",
    math: "B = A \\cdot \\frac{p}{100}",
    grade: 5,
    subject: "algebra",
    category: "powers_and_logs",
    description: "Значение указанного процента p от числа A.",
    inputs: [
      { key: "A", label: "Число A" },
      { key: "p", label: "Процент p" },
    ],
    calculate: (v) => (v.A * v.p) / 100,
  },
  {
    id: 21,
    title: "Переместительный закон сложения",
    math: "a + b = b + a",
    grade: 5,
    subject: "algebra",
    category: "abbreviated_multiplication",
    description: "От перестановки слагаемых сумма не меняется.",
    inputs: [
      { key: "a", label: "Слагаемое a" },
      { key: "b", label: "Слагаемое b" },
    ],
    calculate: (v) => `${v.a + v.b} = ${v.b + v.a}`,
  },
  {
    id: 22,
    title: "Переместительный закон умножения",
    math: "a \\cdot b = b \\cdot a",
    grade: 5,
    subject: "algebra",
    category: "abbreviated_multiplication",
    description: "От перестановки множителей произведение не меняется.",
    inputs: [
      { key: "a", label: "Множитель a" },
      { key: "b", label: "Множитель b" },
    ],
    calculate: (v) => `${v.a * v.b} = ${v.b * v.a}`,
  },
  {
    id: 23,
    title: "Распределительный закон",
    math: "a \\cdot (b + c) = a \\cdot b + a \\cdot c",
    grade: 5,
    subject: "algebra",
    category: "abbreviated_multiplication",
    description: "Умножение числа на сумму двух слагаемых.",
    inputs: [
      { key: "a", label: "Число a" },
      { key: "b", label: "Число b" },
      { key: "c", label: "Число c" },
    ],
    calculate: (v) => v.a * (v.b + v.c),
  },

  // --- 6 КЛАСС ---
  {
    id: 24,
    title: "Основное свойство дроби",
    math: "\\frac{a}{b} = \\frac{a \\cdot c}{b \\cdot c}",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description:
      "Увеличение числителя и знаменателя в c раз сохраняет значение дроби.",
    inputs: [
      { key: "a", label: "Числитель a" },
      { key: "b", label: "Знаменатель b" },
      { key: "c", label: "Множитель c (c≠0)" },
    ],
    calculate: (v) =>
      v.b !== 0 && v.c !== 0
        ? `${v.a * v.c}/${v.b * v.c}`
        : "Знаменатель и c не могут быть 0",
  },
  {
    id: 25,
    title: "Умножение обыкновенных дробей",
    math: "\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description: "Перемножаются отдельно числители и знаменатели.",
    inputs: [
      { key: "a", label: "a" },
      { key: "b", label: "b" },
      { key: "c", label: "c" },
      { key: "d", label: "d" },
    ],
    calculate: (v) =>
      v.b * v.d !== 0
        ? `${v.a * v.c}/${v.b * v.d} (${(v.a * v.c) / (v.b * v.d)})`
        : "Знаменатель не равен 0",
  },
  {
    id: 26,
    title: "Деление обыкновенных дробей",
    math: "\\frac{a}{b} : \\frac{c}{d} = \\frac{a \\cdot d}{b \\cdot c}",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description: "Умножение первой дроби на перевёрнутую вторую.",
    inputs: [
      { key: "a", label: "a" },
      { key: "b", label: "b" },
      { key: "c", label: "c" },
      { key: "d", label: "d" },
    ],
    calculate: (v) =>
      v.b * v.c !== 0
        ? `${v.a * v.d}/${v.b * v.c} (${(v.a * v.d) / (v.b * v.c)})`
        : "Знаменатель не равен 0",
  },
  {
    id: 27,
    title: "Основное свойство пропорции",
    math: "\\text{Если } \\frac{a}{b} = \\frac{c}{d}, \\text{ то } a \\cdot d = b \\cdot c",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description:
      "Произведение крайних членов пропорции равно произведению средних.",
    inputs: [
      { key: "a", label: "a" },
      { key: "b", label: "b" },
      { key: "c", label: "c" },
      { key: "d", label: "d" },
    ],
    calculate: (v) =>
      `ad = ${v.a * v.d}, bc = ${v.b * v.c} (${v.a * v.d === v.b * v.c ? "Верная пропорция" : "Неверная пропорция"})`,
  },
  {
    id: 28,
    title: "Модуль числа",
    math: "|a| = \\begin{cases} a, & \\text{если } a \\ge 0 \\\\ -a, & \\text{если } a < 0 \\end{cases}",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description:
      "Абсолютная величина числа (расстояние до нуля на координатной прямой).",
    inputs: [{ key: "a", label: "Число a" }],
    calculate: (v) => Math.abs(v.a),
  },
  {
    id: 29,
    title: "Сложение чисел с разными знаками",
    math: "a + (-b) = a - b",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description:
      "Прибавление отрицательного числа эквивалентно вычитанию его модуля.",
    inputs: [
      { key: "a", label: "Число a" },
      { key: "b", label: "Модуль отрицательного b" },
    ],
    calculate: (v) => v.a - v.b,
  },
  {
    id: 30,
    title: "Умножение отрицательных чисел",
    math: "(-a) \\cdot (-b) = a \\cdot b",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description: "Произведение двух отрицательных чисел всегда положительно.",
    inputs: [
      { key: "a", label: "Модуль первого числа (a)" },
      { key: "b", label: "Модуль второго числа (b)" },
    ],
    calculate: (v) => Math.abs(v.a) * Math.abs(v.b),
  },
  {
    id: 31,
    title: "Умножение чисел с разными знаками",
    math: "(-a) \\cdot b = -(a \\cdot b)",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description: "Произведение чисел с разными знаками всегда отрицательно.",
    inputs: [
      { key: "a", label: "Модуль первого (a)" },
      { key: "b", label: "Модуль второго (b)" },
    ],
    calculate: (v) => -(Math.abs(v.a) * Math.abs(v.b)),
  },
  {
    id: 32,
    title: "Длина окружности (через диаметр)",
    math: "C = \\pi \\cdot d",
    grade: 6,
    subject: "geometry",
    category: ["circles", "perimeters"],
    description: "Вычисление длины границы круга через диаметр.",
    inputs: [{ key: "d", label: "Диаметр (d)" }],
    calculate: (v) => Math.PI * v.d,
  },
  {
    id: 33,
    title: "Длина окружности (через радиус)",
    math: "C = 2 \\pi r",
    grade: 6,
    subject: "geometry",
    category: ["circles", "perimeters"],
    description: "Вычисление длины границы круга через радиус.",
    inputs: [{ key: "r", label: "Радиус (r)" }],
    calculate: (v) => 2 * Math.PI * v.r,
  },
  {
    id: 34,
    title: "Площадь круга",
    math: "S = \\pi r^2",
    grade: 6,
    subject: "geometry",
    category: "circles",
    description: "Площадь области, ограниченной окружностью радиуса r.",
    inputs: [{ key: "r", label: "Радиус (r)" }],
    calculate: (v) => Math.PI * Math.pow(v.r, 2),
  },
  {
    id: 35,
    title: "Зависимость диаметра и радиуса",
    math: "d = 2r",
    grade: 6,
    subject: "geometry",
    category: "circles",
    description: "Диаметр окружности равен двум радиусам.",
    inputs: [{ key: "r", label: "Радиус (r)" }],
    calculate: (v) => 2 * v.r,
  },
  {
    id: 191,
    title: "Площадь круга через диаметр",
    math: "S = \\frac{\\pi D^2}{4}",
    grade: 6,
    subject: "geometry",
    category: "circles",
    description: "Площадь круга, выраженная через его диаметр.",
    inputs: [{ key: "D", label: "Диаметр (D)" }],
    calculate: (v) => (Math.PI * v.D ** 2) / 4,
  },
  {
    id: 192,
    title: "Уравнение окружности с центром в начале координат",
    math: "r^2 = x^2 + y^2",
    grade: 9,
    subject: "geometry",
    category: "circles",
    description:
      "Радиус окружности с центром в начале координат, проходящей через точку (x, y).",
    inputs: [
      { key: "x", label: "Координата x" },
      { key: "y", label: "Координата y" },
    ],
    calculate: (v) => Math.sqrt(v.x ** 2 + v.y ** 2),
  },
  {
    id: 193,
    title: "Свойство отрезков касательных из одной точки",
    math: "AB = AC",
    grade: 8,
    subject: "geometry",
    category: "circles",
    description:
      "Отрезки двух касательных к окружности, проведённых из одной точки, равны между собой.",
    inputs: [{ key: "AB", label: "Отрезок касательной AB" }],
    calculate: (v) => v.AB,
  },
  {
    id: 194,
    title: "Произведение отрезков двух секущих",
    math: "AQ \\cdot BQ = CQ \\cdot DQ",
    grade: 9,
    subject: "geometry",
    category: "circles",
    description:
      "Если из точки вне окружности проведены две секущие, произведения отрезков каждой из них равны.",
    inputs: [
      { key: "AQ", label: "Отрезок AQ" },
      { key: "BQ", label: "Отрезок BQ" },
      { key: "CQ", label: "Отрезок CQ" },
    ],
    calculate: (v) => (v.AQ * v.BQ) / v.CQ,
  },
  {
    id: 195,
    title: "Секущая и касательная из одной точки",
    math: "AQ \\cdot BQ = CQ^2",
    grade: 9,
    subject: "geometry",
    category: "circles",
    description:
      "Квадрат отрезка касательной равен произведению отрезков секущей, проведённых из одной точки.",
    inputs: [
      { key: "AQ", label: "Отрезок AQ" },
      { key: "BQ", label: "Отрезок BQ" },
    ],
    calculate: (v) => Math.sqrt(v.AQ * v.BQ),
  },
  {
    id: 196,
    title: "Длина хорды через центральный угол",
    math: "AB = 2r \\sin \\frac{\\alpha}{2}",
    grade: 9,
    subject: "geometry",
    category: "circles",
    description: "Длина хорды окружности через радиус и центральный угол.",
    inputs: [
      { key: "r", label: "Радиус (r)" },
      { key: "alpha", label: "Угол α (в градусах)" },
    ],
    calculate: (v) => 2 * v.r * Math.sin((v.alpha * Math.PI) / 360),
  },
  {
    id: 197,
    title: "Длина хорды через вписанный угол",
    math: "AB = 2r \\sin \\alpha",
    grade: 9,
    subject: "geometry",
    category: "circles",
    description: "Длина хорды окружности через радиус и вписанный угол.",
    inputs: [
      { key: "r", label: "Радиус (r)" },
      { key: "alpha", label: "Угол α (в градусах)" },
    ],
    calculate: (v) => 2 * v.r * Math.sin((v.alpha * Math.PI) / 180),
  },

  // --- 7 КЛАСС ---
  {
    id: 36,
    title: "Квадрат суммы",
    math: "(a + b)^2 = a^2 + 2ab + b^2",
    grade: 7,
    subject: "algebra",
    category: "abbreviated_multiplication",
    description: "Формула сокращённого умножения для квадрата суммы.",
    inputs: [
      { key: "a", label: "Число a" },
      { key: "b", label: "Число b" },
    ],
    calculate: (v) => Math.pow(v.a + v.b, 2),
  },
  {
    id: 37,
    title: "Квадрат разности",
    math: "(a - b)^2 = a^2 - 2ab + b^2",
    grade: 7,
    subject: "algebra",
    category: "abbreviated_multiplication",
    description: "Формула сокращённого умножения для квадрата разности.",
    inputs: [
      { key: "a", label: "Число a" },
      { key: "b", label: "Число b" },
    ],
    calculate: (v) => Math.pow(v.a - v.b, 2),
  },
  {
    id: 38,
    title: "Разность квадратов",
    math: "a^2 - b^2 = (a - b)(a + b)",
    grade: 7,
    subject: "algebra",
    category: "abbreviated_multiplication",
    description: "Разложение разности квадратов на множители.",
    inputs: [
      { key: "a", label: "Число a" },
      { key: "b", label: "Число b" },
    ],
    calculate: (v) => Math.pow(v.a, 2) - Math.pow(v.b, 2),
  },
  {
    id: 39,
    title: "Куб суммы",
    math: "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3",
    grade: 7,
    subject: "algebra",
    category: "abbreviated_multiplication",
    description: "Куб суммы двух выражений.",
    inputs: [
      { key: "a", label: "Число a" },
      { key: "b", label: "Число b" },
    ],
    calculate: (v) => Math.pow(v.a + v.b, 3),
  },
  {
    id: 40,
    title: "Куб разности",
    math: "(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3",
    grade: 7,
    subject: "algebra",
    category: "abbreviated_multiplication",
    description: "Куб разности двух выражений.",
    inputs: [
      { key: "a", label: "Число a" },
      { key: "b", label: "Число b" },
    ],
    calculate: (v) => Math.pow(v.a - v.b, 3),
  },
  {
    id: 41,
    title: "Сумма кубов",
    math: "a^3 + b^3 = (a + b)(a^2 - ab + b^2)",
    grade: 7,
    subject: "algebra",
    category: "abbreviated_multiplication",
    description: "Разложение суммы кубов на множители.",
    inputs: [
      { key: "a", label: "Число a" },
      { key: "b", label: "Число b" },
    ],
    calculate: (v) => Math.pow(v.a, 3) + Math.pow(v.b, 3),
  },
  {
    id: 42,
    title: "Разность кубов",
    math: "a^3 - b^3 = (a - b)(a^2 + ab + b^2)",
    grade: 7,
    subject: "algebra",
    category: "abbreviated_multiplication",
    description: "Разложение разности кубов на множители.",
    inputs: [
      { key: "a", label: "Число a" },
      { key: "b", label: "Число b" },
    ],
    calculate: (v) => Math.pow(v.a, 3) - Math.pow(v.b, 3),
  },
  {
    id: 43,
    title: "Умножение степеней",
    math: "a^m \\cdot a^n = a^{m+n}",
    grade: 7,
    subject: "algebra",
    category: "powers_and_logs",
    description:
      "При умножении степеней с одинаковыми основаниями показатели складываются.",
    inputs: [
      { key: "a", label: "Основание a" },
      { key: "m", label: "Показатель m" },
      { key: "n", label: "Показатель n" },
    ],
    calculate: (v) => Math.pow(v.a, v.m + v.n),
  },
  {
    id: 44,
    title: "Деление степеней",
    math: "a^m : a^n = a^{m-n}",
    grade: 7,
    subject: "algebra",
    category: "powers_and_logs",
    description:
      "При делении степеней с одинаковыми основаниями показатели вычитаются.",
    inputs: [
      { key: "a", label: "Основание a" },
      { key: "m", label: "Показатель m" },
      { key: "n", label: "Показатель n" },
    ],
    calculate: (v) =>
      v.a !== 0 ? Math.pow(v.a, v.m - v.n) : "a не может быть 0",
  },
  {
    id: 45,
    title: "Возведение степени в степень",
    math: "(a^m)^n = a^{m \\cdot n}",
    grade: 7,
    subject: "algebra",
    category: "powers_and_logs",
    description: "При возведении степени в степень показатели перемножаются.",
    inputs: [
      { key: "a", label: "Основание a" },
      { key: "m", label: "Показатель m" },
      { key: "n", label: "Показатель n" },
    ],
    calculate: (v) => Math.pow(v.a, v.m * v.n),
  },
  {
    id: 46,
    title: "Степень произведения",
    math: "(a \\cdot b)^n = a^n \\cdot b^n",
    grade: 7,
    subject: "algebra",
    category: "powers_and_logs",
    description: "Каждый множитель возводится в данную степень.",
    inputs: [
      { key: "a", label: "Множитель a" },
      { key: "b", label: "Множитель b" },
      { key: "n", label: "Степень n" },
    ],
    calculate: (v) => Math.pow(v.a * v.b, v.n),
  },
  {
    id: 47,
    title: "Степень с нулевым показателем",
    math: "a^0 = 1 \\quad (a \\neq 0)",
    grade: 7,
    subject: "algebra",
    category: "powers_and_logs",
    description: "Любое ненулевое число в нулевой степени равно 1.",
    inputs: [{ key: "a", label: "Основание a (a≠0)" }],
    calculate: (v) => (v.a !== 0 ? 1 : "0 в степени 0 не определено"),
  },
  {
    id: 48,
    title: "Линейная функция",
    math: "y = kx + b",
    grade: 7,
    subject: "algebra",
    category: "equations",
    description:
      "Вычисление значения y по аргументу x, угловому коэффициенту k и сдвигу b.",
    inputs: [
      { key: "k", label: "Коэффициент k" },
      { key: "x", label: "Аргумент x" },
      { key: "b", label: "Свободный член b" },
    ],
    calculate: (v) => v.k * v.x + v.b,
  },
  {
    id: 49,
    title: "Сумма углов треугольника",
    math: "\\alpha + \\beta + \\gamma = 180^\\circ",
    grade: 7,
    subject: "geometry",
    category: "triangles",
    description: "Находит третий угол треугольника по двум известным.",
    inputs: [
      { key: "alpha", label: "Угол α (град)" },
      { key: "beta", label: "Угол β (град)" },
    ],
    calculate: (v) => 180 - v.alpha - v.beta,
  },
  {
    id: 50,
    title: "Внешний угол треугольника",
    math: "\\alpha_{\\text{внеш}} = \\beta + \\gamma",
    grade: 7,
    subject: "geometry",
    category: "triangles",
    description:
      "Внешний угол равен сумме двух внутренних углов, не смежных с ним.",
    inputs: [
      { key: "beta", label: "Угол β (град)" },
      { key: "gamma", label: "Угол γ (град)" },
    ],
    calculate: (v) => v.beta + v.gamma,
  },
  {
    id: 51,
    title: "Неравенство треугольника",
    math: "a < b + c",
    grade: 7,
    subject: "geometry",
    category: "triangles",
    description:
      "Проверяет возможность существования треугольника по двум сторонам b и c.",
    inputs: [
      { key: "b", label: "Сторона b" },
      { key: "c", label: "Сторона c" },
    ],
    calculate: (v) => `Макс. допустимая длина стороны a < ${v.b + v.c}`,
  },
  {
    id: 52,
    title: "Периметр равнобедренного треугольника",
    math: "P = 2a + b",
    grade: 7,
    subject: "geometry",
    category: ["triangles", "perimeters"],
    description: "Периметр треугольника с боковыми сторонами a и основанием b.",
    inputs: [
      { key: "a", label: "Боковая сторона a" },
      { key: "b", label: "Основание b" },
    ],
    calculate: (v) => 2 * v.a + v.b,
  },
  {
    id: 53,
    title: "Свойство смежных углов",
    math: "\\alpha + \\beta = 180^\\circ",
    grade: 7,
    subject: "geometry",
    category: "triangles",
    description: "Сумма двух смежных углов равна 180 градусов.",
    inputs: [{ key: "alpha", label: "Угол α (град)" }],
    calculate: (v) => 180 - v.alpha,
  },
  {
    id: 54,
    title: "Свойство вертикальных углов",
    math: "\\alpha = \\beta",
    grade: 7,
    subject: "geometry",
    category: "triangles",
    description: "Вертикальные углы равны между собой.",
    inputs: [{ key: "alpha", label: "Угол α (град)" }],
    calculate: (v) => v.alpha,
  },

  // --- 8 КЛАСС ---
  {
    id: 55,
    title: "Дискриминант",
    math: "D = b^2 - 4ac",
    grade: 8,
    subject: "algebra",
    category: "equations",
    description:
      "Определяет количество вещественных корней квадратного уравнения ax² + bx + c = 0.",
    inputs: [
      { key: "a", label: "Коэффициент a" },
      { key: "b", label: "Коэффициент b" },
      { key: "c", label: "Коэффициент c" },
    ],
    calculate: (v) => Math.pow(v.b, 2) - 4 * v.a * v.c,
  },
  {
    id: 56,
    title: "Корни квадратного уравнения",
    math: "x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}",
    grade: 8,
    subject: "algebra",
    category: "equations",
    description: "Нахождение корней уравнения через дискриминант.",
    inputs: [
      { key: "a", label: "Коэффициент a" },
      { key: "b", label: "Коэффициент b" },
      { key: "c", label: "Коэффициент c" },
    ],
    calculate: (v) => {
      if (v.a === 0) return "Ошибка: a не может быть равно 0";
      const d = Math.pow(v.b, 2) - 4 * v.a * v.c;
      if (d < 0) return "Нет действительных корней (D < 0)";
      if (d === 0) return `x = ${-v.b / (2 * v.a)}`;
      const x1 = (-v.b + Math.sqrt(d)) / (2 * v.a);
      const x2 = (-v.b - Math.sqrt(d)) / (2 * v.a);
      return `x₁ = ${x1}, x₂ = ${x2}`;
    },
  },
  {
    id: 57,
    title: "Теорема Виета (приведённое)",
    math: "x_1 + x_2 = -p, \\quad x_1 \\cdot x_2 = q",
    grade: 8,
    subject: "algebra",
    category: "equations",
    description: "Связывает корни уравнения x² + px + q = 0 с коэффициентами.",
    inputs: [
      { key: "p", label: "Коэффициент p" },
      { key: "q", label: "Коэффициент q" },
    ],
    calculate: (v) => `Сумма корней = ${-v.p}, Произведение корней = ${v.q}`,
  },
  {
    id: 58,
    title: "Разложение квадратного трёхчлена",
    math: "ax^2 + bx + c = a(x - x_1)(x - x_2)",
    grade: 8,
    subject: "algebra",
    category: "equations",
    description:
      "Представление трёхчлена в виде произведения с использованием его корней.",
    inputs: [
      { key: "a", label: "Коэффициент a" },
      { key: "x1", label: "Корень x1" },
      { key: "x2", label: "Корень x2" },
    ],
    calculate: (v) => `${v.a}(x - ${v.x1})(x - ${v.x2})`,
  },
  {
    id: 59,
    title: "Свойства квадратного корня (умножение)",
    math: "\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b} \\quad (a, b \\ge 0)",
    grade: 8,
    subject: "algebra",
    category: "powers_and_logs",
    description:
      "Корень из произведения неотрицательных чисел равен произведению их корней.",
    inputs: [
      { key: "a", label: "Число a (a≥0)" },
      { key: "b", label: "Число b (b≥0)" },
    ],
    calculate: (v) =>
      v.a >= 0 && v.b >= 0 ? Math.sqrt(v.a * v.b) : "Числа должны быть ≥ 0",
  },
  {
    id: 60,
    title: "Свойства квадратного корня (деление)",
    math: "\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\quad (a \\ge 0, b > 0)",
    grade: 8,
    subject: "algebra",
    category: "powers_and_logs",
    description:
      "Корень из частного равен отношению корней числителя и знаменателя.",
    inputs: [
      { key: "a", label: "Число a (a≥0)" },
      { key: "b", label: "Число b (b>0)" },
    ],
    calculate: (v) =>
      v.a >= 0 && v.b > 0
        ? Math.sqrt(v.a / v.b)
        : "Некорректные значения (a≥0, b>0)",
  },
  {
    id: 61,
    title: "Квадрат корня",
    math: "(\\sqrt{a})^2 = a \\quad (a \\ge 0)",
    grade: 8,
    subject: "algebra",
    category: "powers_and_logs",
    description: "Возведение арифметического квадратного корня в квадрат.",
    inputs: [{ key: "a", label: "Число a (a≥0)" }],
    calculate: (v) => (v.a >= 0 ? v.a : "a должно быть ≥ 0"),
  },
  {
    id: 62,
    title: "Корень из квадрата",
    math: "\\sqrt{a^2} = |a|",
    grade: 8,
    subject: "algebra",
    category: "powers_and_logs",
    description:
      "Извлечение квадратного корня из квадрата числа равен модулю этого числа.",
    inputs: [{ key: "a", label: "Число a" }],
    calculate: (v) => Math.abs(v.a),
  },
  {
    id: 63,
    title: "Степень с отрицательным показателем",
    math: "a^{-n} = \\frac{1}{a^n} \\quad (a \\neq 0)",
    grade: 8,
    subject: "algebra",
    category: "powers_and_logs",
    description:
      "Замена отрицательного показателя степени на обратную величину.",
    inputs: [
      { key: "a", label: "Основание a (a≠0)" },
      { key: "n", label: "Показатель n" },
    ],
    calculate: (v) =>
      v.a !== 0 ? 1 / Math.pow(v.a, v.n) : "a не может быть 0",
  },
  {
    id: 64,
    title: "Теорема Пифагора",
    math: "a^2 + b^2 = c^2",
    grade: 8,
    subject: "geometry",
    category: "triangles",
    description:
      "Нахождение гипотенузы c прямоугольного треугольника по двум катетам.",
    inputs: [
      { key: "a", label: "Катет a" },
      { key: "b", label: "Катет b" },
    ],
    calculate: (v) => Math.sqrt(Math.pow(v.a, 2) + Math.pow(v.b, 2)),
  },
  {
    id: 65,
    title: "Площадь параллелограмма",
    math: "S = a \\cdot h_a",
    grade: 8,
    subject: "geometry",
    category: "shapes",
    description:
      "Площадь параллелограмма через сторону и опущенную на неё высоту.",
    inputs: [
      { key: "a", label: "Сторона a" },
      { key: "ha", label: "Высота h_a" },
    ],
    calculate: (v) => v.a * v.ha,
  },
  {
    id: 66,
    title: "Площадь треугольника",
    math: "S = \\frac{1}{2} a \\cdot h",
    grade: 8,
    subject: "geometry",
    category: ["triangles", "shapes"],
    description:
      "Площадь треугольника равна половине произведения стороны на высоту.",
    inputs: [
      { key: "a", label: "Сторона a" },
      { key: "h", label: "Высота h" },
    ],
    calculate: (v) => 0.5 * v.a * v.h,
  },
  {
    id: 67,
    title: "Площадь прямоугольного треугольника",
    math: "S = \\frac{1}{2} a \\cdot b",
    grade: 8,
    subject: "geometry",
    category: ["triangles", "shapes"],
    description:
      "Площадь прямоугольного треугольника равна половине произведения катетов.",
    inputs: [
      { key: "a", label: "Катет a" },
      { key: "b", label: "Катет b" },
    ],
    calculate: (v) => 0.5 * v.a * v.b,
  },
  {
    id: 68,
    title: "Площадь ромба (через диагонали)",
    math: "S = \\frac{1}{2} d_1 \\cdot d_2",
    grade: 8,
    subject: "geometry",
    category: "shapes",
    description: "Площадь ромба равна полупроизведению его диагоналей.",
    inputs: [
      { key: "d1", label: "Диагональ d1" },
      { key: "d2", label: "Диагональ d2" },
    ],
    calculate: (v) => 0.5 * v.d1 * v.d2,
  },
  {
    id: 69,
    title: "Площадь трапеции",
    math: "S = \\frac{a + b}{2} \\cdot h",
    grade: 8,
    subject: "geometry",
    category: ["trapezoid", "shapes"],
    description:
      "Площадь трапеции равна произведению полусуммы оснований на высоту.",
    inputs: [
      { key: "a", label: "Основание a" },
      { key: "b", label: "Основание b" },
      { key: "h", label: "Высота h" },
    ],
    calculate: (v) => ((v.a + v.b) / 2) * v.h,
  },
  {
    id: 70,
    title: "Средняя линия треугольника",
    math: "m = \\frac{1}{2} a",
    grade: 8,
    subject: "geometry",
    category: "triangles",
    description: "Средняя линия равна половине параллельной ей стороны.",
    inputs: [{ key: "a", label: "Параллельная сторона a" }],
    calculate: (v) => 0.5 * v.a,
  },
  {
    id: 71,
    title: "Средняя линия трапеции",
    math: "m = \\frac{a + b}{2}",
    grade: 8,
    subject: "geometry",
    category: "trapezoid",
    description: "Средняя линия трапеции равна полусумме её оснований.",
    inputs: [
      { key: "a", label: "Основание a" },
      { key: "b", label: "Основание b" },
    ],
    calculate: (v) => (v.a + v.b) / 2,
  },
  {
    id: 72,
    title: "Синус острого угла (Sin)",
    math: "\\sin \\alpha = \\frac{\\text{противолежащий катет}}{\\text{гипотенуза}}",
    grade: 8,
    subject: "geometry",
    category: "trigonometry",
    description: "Отношение противолежащего катета к гипотенузе.",
    inputs: [
      { key: "opp", label: "Противолежащий катет" },
      { key: "hyp", label: "Гипотенуза" },
    ],
    calculate: (v) =>
      v.hyp !== 0 ? v.opp / v.hyp : "Гипотенуза не может быть равна 0",
  },
  {
    id: 73,
    title: "Косинус острого угла (Cos)",
    math: "\\cos \\alpha = \\frac{\\text{прилежащий катет}}{\\text{гипотенуза}}",
    grade: 8,
    subject: "geometry",
    category: "trigonometry",
    description: "Отношение прилежащего катета к гипотенузе.",
    inputs: [
      { key: "adj", label: "Прилежащий катет" },
      { key: "hyp", label: "Гипотенуза" },
    ],
    calculate: (v) =>
      v.hyp !== 0 ? v.adj / v.hyp : "Гипотенуза не может быть равна 0",
  },
  {
    id: 74,
    title: "Тангенс острого угла (Tg)",
    math: "\\text{tg} \\alpha = \\frac{\\text{противолежащий катет}}{\\text{прилежащий катет}}",
    grade: 8,
    subject: "geometry",
    category: "trigonometry",
    description: "Отношение противолежащего катета к прилежащему.",
    inputs: [
      { key: "opp", label: "Противолежащий катет" },
      { key: "adj", label: "Прилежащий катет" },
    ],
    calculate: (v) =>
      v.adj !== 0 ? v.opp / v.adj : "Прилежащий катет не равен 0",
  },

  // --- 9 КЛАСС ---
  {
    id: 75,
    title: "n-й член арифметической прогрессии",
    math: "a_n = a_1 + (n - 1)d",
    grade: 9,
    subject: "algebra",
    category: "progressions",
    description: "Позволяет найти любой член арифметической прогрессии.",
    inputs: [
      { key: "a1", label: "Первый член (a1)" },
      { key: "n", label: "Номер элемента (n)" },
      { key: "d", label: "Разность (d)" },
    ],
    calculate: (v) => v.a1 + (v.n - 1) * v.d,
  },
  {
    id: 76,
    title: "Сумма первых n членов арифметической прогрессии",
    math: "S_n = \\frac{a_1 + a_n}{2} \\cdot n",
    grade: 9,
    subject: "algebra",
    category: "progressions",
    description:
      "Вычисляет сумму с 1-го по n-й члены арифметической прогрессии.",
    inputs: [
      { key: "a1", label: "Первый член (a1)" },
      { key: "an", label: "n-й член (an)" },
      { key: "n", label: "Количество элементов (n)" },
    ],
    calculate: (v) => ((v.a1 + v.an) / 2) * v.n,
  },
  {
    id: 77,
    title: "n-й член геометрической прогрессии",
    math: "b_n = b_1 \\cdot q^{n-1}",
    grade: 9,
    subject: "algebra",
    category: "progressions",
    description: "Позволяет найти любой член геометрической прогрессии.",
    inputs: [
      { key: "b1", label: "Первый член (b1)" },
      { key: "q", label: "Знаменатель (q)" },
      { key: "n", label: "Номер элемента (n)" },
    ],
    calculate: (v) => v.b1 * Math.pow(v.q, v.n - 1),
  },
  {
    id: 78,
    title: "Сумма первых n членов геометрической прогрессии",
    math: "S_n = \\frac{b_1 (q^n - 1)}{q - 1} \\quad (q \\neq 1)",
    grade: 9,
    subject: "algebra",
    category: "progressions",
    description:
      "Вычисляет сумму первых n членов геометрической прогрессии при q ≠ 1.",
    inputs: [
      { key: "b1", label: "Первый член (b1)" },
      { key: "q", label: "Знаменатель q (q≠1)" },
      { key: "n", label: "Количество (n)" },
    ],
    calculate: (v) =>
      v.q !== 1 ? (v.b1 * (Math.pow(v.q, v.n) - 1)) / (v.q - 1) : v.b1 * v.n,
  },
  {
    id: 198,
    title:
      "Сумма n членов арифметической прогрессии (через первый член и разность)",
    math: "S_n = \\frac{2a_1 + (n-1)d}{2} \\cdot n",
    grade: 9,
    subject: "algebra",
    category: "progressions",
    description:
      "Вычисляет сумму первых n членов арифметической прогрессии через первый член и разность.",
    inputs: [
      { key: "a1", label: "Первый член (a1)" },
      { key: "n", label: "Количество (n)" },
      { key: "d", label: "Разность (d)" },
    ],
    calculate: (v) => ((2 * v.a1 + (v.n - 1) * v.d) / 2) * v.n,
  },
  {
    id: 199,
    title: "Характеристическое свойство геометрической прогрессии",
    math: "b_n^2 = b_{n+1} \\cdot b_{n-1}",
    grade: 9,
    subject: "algebra",
    category: "progressions",
    description:
      "Квадрат члена геометрической прогрессии равен произведению соседних с ним членов.",
    inputs: [
      { key: "bnext", label: "Следующий член (b_{n+1})" },
      { key: "bprev", label: "Предыдущий член (b_{n-1})" },
    ],
    calculate: (v) => Math.sqrt(v.bnext * v.bprev),
  },
  {
    id: 79,
    title: "Формула вершины параболы (x)",
    math: "x_0 = -\\frac{b}{2a}",
    grade: 9,
    subject: "algebra",
    category: "equations",
    description: "Вычисляет координату X вершины параболы ax² + bx + c.",
    inputs: [
      { key: "a", label: "Коэффициент a" },
      { key: "b", label: "Коэффициент b" },
    ],
    calculate: (v) =>
      v.a !== 0 ? -v.b / (2 * v.a) : "Коэффициент 'a' не может быть 0",
  },
  {
    id: 80,
    title: "Формула вершины параболы (y)",
    math: "y_0 = a x_0^2 + b x_0 + c",
    grade: 9,
    subject: "algebra",
    category: "equations",
    description: "Вычисляет значение Y вершины параболы по x₀ и коэффициентам.",
    inputs: [
      { key: "a", label: "Коэффициент a" },
      { key: "b", label: "Коэффициент b" },
      { key: "c", label: "Коэффициент c" },
      { key: "x0", label: "Координата x0" },
    ],
    calculate: (v) => v.a * Math.pow(v.x0, 2) + v.b * v.x0 + v.c,
  },
  {
    id: 81,
    title: "Число комбинаций (перестановки)",
    math: "P_n = n!",
    grade: 9,
    subject: "algebra",
    category: "combinatorics",
    description: "Количество способов переставить n элементов (факториал n!).",
    inputs: [{ key: "n", label: "Количество элементов n (целое ≥ 0)" }],
    calculate: (v) => {
      const n = Math.floor(v.n);
      if (n < 0) return "n должно быть неотрицательным";
      let res = 1;
      for (let i = 2; i <= n; i++) res *= i;
      return res;
    },
  },
  {
    id: 82,
    title: "Теорема косинусов",
    math: "a^2 = b^2 + c^2 - 2bc \\cos \\alpha",
    grade: 9,
    subject: "geometry",
    category: ["triangles", "trigonometry"],
    description:
      "Находит сторону a по двум известным сторонам и углу между ними.",
    inputs: [
      { key: "b", label: "Сторона b" },
      { key: "c", label: "Сторона c" },
      { key: "deg", label: "Угол α (в градусах)" },
    ],
    calculate: (v) => {
      const rad = (v.deg * Math.PI) / 180;
      const aSq =
        Math.pow(v.b, 2) + Math.pow(v.c, 2) - 2 * v.b * v.c * Math.cos(rad);
      return Math.sqrt(Math.max(0, aSq));
    },
  },
  {
    id: 83,
    title: "Теорема синусов",
    math: "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R",
    grade: 9,
    subject: "geometry",
    category: ["triangles", "trigonometry"],
    description:
      "Вычисляет радиус R описанной окружности около треугольника по стороне a и углу A.",
    inputs: [
      { key: "a", label: "Сторона a" },
      { key: "degA", label: "Угол A (в градусах)" },
    ],
    calculate: (v) => {
      const rad = (v.degA * Math.PI) / 180;
      const sinA = Math.sin(rad);
      return sinA !== 0 ? v.a / (2 * sinA) : "Синус угла равен 0";
    },
  },
  {
    id: 84,
    title: "Площадь треугольника (через угол)",
    math: "S = \\frac{1}{2} a b \\sin \\gamma",
    grade: 9,
    subject: "geometry",
    category: ["triangles", "shapes"],
    description: "Площадь треугольника по двум сторонам и углу между ними.",
    inputs: [
      { key: "a", label: "Сторона a" },
      { key: "b", label: "Сторона b" },
      { key: "deg", label: "Угол γ (в градусах)" },
    ],
    calculate: (v) => {
      const rad = (v.deg * Math.PI) / 180;
      return 0.5 * v.a * v.b * Math.sin(rad);
    },
  },
  {
    id: 85,
    title: "Формула Герона",
    math: "S = \\sqrt{p(p-a)(p-b)(p-c)}, \\quad p = \\frac{a+b+c}{2}",
    grade: 9,
    subject: "geometry",
    category: ["triangles", "shapes"],
    description: "Площадь треугольника по трём известным сторонам.",
    inputs: [
      { key: "a", label: "Сторона a" },
      { key: "b", label: "Сторона b" },
      { key: "c", label: "Сторона c" },
    ],
    calculate: (v) => {
      const p = (v.a + v.b + v.c) / 2;
      const areaSq = p * (p - v.a) * (p - v.b) * (p - v.c);
      return areaSq > 0 ? Math.sqrt(areaSq) : "Несуществующий треугольник";
    },
  },
  {
    id: 86,
    title: "Площадь описанного многоугольника",
    math: "S = p \\cdot r",
    grade: 9,
    subject: "geometry",
    category: "shapes",
    description:
      "Площадь через полупериметр p и радиус вписанной окружности r.",
    inputs: [
      { key: "p", label: "Полупериметр (p)" },
      { key: "r", label: "Радиус вписанной окр. (r)" },
    ],
    calculate: (v) => v.p * v.r,
  },
  {
    id: 87,
    title: "Площадь правильного многоугольника",
    math: "S = \\frac{1}{2} P r",
    grade: 9,
    subject: "geometry",
    category: "shapes",
    description:
      "Площадь правильного многоугольника через периметр P и радиус вписанной окружности r.",
    inputs: [
      { key: "P", label: "Периметр (P)" },
      { key: "r", label: "Радиус вписанной окр. (r)" },
    ],
    calculate: (v) => 0.5 * v.P * v.r,
  },
  {
    id: 88,
    title: "Длина дуги окружности",
    math: "l = \\frac{\\pi r \\alpha}{180^\\circ}",
    grade: 9,
    subject: "geometry",
    category: "circles",
    description: "Вычисляет длину дуги окружности с центральным углом α.",
    inputs: [
      { key: "r", label: "Радиус (r)" },
      { key: "alpha", label: "Угол α (в градусах)" },
    ],
    calculate: (v) => (Math.PI * v.r * v.alpha) / 180,
  },
  {
    id: 89,
    title: "Площадь кругового сектора",
    math: "S = \\frac{\\pi r^2 \\alpha}{360^\\circ}",
    grade: 9,
    subject: "geometry",
    category: "circles",
    description: "Площадь сектора круга с центральным углом α.",
    inputs: [
      { key: "r", label: "Радиус (r)" },
      { key: "alpha", label: "Угол α (в градусах)" },
    ],
    calculate: (v) => (Math.PI * Math.pow(v.r, 2) * v.alpha) / 360,
  },
  {
    id: 90,
    title: "Скалярное произведение векторов",
    math: "\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2",
    grade: 9,
    subject: "geometry",
    category: "vectors",
    description:
      "Скалярное произведение двух векторов на плоскости по координатам.",
    inputs: [
      { key: "x1", label: "x1" },
      { key: "y1", label: "y1" },
      { key: "x2", label: "x2" },
      { key: "y2", label: "y2" },
    ],
    calculate: (v) => v.x1 * v.x2 + v.y1 * v.y2,
  },
  {
    id: 91,
    title: "Длина вектора по координатам",
    math: "|\\vec{a}| = \\sqrt{x^2 + y^2}",
    grade: 9,
    subject: "geometry",
    category: "vectors",
    description: "Длина (модуль) вектора на плоскости.",
    inputs: [
      { key: "x", label: "Координата x" },
      { key: "y", label: "Координата y" },
    ],
    calculate: (v) => Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2)),
  },
  {
    id: 92,
    title: "Основное тригонометрическое тождество",
    math: "\\sin^2 \\alpha + \\cos^2 \\alpha = 1",
    grade: 9,
    subject: "geometry",
    category: "trigonometry",
    description: "Вычисляет модуль sin α по известному cos α.",
    inputs: [{ key: "cos", label: "Косинус (cos α)" }],
    calculate: (v) =>
      Math.abs(v.cos) <= 1
        ? `|sin α| = ${Math.sqrt(1 - Math.pow(v.cos, 2))}`
        : "cos α должен быть от -1 до 1",
  },
  {
    id: 93,
    title: "Связь тангенса с синусом и косинусом",
    math: "\\operatorname{tg} \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}",
    grade: 9,
    subject: "geometry",
    category: "trigonometry",
    description: "Вычисление tg α через отношение sin α к cos α.",
    inputs: [
      { key: "sin", label: "Синус (sin α)" },
      { key: "cos", label: "Косинус (cos α)" },
    ],
    calculate: (v) =>
      v.cos !== 0 ? v.sin / v.cos : "cos α равен 0 (tg не существует)",
  },

  // --- 10 КЛАСС ---
  {
    id: 94,
    title: "Степень с рациональным показателем",
    math: "a^{\\frac{m}{n}} = \\sqrt[n]{a^m}",
    grade: 10,
    subject: "algebra",
    category: "powers_and_logs",
    description: "Представление степени с дробным показателем в виде корня.",
    inputs: [
      { key: "a", label: "Основание a" },
      { key: "m", label: "Показатель m" },
      { key: "n", label: "Корень n (n≠0)" },
    ],
    calculate: (v) =>
      v.n !== 0 ? Math.pow(v.a, v.m / v.n) : "Показатель n не может быть 0",
  },
  {
    id: 95,
    title: "Определение логарифма",
    math: "\\log_a b = c \\iff a^c = b \\quad (a>0, a \\neq 1, b>0)",
    grade: 10,
    subject: "algebra",
    category: "powers_and_logs",
    description:
      "Находит степень c, в которую возводится основание a для получения b.",
    inputs: [
      { key: "a", label: "Основание a (a>0, a≠1)" },
      { key: "b", label: "Аргумент b (b>0)" },
    ],
    calculate: (v) =>
      v.a > 0 && v.a !== 1 && v.b > 0
        ? Math.log(v.b) / Math.log(v.a)
        : "Некорректные параметры log",
  },
  {
    id: 96,
    title: "Основное логарифмическое тождество",
    math: "a^{\\log_a b} = b",
    grade: 10,
    subject: "algebra",
    category: "powers_and_logs",
    description: "Возведение основания a в степень log_a(b) даёт аргумент b.",
    inputs: [{ key: "b", label: "Число b (b>0)" }],
    calculate: (v) => (v.b > 0 ? v.b : "Аргумент b должен быть > 0"),
  },
  {
    id: 97,
    title: "Свойства логарифмов (сумма)",
    math: "\\log_a x + \\log_a y = \\log_a (x \\cdot y)",
    grade: 10,
    subject: "algebra",
    category: "powers_and_logs",
    description: "Сумма логарифмов равна логарифму произведения аргументов.",
    inputs: [
      { key: "a", label: "Основание a" },
      { key: "x", label: "Аргумент x" },
      { key: "y", label: "Аргумент y" },
    ],
    calculate: (v) =>
      v.a > 0 && v.a !== 1 && v.x > 0 && v.y > 0
        ? Math.log(v.x * v.y) / Math.log(v.a)
        : "Некорректные параметры",
  },
  {
    id: 98,
    title: "Свойства логарифмов (разность)",
    math: "\\log_a x - \\log_a y = \\log_a \\left(\\frac{x}{y}\\right)",
    grade: 10,
    subject: "algebra",
    category: "powers_and_logs",
    description: "Разность логарифмов равна логарифму частного аргументов.",
    inputs: [
      { key: "a", label: "Основание a" },
      { key: "x", label: "Аргумент x" },
      { key: "y", label: "Аргумент y" },
    ],
    calculate: (v) =>
      v.a > 0 && v.a !== 1 && v.x > 0 && v.y > 0
        ? Math.log(v.x / v.y) / Math.log(v.a)
        : "Некорректные параметры",
  },
  {
    id: 99,
    title: "Вынос степени из логарифма",
    math: "\\log_a (x^k) = k \\cdot \\log_a x",
    grade: 10,
    subject: "algebra",
    category: "powers_and_logs",
    description: "Степень k выносится в виде множителя перед логарифмом.",
    inputs: [
      { key: "a", label: "Основание a" },
      { key: "x", label: "Аргумент x" },
      { key: "k", label: "Степень k" },
    ],
    calculate: (v) =>
      v.a > 0 && v.a !== 1 && v.x > 0
        ? v.k * (Math.log(v.x) / Math.log(v.a))
        : "Некорректные параметры",
  },
  {
    id: 100,
    title: "Формула перехода к новому основанию",
    math: "\\log_a b = \\frac{\\log_c b}{\\log_c a}",
    grade: 10,
    subject: "algebra",
    category: "powers_and_logs",
    description: "Переход от логарифма по основанию a к основанию c.",
    inputs: [
      { key: "a", label: "Старое основание a" },
      { key: "b", label: "Аргумент b" },
      { key: "c", label: "Новое основание c" },
    ],
    calculate: (v) =>
      v.a > 0 && v.a !== 1 && v.b > 0 && v.c > 0 && v.c !== 1
        ? Math.log(v.b) / Math.log(v.a)
        : "Некорректные параметры",
  },
  {
    id: 101,
    title: "Синус суммы и разности",
    math: "\\sin(\\alpha \\pm \\beta) = \\sin \\alpha \\cos \\beta \\pm \\cos \\alpha \\sin \\beta",
    grade: 10,
    subject: "algebra",
    category: "trigonometry",
    description: "Вычисляет sin(α + β) и sin(α - β).",
    inputs: [
      { key: "degA", label: "Угол α (град)" },
      { key: "degB", label: "Угол β (град)" },
    ],
    calculate: (v) => {
      const a = (v.degA * Math.PI) / 180;
      const b = (v.degB * Math.PI) / 180;
      return `sin(α+β) = ${Math.sin(a + b).toFixed(4)}, sin(α-β) = ${Math.sin(a - b).toFixed(4)}`;
    },
  },
  {
    id: 102,
    title: "Косинус суммы и разности",
    math: "\\cos(\\alpha \\pm \\beta) = \\cos \\alpha \\cos \\beta \\mp \\sin \\alpha \\sin \\beta",
    grade: 10,
    subject: "algebra",
    category: "trigonometry",
    description: "Вычисляет cos(α + β) и cos(α - β).",
    inputs: [
      { key: "degA", label: "Угол α (град)" },
      { key: "degB", label: "Угол β (град)" },
    ],
    calculate: (v) => {
      const a = (v.degA * Math.PI) / 180;
      const b = (v.degB * Math.PI) / 180;
      return `cos(α+β) = ${Math.cos(a + b).toFixed(4)}, cos(α-β) = ${Math.cos(a - b).toFixed(4)}`;
    },
  },
  {
    id: 103,
    title: "Синус двойного угла",
    math: "\\sin 2\\alpha = 2 \\sin \\alpha \\cos \\alpha",
    grade: 10,
    subject: "algebra",
    category: "trigonometry",
    description: "Формула для раскрытия синуса двойного угла.",
    inputs: [{ key: "deg", label: "Угол α (в градусах)" }],
    calculate: (v) => {
      const a = (v.deg * Math.PI) / 180;
      return 2 * Math.sin(a) * Math.cos(a);
    },
  },
  {
    id: 104,
    title: "Косинус двойного угла",
    math: "\\cos 2\\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha",
    grade: 10,
    subject: "algebra",
    category: "trigonometry",
    description: "Формула для раскрытия косинуса двойного угла.",
    inputs: [{ key: "deg", label: "Угол α (в градусах)" }],
    calculate: (v) => {
      const a = (v.deg * Math.PI) / 180;
      return Math.pow(Math.cos(a), 2) - Math.pow(Math.sin(a), 2);
    },
  },
  {
    id: 105,
    title: "Тангенс двойного угла",
    math: "\\operatorname{tg} 2\\alpha = \\frac{2 \\operatorname{tg} \\alpha}{1 - \\operatorname{tg}^2 \\alpha}",
    grade: 10,
    subject: "algebra",
    category: "trigonometry",
    description: "Формула для тангенса двойного угла.",
    inputs: [{ key: "deg", label: "Угол α (в градусах)" }],
    calculate: (v) => {
      const a = (v.deg * Math.PI) / 180;
      const tg = Math.tan(a);
      return Math.abs(tg) !== 1
        ? (2 * tg) / (1 - Math.pow(tg, 2))
        : "Деление на 0 (не существует)";
    },
  },
  {
    id: 112,
    title: "Объём призмы",
    math: "V = S_{\\text{осн}} \\cdot h",
    grade: 10,
    subject: "geometry",
    category: "stereometry",
    description: "Объём призмы равен произведению площади основания на высоту.",
    inputs: [
      { key: "S", label: "Площадь основания (S)" },
      { key: "h", label: "Высота (h)" },
    ],
    calculate: (v) => v.S * v.h,
  },
  {
    id: 113,
    title: "Объём пирамиды",
    math: "V = \\frac{1}{3} S_{\\text{осн}} \\cdot h",
    grade: 10,
    subject: "geometry",
    category: "stereometry",
    description:
      "Объём пирамиды равен трети произведения площади основания на высоту.",
    inputs: [
      { key: "S", label: "Площадь основания (S)" },
      { key: "h", label: "Высота (h)" },
    ],
    calculate: (v) => (1 / 3) * v.S * v.h,
  },

  // --- 11 КЛАСС ---
  {
    id: 106,
    title: "Производная степенной функции",
    math: "(x^n)' = n \\cdot x^{n-1}",
    grade: 11,
    subject: "algebra",
    category: "calculus",
    description: "Значение производной функции x^n в заданной точке x.",
    inputs: [
      { key: "x", label: "Значение x" },
      { key: "n", label: "Степень n" },
    ],
    calculate: (v) => v.n * Math.pow(v.x, v.n - 1),
  },
  {
    id: 107,
    title: "Производная тригонометрических функций",
    math: "(\\sin x)' = \\cos x, \\quad (\\cos x)' = -\\sin x",
    grade: 11,
    subject: "algebra",
    category: "calculus",
    description:
      "Вычисляет значения производных (sin x)' и (cos x)' в точке x.",
    inputs: [{ key: "deg", label: "Угол x (в градусах)" }],
    calculate: (v) => {
      const rad = (v.deg * Math.PI) / 180;
      return `(sin x)' = ${Math.cos(rad).toFixed(4)}, (cos x)' = ${(-Math.sin(rad)).toFixed(4)}`;
    },
  },
  {
    id: 108,
    title: "Производная показательной функции",
    math: "(a^x)' = a^x \\ln a, \\quad (e^x)' = e^x",
    grade: 11,
    subject: "algebra",
    category: "calculus",
    description: "Значение производной функции a^x в точке x.",
    inputs: [
      { key: "a", label: "Основание a (a>0)" },
      { key: "x", label: "Показатель x" },
    ],
    calculate: (v) =>
      v.a > 0
        ? Math.pow(v.a, v.x) * Math.log(v.a)
        : "Основание 'a' должно быть > 0",
  },
  {
    id: 109,
    title: "Производная произведения",
    math: "(u \\cdot v)' = u'v + uv'",
    grade: 11,
    subject: "algebra",
    category: "calculus",
    description: "Формула дифференцирования произведения двух функций u и v.",
    inputs: [
      { key: "u", label: "u" },
      { key: "u_p", label: "u'" },
      { key: "v", label: "v" },
      { key: "v_p", label: "v'" },
    ],
    calculate: (v) => v.u_p * v.v + v.u * v.v_p,
  },
  {
    id: 110,
    title: "Производная частного",
    math: "\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}",
    grade: 11,
    subject: "algebra",
    category: "calculus",
    description: "Формула дифференцирования частного двух функций u и v.",
    inputs: [
      { key: "u", label: "u" },
      { key: "u_p", label: "u'" },
      { key: "v", label: "v" },
      { key: "v_p", label: "v'" },
    ],
    calculate: (v) =>
      v.v !== 0
        ? (v.u_p * v.v - v.u * v.v_p) / Math.pow(v.v, 2)
        : "v не должно быть равно 0",
  },
  {
    id: 111,
    title: "Формула Ньютона — Лейбница (Интеграл)",
    math: "\\int_a^b f(x)dx = F(b) - F(a)",
    grade: 11,
    subject: "algebra",
    category: "calculus",
    description:
      "Вычисляет определённый интеграл через значения первообразной.",
    inputs: [
      { key: "Fb", label: "F(b)" },
      { key: "Fa", label: "F(a)" },
    ],
    calculate: (v) => v.Fb - v.Fa,
  },
  {
    id: 114,
    title: "Объём цилиндра",
    math: "V = \\pi r^2 h",
    grade: 11,
    subject: "geometry",
    category: "stereometry",
    description: "Объём цилиндра с радиусом основания r и высотой h.",
    inputs: [
      { key: "r", label: "Радиус (r)" },
      { key: "h", label: "Высота (h)" },
    ],
    calculate: (v) => Math.PI * Math.pow(v.r, 2) * v.h,
  },
  {
    id: 115,
    title: "Площадь боковой поверхности цилиндра",
    math: "S_{\\text{бок}} = 2 \\pi r h",
    grade: 11,
    subject: "geometry",
    category: "stereometry",
    description: "Площадь боковой поверхности прямого кругового цилиндра.",
    inputs: [
      { key: "r", label: "Радиус (r)" },
      { key: "h", label: "Высота (h)" },
    ],
    calculate: (v) => 2 * Math.PI * v.r * v.h,
  },
  {
    id: 116,
    title: "Объём конуса",
    math: "V = \\frac{1}{3} \\pi r^2 h",
    grade: 11,
    subject: "geometry",
    category: "stereometry",
    description: "Объём прямого кругового конуса.",
    inputs: [
      { key: "r", label: "Радиус (r)" },
      { key: "h", label: "Высота (h)" },
    ],
    calculate: (v) => (1 / 3) * Math.PI * Math.pow(v.r, 2) * v.h,
  },
  {
    id: 117,
    title: "Площадь боковой поверхности конуса",
    math: "S_{\\text{бок}} = \\pi r l",
    grade: 11,
    subject: "geometry",
    category: "stereometry",
    description:
      "Площадь боковой поверхности конуса через радиус r и образующую l.",
    inputs: [
      { key: "r", label: "Радиус (r)" },
      { key: "l", label: "Образующая (l)" },
    ],
    calculate: (v) => Math.PI * v.r * v.l,
  },
  {
    id: 118,
    title: "Объём шара",
    math: "V = \\frac{4}{3} \\pi R^3",
    grade: 11,
    subject: "geometry",
    category: "stereometry",
    description: "Объём шара радиуса R.",
    inputs: [{ key: "r", label: "Радиус (R)" }],
    calculate: (v) => (4 / 3) * Math.PI * Math.pow(v.r, 3),
  },
  {
    id: 119,
    title: "Площадь сферы (поверхности шара)",
    math: "S = 4 \\pi R^2",
    grade: 11,
    subject: "geometry",
    category: "stereometry",
    description: "Площадь сферы радиуса R.",
    inputs: [{ key: "r", label: "Радиус (R)" }],
    calculate: (v) => 4 * Math.PI * Math.pow(v.r, 2),
  },
  {
    id: 120,
    title: "Угол между векторами в пространстве",
    math: "\\cos \\theta = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{|\\vec{a}| \\cdot |\\vec{b}|}",
    grade: 11,
    subject: "geometry",
    category: "vectors",
    description:
      "Косинус угла между двумя трёхмерными векторами по их координатам.",
    inputs: [
      { key: "x1", label: "a_x" },
      { key: "y1", label: "a_y" },
      { key: "z1", label: "a_z" },
      { key: "x2", label: "b_x" },
      { key: "y2", label: "b_y" },
      { key: "z2", label: "b_z" },
    ],
    calculate: (v) => {
      const dot = v.x1 * v.x2 + v.y1 * v.y2 + v.z1 * v.z2;
      const modA = Math.sqrt(
        Math.pow(v.x1, 2) + Math.pow(v.y1, 2) + Math.pow(v.z1, 2),
      );
      const modB = Math.sqrt(
        Math.pow(v.x2, 2) + Math.pow(v.y2, 2) + Math.pow(v.z2, 2),
      );
      return modA * modB !== 0
        ? (dot / (modA * modB)).toFixed(4)
        : "Длина вектора не может быть равна 0";
    },
  },
  {
    id: 121,
    title: "НОД (наибольший общий делитель)",
    math: "\\gcd(a, b)",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description: "Наибольшее число, на которое делятся оба числа без остатка.",
    inputs: [
      { key: "a", label: "Число a" },
      { key: "b", label: "Число b" },
    ],
    calculate: (v) => {
      let a = Math.abs(Math.round(v.a));
      let b = Math.abs(Math.round(v.b));
      while (b) {
        [a, b] = [b, a % b];
      }
      return a;
    },
  },
  {
    id: 122,
    title: "НОК (наименьшее общее кратное)",
    math: "\\text{НОК}(a,b) = \\frac{a \\cdot b}{\\gcd(a,b)}",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description: "Наименьшее число, кратное одновременно обоим числам.",
    inputs: [
      { key: "a", label: "Число a" },
      { key: "b", label: "Число b" },
    ],
    calculate: (v) => {
      let a = Math.abs(Math.round(v.a));
      let b = Math.abs(Math.round(v.b));
      let x = a,
        y = b;
      while (y) {
        [x, y] = [y, x % y];
      }
      return (a * b) / x;
    },
  },
  {
    id: 123,
    title: "Расстояние между двумя точками",
    math: "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}",
    grade: 8,
    subject: "geometry",
    category: "vectors",
    description: "Длина отрезка между двумя точками на координатной плоскости.",
    inputs: [
      { key: "x1", label: "x1" },
      { key: "y1", label: "y1" },
      { key: "x2", label: "x2" },
      { key: "y2", label: "y2" },
    ],
    calculate: (v) => Math.sqrt((v.x2 - v.x1) ** 2 + (v.y2 - v.y1) ** 2),
  },
  {
    id: 124,
    title: "Середина отрезка (координаты)",
    math: "M\\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right)",
    grade: 8,
    subject: "geometry",
    category: "vectors",
    description: "Координаты точки, делящей отрезок пополам.",
    inputs: [
      { key: "x1", label: "x1" },
      { key: "y1", label: "y1" },
      { key: "x2", label: "x2" },
      { key: "y2", label: "y2" },
    ],
    calculate: (v) => `(${(v.x1 + v.x2) / 2}, ${(v.y1 + v.y2) / 2})`,
  },
  {
    id: 125,
    title: "Сумма векторов по координатам",
    math: "\\vec{a}+\\vec{b} = (a_x+b_x,\\ a_y+b_y)",
    grade: 9,
    subject: "geometry",
    category: "vectors",
    description: "Сложение векторов покоординатно.",
    inputs: [
      { key: "ax", label: "a_x" },
      { key: "ay", label: "a_y" },
      { key: "bx", label: "b_x" },
      { key: "by", label: "b_y" },
    ],
    calculate: (v) => `(${v.ax + v.bx}, ${v.ay + v.by})`,
  },
  {
    id: 126,
    title: "Косинус угла между векторами (2D)",
    math: "\\cos\\varphi = \\frac{\\vec a \\cdot \\vec b}{|\\vec a||\\vec b|}",
    grade: 9,
    subject: "geometry",
    category: "vectors",
    description:
      "Косинус угла между двумя векторами на плоскости через их координаты.",
    inputs: [
      { key: "ax", label: "a_x" },
      { key: "ay", label: "a_y" },
      { key: "bx", label: "b_x" },
      { key: "by", label: "b_y" },
    ],
    calculate: (v) => {
      const dot = v.ax * v.bx + v.ay * v.by;
      const lenA = Math.sqrt(v.ax ** 2 + v.ay ** 2);
      const lenB = Math.sqrt(v.bx ** 2 + v.by ** 2);
      return dot / (lenA * lenB);
    },
  },
  {
    id: 127,
    title: "Число сочетаний C(n,k)",
    math: "C_n^k = \\frac{n!}{k!(n-k)!}",
    grade: 9,
    subject: "algebra",
    category: "combinatorics",
    description:
      "Количество способов выбрать k элементов из n без учёта порядка.",
    inputs: [
      { key: "n", label: "Количество элементов (n)" },
      { key: "k", label: "Количество выбираемых (k)" },
    ],
    calculate: (v) => {
      const fact = (n) => {
        let r = 1;
        for (let i = 2; i <= n; i++) r *= i;
        return r;
      };
      return fact(v.n) / (fact(v.k) * fact(v.n - v.k));
    },
  },
  {
    id: 128,
    title: "Число размещений A(n,k)",
    math: "A_n^k = \\frac{n!}{(n-k)!}",
    grade: 9,
    subject: "algebra",
    category: "combinatorics",
    description: "Количество способов выбрать и упорядочить k элементов из n.",
    inputs: [
      { key: "n", label: "Количество элементов (n)" },
      { key: "k", label: "Количество выбираемых (k)" },
    ],
    calculate: (v) => {
      const fact = (n) => {
        let r = 1;
        for (let i = 2; i <= n; i++) r *= i;
        return r;
      };
      return fact(v.n) / fact(v.n - v.k);
    },
  },
  {
    id: 129,
    title: "Классическая вероятность события",
    math: "P(A) = \\frac{m}{n}",
    grade: 9,
    subject: "algebra",
    category: "combinatorics",
    description:
      "Вероятность события как отношение благоприятных исходов к общему числу исходов.",
    inputs: [
      { key: "m", label: "Благоприятные исходы (m)" },
      { key: "n", label: "Всего исходов (n)" },
    ],
    calculate: (v) => v.m / v.n,
  },
  {
    id: 130,
    title: "Вероятность противоположного события",
    math: "P(\\bar A) = 1 - P(A)",
    grade: 9,
    subject: "algebra",
    category: "combinatorics",
    description: "Вероятность того, что событие A не произойдёт.",
    inputs: [{ key: "p", label: "Вероятность события P(A)" }],
    calculate: (v) => 1 - v.p,
  },
  {
    id: 131,
    title: "Сумма бесконечной геометрической прогрессии",
    math: "S = \\frac{b_1}{1-q},\\ |q|<1",
    grade: 10,
    subject: "algebra",
    category: "progressions",
    description:
      "Сумма всех членов бесконечно убывающей геометрической прогрессии (|q| < 1).",
    inputs: [
      { key: "b1", label: "Первый член (b1)" },
      { key: "q", label: "Знаменатель (q)" },
    ],
    calculate: (v) => v.b1 / (1 - v.q),
  },
  {
    id: 132,
    title: "Характеристическое свойство арифметической прогрессии",
    math: "a_n = \\frac{a_{n-1}+a_{n+1}}{2}",
    grade: 9,
    subject: "algebra",
    category: "progressions",
    description:
      "Каждый член арифметической прогрессии равен среднему арифметическому соседних членов.",
    inputs: [
      { key: "aprev", label: "Предыдущий член (a_{n-1})" },
      { key: "anext", label: "Следующий член (a_{n+1})" },
    ],
    calculate: (v) => (v.aprev + v.anext) / 2,
  },
  {
    id: 133,
    title: "Диагональ прямоугольного параллелепипеда",
    math: "d = \\sqrt{a^2+b^2+c^2}",
    grade: 11,
    subject: "geometry",
    category: "stereometry",
    description:
      "Диагональ прямоугольного параллелепипеда через три его измерения.",
    inputs: [
      { key: "a", label: "Ребро a" },
      { key: "b", label: "Ребро b" },
      { key: "c", label: "Ребро c" },
    ],
    calculate: (v) => Math.sqrt(v.a ** 2 + v.b ** 2 + v.c ** 2),
  },
  {
    id: 134,
    title: "Диагональ куба",
    math: "d = a\\sqrt{3}",
    grade: 11,
    subject: "geometry",
    category: "stereometry",
    description: "Диагональ куба через длину его ребра.",
    inputs: [{ key: "a", label: "Ребро a" }],
    calculate: (v) => v.a * Math.sqrt(3),
  },
  {
    id: 135,
    title: "Линейное уравнение (корень)",
    math: "ax+b=0 \\Rightarrow x=-\\frac{b}{a}",
    grade: 7,
    subject: "algebra",
    category: "equations",
    description: "Корень линейного уравнения с одной переменной.",
    inputs: [
      { key: "a", label: "Коэффициент a" },
      { key: "b", label: "Коэффициент b" },
    ],
    calculate: (v) => -v.b / v.a,
  },

  {
    id: 136,
    title: "Медиана выборки (5 чисел)",
    math: "\\text{Me} = x_{(3)} \\text{ (после сортировки)}",
    grade: 9,
    subject: "algebra",
    category: "equations",
    description:
      "Число, которое находится в середине упорядоченного набора данных.",
    inputs: [
      { key: "x1", label: "Число 1" },
      { key: "x2", label: "Число 2" },
      { key: "x3", label: "Число 3" },
      { key: "x4", label: "Число 4" },
      { key: "x5", label: "Число 5" },
    ],
    calculate: (v) => {
      const arr = [v.x1, v.x2, v.x3, v.x4, v.x5].sort((a, b) => a - b);
      return arr[2];
    },
  },
  {
    id: 137,
    title: "Мода выборки (5 чисел)",
    math: "\\text{Mo} = \\text{наиболее частое значение}",
    grade: 9,
    subject: "algebra",
    category: "equations",
    description: "Значение, которое встречается в наборе данных чаще всего.",
    inputs: [
      { key: "x1", label: "Число 1" },
      { key: "x2", label: "Число 2" },
      { key: "x3", label: "Число 3" },
      { key: "x4", label: "Число 4" },
      { key: "x5", label: "Число 5" },
    ],
    calculate: (v) => {
      const arr = [v.x1, v.x2, v.x3, v.x4, v.x5];
      const counts = {};
      arr.forEach((x) => (counts[x] = (counts[x] || 0) + 1));
      const maxCount = Math.max(...Object.values(counts));
      if (maxCount === 1) return "нет моды (все числа уникальны)";
      const modes = Object.keys(counts).filter((k) => counts[k] === maxCount);
      return modes.join(", ");
    },
  },
  {
    id: 138,
    title: "Размах выборки (5 чисел)",
    math: "R = x_{max} - x_{min}",
    grade: 9,
    subject: "algebra",
    category: "equations",
    description:
      "Разность между наибольшим и наименьшим значением в наборе данных.",
    inputs: [
      { key: "x1", label: "Число 1" },
      { key: "x2", label: "Число 2" },
      { key: "x3", label: "Число 3" },
      { key: "x4", label: "Число 4" },
      { key: "x5", label: "Число 5" },
    ],
    calculate: (v) => {
      const arr = [v.x1, v.x2, v.x3, v.x4, v.x5];
      return Math.max(...arr) - Math.min(...arr);
    },
  },
  {
    id: 139,
    title: "Коэффициент подобия треугольников",
    math: "k = \\frac{a}{a'}",
    grade: 8,
    subject: "geometry",
    category: "triangles",
    description: "Отношение соответственных сторон подобных треугольников.",
    inputs: [
      { key: "a", label: "Сторона исходного треугольника (a)" },
      { key: "aPrime", label: "Сторона подобного треугольника (a')" },
    ],
    calculate: (v) => v.a / v.aPrime,
  },
  {
    id: 140,
    title: "Отношение площадей подобных фигур",
    math: "\\frac{S_1}{S_2} = k^2",
    grade: 8,
    subject: "geometry",
    category: "triangles",
    description:
      "Отношение площадей подобных фигур равно квадрату коэффициента подобия.",
    inputs: [{ key: "k", label: "Коэффициент подобия (k)" }],
    calculate: (v) => v.k ** 2,
  },
  {
    id: 141,
    title: "Теорема Фалеса (четвёртый пропорциональный отрезок)",
    math: "\\frac{a}{b} = \\frac{c}{d} \\Rightarrow d = \\frac{b \\cdot c}{a}",
    grade: 8,
    subject: "geometry",
    category: "triangles",
    description: "Находит четвёртый отрезок, пропорциональный трём известным.",
    inputs: [
      { key: "a", label: "Отрезок a" },
      { key: "b", label: "Отрезок b" },
      { key: "c", label: "Отрезок c" },
    ],
    calculate: (v) => (v.b * v.c) / v.a,
  },
  {
    id: 142,
    title: "Диагонали параллелограмма",
    math: "OA = OC = \\frac{d}{2}",
    grade: 8,
    subject: "geometry",
    category: "shapes",
    description:
      "Диагонали параллелограмма точкой пересечения делятся пополам.",
    inputs: [{ key: "d", label: "Диагональ параллелограмма (d)" }],
    calculate: (v) => v.d / 2,
  },
  {
    id: 143,
    title: "Сумма углов при боковой стороне параллелограмма",
    math: "\\beta = 180^\\circ - \\alpha",
    grade: 8,
    subject: "geometry",
    category: "shapes",
    description:
      "Сумма углов, прилежащих к одной боковой стороне параллелограмма, равна 180°.",
    inputs: [{ key: "alpha", label: "Угол α (град)" }],
    calculate: (v) => 180 - v.alpha,
  },
  {
    id: 144,
    title: "Угловой коэффициент прямой по двум точкам",
    math: "k = \\frac{y_2-y_1}{x_2-x_1}",
    grade: 9,
    subject: "geometry",
    category: "vectors",
    description:
      "Угловой коэффициент прямой, проходящей через две заданные точки.",
    inputs: [
      { key: "x1", label: "x1" },
      { key: "y1", label: "y1" },
      { key: "x2", label: "x2" },
      { key: "y2", label: "y2" },
    ],
    calculate: (v) => (v.y2 - v.y1) / (v.x2 - v.x1),
  },
  {
    id: 145,
    title: "Расстояние от точки до прямой",
    math: "d = \\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}",
    grade: 9,
    subject: "geometry",
    category: "vectors",
    description:
      "Кратчайшее расстояние от точки до прямой, заданной уравнением Ax+By+C=0.",
    inputs: [
      { key: "A", label: "Коэффициент a" },
      { key: "B", label: "Коэффициент b" },
      { key: "C", label: "Коэффициент c" },
      { key: "x0", label: "Координата x0" },
      { key: "y0", label: "Координата y0" },
    ],
    calculate: (v) =>
      Math.abs(v.A * v.x0 + v.B * v.y0 + v.C) / Math.sqrt(v.A ** 2 + v.B ** 2),
  },
  {
    id: 146,
    title: "Радиус окружности по уравнению",
    math: "r = \\sqrt{(x-a)^2+(y-b)^2}",
    grade: 9,
    subject: "geometry",
    category: ["vectors", "circles"],
    description:
      "Радиус окружности с центром (a,b), проходящей через точку (x,y).",
    inputs: [
      { key: "x0", label: "Координата x0" },
      { key: "y0", label: "Координата y0" },
      { key: "x", label: "Координата x" },
      { key: "y", label: "Координата y" },
    ],
    calculate: (v) => Math.sqrt((v.x - v.x0) ** 2 + (v.y - v.y0) ** 2),
  },
  {
    id: 147,
    title: "Теорема Виета (общий случай)",
    math: "x_1+x_2=-\\frac{b}{a},\\quad x_1 \\cdot x_2=\\frac{c}{a}",
    grade: 8,
    subject: "algebra",
    category: "equations",
    description:
      "Связывает корни квадратного уравнения ax²+bx+c=0 с его коэффициентами.",
    inputs: [
      { key: "a", label: "Коэффициент a" },
      { key: "b", label: "Коэффициент b" },
      { key: "c", label: "Коэффициент c" },
    ],
    calculate: (v) =>
      `x1+x2 = ${Number((-v.b / v.a).toFixed(4))}; x1*x2 = ${Number((v.c / v.a).toFixed(4))}`,
  },
  {
    id: 148,
    title: "Вероятность независимых событий",
    math: "P(A \\cap B) = P(A) \\cdot P(B)",
    grade: 11,
    subject: "algebra",
    category: "combinatorics",
    description:
      "Вероятность одновременного наступления двух независимых событий.",
    inputs: [
      { key: "pa", label: "Вероятность события P(A)" },
      { key: "pb", label: "Вероятность события P(B)" },
    ],
    calculate: (v) => v.pa * v.pb,
  },
  {
    id: 149,
    title: "Формула Бернулли",
    math: "P_n(k) = C_n^k \\cdot p^k \\cdot (1-p)^{n-k}",
    grade: 11,
    subject: "algebra",
    category: "combinatorics",
    description:
      "Вероятность ровно k успехов в n независимых испытаниях с вероятностью успеха p.",
    inputs: [
      { key: "n", label: "Количество элементов (n)" },
      { key: "k", label: "Количество выбираемых (k)" },
      { key: "p", label: "Вероятность успеха (p)" },
    ],
    calculate: (v) => {
      const fact = (n) => {
        let r = 1;
        for (let i = 2; i <= n; i++) r *= i;
        return r;
      };
      const c = fact(v.n) / (fact(v.k) * fact(v.n - v.k));
      return c * v.p ** v.k * (1 - v.p) ** (v.n - v.k);
    },
  },
  {
    id: 150,
    title: "Производная сложной функции",
    math: "(f(g(x)))' = f'(g(x)) \\cdot g'(x)",
    grade: 11,
    subject: "algebra",
    category: "calculus",
    description: "Правило дифференцирования сложной функции (цепное правило).",
    inputs: [
      { key: "fu", label: "Значение f'(u)" },
      { key: "gx", label: "Значение g'(x)" },
    ],
    calculate: (v) => v.fu * v.gx,
  },

  {
    id: 151,
    title: "Периметр трапеции",
    math: "P = a + b + c + d",
    grade: 8,
    subject: "geometry",
    category: ["trapezoid", "perimeters"],
    description: "Сумма длин всех четырёх сторон трапеции.",
    inputs: [
      { key: "a", label: "Основание a" },
      { key: "b", label: "Основание b" },
      { key: "c", label: "Боковая сторона c" },
      { key: "d", label: "Боковая сторона d" },
    ],
    calculate: (v) => v.a + v.b + v.c + v.d,
  },
  {
    id: 152,
    title: "Высота трапеции (через площадь)",
    math: "h = \\frac{2S}{a+b}",
    grade: 8,
    subject: "geometry",
    category: "trapezoid",
    description: "Высота трапеции, выраженная через её площадь и основания.",
    inputs: [
      { key: "S", label: "Площадь (S)" },
      { key: "a", label: "Основание a" },
      { key: "b", label: "Основание b" },
    ],
    calculate: (v) => (2 * v.S) / (v.a + v.b),
  },
  {
    id: 153,
    title: "Отрезок между серединами диагоналей",
    math: "MN = \\frac{|a-b|}{2}",
    grade: 8,
    subject: "geometry",
    category: "trapezoid",
    description:
      "Отрезок, соединяющий середины диагоналей трапеции, равен полуразности её оснований.",
    inputs: [
      { key: "a", label: "Основание a" },
      { key: "b", label: "Основание b" },
    ],
    calculate: (v) => Math.abs(v.a - v.b) / 2,
  },
  {
    id: 154,
    title: "Сумма углов при боковой стороне трапеции",
    math: "\\beta = 180^\\circ - \\alpha",
    grade: 8,
    subject: "geometry",
    category: "trapezoid",
    description:
      "Сумма углов, прилежащих к одной боковой стороне трапеции, равна 180°.",
    inputs: [{ key: "alpha", label: "Угол α (град)" }],
    calculate: (v) => 180 - v.alpha,
  },
  {
    id: 185,
    title: "Сумма квадратов диагоналей трапеции",
    math: "d_1^2 + d_2^2 = 2ab + c^2 + d^2",
    grade: 9,
    subject: "geometry",
    category: "trapezoid",
    description:
      "Связывает диагонали трапеции с длинами оснований и боковых сторон.",
    inputs: [
      { key: "a", label: "Основание a" },
      { key: "b", label: "Основание b" },
      { key: "c", label: "Боковая сторона c" },
      { key: "d", label: "Боковая сторона d" },
    ],
    calculate: (v) => 2 * v.a * v.b + v.c ** 2 + v.d ** 2,
  },
  {
    id: 186,
    title: "Основание трапеции через среднюю линию",
    math: "a = 2m - b",
    grade: 8,
    subject: "geometry",
    category: "trapezoid",
    description:
      "Основание трапеции, выраженное через среднюю линию и другое основание.",
    inputs: [
      { key: "m", label: "Средняя линия m" },
      { key: "b", label: "Основание b" },
    ],
    calculate: (v) => 2 * v.m - v.b,
  },
  {
    id: 187,
    title: "Основание трапеции через высоту и углы при основании",
    math: "a = b + h \\cdot (\\operatorname{ctg}\\alpha + \\operatorname{ctg}\\beta)",
    grade: 9,
    subject: "geometry",
    category: "trapezoid",
    description:
      "Большее основание трапеции через меньшее основание, высоту и углы при нижнем основании.",
    inputs: [
      { key: "b", label: "Основание b" },
      { key: "h", label: "Высота h" },
      { key: "alpha", label: "Угол α (град)" },
      { key: "beta", label: "Угол β (град)" },
    ],
    calculate: (v) => {
      const radA = (v.alpha * Math.PI) / 180;
      const radB = (v.beta * Math.PI) / 180;
      const cotA = Math.tan(radA) !== 0 ? 1 / Math.tan(radA) : null;
      const cotB = Math.tan(radB) !== 0 ? 1 / Math.tan(radB) : null;
      return cotA !== null && cotB !== null
        ? v.b + v.h * (cotA + cotB)
        : "Угол не может быть 0° или 180°";
    },
  },
  {
    id: 188,
    title: "Основание трапеции через боковые стороны и углы",
    math: "a = b + c\\cos\\alpha + d\\cos\\beta",
    grade: 9,
    subject: "geometry",
    category: "trapezoid",
    description:
      "Большее основание трапеции через меньшее основание, боковые стороны и углы при нижнем основании.",
    inputs: [
      { key: "b", label: "Основание b" },
      { key: "c", label: "Боковая сторона c" },
      { key: "d", label: "Боковая сторона d" },
      { key: "alpha", label: "Угол α (град)" },
      { key: "beta", label: "Угол β (град)" },
    ],
    calculate: (v) => {
      const radA = (v.alpha * Math.PI) / 180;
      const radB = (v.beta * Math.PI) / 180;
      return v.b + v.c * Math.cos(radA) + v.d * Math.cos(radB);
    },
  },
  {
    id: 189,
    title: "Боковая сторона трапеции через высоту и угол",
    math: "c = \\frac{h}{\\sin \\alpha}",
    grade: 9,
    subject: "geometry",
    category: "trapezoid",
    description:
      "Боковая сторона трапеции через высоту и прилежащий угол при основании.",
    inputs: [
      { key: "h", label: "Высота h" },
      { key: "alpha", label: "Угол α (град)" },
    ],
    calculate: (v) => {
      const radA = (v.alpha * Math.PI) / 180;
      const sinA = Math.sin(radA);
      return sinA !== 0 ? v.h / sinA : "Угол не может быть 0° или 180°";
    },
  },
  {
    id: 190,
    title: "Высота трапеции через боковую сторону и угол",
    math: "h = c \\cdot \\sin \\alpha",
    grade: 9,
    subject: "geometry",
    category: "trapezoid",
    description:
      "Высота трапеции через боковую сторону и прилежащий угол при основании.",
    inputs: [
      { key: "c", label: "Боковая сторона c" },
      { key: "alpha", label: "Угол α (град)" },
    ],
    calculate: (v) => {
      const radA = (v.alpha * Math.PI) / 180;
      return v.c * Math.sin(radA);
    },
  },

  {
    id: 155,
    title: "Диагональ квадрата",
    math: "d = a\\sqrt{2}",
    grade: 8,
    subject: "geometry",
    category: "shapes",
    description: "Диагональ квадрата через длину его стороны.",
    inputs: [{ key: "a", label: "Сторона a" }],
    calculate: (v) => v.a * Math.sqrt(2),
  },
  {
    id: 156,
    title: "Диагональ прямоугольника",
    math: "d = \\sqrt{a^2+b^2}",
    grade: 8,
    subject: "geometry",
    category: "shapes",
    description: "Диагональ прямоугольника через длину и ширину.",
    inputs: [
      { key: "a", label: "Сторона a" },
      { key: "b", label: "Сторона b" },
    ],
    calculate: (v) => Math.sqrt(v.a ** 2 + v.b ** 2),
  },
  {
    id: 157,
    title: "Периметр параллелограмма",
    math: "P = 2(a+b)",
    grade: 8,
    subject: "geometry",
    category: "perimeters",
    description: "Сумма длин всех сторон параллелограмма.",
    inputs: [
      { key: "a", label: "Сторона a" },
      { key: "b", label: "Сторона b" },
    ],
    calculate: (v) => 2 * (v.a + v.b),
  },
  {
    id: 158,
    title: "Площадь равностороннего треугольника",
    math: "S = \\frac{a^2\\sqrt{3}}{4}",
    grade: 8,
    subject: "geometry",
    category: "triangles",
    description: "Площадь треугольника с тремя равными сторонами.",
    inputs: [{ key: "a", label: "Сторона a" }],
    calculate: (v) => (v.a ** 2 * Math.sqrt(3)) / 4,
  },
  {
    id: 159,
    title: "Свойство равнобедренного треугольника",
    math: "\\beta_1 = \\beta_2",
    grade: 7,
    subject: "geometry",
    category: "triangles",
    description: "Углы при основании равнобедренного треугольника равны.",
    inputs: [{ key: "alpha", label: "Угол α (град)" }],
    calculate: (v) => v.alpha,
  },
  {
    id: 160,
    title: "Производная суммы функций",
    math: "(u+v)' = u' + v'",
    grade: 11,
    subject: "algebra",
    category: "calculus",
    description: "Производная суммы функций равна сумме их производных.",
    inputs: [
      { key: "up", label: "Производная u'" },
      { key: "vp", label: "Производная v'" },
    ],
    calculate: (v) => v.up + v.vp,
  },
  {
    id: 161,
    title: "Производная константы",
    math: "(c)' = 0",
    grade: 10,
    subject: "algebra",
    category: "calculus",
    description: "Производная постоянной величины всегда равна нулю.",
    inputs: [{ key: "c", label: "Число c" }],
    calculate: () => 0,
  },
  {
    id: 162,
    title: "Длина вектора в пространстве",
    math: "|\\vec a| = \\sqrt{x^2+y^2+z^2}",
    grade: 11,
    subject: "geometry",
    category: "vectors",
    description:
      "Длина (модуль) вектора в трёхмерном пространстве по его координатам.",
    inputs: [
      { key: "x", label: "a_x" },
      { key: "y", label: "a_y" },
      { key: "z", label: "a_z" },
    ],
    calculate: (v) => Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2),
  },
  {
    id: 163,
    title: "Разность векторов по координатам",
    math: "\\vec a-\\vec b = (a_x-b_x,\\ a_y-b_y)",
    grade: 9,
    subject: "geometry",
    category: "vectors",
    description: "Вычитание векторов покоординатно.",
    inputs: [
      { key: "ax", label: "a_x" },
      { key: "ay", label: "a_y" },
      { key: "bx", label: "b_x" },
      { key: "by", label: "b_y" },
    ],
    calculate: (v) => `(${v.ax - v.bx}, ${v.ay - v.by})`,
  },
  {
    id: 164,
    title: "Котангенс острого угла",
    math: "\\text{ctg}\\,\\alpha = \\frac{\\text{прилежащий катет}}{\\text{противолежащий катет}}",
    grade: 9,
    subject: "geometry",
    category: "trigonometry",
    description: "Отношение прилежащего катета к противолежащему.",
    inputs: [
      { key: "adj", label: "Прилежащий катет" },
      { key: "opp", label: "Противолежащий катет" },
    ],
    calculate: (v) =>
      v.opp !== 0 ? v.adj / v.opp : "Противолежащий катет не равен 0",
  },
  {
    id: 165,
    title: "Система двух линейных уравнений",
    math: "x=\\frac{c_1b_2-c_2b_1}{a_1b_2-a_2b_1},\\ y=\\frac{a_1c_2-a_2c_1}{a_1b_2-a_2b_1}",
    grade: 7,
    subject: "algebra",
    category: "equations",
    description:
      "Решение системы двух линейных уравнений с двумя переменными методом определителей.",
    inputs: [
      { key: "a1", label: "Коэффициент a1" },
      { key: "b1", label: "Коэффициент b1" },
      { key: "c1", label: "Коэффициент c1" },
      { key: "a2", label: "Коэффициент a2" },
      { key: "b2", label: "Коэффициент b2" },
      { key: "c2", label: "Коэффициент c2" },
    ],
    calculate: (v) => {
      const det = v.a1 * v.b2 - v.a2 * v.b1;
      if (det === 0) return "Система не имеет единственного решения";
      const x = (v.c1 * v.b2 - v.c2 * v.b1) / det;
      const y = (v.a1 * v.c2 - v.a2 * v.c1) / det;
      return `x = ${Number(x.toFixed(4))}; y = ${Number(y.toFixed(4))}`;
    },
  },
  {
    id: 166,
    title: "Полная поверхность правильной призмы",
    math: "S = 2S_{осн} + P_{осн} \\cdot h",
    grade: 11,
    subject: "geometry",
    category: "stereometry",
    description:
      "Сумма площадей двух оснований и боковой поверхности прямой призмы.",
    inputs: [
      { key: "Sb", label: "Площадь основания (S)" },
      { key: "Pb", label: "Периметр (P)" },
      { key: "h", label: "Высота (h)" },
    ],
    calculate: (v) => 2 * v.Sb + v.Pb * v.h,
  },

  {
    id: 167,
    title: "Периметр произвольного треугольника",
    math: "P = a+b+c",
    grade: 5,
    subject: "geometry",
    category: ["triangles", "perimeters"],
    description: "Сумма длин всех трёх сторон треугольника.",
    inputs: [
      { key: "a", label: "Сторона a" },
      { key: "b", label: "Сторона b" },
      { key: "c", label: "Сторона c" },
    ],
    calculate: (v) => v.a + v.b + v.c,
  },
  {
    id: 168,
    title: "Сочетательный закон сложения",
    math: "(a+b)+c=a+(b+c)",
    grade: 5,
    subject: "algebra",
    category: "abbreviated_multiplication",
    description: "Результат сложения не зависит от группировки слагаемых.",
    inputs: [
      { key: "a", label: "Слагаемое a" },
      { key: "b", label: "Слагаемое b" },
      { key: "c", label: "Слагаемое c" },
    ],
    calculate: (v) => `${v.a + v.b + v.c} = ${v.a + (v.b + v.c)}`,
  },
  {
    id: 169,
    title: "Сочетательный закон умножения",
    math: "(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)",
    grade: 5,
    subject: "algebra",
    category: "abbreviated_multiplication",
    description: "Результат умножения не зависит от группировки множителей.",
    inputs: [
      { key: "a", label: "Множитель a" },
      { key: "b", label: "Множитель b" },
      { key: "c", label: "Множитель c" },
    ],
    calculate: (v) => `${v.a * v.b * v.c} = ${v.a * (v.b * v.c)}`,
  },
  {
    id: 170,
    title: "Нахождение числа по его проценту",
    math: "A = B \\cdot \\frac{100}{p}",
    grade: 5,
    subject: "algebra",
    category: "powers_and_logs",
    description: "Число A, если известно, что B составляет p% от него.",
    inputs: [
      { key: "B", label: "Известная часть (B)" },
      { key: "p", label: "Процент p" },
    ],
    calculate: (v) => (v.B * 100) / v.p,
  },
  {
    id: 171,
    title: "Сложение дробей с одинаковыми знаменателями",
    math: "\\frac{a}{c}+\\frac{b}{c}=\\frac{a+b}{c}",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description: "Числители складываются, знаменатель остаётся без изменений.",
    inputs: [
      { key: "a", label: "Числитель a" },
      { key: "b", label: "Числитель b" },
      { key: "c", label: "Знаменатель c" },
    ],
    calculate: (v) => (v.a + v.b) / v.c,
  },
  {
    id: 172,
    title: "Вычитание дробей с одинаковыми знаменателями",
    math: "\\frac{a}{c}-\\frac{b}{c}=\\frac{a-b}{c}",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description: "Числители вычитаются, знаменатель остаётся без изменений.",
    inputs: [
      { key: "a", label: "Числитель a" },
      { key: "b", label: "Числитель b" },
      { key: "c", label: "Знаменатель c" },
    ],
    calculate: (v) => (v.a - v.b) / v.c,
  },
  {
    id: 173,
    title: "Нахождение неизвестного члена пропорции",
    math: "\\frac{a}{b}=\\frac{c}{x} \\Rightarrow x=\\frac{b \\cdot c}{a}",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description: "Находит четвёртый (неизвестный) член пропорции.",
    inputs: [
      { key: "a", label: "Первый член пропорции (a)" },
      { key: "b", label: "Второй член пропорции (b)" },
      { key: "c", label: "Третий член пропорции (c)" },
    ],
    calculate: (v) => (v.b * v.c) / v.a,
  },
  {
    id: 174,
    title: "Масштаб карты",
    math: "M = \\frac{D}{d}",
    grade: 6,
    subject: "algebra",
    category: "equations",
    description:
      "Показывает, во сколько раз расстояние на местности больше расстояния на карте.",
    inputs: [
      { key: "d", label: "Расстояние на карте (d)" },
      { key: "D", label: "Расстояние на местности (D)" },
    ],
    calculate: (v) => v.D / v.d,
  },
  {
    id: 175,
    title: "Функция обратной пропорциональности",
    math: "y = \\frac{k}{x}",
    grade: 8,
    subject: "algebra",
    category: "equations",
    description: "Значение функции обратной пропорциональности в точке x.",
    inputs: [
      { key: "k", label: "Коэффициент k" },
      { key: "x", label: "Аргумент x" },
    ],
    calculate: (v) => v.k / v.x,
  },
  {
    id: 176,
    title: "Перевод градусов в радианы",
    math: "\\text{rad} = \\alpha \\cdot \\frac{\\pi}{180}",
    grade: 10,
    subject: "geometry",
    category: "trigonometry",
    description: "Переводит угол из градусной меры в радианную.",
    inputs: [{ key: "alpha", label: "Угол α (град)" }],
    calculate: (v) => (v.alpha * Math.PI) / 180,
  },
  {
    id: 177,
    title: "Перевод радианов в градусы",
    math: "\\alpha = \\text{rad} \\cdot \\frac{180}{\\pi}",
    grade: 10,
    subject: "geometry",
    category: "trigonometry",
    description: "Переводит угол из радианной меры в градусную.",
    inputs: [{ key: "rad", label: "Угол в радианах (rad)" }],
    calculate: (v) => (v.rad * 180) / Math.PI,
  },
  {
    id: 178,
    title: "Уравнение касательной к графику функции",
    math: "y = f(a) + f'(a)(x-a)",
    grade: 11,
    subject: "algebra",
    category: "calculus",
    description: "Значение касательной к графику функции в точке x.",
    inputs: [
      { key: "fa", label: "Значение функции f(a)" },
      { key: "fpa", label: "Значение производной f'(a)" },
      { key: "a0", label: "Координата x0" },
      { key: "x", label: "Аргумент x" },
    ],
    calculate: (v) => v.fa + v.fpa * (v.x - v.a0),
  },
  {
    id: 179,
    title: "Первообразная степенной функции",
    math: "F(x) = \\frac{x^{n+1}}{n+1}",
    grade: 11,
    subject: "algebra",
    category: "calculus",
    description:
      "Первообразная (антипроизводная) степенной функции xⁿ при n ≠ −1.",
    inputs: [
      { key: "x", label: "Значение x" },
      { key: "n", label: "Показатель n" },
    ],
    calculate: (v) =>
      v.n !== -1
        ? Math.pow(v.x, v.n + 1) / (v.n + 1)
        : "При n = -1 первообразная — это ln|x|",
  },
  {
    id: 180,
    title: "Отношение периметров подобных фигур",
    math: "\\frac{P_1}{P_2} = k",
    grade: 8,
    subject: "geometry",
    category: "triangles",
    description:
      "Отношение периметров подобных фигур равно коэффициенту подобия.",
    inputs: [{ key: "k", label: "Коэффициент подобия (k)" }],
    calculate: (v) => v.k,
  },
  {
    id: 181,
    title: "Признак подобия треугольников (по двум сторонам и углу)",
    math: "\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\Rightarrow \\triangle \\sim \\triangle",
    grade: 8,
    subject: "geometry",
    category: "triangles",
    description:
      "Проверяет подобие треугольников по двум сторонам и углу между ними (SAS).",
    inputs: [
      { key: "a1", label: "Сторона исходного треугольника (a)" },
      { key: "b1", label: "Сторона исходного треугольника (b)" },
      { key: "a2", label: "Сторона подобного треугольника (a')" },
      { key: "b2", label: "Сторона подобного треугольника (b')" },
    ],
    calculate: (v) => {
      const r1 = v.a1 / v.a2;
      const r2 = v.b1 / v.b2;
      if (Math.abs(r1 - r2) < 1e-9) {
        return `Подобны, k = ${Number(r1.toFixed(4))}`;
      }
      return "Не подобны (стороны непропорциональны)";
    },
  },
  {
    id: 182,
    title: "Периметр равностороннего треугольника",
    math: "P = 3a",
    grade: 5,
    subject: "geometry",
    category: ["triangles", "perimeters"],
    description: "Сумма длин трёх равных сторон равностороннего треугольника.",
    inputs: [{ key: "a", label: "Сторона a" }],
    calculate: (v) => 3 * v.a,
  },
  {
    id: 183,
    title: "Периметр ромба",
    math: "P = 4a",
    grade: 8,
    subject: "geometry",
    category: "perimeters",
    description: "Сумма длин четырёх равных сторон ромба.",
    inputs: [{ key: "a", label: "Сторона a" }],
    calculate: (v) => 4 * v.a,
  },
  {
    id: 184,
    title: "Периметр правильного многоугольника",
    math: "P = n \\cdot a",
    grade: 8,
    subject: "geometry",
    category: "perimeters",
    description:
      "Периметр правильного многоугольника как произведение числа сторон на длину стороны.",
    inputs: [
      { key: "n", label: "Количество сторон (n)" },
      { key: "a", label: "Сторона (a)" },
    ],
    calculate: (v) => v.n * v.a,
  },
];

// 2. Глобальное состояние
let currentTopic = "all";
let currentSubject = "all";
let currentGrade = "all";
let currentView = "all"; // 'all' или 'fav'
let favorites = JSON.parse(localStorage.getItem("math_favs")) || [];
let expandedIds = new Set(); // id формул, у которых сейчас открыта карточка
let currentLang = localStorage.getItem("math_lang") || "ru";

// 2.1 Переводы интерфейса (кнопки, подписи, темы) — точные, вручную
const translations = {
  ru: {
    cheatsheet_btn: "Шпаргалка в 1 клик",
    hero_title: "Формулы по математике",
    hero_subtitle: "Найдите любую формулу за считанные секунды",
    search_placeholder: "Поиск формулы по названию...",
    view_all: "Все формулы",
    view_fav: "Избранное",
    subject_all: "Все предметы",
    subject_algebra: "Алгебра",
    subject_geometry: "Геометрия",
    topics_heading: "Темы",
    grade_suffix: "класс",
    topic_all: "Все темы",
    topic_abbreviated_multiplication: "ФСУ",
    topic_equations: "Уравнения и Параболы",
    topic_triangles: "Треугольники",
    topic_shapes: "Площади фигур",
    topic_perimeters: "Периметры фигур",
    topic_trapezoid: "Трапеция",
    topic_circles: "Окружность и Круг",
    topic_progressions: "Прогрессии",
    topic_combinatorics: "Комбинаторика",
    topic_powers_and_logs: "Степени и Логарифмы",
    topic_trigonometry: "Тригонометрия",
    topic_calculus: "Производные и Интегралы",
    topic_vectors: "Векторы",
    topic_stereometry: "Стереометрия",
    card_hint: "Нажмите, чтобы посмотреть описание и калькулятор",
    legend_title: "Обозначения:",
    calc_button: "Рассчитать",
    result_prefix: "Результат",
    empty_state_title: "Выберите класс или тему",
    empty_state_text:
      "Отметьте класс, предмет или тему слева — и здесь появятся нужные формулы.",
    no_results: "Формулы не найдены",
  },
  uk: {
    cheatsheet_btn: "Шпаргалка в 1 клік",
    hero_title: "Формули з математики",
    hero_subtitle: "Знайдіть будь-яку формулу за лічені секунди",
    search_placeholder: "Пошук формули за назвою...",
    view_all: "Усі формули",
    view_fav: "Обране",
    subject_all: "Усі предмети",
    subject_algebra: "Алгебра",
    subject_geometry: "Геометрія",
    topics_heading: "Теми",
    grade_suffix: "клас",
    topic_all: "Усі теми",
    topic_abbreviated_multiplication: "Формули скороченого множення",
    topic_equations: "Рівняння та Параболи",
    topic_triangles: "Трикутники",
    topic_shapes: "Площі фігур",
    topic_perimeters: "Периметри фігур",
    topic_trapezoid: "Трапеція",
    topic_circles: "Коло і Круг",
    topic_progressions: "Прогресії",
    topic_combinatorics: "Комбінаторика",
    topic_powers_and_logs: "Степені й Логарифми",
    topic_trigonometry: "Тригонометрія",
    topic_calculus: "Похідні та Інтеграли",
    topic_vectors: "Вектори",
    topic_stereometry: "Стереометрія",
    card_hint: "Натисніть, щоб побачити опис і калькулятор",
    legend_title: "Позначення:",
    calc_button: "Обчислити",
    result_prefix: "Результат",
    empty_state_title: "Виберіть клас або тему",
    empty_state_text:
      "Позначте клас, предмет або тему зліва — і тут з'являться потрібні формули.",
    no_results: "Формул не знайдено",
  },
};

// t(key) — перевод строки интерфейса на текущий язык (с фолбэком на русский)
function t(key) {
  return (
    (translations[currentLang] && translations[currentLang][key]) ||
    translations.ru[key] ||
    key
  );
}

// 2.3 Ручной перевод формул на украинский (без внешних API)
// 2.4 Пояснения для «Обозначений», когда подпись поля калькулятора —
// это просто буква без описания (например, "u", "x1", "F(a)").
// Ключ — id формулы, внутри — key поля -> {ru, uk} пояснение.
const legendMeanings = {
  25: {
    a: { ru: "Числитель первой дроби", uk: "Чисельник першого дробу" },
    b: { ru: "Знаменатель первой дроби", uk: "Знаменник першого дробу" },
    c: { ru: "Числитель второй дроби", uk: "Чисельник другого дробу" },
    d: { ru: "Знаменатель второй дроби", uk: "Знаменник другого дробу" },
  },
  26: {
    a: { ru: "Числитель первой дроби", uk: "Чисельник першого дробу" },
    b: { ru: "Знаменатель первой дроби", uk: "Знаменник першого дробу" },
    c: { ru: "Числитель второй дроби", uk: "Чисельник другого дробу" },
    d: { ru: "Знаменатель второй дроби", uk: "Знаменник другого дробу" },
  },
  27: {
    a: { ru: "Крайний член (1-й)", uk: "Крайній член (1-й)" },
    b: { ru: "Средний член (1-й)", uk: "Середній член (1-й)" },
    c: { ru: "Средний член (2-й)", uk: "Середній член (2-й)" },
    d: { ru: "Крайний член (2-й)", uk: "Крайній член (2-й)" },
  },
  90: {
    x1: {
      ru: "Координата x первого вектора",
      uk: "Координата x першого вектора",
    },
    y1: {
      ru: "Координата y первого вектора",
      uk: "Координата y першого вектора",
    },
    x2: {
      ru: "Координата x второго вектора",
      uk: "Координата x другого вектора",
    },
    y2: {
      ru: "Координата y второго вектора",
      uk: "Координата y другого вектора",
    },
  },
  109: {
    u: { ru: "Первая функция", uk: "Перша функція" },
    u_p: {
      symbol: "u'",
      ru: "Производная первой функции",
      uk: "Похідна першої функції",
    },
    v: { ru: "Вторая функция", uk: "Друга функція" },
    v_p: {
      symbol: "v'",
      ru: "Производная второй функции",
      uk: "Похідна другої функції",
    },
  },
  110: {
    u: { ru: "Первая функция", uk: "Перша функція" },
    u_p: {
      symbol: "u'",
      ru: "Производная первой функции",
      uk: "Похідна першої функції",
    },
    v: { ru: "Вторая функция", uk: "Друга функція" },
    v_p: {
      symbol: "v'",
      ru: "Производная второй функции",
      uk: "Похідна другої функції",
    },
  },
  111: {
    Fb: {
      symbol: "F(b)",
      ru: "Значение первообразной в точке b",
      uk: "Значення первісної в точці b",
    },
    Fa: {
      symbol: "F(a)",
      ru: "Значение первообразной в точке a",
      uk: "Значення первісної в точці a",
    },
  },
  120: {
    x1: {
      symbol: "a_x",
      ru: "Координата x первого вектора",
      uk: "Координата x першого вектора",
    },
    y1: {
      symbol: "a_y",
      ru: "Координата y первого вектора",
      uk: "Координата y першого вектора",
    },
    z1: {
      symbol: "a_z",
      ru: "Координата z первого вектора",
      uk: "Координата z першого вектора",
    },
    x2: {
      symbol: "b_x",
      ru: "Координата x второго вектора",
      uk: "Координата x другого вектора",
    },
    y2: {
      symbol: "b_y",
      ru: "Координата y второго вектора",
      uk: "Координата y другого вектора",
    },
    z2: {
      symbol: "b_z",
      ru: "Координата z второго вектора",
      uk: "Координата z другого вектора",
    },
  },
  123: {
    x1: { ru: "Координата x первой точки", uk: "Координата x першої точки" },
    y1: { ru: "Координата y первой точки", uk: "Координата y першої точки" },
    x2: { ru: "Координата x второй точки", uk: "Координата x другої точки" },
    y2: { ru: "Координата y второй точки", uk: "Координата y другої точки" },
  },
  124: {
    x1: { ru: "Координата x первой точки", uk: "Координата x першої точки" },
    y1: { ru: "Координата y первой точки", uk: "Координата y першої точки" },
    x2: { ru: "Координата x второй точки", uk: "Координата x другої точки" },
    y2: { ru: "Координата y второй точки", uk: "Координата y другої точки" },
  },
  125: {
    ax: {
      symbol: "a_x",
      ru: "Координата x вектора a",
      uk: "Координата x вектора a",
    },
    ay: {
      symbol: "a_y",
      ru: "Координата y вектора a",
      uk: "Координата y вектора a",
    },
    bx: {
      symbol: "b_x",
      ru: "Координата x вектора b",
      uk: "Координата x вектора b",
    },
    by: {
      symbol: "b_y",
      ru: "Координата y вектора b",
      uk: "Координата y вектора b",
    },
  },
  126: {
    ax: {
      symbol: "a_x",
      ru: "Координата x вектора a",
      uk: "Координата x вектора a",
    },
    ay: {
      symbol: "a_y",
      ru: "Координата y вектора a",
      uk: "Координата y вектора a",
    },
    bx: {
      symbol: "b_x",
      ru: "Координата x вектора b",
      uk: "Координата x вектора b",
    },
    by: {
      symbol: "b_y",
      ru: "Координата y вектора b",
      uk: "Координата y вектора b",
    },
  },
  144: {
    x1: { ru: "Координата x первой точки", uk: "Координата x першої точки" },
    y1: { ru: "Координата y первой точки", uk: "Координата y першої точки" },
    x2: { ru: "Координата x второй точки", uk: "Координата x другої точки" },
    y2: { ru: "Координата y второй точки", uk: "Координата y другої точки" },
  },
};

const formulaTranslationsUk = {
  1: {
    title: "Периметр прямокутника",
    description: "Сума довжин усіх сторін прямокутника.",
  },
  2: { title: "Площа прямокутника", description: "Добуток довжини на ширину." },
  3: {
    title: "Периметр квадрата",
    description: "Сума довжин чотирьох рівних сторін квадрата.",
  },
  4: { title: "Площа квадрата", description: "Квадрат довжини його сторони." },
  5: {
    title: "Об'єм паралелепіпеда",
    description: "Добуток трьох вимірів: довжини, ширини і висоти.",
  },
  6: {
    title: "Площа поверхні паралелепіпеда",
    description: "Сума площ усіх шести граней паралелепіпеда.",
  },
  7: {
    title: "Сума довжин ребер паралелепіпеда",
    description: "Сума довжин усіх 12 ребер прямокутного паралелепіпеда.",
  },
  8: { title: "Об'єм куба", description: "Куб довжини ребра куба." },
  9: {
    title: "Площа поверхні куба",
    description: "Сума площ шести рівних квадратних граней.",
  },
  10: {
    title: "Формула шляху (відстань)",
    description: "Пройдена відстань за рівномірного руху.",
  },
  11: {
    title: "Формула швидкості",
    description: "Швидкість руху як відношення шляху до часу.",
  },
  12: {
    title: "Формула часу руху",
    description: "Час руху як відношення шляху до швидкості.",
  },
  13: {
    title: "Швидкість за течією річки",
    description: "Сума власної швидкості об'єкта і швидкості течії.",
  },
  14: {
    title: "Швидкість проти течії річки",
    description: "Різниця власної швидкості об'єкта і швидкості течії.",
  },
  15: {
    title: "Вартість покупки",
    description:
      "Загальна вартість як добуток ціни за одиницю товару на кількість.",
  },
  16: {
    title: "Робота (продуктивність)",
    description: "Обсяг виконаної роботи через продуктивність і час.",
  },
  17: {
    title: "Ділення з остачею",
    description:
      "Представлення діленого через дільник, неповну частку і остачу.",
  },
  18: {
    title: "Середнє арифметичне",
    description: "Обчислює середнє арифметичне двох або трьох введених чисел.",
  },
  19: {
    title: "Знаходження 1% від числа",
    description: "Сота частина від заданого числа A.",
  },
  20: {
    title: "Знаходження p% від числа A",
    description: "Значення вказаного відсотка p від числа A.",
  },
  21: {
    title: "Переставний закон додавання",
    description: "Від перестановки доданків сума не змінюється.",
  },
  22: {
    title: "Переставний закон множення",
    description: "Від перестановки множників добуток не змінюється.",
  },
  23: {
    title: "Розподільний закон",
    description: "Множення числа на суму двох доданків.",
  },
  24: {
    title: "Основна властивість дробу",
    description:
      "Збільшення чисельника і знаменника в c разів зберігає значення дробу.",
  },
  25: {
    title: "Множення звичайних дробів",
    description: "Перемножуються окремо чисельники і знаменники.",
  },
  26: {
    title: "Ділення звичайних дробів",
    description: "Множення першого дробу на перевернутий другий.",
  },
  27: {
    title: "Основна властивість пропорції",
    description: "Добуток крайніх членів пропорції дорівнює добутку середніх.",
  },
  28: {
    title: "Модуль числа",
    description:
      "Абсолютна величина числа (відстань до нуля на координатній прямій).",
  },
  29: {
    title: "Додавання чисел з різними знаками",
    description:
      "Додавання від'ємного числа еквівалентне відніманню його модуля.",
  },
  30: {
    title: "Множення від'ємних чисел",
    description: "Добуток двох від'ємних чисел завжди додатний.",
  },
  31: {
    title: "Множення чисел з різними знаками",
    description: "Добуток чисел з різними знаками завжди від'ємний.",
  },
  32: {
    title: "Довжина кола (через діаметр)",
    description: "Обчислення довжини межі кола через діаметр.",
  },
  33: {
    title: "Довжина кола (через радіус)",
    description: "Обчислення довжини межі кола через радіус.",
  },
  34: {
    title: "Площа круга",
    description: "Площа області, обмеженої колом радіуса r.",
  },
  35: {
    title: "Залежність діаметра і радіуса",
    description: "Діаметр кола дорівнює двом радіусам.",
  },
  36: {
    title: "Квадрат суми",
    description: "Формула скороченого множення для квадрата суми.",
  },
  37: {
    title: "Квадрат різниці",
    description: "Формула скороченого множення для квадрата різниці.",
  },
  38: {
    title: "Різниця квадратів",
    description: "Розкладання різниці квадратів на множники.",
  },
  39: { title: "Куб суми", description: "Куб суми двох виразів." },
  40: { title: "Куб різниці", description: "Куб різниці двох виразів." },
  41: {
    title: "Сума кубів",
    description: "Розкладання суми кубів на множники.",
  },
  42: {
    title: "Різниця кубів",
    description: "Розкладання різниці кубів на множники.",
  },
  43: {
    title: "Множення степенів",
    description:
      "При множенні степенів з однаковими основами показники додаються.",
  },
  44: {
    title: "Ділення степенів",
    description:
      "При діленні степенів з однаковими основами показники віднімаються.",
  },
  45: {
    title: "Піднесення степеня до степеня",
    description: "При піднесенні степеня до степеня показники перемножуються.",
  },
  46: {
    title: "Степінь добутку",
    description: "Кожен множник підноситься до заданого степеня.",
  },
  47: {
    title: "Степінь з нульовим показником",
    description: "Будь-яке ненульове число в нульовому степені дорівнює 1.",
  },
  48: {
    title: "Лінійна функція",
    description:
      "Обчислення значення y за аргументом x, кутовим коефіцієнтом k і зсувом b.",
  },
  49: {
    title: "Сума кутів трикутника",
    description: "Знаходить третій кут трикутника за двома відомими.",
  },
  50: {
    title: "Зовнішній кут трикутника",
    description:
      "Зовнішній кут дорівнює сумі двох внутрішніх кутів, не суміжних з ним.",
  },
  51: {
    title: "Нерівність трикутника",
    description:
      "Перевіряє можливість існування трикутника за двома сторонами b і c.",
  },
  52: {
    title: "Периметр рівнобедреного трикутника",
    description: "Периметр трикутника з боковими сторонами a і основою b.",
  },
  53: {
    title: "Властивість суміжних кутів",
    description: "Сума двох суміжних кутів дорівнює 180 градусам.",
  },
  54: {
    title: "Властивість вертикальних кутів",
    description: "Вертикальні кути рівні між собою.",
  },
  55: {
    title: "Дискримінант",
    description:
      "Визначає кількість дійсних коренів квадратного рівняння ax² + bx + c = 0.",
  },
  56: {
    title: "Корені квадратного рівняння",
    description: "Знаходження коренів рівняння через дискримінант.",
  },
  57: {
    title: "Теорема Вієта (зведене)",
    description: "Пов'язує корені рівняння x² + px + q = 0 з коефіцієнтами.",
  },
  58: {
    title: "Розкладання квадратного тричлена",
    description:
      "Представлення тричлена у вигляді добутку з використанням його коренів.",
  },
  59: {
    title: "Властивості квадратного кореня (множення)",
    description:
      "Корінь з добутку невід'ємних чисел дорівнює добутку їхніх коренів.",
  },
  60: {
    title: "Властивості квадратного кореня (ділення)",
    description:
      "Корінь з частки дорівнює відношенню коренів чисельника і знаменника.",
  },
  61: {
    title: "Квадрат кореня",
    description: "Піднесення арифметичного квадратного кореня до квадрата.",
  },
  62: {
    title: "Корінь з квадрата",
    description:
      "Добування квадратного кореня з квадрата числа дорівнює модулю цього числа.",
  },
  63: {
    title: "Степінь з від'ємним показником",
    description: "Заміна від'ємного показника степеня на обернену величину.",
  },
  64: {
    title: "Теорема Піфагора",
    description:
      "Знаходження гіпотенузи c прямокутного трикутника за двома катетами.",
  },
  65: {
    title: "Площа паралелограма",
    description: "Площа паралелограма через сторону і опущену на неї висоту.",
  },
  66: {
    title: "Площа трикутника",
    description:
      "Площа трикутника дорівнює половині добутку сторони на висоту.",
  },
  67: {
    title: "Площа прямокутного трикутника",
    description:
      "Площа прямокутного трикутника дорівнює половині добутку катетів.",
  },
  68: {
    title: "Площа ромба (через діагоналі)",
    description: "Площа ромба дорівнює половині добутку його діагоналей.",
  },
  69: {
    title: "Площа трапеції",
    description: "Площа трапеції дорівнює добутку півсуми основ на висоту.",
  },
  70: {
    title: "Середня лінія трикутника",
    description: "Середня лінія дорівнює половині паралельної їй сторони.",
  },
  71: {
    title: "Середня лінія трапеції",
    description: "Середня лінія трапеції дорівнює півсумі її основ.",
  },
  72: {
    title: "Синус гострого кута (Sin)",
    description: "Відношення протилежного катета до гіпотенузи.",
  },
  73: {
    title: "Косинус гострого кута (Cos)",
    description: "Відношення прилеглого катета до гіпотенузи.",
  },
  74: {
    title: "Тангенс гострого кута (Tg)",
    description: "Відношення протилежного катета до прилеглого.",
  },
  75: {
    title: "n-й член арифметичної прогресії",
    description: "Дозволяє знайти будь-який член арифметичної прогресії.",
  },
  76: {
    title: "Сума перших n членів  арифметичної прогресії",
    description: "Обчислює суму з 1-го по n-й члени арифметичної прогресії.",
  },
  77: {
    title: "n-й член геометричної прогресії",
    description: "Дозволяє знайти будь-який член геометричної прогресії.",
  },
  78: {
    title: "Сума перших n членів геометричної прогресії",
    description:
      "Обчислює суму перших n членів геометричної прогресії при q ≠ 1.",
  },
  79: {
    title: "Формула вершини параболи (x)",
    description: "Обчислює координату X вершини параболи ax² + bx + c.",
  },
  80: {
    title: "Формула вершини параболи (y)",
    description: "Обчислює значення Y вершини параболи за x₀ і коефіцієнтами.",
  },
  81: {
    title: "Число комбінацій (перестановки)",
    description: "Кількість способів переставити n елементів (факторіал n!).",
  },
  82: {
    title: "Теорема косинусів",
    description:
      "Знаходить сторону a за двома відомими сторонами і кутом між ними.",
  },
  83: {
    title: "Теорема синусів",
    description:
      "Обчислює радіус R описаного кола навколо трикутника за стороною a і кутом A.",
  },
  84: {
    title: "Площа трикутника (через кут)",
    description: "Площа трикутника за двома сторонами і кутом між ними.",
  },
  85: {
    title: "Формула Герона",
    description: "Площа трикутника за трьома відомими сторонами.",
  },
  86: {
    title: "Площа описаного багатокутника",
    description: "Площа через півпериметр p і радіус вписаного кола r.",
  },
  87: {
    title: "Площа правильного багатокутника",
    description:
      "Площа правильного багатокутника через периметр P і радіус вписаного кола r.",
  },
  88: {
    title: "Довжина дуги кола",
    description: "Обчислює довжину дуги кола з центральним кутом α.",
  },
  89: {
    title: "Площа кругового сектора",
    description: "Площа сектора круга з центральним кутом α.",
  },
  90: {
    title: "Скалярний добуток векторів",
    description: "Скалярний добуток двох векторів на площині за координатами.",
  },
  91: {
    title: "Довжина вектора за координатами",
    description: "Довжина (модуль) вектора на площині.",
  },
  92: {
    title: "Основна тригонометрична тотожність",
    description: "Обчислює модуль sin α за відомим cos α.",
  },
  93: {
    title: "Зв'язок тангенса із синусом і косинусом",
    description: "Обчислення tg α через відношення sin α до cos α.",
  },
  94: {
    title: "Степінь з раціональним показником",
    description:
      "Представлення степеня з дробовим показником у вигляді кореня.",
  },
  95: {
    title: "Визначення логарифма",
    description:
      "Знаходить степінь c, до якого підноситься основа a для отримання b.",
  },
  96: {
    title: "Основна логарифмічна тотожність",
    description: "Піднесення основи a до степеня log_a(b) дає аргумент b.",
  },
  97: {
    title: "Властивості логарифмів (сума)",
    description: "Сума логарифмів дорівнює логарифму добутку аргументів.",
  },
  98: {
    title: "Властивості логарифмів (різниця)",
    description: "Різниця логарифмів дорівнює логарифму частки аргументів.",
  },
  99: {
    title: "Винесення степеня з логарифма",
    description: "Степінь k виноситься у вигляді множника перед логарифмом.",
  },
  100: {
    title: "Формула переходу до нової основи",
    description: "Перехід від логарифма за основою a до основи c.",
  },
  101: {
    title: "Синус суми і різниці",
    description: "Обчислює sin(α + β) і sin(α - β).",
  },
  102: {
    title: "Косинус суми і різниці",
    description: "Обчислює cos(α + β) і cos(α - β).",
  },
  103: {
    title: "Синус подвійного кута",
    description: "Формула для розкриття синуса подвійного кута.",
  },
  104: {
    title: "Косинус подвійного кута",
    description: "Формула для розкриття косинуса подвійного кута.",
  },
  105: {
    title: "Тангенс подвійного кута",
    description: "Формула для тангенса подвійного кута.",
  },
  106: {
    title: "Похідна степеневої функції",
    description: "Значення похідної функції x^n у заданій точці x.",
  },
  107: {
    title: "Похідна тригонометричних функцій",
    description: "Обчислює значення похідних (sin x)' і (cos x)' у точці x.",
  },
  108: {
    title: "Похідна показникової функції",
    description: "Значення похідної функції a^x у точці x.",
  },
  109: {
    title: "Похідна добутку",
    description: "Формула диференціювання добутку двох функцій u і v.",
  },
  110: {
    title: "Похідна частки",
    description: "Формула диференціювання частки двох функцій u і v.",
  },
  111: {
    title: "Формула Ньютона — Лейбніца (Інтеграл)",
    description: "Обчислює визначений інтеграл через значення первісної.",
  },
  112: {
    title: "Об'єм призми",
    description: "Об'єм призми дорівнює добутку площі основи на висоту.",
  },
  113: {
    title: "Об'єм піраміди",
    description:
      "Об'єм піраміди дорівнює третині добутку площі основи на висоту.",
  },
  114: {
    title: "Об'єм циліндра",
    description: "Об'єм циліндра з радіусом основи r і висотою h.",
  },
  115: {
    title: "Площа бічної поверхні циліндра",
    description: "Площа бічної поверхні прямого кругового циліндра.",
  },
  116: {
    title: "Об'єм конуса",
    description: "Об'єм прямого кругового конуса.",
  },
  117: {
    title: "Площа бічної поверхні конуса",
    description: "Площа бічної поверхні конуса через радіус r і твірну l.",
  },
  118: { title: "Об'єм кулі", description: "Об'єм кулі радіуса R." },
  119: {
    title: "Площа сфери (поверхні кулі)",
    description: "Площа сфери радіуса R.",
  },
  120: {
    title: "Кут між векторами у просторі",
    description:
      "Косинус кута між двома тривимірними векторами за їхніми координатами.",
  },
  121: {
    title: "НСД (найбільший спільний дільник)",
    description: "Найбільше число, на яке діляться обидва числа без остачі.",
  },
  122: {
    title: "НСК (найменше спільне кратне)",
    description: "Найменше число, кратне одночасно обом числам.",
  },
  123: {
    title: "Відстань між двома точками",
    description: "Довжина відрізка між двома точками на координатній площині.",
  },
  124: {
    title: "Середина відрізка (координати)",
    description: "Координати точки, яка ділить відрізок навпіл.",
  },
  125: {
    title: "Сума векторів за координатами",
    description: "Додавання векторів покоординатно.",
  },
  126: {
    title: "Косинус кута між векторами (2D)",
    description:
      "Косинус кута між двома векторами на площині через їхні координати.",
  },
  127: {
    title: "Число сполучень C(n,k)",
    description:
      "Кількість способів вибрати k елементів з n без урахування порядку.",
  },
  128: {
    title: "Число розміщень A(n,k)",
    description: "Кількість способів вибрати і впорядкувати k елементів з n.",
  },
  129: {
    title: "Класична ймовірність події",
    description:
      "Ймовірність події як відношення сприятливих результатів до загальної кількості результатів.",
  },
  130: {
    title: "Ймовірність протилежної події",
    description: "Ймовірність того, що подія A не відбудеться.",
  },
  131: {
    title: "Сума нескінченної геометричної прогресії",
    description:
      "Сума всіх членів нескінченно спадної геометричної прогресії (|q| < 1).",
  },
  132: {
    title: "Характеристична властивість арифметичної прогресії",
    description:
      "Кожен член арифметичної прогресії дорівнює середньому арифметичному сусідніх членів.",
  },
  133: {
    title: "Діагональ прямокутного паралелепіпеда",
    description: "Діагональ прямокутного паралелепіпеда через три його виміри.",
  },
  134: {
    title: "Діагональ куба",
    description: "Діагональ куба через довжину його ребра.",
  },
  135: {
    title: "Лінійне рівняння (корінь)",
    description: "Корінь лінійного рівняння з однією змінною.",
  },
  136: {
    title: "Медіана вибірки (5 чисел)",
    description:
      "Число, яке знаходиться в середині впорядкованого набору даних.",
  },
  137: {
    title: "Мода вибірки (5 чисел)",
    description: "Значення, яке зустрічається в наборі даних найчастіше.",
  },
  138: {
    title: "Розмах вибірки (5 чисел)",
    description: "Різниця між найбільшим і найменшим значенням у наборі даних.",
  },
  139: {
    title: "Коефіцієнт подібності трикутників",
    description: "Відношення відповідних сторін подібних трикутників.",
  },
  140: {
    title: "Відношення площ подібних фігур",
    description:
      "Відношення площ подібних фігур дорівнює квадрату коефіцієнта подібності.",
  },
  141: {
    title: "Теорема Фалеса (четвертий пропорційний відрізок)",
    description: "Знаходить четвертий відрізок, пропорційний трьом відомим.",
  },
  142: {
    title: "Діагоналі паралелограма",
    description: "Діагоналі паралелограма точкою перетину діляться навпіл.",
  },
  143: {
    title: "Сума кутів при бічній стороні паралелограма",
    description:
      "Сума кутів, прилеглих до однієї бічної сторони паралелограма, дорівнює 180°.",
  },
  144: {
    title: "Кутовий коефіцієнт прямої за двома точками",
    description:
      "Кутовий коефіцієнт прямої, що проходить через дві задані точки.",
  },
  145: {
    title: "Відстань від точки до прямої",
    description:
      "Найкоротша відстань від точки до прямої, заданої рівнянням Ax+By+C=0.",
  },
  146: {
    title: "Радіус кола за рівнянням",
    description:
      "Радіус кола з центром (a,b), яке проходить через точку (x,y).",
  },
  147: {
    title: "Теорема Вієта (загальний випадок)",
    description:
      "Пов'язує корені квадратного рівняння ax²+bx+c=0 з його коефіцієнтами.",
  },
  148: {
    title: "Ймовірність незалежних подій",
    description: "Ймовірність одночасного настання двох незалежних подій.",
  },
  149: {
    title: "Формула Бернуллі",
    description:
      "Ймовірність рівно k успіхів у n незалежних випробуваннях з ймовірністю успіху p.",
  },
  150: {
    title: "Похідна складеної функції",
    description:
      "Правило диференціювання складеної функції (ланцюгове правило).",
  },
  151: {
    title: "Периметр трапеції",
    description: "Сума довжин усіх чотирьох сторін трапеції.",
  },
  152: {
    title: "Висота трапеції (через площу)",
    description: "Висота трапеції, виражена через її площу і основи.",
  },
  153: {
    title: "Відрізок між серединами діагоналей",
    description:
      "Відрізок, що з'єднує середини діагоналей трапеції, дорівнює піврізниці її основ.",
  },
  154: {
    title: "Сума кутів при бічній стороні трапеції",
    description:
      "Сума кутів, прилеглих до однієї бічної сторони трапеції, дорівнює 180°.",
  },
  155: {
    title: "Діагональ квадрата",
    description: "Діагональ квадрата через довжину його сторони.",
  },
  156: {
    title: "Діагональ прямокутника",
    description: "Діагональ прямокутника через довжину і ширину.",
  },
  157: {
    title: "Периметр паралелограма",
    description: "Сума довжин усіх сторін паралелограма.",
  },
  158: {
    title: "Площа рівностороннього трикутника",
    description: "Площа трикутника з трьома рівними сторонами.",
  },
  159: {
    title: "Властивість рівнобедреного трикутника",
    description: "Кути при основі рівнобедреного трикутника рівні.",
  },
  160: {
    title: "Похідна суми функцій",
    description: "Похідна суми функцій дорівнює сумі їхніх похідних.",
  },
  161: {
    title: "Похідна константи",
    description: "Похідна сталої величини завжди дорівнює нулю.",
  },
  162: {
    title: "Довжина вектора у просторі",
    description:
      "Довжина (модуль) вектора у тривимірному просторі за його координатами.",
  },
  163: {
    title: "Різниця векторів за координатами",
    description: "Віднімання векторів покоординатно.",
  },
  164: {
    title: "Котангенс гострого кута",
    description: "Відношення прилеглого катета до протилежного.",
  },
  165: {
    title: "Система двох лінійних рівнянь",
    description:
      "Розв'язання системи двох лінійних рівнянь з двома змінними методом визначників.",
  },
  166: {
    title: "Повна поверхня правильної призми",
    description: "Сума площ двох основ і бічної поверхні прямої призми.",
  },
  167: {
    title: "Периметр довільного трикутника",
    description: "Сума довжин усіх трьох сторін трикутника.",
  },
  168: {
    title: "Сполучний закон додавання",
    description: "Результат додавання не залежить від групування доданків.",
  },
  169: {
    title: "Сполучний закон множення",
    description: "Результат множення не залежить від групування множників.",
  },
  170: {
    title: "Знаходження числа за його відсотком",
    description: "Число A, якщо відомо, що B становить p% від нього.",
  },
  171: {
    title: "Додавання дробів з однаковим знаменником",
    description: "Чисельники додаються, знаменник залишається без змін.",
  },
  172: {
    title: "Віднімання дробів з однаковим знаменником",
    description: "Чисельники віднімаються, знаменник залишається без змін.",
  },
  173: {
    title: "Знаходження невідомого члена пропорції",
    description: "Знаходить четвертий (невідомий) член пропорції.",
  },
  174: {
    title: "Масштаб карти",
    description:
      "Показує, у скільки разів відстань на місцевості більша за відстань на карті.",
  },
  175: {
    title: "Функція оберненої пропорційності",
    description: "Значення функції оберненої пропорційності в точці x.",
  },
  176: {
    title: "Переведення градусів у радіани",
    description: "Переводить кут з градусної міри в радіанну.",
  },
  177: {
    title: "Переведення радіанів у градуси",
    description: "Переводить кут з радіанної міри в градусну.",
  },
  178: {
    title: "Рівняння дотичної до графіка функції",
    description: "Значення дотичної до графіка функції в точці x.",
  },
  179: {
    title: "Первісна степеневої функції",
    description: "Первісна (антипохідна) степеневої функції xⁿ при n ≠ −1.",
  },
  180: {
    title: "Відношення периметрів подібних фігур",
    description:
      "Відношення периметрів подібних фігур дорівнює коефіцієнту подібності.",
  },
  181: {
    title: "Ознака подібності трикутників (за двома сторонами і кутом)",
    description:
      "Перевіряє подібність трикутників за двома сторонами і кутом між ними (SAS).",
  },
  182: {
    title: "Периметр рівностороннього трикутника",
    description: "Сума довжин трьох рівних сторін рівностороннього трикутника.",
  },
  183: {
    title: "Периметр ромба",
    description: "Сума довжин чотирьох рівних сторін ромба.",
  },
  184: {
    title: "Периметр правильного багатокутника",
    description:
      "Периметр правильного багатокутника як добуток числа сторін на довжину сторони.",
  },
  185: {
    title: "Сума квадратів діагоналей трапеції",
    description:
      "Пов'язує діагоналі трапеції з довжинами основ і бічних сторін.",
  },
  186: {
    title: "Основа трапеції через середню лінію",
    description:
      "Основа трапеції, виражена через середню лінію та іншу основу.",
  },
  187: {
    title: "Основа трапеції через висоту і кути при основі",
    description:
      "Більша основа трапеції через меншу основу, висоту і кути при нижній основі.",
  },
  188: {
    title: "Основа трапеції через бічні сторони і кути",
    description:
      "Більша основа трапеції через меншу основу, бічні сторони і кути при нижній основі.",
  },
  189: {
    title: "Бічна сторона трапеції через висоту і кут",
    description:
      "Бічна сторона трапеції через висоту і прилеглий кут при основі.",
  },
  190: {
    title: "Висота трапеції через бічну сторону і кут",
    description:
      "Висота трапеції через бічну сторону і прилеглий кут при основі.",
  },
  191: {
    title: "Площа круга через діаметр",
    description: "Площа круга, виражена через його діаметр.",
  },
  192: {
    title: "Рівняння кола з центром у початку координат",
    description:
      "Радіус кола з центром у початку координат, що проходить через точку (x, y).",
  },
  193: {
    title: "Властивість відрізків дотичних з однієї точки",
    description:
      "Відрізки двох дотичних до кола, проведених з однієї точки, рівні між собою.",
  },
  194: {
    title: "Добуток відрізків двох січних",
    description:
      "Якщо з точки поза колом проведено дві січні, добутки відрізків кожної з них рівні.",
  },
  195: {
    title: "Січна і дотична з однієї точки",
    description:
      "Квадрат відрізка дотичної дорівнює добутку відрізків січної, проведених з однієї точки.",
  },
  196: {
    title: "Довжина хорди через центральний кут",
    description: "Довжина хорди кола через радіус і центральний кут.",
  },
  197: {
    title: "Довжина хорди через вписаний кут",
    description: "Довжина хорди кола через радіус і вписаний кут.",
  },
  198: {
    title: "Сума n членів арифм. прогресії (через перший член і різницю)",
    description:
      "Обчислює суму перших n членів арифметичної прогресії через перший член і різницю.",
  },
  199: {
    title: "Характеристична властивість геометричної прогресії",
    description:
      "Квадрат члена геометричної прогресії дорівнює добутку сусідніх з ним членів.",
  },
};

const labelTranslationsUk = {
  "Слагаемое c": "Доданок c",
  "Множитель c": "Множник c",
  "Известная часть (B)": "Відома частина (B)",
  "Числитель b": "Чисельник b",
  "Знаменатель c": "Знаменник c",
  "Первый член пропорции (a)": "Перший член пропорції (a)",
  "Второй член пропорции (b)": "Другий член пропорції (b)",
  "Третий член пропорции (c)": "Третій член пропорції (c)",
  "Расстояние на карте (d)": "Відстань на карті (d)",
  "Расстояние на местности (D)": "Відстань на місцевості (D)",
  "Угол в радианах (rad)": "Кут у радіанах (rad)",
  "Значение функции f(a)": "Значення функції f(a)",
  "Значение производной f'(a)": "Значення похідної f'(a)",
  "Сторона исходного треугольника (b)": "Сторона вихідного трикутника (b)",
  "Сторона подобного треугольника (b')": "Сторона подібного трикутника (b')",
  "Производная u'": "Похідна u'",
  "Производная v'": "Похідна v'",
  "Коэффициент a1": "Коефіцієнт a1",
  "Коэффициент b1": "Коефіцієнт b1",
  "Коэффициент c1": "Коефіцієнт c1",
  "Коэффициент a2": "Коефіцієнт a2",
  "Коэффициент b2": "Коефіцієнт b2",
  "Коэффициент c2": "Коефіцієнт c2",
  "Боковая сторона c": "Бічна сторона c",
  "Боковая сторона d": "Бічна сторона d",
  "Площадь (S)": "Площа (S)",
  "Количество выбираемых (k)": "Кількість обираних (k)",
  "Число 3": "Число 3",
  "Число 4": "Число 4",
  "Число 5": "Число 5",
  "Сторона исходного треугольника (a)": "Сторона вихідного трикутника (a)",
  "Сторона подобного треугольника (a')": "Сторона подібного трикутника (a')",
  "Коэффициент подобия (k)": "Коефіцієнт подібності (k)",
  "Отрезок a": "Відрізок a",
  "Отрезок b": "Відрізок b",
  "Отрезок c": "Відрізок c",
  "Диагональ параллелограмма (d)": "Діагональ паралелограма (d)",
  "Координата y0": "Координата y0",
  "Вероятность события P(B)": "Ймовірність події P(B)",
  "Вероятность успеха (p)": "Ймовірність успіху (p)",
  "Значение f'(u)": "Значення f'(u)",
  "Значение g'(x)": "Значення g'(x)",
  "Благоприятные исходы (m)": "Сприятливі результати (m)",
  "Всего исходов (n)": "Усього результатів (n)",
  "Вероятность события P(A)": "Ймовірність події P(A)",
  "Предыдущий член (a_{n-1})": "Попередній член (a_{n-1})",
  "Следующий член (a_{n+1})": "Наступний член (a_{n+1})",
  "F(a)": "F(a)",
  "F(b)": "F(b)",
  a: "a",
  a_x: "a_x",
  a_y: "a_y",
  a_z: "a_z",
  b: "b",
  b_x: "b_x",
  b_y: "b_y",
  b_z: "b_z",
  c: "c",
  d: "d",
  "n-й член (an)": "n-й член (an)",
  u: "u",
  "u'": "u'",
  v: "v",
  "v'": "v'",
  x1: "x1",
  x2: "x2",
  y1: "y1",
  y2: "y2",
  "Аргумент b": "Аргумент b",
  "Аргумент b (b>0)": "Аргумент b (b>0)",
  "Аргумент x": "Аргумент x",
  "Аргумент y": "Аргумент y",
  "Боковая сторона a": "Бічна сторона a",
  "Время (t)": "Час (t)",
  "Высота (c)": "Висота (c)",
  "Высота (h)": "Висота (h)",
  "Высота h": "Висота h",
  "Высота h_a": "Висота h_a",
  Гипотенуза: "Гіпотенуза",
  "Делитель (b)": "Дільник (b)",
  "Диагональ d1": "Діагональ d1",
  "Диагональ d2": "Діагональ d2",
  "Диаметр (d)": "Діаметр (d)",
  "Длина (a)": "Довжина (a)",
  "Знаменатель (q)": "Знаменник (q)",
  "Знаменатель b": "Знаменник b",
  "Знаменатель q (q≠1)": "Знаменник q (q≠1)",
  "Значение x": "Значення x",
  "Катет a": "Катет a",
  "Катет b": "Катет b",
  "Количество (n)": "Кількість (n)",
  "Количество элементов (n)": "Кількість елементів (n)",
  "Количество элементов n (целое ≥ 0)": "Кількість елементів n (ціле ≥ 0)",
  "Координата x": "Координата x",
  "Диаметр (D)": "Діаметр (D)",
  "Отрезок касательной AB": "Відрізок дотичної AB",
  "Отрезок AQ": "Відрізок AQ",
  "Отрезок BQ": "Відрізок BQ",
  "Отрезок CQ": "Відрізок CQ",
  "Следующий член (b_{n+1})": "Наступний член (b_{n+1})",
  "Предыдущий член (b_{n-1})": "Попередній член (b_{n-1})",
  "Координата x0": "Координата x0",
  "Координата y": "Координата y",
  "Корень n (n≠0)": "Корінь n (n≠0)",
  "Корень x1": "Корінь x1",
  "Корень x2": "Корінь x2",
  "Косинус (cos α)": "Косинус (cos α)",
  "Коэффициент a": "Коефіцієнт a",
  "Коэффициент b": "Коефіцієнт b",
  "Коэффициент c": "Коефіцієнт c",
  "Коэффициент k": "Коефіцієнт k",
  "Коэффициент p": "Коефіцієнт p",
  "Коэффициент q": "Коефіцієнт q",
  "Множитель a": "Множник a",
  "Множитель b": "Множник b",
  "Множитель c (c≠0)": "Множник c (c≠0)",
  "Модуль второго (b)": "Модуль другого (b)",
  "Модуль второго числа (b)": "Модуль другого числа (b)",
  "Модуль отрицательного b": "Модуль від'ємного b",
  "Модуль первого (a)": "Модуль першого (a)",
  "Модуль первого числа (a)": "Модуль першого числа (a)",
  "Неполное частное (q)": "Неповна частка (q)",
  "Новое основание c": "Нова основа c",
  "Номер элемента (n)": "Номер елемента (n)",
  "Образующая (l)": "Твірна (l)",
  "Сторона d": "Сторона d",
  "Сторона (a)": "Сторона (a)",
  "Количество сторон (n)": "Кількість сторін (n)",
  "Основание a": "Основа a",
  "Основание a (a>0)": "Основа a (a>0)",
  "Основание a (a>0, a≠1)": "Основа a (a>0, a≠1)",
  "Основание a (a≠0)": "Основа a (a≠0)",
  "Основание b": "Основа b",
  "Остаток (r)": "Остача (r)",
  "Параллельная сторона a": "Паралельна сторона a",
  "Первый член (a1)": "Перший член (a1)",
  "Первый член (b1)": "Перший член (b1)",
  "Периметр (P)": "Периметр (P)",
  "Площадь основания (S)": "Площа основи (S)",
  "Показатель m": "Показник m",
  "Показатель n": "Показник n",
  "Показатель x": "Показник x",
  "Полупериметр (p)": "Півпериметр (p)",
  "Прилежащий катет": "Прилеглий катет",
  "Производительность (v)": "Продуктивність (v)",
  "Противолежащий катет": "Протилежний катет",
  "Процент p": "Відсоток p",
  "Радиус (R)": "Радіус (R)",
  "Радиус (r)": "Радіус (r)",
  "Радиус вписанной окр. (r)": "Радіус вписаного кола (r)",
  "Разность (d)": "Різниця (d)",
  "Расстояние (S)": "Відстань (S)",
  "Ребро a": "Ребро a",
  "Ребро b": "Ребро b",
  "Ребро c": "Ребро c",
  "Свободный член b": "Вільний член b",
  "Синус (sin α)": "Синус (sin α)",
  "Скорость (v)": "Швидкість (v)",
  "Скорость течения": "Швидкість течії",
  "Слагаемое a": "Доданок a",
  "Слагаемое b": "Доданок b",
  "Собственная скорость": "Власна швидкість",
  "Старое основание a": "Стара основа a",
  "Степень k": "Степінь k",
  "Степень n": "Степінь n",
  "Сторона a": "Сторона a",
  "Сторона b": "Сторона b",
  "Сторона c": "Сторона c",
  "Угол A (в градусах)": "Кут A (у градусах)",
  "Угол x (в градусах)": "Кут x (у градусах)",
  "Угол α (в градусах)": "Кут α (у градусах)",
  "Угол α (град)": "Кут α (град)",
  "Угол β (град)": "Кут β (град)",
  "Средняя линия m": "Середня лінія m",
  "Угол γ (в градусах)": "Кут γ (у градусах)",
  "Угол γ (град)": "Кут γ (град)",
  "Цена товара (a)": "Ціна товару (a)",
  "Числитель a": "Чисельник a",
  "Число 1": "Число 1",
  "Число 2": "Число 2",
  "Число 3 (опционально: 0)": "Число 3 (опціонально: 0)",
  "Число A": "Число A",
  "Число a": "Число a",
  "Число a (a≥0)": "Число a (a≥0)",
  "Число b": "Число b",
  "Число b (b>0)": "Число b (b>0)",
  "Число b (b≥0)": "Число b (b≥0)",
  "Число c": "Число c",
  "Ширина (b)": "Ширина (b)",
};

document.addEventListener("DOMContentLoaded", () => {
  const formulasContainer = document.getElementById("formulasContainer");
  const searchInput = document.getElementById("searchInput");

  // --- ЯЗЫК ИНТЕРФЕЙСА ---
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", (e) => {
      currentLang = e.target.value;
      localStorage.setItem("math_lang", currentLang);
      applyStaticTranslations();
      renderFormulas();
    });
  }

  function applyStaticTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    document.querySelectorAll(".class-chip").forEach((chip) => {
      const grade = chip.dataset.grade;
      chip.textContent = `${grade} ${t("grade_suffix")}`;
    });
  }

  applyStaticTranslations();

  // --- ОБРАБОТЧИКИ ФИЛЬТРОВ И ИНТЕРФЕЙСА ---

  // 1. Избранное / Все формулы
  document.getElementById("viewAllBtn").addEventListener("click", (e) => {
    currentView = "all";
    document
      .querySelectorAll(".view-btn")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    renderFormulas();
  });

  document.getElementById("viewFavBtn").addEventListener("click", (e) => {
    currentView = "fav";
    document
      .querySelectorAll(".view-btn")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    renderFormulas();
  });

  // 2. Фильтр предметов (Все, Алгебра, Геометрия)
  document.querySelectorAll(".subject-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".subject-btn").forEach((b) => {
        b.classList.remove("active-all", "active-algebra", "active-geometry");
      });

      if (btn.id === "viewAlgebraBtn") {
        currentSubject = "algebra";
        btn.classList.add("active-algebra");
      } else if (btn.id === "viewGeometryBtn") {
        currentSubject = "geometry";
        btn.classList.add("active-geometry");
      } else {
        currentSubject = "all";
        btn.classList.add("active-all");
      }
      renderFormulas();
    });
  });

  // 3. Выбор класса (Чипы)
  document.querySelectorAll(".class-chip").forEach((chip) => {
    chip.addEventListener("click", (e) => {
      const selectedGrade = parseInt(chip.dataset.grade, 10);
      if (currentGrade === selectedGrade) {
        currentGrade = "all";
        chip.classList.remove("active");
      } else {
        document
          .querySelectorAll(".class-chip")
          .forEach((c) => c.classList.remove("active"));
        currentGrade = selectedGrade;
        chip.classList.add("active");
      }
      renderFormulas();
    });
  });

  // 4. Сайдбар Тем
  document.querySelectorAll(".topic-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      document
        .querySelectorAll(".topic-item")
        .forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      currentTopic = item.dataset.topic;

      // При выборе темы сбрасываем фильтр по классу,
      // чтобы тема показывала формулы сразу по всем классам
      currentGrade = "all";
      document
        .querySelectorAll(".class-chip")
        .forEach((c) => c.classList.remove("active"));

      renderFormulas();
    });
  });

  // 5. Поиск по сайту
  if (searchInput) {
    searchInput.addEventListener("input", renderFormulas);
  }

  // 6. Кнопка "Шпаргалка в 1 клик" (Печать)
  const cheatSheetBtn = document.getElementById("cheatSheetBtn");
  if (cheatSheetBtn) {
    cheatSheetBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // --- ФУНКЦИЯ ОТРРИСОВКИ КАРТОЧЕК ---
  function renderFormulas() {
    if (!formulasContainer) return;

    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

    // Если пользователь ничего не выбрал (нет темы/предмета/класса/поиска),
    // просим сделать выбор вместо того чтобы показывать все формулы разом.
    const nothingSelected =
      currentView === "all" &&
      currentTopic === "all" &&
      currentSubject === "all" &&
      currentGrade === "all" &&
      !query;

    if (nothingSelected) {
      formulasContainer.innerHTML =
        '<div class="empty-state">' +
        '<div class="empty-state-icon">🎯</div>' +
        `<h3>${t("empty_state_title")}</h3>` +
        `<p>${t("empty_state_text")}</p>` +
        "</div>";
      return;
    }

    const filtered = formulas.filter((f) => {
      const matchTopic =
        currentTopic === "all" ||
        (Array.isArray(f.category)
          ? f.category.includes(currentTopic)
          : f.category === currentTopic);
      const matchSubject =
        currentSubject === "all" || f.subject === currentSubject;
      // Пока идёт поиск, класс не ограничивает результаты — ищем по всем классам.
      const matchGrade =
        !!query || currentGrade === "all" || f.grade === currentGrade;
      const matchFav = currentView === "all" || favorites.includes(f.id);
      const matchSearch =
        !query ||
        f.title.toLowerCase().includes(query) ||
        f.description.toLowerCase().includes(query);

      return (
        matchTopic && matchSubject && matchGrade && matchFav && matchSearch
      );
    });

    formulasContainer.innerHTML = "";

    if (filtered.length === 0) {
      formulasContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748B; padding: 40px;">${t("no_results")}</p>`;
      return;
    }

    filtered.forEach((formula) => {
      const card = document.createElement("div");
      const isExpanded = expandedIds.has(formula.id);
      card.className = "card" + (isExpanded ? " expanded" : "");

      const isFav = favorites.includes(formula.id);

      // Перевод названия/описания/подписей полей — из готового словаря,
      // без запросов к сторонним сервисам. Если для формулы ещё нет
      // перевода, показываем русский оригинал.
      const isUk = currentLang === "uk";
      const ukEntry = isUk ? formulaTranslationsUk[formula.id] : null;
      const displayTitle = ukEntry ? ukEntry.title : formula.title;
      const displayDesc = ukEntry ? ukEntry.description : formula.description;

      const inputsHTML = formula.inputs
        .map((inp) => {
          const label = isUk
            ? labelTranslationsUk[inp.label] || inp.label
            : inp.label;
          return `
        <div style="margin-bottom: 8px;">
          <label style="font-size: 0.85rem; color: #64748B;">${label}:</label>
          <input type="number" step="any" class="calc-input" data-key="${inp.key}" required>
        </div>
      `;
        })
        .join("");

      // Список пояснений, что означает каждая буква/обозначение в формуле —
      // если для формулы есть отдельное пояснение (legendMeanings), берём его;
      // иначе используем подпись поля калькулятора.
      const legendHTML = formula.inputs
        .map((inp) => {
          const override =
            legendMeanings[formula.id] && legendMeanings[formula.id][inp.key];
          const symbol = (override && override.symbol) || inp.key;
          const text = override
            ? isUk
              ? override.uk
              : override.ru
            : isUk
              ? labelTranslationsUk[inp.label] || inp.label
              : inp.label;
          return `<li><strong>${symbol}</strong> — ${text}</li>`;
        })
        .join("");

      card.innerHTML = `
        <button class="fav-btn ${isFav ? "active" : ""}" data-id="${formula.id}">${isFav ? "★" : "☆"}</button>
        <h3 class="formula-title" style="font-size: 1.1rem; margin-bottom: 6px; padding-right: 24px;">${displayTitle}</h3>
        <span style="font-size: 0.75rem; background: #E2E8F0; padding: 2px 8px; border-radius: 12px; color: #475569;">
          ${formula.grade} ${t("grade_suffix")}
        </span>
        <p class="card-hint">${t("card_hint")}</p>

        <p>\\[${formula.math}\\]</p>

        <div class="card-details">
          <p class="formula-desc" style="font-size: 0.9rem; color: #64748B; margin: 10px 0 6px 0;">${displayDesc}</p>

          <div class="formula-legend">
            <strong>${t("legend_title")}</strong>
            <ul>${legendHTML}</ul>
          </div>

          <div class="calculator-box">
            <form class="calc-form">
              ${inputsHTML}
              <button type="submit" class="btn btn-primary" style="width:100%; justify-content: center; padding: 6px 0; font-size: 0.85rem; margin-top: 4px;">
                ${t("calc_button")}
              </button>
            </form>
            <div class="result-box" style="display:none; margin-top: 10px; padding: 8px; background: #E0F2FE; border-radius: 6px; font-weight: bold; font-size: 0.9rem; color: #0369A1;"></div>
          </div>
        </div>
      `;

      // Открыть/закрыть карточку по клику в любом месте, кроме избранного и деталей
      card.addEventListener("click", () => {
        if (expandedIds.has(formula.id)) {
          expandedIds.delete(formula.id);
          card.classList.remove("expanded");
        } else {
          expandedIds.add(formula.id);
          card.classList.add("expanded");
        }
      });

      // Клики внутри развёрнутого блока (описание, формула, калькулятор)
      // не должны сворачивать карточку обратно
      const detailsBlock = card.querySelector(".card-details");
      detailsBlock.addEventListener("click", (e) => e.stopPropagation());

      // Обработка Избранного
      const favBtn = card.querySelector(".fav-btn");
      favBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = formula.id;
        if (favorites.includes(id)) {
          favorites = favorites.filter((favId) => favId !== id);
        } else {
          favorites.push(id);
        }
        localStorage.setItem("math_favs", JSON.stringify(favorites));
        renderFormulas();
      });

      // Обработка Калькулятора
      const form = card.querySelector(".calc-form");
      const resultBox = card.querySelector(".result-box");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const values = {};
        form.querySelectorAll("input").forEach((inp) => {
          values[inp.dataset.key] = parseFloat(inp.value);
        });

        const res = formula.calculate(values);
        resultBox.style.display = "block";
        resultBox.innerHTML = `${t("result_prefix")}: ${typeof res === "number" ? Number(res.toFixed(4)) : res}`;
      });

      formulasContainer.appendChild(card);
    });

    // Рендер формул MathJax
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }

  // Запуск первичной отрисовки
  renderFormulas();
});
