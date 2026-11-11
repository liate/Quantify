/* Згенеровано з app.js (build.mjs). */
window.QCALC={
1:(v) => 2 * (v.a + v.b),
2:(v) => v.a * v.b,
3:(v) => 4 * v.a,
4:(v) => Math.pow(v.a, 2),
5:(v) => v.a * v.b * v.c,
6:(v) => 2 * (v.a * v.b + v.b * v.c + v.a * v.c),
7:(v) => 4 * (v.a + v.b + v.c),
8:(v) => Math.pow(v.a, 3),
9:(v) => 6 * Math.pow(v.a, 2),
10:(v) => v.v * v.t,
11:(v) => (v.t !== 0 ? v.S / v.t : "Время не может быть равно 0"),
12:(v) =>
      v.v !== 0 ? v.S / v.v : "Скорость не может быть равна 0",
13:(v) => v.v_self + v.v_flow,
14:(v) => v.v_self - v.v_flow,
15:(v) => v.a * v.n,
16:(v) => v.v * v.t,
17:(v) => v.b * v.q + v.r,
18:(v) => (v.a1 + v.a2 + v.a3) / (v.a3 !== 0 ? 3 : 2),
19:(v) => v.A / 100,
20:(v) => (v.A * v.p) / 100,
21:(v) => `${v.a + v.b} = ${v.b + v.a}`,
22:(v) => `${v.a * v.b} = ${v.b * v.a}`,
23:(v) => v.a * (v.b + v.c),
24:(v) =>
      v.b !== 0 && v.c !== 0
        ? `${v.a * v.c}/${v.b * v.c}`
        : "Знаменатель и c не могут быть 0",
25:(v) =>
      v.b * v.d !== 0
        ? `${v.a * v.c}/${v.b * v.d} (${(v.a * v.c) / (v.b * v.d)})`
        : "Знаменатель не равен 0",
26:(v) =>
      v.b * v.c !== 0
        ? `${v.a * v.d}/${v.b * v.c} (${(v.a * v.d) / (v.b * v.c)})`
        : "Знаменатель не равен 0",
27:(v) =>
      `ad = ${v.a * v.d}, bc = ${v.b * v.c} (${v.a * v.d === v.b * v.c ? "Верная пропорция" : "Неверная пропорция"})`,
28:(v) => Math.abs(v.a),
29:(v) => v.a - v.b,
30:(v) => Math.abs(v.a) * Math.abs(v.b),
31:(v) => -(Math.abs(v.a) * Math.abs(v.b)),
32:(v) => Math.PI * v.d,
33:(v) => 2 * Math.PI * v.r,
34:(v) => Math.PI * Math.pow(v.r, 2),
35:(v) => 2 * v.r,
191:(v) => (Math.PI * v.D ** 2) / 4,
192:(v) => Math.sqrt(v.x ** 2 + v.y ** 2),
193:(v) => v.AB,
194:(v) => (v.AQ * v.BQ) / v.CQ,
195:(v) => Math.sqrt(v.AQ * v.BQ),
196:(v) => 2 * v.r * Math.sin((v.alpha * Math.PI) / 360),
197:(v) => 2 * v.r * Math.sin((v.alpha * Math.PI) / 180),
36:(v) => Math.pow(v.a + v.b, 2),
37:(v) => Math.pow(v.a - v.b, 2),
38:(v) => Math.pow(v.a, 2) - Math.pow(v.b, 2),
39:(v) => Math.pow(v.a + v.b, 3),
40:(v) => Math.pow(v.a - v.b, 3),
41:(v) => Math.pow(v.a, 3) + Math.pow(v.b, 3),
42:(v) => Math.pow(v.a, 3) - Math.pow(v.b, 3),
43:(v) => Math.pow(v.a, v.m + v.n),
44:(v) =>
      v.a !== 0 ? Math.pow(v.a, v.m - v.n) : "a не может быть 0",
45:(v) => Math.pow(v.a, v.m * v.n),
46:(v) => Math.pow(v.a * v.b, v.n),
47:(v) => (v.a !== 0 ? 1 : "0 в степени 0 не определено"),
48:(v) => v.k * v.x + v.b,
49:(v) => 180 - v.alpha - v.beta,
50:(v) => v.beta + v.gamma,
51:(v) => `Макс. допустимая длина стороны a < ${v.b + v.c}`,
52:(v) => 2 * v.a + v.b,
53:(v) => 180 - v.alpha,
54:(v) => v.alpha,
55:(v) => Math.pow(v.b, 2) - 4 * v.a * v.c,
56:(v) => {
      if (v.a === 0) return "Ошибка: a не может быть равно 0";
      const d = Math.pow(v.b, 2) - 4 * v.a * v.c;
      if (d < 0) return "Нет действительных корней (D < 0)";
      if (d === 0) return `x = ${-v.b / (2 * v.a)}`;
      const x1 = (-v.b + Math.sqrt(d)) / (2 * v.a);
      const x2 = (-v.b - Math.sqrt(d)) / (2 * v.a);
      return `x₁ = ${x1}, x₂ = ${x2}`;
    },
57:(v) => `Сумма корней = ${-v.p}, Произведение корней = ${v.q}`,
58:(v) => `${v.a}(x - ${v.x1})(x - ${v.x2})`,
59:(v) =>
      v.a >= 0 && v.b >= 0 ? Math.sqrt(v.a * v.b) : "Числа должны быть ≥ 0",
60:(v) =>
      v.a >= 0 && v.b > 0
        ? Math.sqrt(v.a / v.b)
        : "Некорректные значения (a≥0, b>0)",
61:(v) => (v.a >= 0 ? v.a : "a должно быть ≥ 0"),
62:(v) => Math.abs(v.a),
63:(v) =>
      v.a !== 0 ? 1 / Math.pow(v.a, v.n) : "a не может быть 0",
64:(v) => Math.sqrt(Math.pow(v.a, 2) + Math.pow(v.b, 2)),
65:(v) => v.a * v.ha,
66:(v) => 0.5 * v.a * v.h,
67:(v) => 0.5 * v.a * v.b,
68:(v) => 0.5 * v.d1 * v.d2,
69:(v) => ((v.a + v.b) / 2) * v.h,
70:(v) => 0.5 * v.a,
71:(v) => (v.a + v.b) / 2,
72:(v) =>
      v.hyp !== 0 ? v.opp / v.hyp : "Гипотенуза не может быть равна 0",
73:(v) =>
      v.hyp !== 0 ? v.adj / v.hyp : "Гипотенуза не может быть равна 0",
74:(v) =>
      v.adj !== 0 ? v.opp / v.adj : "Прилежащий катет не равен 0",
75:(v) => v.a1 + (v.n - 1) * v.d,
76:(v) => ((v.a1 + v.an) / 2) * v.n,
77:(v) => v.b1 * Math.pow(v.q, v.n - 1),
78:(v) =>
      v.q !== 1 ? (v.b1 * (Math.pow(v.q, v.n) - 1)) / (v.q - 1) : v.b1 * v.n,
198:(v) => ((2 * v.a1 + (v.n - 1) * v.d) / 2) * v.n,
199:(v) => Math.sqrt(v.bnext * v.bprev),
79:(v) =>
      v.a !== 0 ? -v.b / (2 * v.a) : "Коэффициент 'a' не может быть 0",
80:(v) => v.a * Math.pow(v.x0, 2) + v.b * v.x0 + v.c,
81:(v) => {
      const n = Math.floor(v.n);
      if (n < 0) return "n должно быть неотрицательным";
      let res = 1;
      for (let i = 2; i <= n; i++) res *= i;
      return res;
    },
82:(v) => {
      const rad = (v.deg * Math.PI) / 180;
      const aSq =
        Math.pow(v.b, 2) + Math.pow(v.c, 2) - 2 * v.b * v.c * Math.cos(rad);
      return Math.sqrt(Math.max(0, aSq));
    },
83:(v) => {
      const rad = (v.degA * Math.PI) / 180;
      const sinA = Math.sin(rad);
      return sinA !== 0 ? v.a / (2 * sinA) : "Синус угла равен 0";
    },
84:(v) => {
      const rad = (v.deg * Math.PI) / 180;
      return 0.5 * v.a * v.b * Math.sin(rad);
    },
85:(v) => {
      const p = (v.a + v.b + v.c) / 2;
      const areaSq = p * (p - v.a) * (p - v.b) * (p - v.c);
      return areaSq > 0 ? Math.sqrt(areaSq) : "Несуществующий треугольник";
    },
86:(v) => v.p * v.r,
87:(v) => 0.5 * v.P * v.r,
88:(v) => (Math.PI * v.r * v.alpha) / 180,
89:(v) => (Math.PI * Math.pow(v.r, 2) * v.alpha) / 360,
90:(v) => v.x1 * v.x2 + v.y1 * v.y2,
91:(v) => Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2)),
92:(v) =>
      Math.abs(v.cos) <= 1
        ? `|sin α| = ${Math.sqrt(1 - Math.pow(v.cos, 2))}`
        : "cos α должен быть от -1 до 1",
93:(v) =>
      v.cos !== 0 ? v.sin / v.cos : "cos α равен 0 (tg не существует)",
94:(v) =>
      v.n !== 0 ? Math.pow(v.a, v.m / v.n) : "Показатель n не может быть 0",
95:(v) =>
      v.a > 0 && v.a !== 1 && v.b > 0
        ? Math.log(v.b) / Math.log(v.a)
        : "Некорректные параметры log",
96:(v) => (v.b > 0 ? v.b : "Аргумент b должен быть > 0"),
97:(v) =>
      v.a > 0 && v.a !== 1 && v.x > 0 && v.y > 0
        ? Math.log(v.x * v.y) / Math.log(v.a)
        : "Некорректные параметры",
98:(v) =>
      v.a > 0 && v.a !== 1 && v.x > 0 && v.y > 0
        ? Math.log(v.x / v.y) / Math.log(v.a)
        : "Некорректные параметры",
99:(v) =>
      v.a > 0 && v.a !== 1 && v.x > 0
        ? v.k * (Math.log(v.x) / Math.log(v.a))
        : "Некорректные параметры",
100:(v) =>
      v.a > 0 && v.a !== 1 && v.b > 0 && v.c > 0 && v.c !== 1
        ? Math.log(v.b) / Math.log(v.a)
        : "Некорректные параметры",
101:(v) => {
      const a = (v.degA * Math.PI) / 180;
      const b = (v.degB * Math.PI) / 180;
      return `sin(α+β) = ${Math.sin(a + b).toFixed(4)}, sin(α-β) = ${Math.sin(a - b).toFixed(4)}`;
    },
102:(v) => {
      const a = (v.degA * Math.PI) / 180;
      const b = (v.degB * Math.PI) / 180;
      return `cos(α+β) = ${Math.cos(a + b).toFixed(4)}, cos(α-β) = ${Math.cos(a - b).toFixed(4)}`;
    },
103:(v) => {
      const a = (v.deg * Math.PI) / 180;
      return 2 * Math.sin(a) * Math.cos(a);
    },
104:(v) => {
      const a = (v.deg * Math.PI) / 180;
      return Math.pow(Math.cos(a), 2) - Math.pow(Math.sin(a), 2);
    },
105:(v) => {
      const a = (v.deg * Math.PI) / 180;
      const tg = Math.tan(a);
      return Math.abs(tg) !== 1
        ? (2 * tg) / (1 - Math.pow(tg, 2))
        : "Деление на 0 (не существует)";
    },
112:(v) => v.S * v.h,
113:(v) => (1 / 3) * v.S * v.h,
106:(v) => v.n * Math.pow(v.x, v.n - 1),
107:(v) => {
      const rad = (v.deg * Math.PI) / 180;
      return `(sin x)' = ${Math.cos(rad).toFixed(4)}, (cos x)' = ${(-Math.sin(rad)).toFixed(4)}`;
    },
108:(v) =>
      v.a > 0
        ? Math.pow(v.a, v.x) * Math.log(v.a)
        : "Основание 'a' должно быть > 0",
109:(v) => v.u_p * v.v + v.u * v.v_p,
110:(v) =>
      v.v !== 0
        ? (v.u_p * v.v - v.u * v.v_p) / Math.pow(v.v, 2)
        : "v не должно быть равно 0",
111:(v) => v.Fb - v.Fa,
114:(v) => Math.PI * Math.pow(v.r, 2) * v.h,
115:(v) => 2 * Math.PI * v.r * v.h,
116:(v) => (1 / 3) * Math.PI * Math.pow(v.r, 2) * v.h,
117:(v) => Math.PI * v.r * v.l,
118:(v) => (4 / 3) * Math.PI * Math.pow(v.r, 3),
119:(v) => 4 * Math.PI * Math.pow(v.r, 2),
120:(v) => {
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
121:(v) => {
      let a = Math.abs(Math.round(v.a));
      let b = Math.abs(Math.round(v.b));
      while (b) {
        [a, b] = [b, a % b];
      }
      return a;
    },
122:(v) => {
      let a = Math.abs(Math.round(v.a));
      let b = Math.abs(Math.round(v.b));
      let x = a,
        y = b;
      while (y) {
        [x, y] = [y, x % y];
      }
      return (a * b) / x;
    },
123:(v) => Math.sqrt((v.x2 - v.x1) ** 2 + (v.y2 - v.y1) ** 2),
124:(v) => `(${(v.x1 + v.x2) / 2}, ${(v.y1 + v.y2) / 2})`,
125:(v) => `(${v.ax + v.bx}, ${v.ay + v.by})`,
126:(v) => {
      const dot = v.ax * v.bx + v.ay * v.by;
      const lenA = Math.sqrt(v.ax ** 2 + v.ay ** 2);
      const lenB = Math.sqrt(v.bx ** 2 + v.by ** 2);
      return dot / (lenA * lenB);
    },
127:(v) => {
      const fact = (n) => {
        let r = 1;
        for (let i = 2; i <= n; i++) r *= i;
        return r;
      };
      return fact(v.n) / (fact(v.k) * fact(v.n - v.k));
    },
128:(v) => {
      const fact = (n) => {
        let r = 1;
        for (let i = 2; i <= n; i++) r *= i;
        return r;
      };
      return fact(v.n) / fact(v.n - v.k);
    },
129:(v) => v.m / v.n,
130:(v) => 1 - v.p,
131:(v) => v.b1 / (1 - v.q),
132:(v) => (v.aprev + v.anext) / 2,
133:(v) => Math.sqrt(v.a ** 2 + v.b ** 2 + v.c ** 2),
134:(v) => v.a * Math.sqrt(3),
135:(v) => -v.b / v.a,
136:(v) => {
      const arr = [v.x1, v.x2, v.x3, v.x4, v.x5].sort((a, b) => a - b);
      return arr[2];
    },
137:(v) => {
      const arr = [v.x1, v.x2, v.x3, v.x4, v.x5];
      const counts = {};
      arr.forEach((x) => (counts[x] = (counts[x] || 0) + 1));
      const maxCount = Math.max(...Object.values(counts));
      if (maxCount === 1) return "нет моды (все числа уникальны)";
      const modes = Object.keys(counts).filter((k) => counts[k] === maxCount);
      return modes.join(", ");
    },
138:(v) => {
      const arr = [v.x1, v.x2, v.x3, v.x4, v.x5];
      return Math.max(...arr) - Math.min(...arr);
    },
139:(v) => v.a / v.aPrime,
140:(v) => v.k ** 2,
141:(v) => (v.b * v.c) / v.a,
142:(v) => v.d / 2,
143:(v) => 180 - v.alpha,
144:(v) => (v.y2 - v.y1) / (v.x2 - v.x1),
145:(v) =>
      Math.abs(v.A * v.x0 + v.B * v.y0 + v.C) / Math.sqrt(v.A ** 2 + v.B ** 2),
146:(v) => Math.sqrt((v.x - v.x0) ** 2 + (v.y - v.y0) ** 2),
147:(v) =>
      `x1+x2 = ${Number((-v.b / v.a).toFixed(4))}; x1*x2 = ${Number((v.c / v.a).toFixed(4))}`,
148:(v) => v.pa * v.pb,
149:(v) => {
      const fact = (n) => {
        let r = 1;
        for (let i = 2; i <= n; i++) r *= i;
        return r;
      };
      const c = fact(v.n) / (fact(v.k) * fact(v.n - v.k));
      return c * v.p ** v.k * (1 - v.p) ** (v.n - v.k);
    },
150:(v) => v.fu * v.gx,
151:(v) => v.a + v.b + v.c + v.d,
152:(v) => (2 * v.S) / (v.a + v.b),
153:(v) => Math.abs(v.a - v.b) / 2,
154:(v) => 180 - v.alpha,
185:(v) => 2 * v.a * v.b + v.c ** 2 + v.d ** 2,
186:(v) => 2 * v.m - v.b,
187:(v) => {
      const radA = (v.alpha * Math.PI) / 180;
      const radB = (v.beta * Math.PI) / 180;
      const cotA = Math.tan(radA) !== 0 ? 1 / Math.tan(radA) : null;
      const cotB = Math.tan(radB) !== 0 ? 1 / Math.tan(radB) : null;
      return cotA !== null && cotB !== null
        ? v.b + v.h * (cotA + cotB)
        : "Угол не может быть 0° или 180°";
    },
188:(v) => {
      const radA = (v.alpha * Math.PI) / 180;
      const radB = (v.beta * Math.PI) / 180;
      return v.b + v.c * Math.cos(radA) + v.d * Math.cos(radB);
    },
189:(v) => {
      const radA = (v.alpha * Math.PI) / 180;
      const sinA = Math.sin(radA);
      return sinA !== 0 ? v.h / sinA : "Угол не может быть 0° или 180°";
    },
190:(v) => {
      const radA = (v.alpha * Math.PI) / 180;
      return v.c * Math.sin(radA);
    },
155:(v) => v.a * Math.sqrt(2),
156:(v) => Math.sqrt(v.a ** 2 + v.b ** 2),
157:(v) => 2 * (v.a + v.b),
158:(v) => (v.a ** 2 * Math.sqrt(3)) / 4,
159:(v) => v.alpha,
160:(v) => v.up + v.vp,
161:() => 0,
162:(v) => Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2),
163:(v) => `(${v.ax - v.bx}, ${v.ay - v.by})`,
164:(v) =>
      v.opp !== 0 ? v.adj / v.opp : "Противолежащий катет не равен 0",
165:(v) => {
      const det = v.a1 * v.b2 - v.a2 * v.b1;
      if (det === 0) return "Система не имеет единственного решения";
      const x = (v.c1 * v.b2 - v.c2 * v.b1) / det;
      const y = (v.a1 * v.c2 - v.a2 * v.c1) / det;
      return `x = ${Number(x.toFixed(4))}; y = ${Number(y.toFixed(4))}`;
    },
166:(v) => 2 * v.Sb + v.Pb * v.h,
167:(v) => v.a + v.b + v.c,
168:(v) => `${v.a + v.b + v.c} = ${v.a + (v.b + v.c)}`,
169:(v) => `${v.a * v.b * v.c} = ${v.a * (v.b * v.c)}`,
170:(v) => (v.B * 100) / v.p,
171:(v) => (v.a + v.b) / v.c,
172:(v) => (v.a - v.b) / v.c,
173:(v) => (v.b * v.c) / v.a,
174:(v) => v.D / v.d,
175:(v) => v.k / v.x,
176:(v) => (v.alpha * Math.PI) / 180,
177:(v) => (v.rad * 180) / Math.PI,
178:(v) => v.fa + v.fpa * (v.x - v.a0),
179:(v) =>
      v.n !== -1
        ? Math.pow(v.x, v.n + 1) / (v.n + 1)
        : "При n = -1 первообразная — это ln|x|",
180:(v) => v.k,
181:(v) => {
      const r1 = v.a1 / v.a2;
      const r2 = v.b1 / v.b2;
      if (Math.abs(r1 - r2) < 1e-9) {
        return `Подобны, k = ${Number(r1.toFixed(4))}`;
      }
      return "Не подобны (стороны непропорциональны)";
    },
182:(v) => 3 * v.a,
183:(v) => 4 * v.a,
184:(v) => v.n * v.a,
200:() => 0,
201:() => 1,
202:(v) =>
      v.n !== 0
        ? (1 / v.n) * (Math.log(v.x) / Math.log(v.a))
        : "n не должно быть равно 0",
203:(v) => 1 / (Math.log(v.a) / Math.log(v.x)),
204:(v) => v.a * v.b * Math.cos((v.alpha * Math.PI) / 180),
205:(v) =>
      Math.sqrt((v.x2 - v.x1) ** 2 + (v.y2 - v.y1) ** 2 + (v.z2 - v.z1) ** 2),
206:(v) => v.P * v.h,
207:(v) => 2 * v.c * (v.a + v.b),
208:(v) => 2 * Math.PI * v.r * (v.r + v.h),
209:(v) => 2 * v.r * v.h,
210:(v) => Math.sqrt((2 * v.r) ** 2 + v.h ** 2),
211:(v) => Math.PI * v.d ** 2,
212:(v) => 2 * Math.PI * v.R * v.h,
213:(v) => Math.PI * v.h ** 2 * (v.R - v.h / 3),
214:(v) => (2 / 3) * Math.PI * v.R ** 2 * v.h,
215:() => 1,
216:(v) => -1 / v.x ** 2,
217:(v) => 1 / (2 * Math.sqrt(v.x)),
218:(v) => 1 / Math.cos((v.deg * Math.PI) / 180) ** 2,
219:(v) => -1 / Math.sin((v.deg * Math.PI) / 180) ** 2,
220:(v) => 1 / (v.x * Math.log(v.a)),
221:(v) => 1 / v.x,
222:(v) => v.k * v.x,
223:(v) => Math.log(Math.abs(v.x)),
224:(v) => 2 * Math.sqrt(v.x),
225:(v) => -Math.cos((v.deg * Math.PI) / 180),
226:(v) => Math.sin((v.deg * Math.PI) / 180),
227:(v) => Math.tan((v.deg * Math.PI) / 180),
228:(v) => -1 / Math.tan((v.deg * Math.PI) / 180),
229:(v) => Math.pow(v.a, v.x) / Math.log(v.a),
230:(v) => Math.exp(v.x),
231:(v) => v.d ** 2 / 2,
232:(v) => v.a * v.b * Math.sin((v.alpha * Math.PI) / 180),
233:(v) => 0.5 * v.d1 * v.d2 * Math.sin((v.gamma * Math.PI) / 180),
234:(v) => v.a * v.h,
235:(v) => v.a ** 2 * Math.sin((v.alpha * Math.PI) / 180),
236:(v) =>
      v.R !== 0
        ? (v.a * v.b * v.c) / (4 * v.R)
        : "Радиус не может быть равен 0",
237:(v) => v.p * v.r,
238:(v) => v.m * v.h,
239:(v) => 0.5 * v.d1 * v.d2 * Math.sin((v.phi * Math.PI) / 180),
240:(v) => (v.R ** 2 / 2) * (v.theta - Math.sin(v.theta)),
241:(v) => Math.PI * (v.R ** 2 - v.r ** 2),
242:(v) => (v.n * v.a ** 2) / (4 * Math.tan(Math.PI / v.n)),
243:(v) => Math.PI * v.a * v.b,
244:(v) => 0.5 * v.P * v.l,
245:(v) => v.Sbok + v.Sosn,
246:(v) => Math.PI * v.r * (v.l + v.r),
247:(v) => Math.PI * (v.R1 + v.R2) * v.l,
248:(v) =>
      Math.PI * (v.R1 + v.R2) * v.l + Math.PI * v.R1 ** 2 + Math.PI * v.R2 ** 2,
249:(v) => 2 * Math.sqrt(2) * v.d,
250:(v) =>
      v.r !== 0 ? (2 * v.S) / v.r : "Радиус не может быть равен 0",
251:(v) => v.a + v.b + 2 * v.c,
252:(v) => v.a1 + v.a2 + v.a3 + v.a4 + v.a5,
259:(v) => 12 * v.a,
260:(v) => v.n * (v.a + v.b),
261:(v) => v.n * (2 * v.a + v.h),
262:(v) => 6 * v.a,
263:(v) => 12 * v.a,
264:(v) =>
      v.n !== v.k ? (v.an - v.ak) / (v.n - v.k) : "n не может быть равно k",
265:(v) => v.ak + (v.n - v.k) * v.d,
266:(v) => v.bk * Math.pow(v.q, v.n - v.k),
267:(v) => v.A + v.B - v.AB,
268:(v) => v.A + v.B + v.C - v.AB - v.AC - v.BC + v.ABC
};
