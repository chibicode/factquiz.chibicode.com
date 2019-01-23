export const problems = [
  {
    text: '現在、低所得国に暮らす女子の何割が、初等教育を修了するでしょう？',
    short: '低所得国における女子教育',
    choices: {
      a: '20%',
      b: '40%',
      c: '60%'
    },
    answer: 'c'
  },
  {
    text: '世界で最も多くの人が住んでいるのはどこでしょう？',
    short: '世界の大半の人の所得',
    choices: {
      a: '低所得国',
      b: '中所得国',
      c: '高所得国'
    },
    answer: 'b'
  },
  {
    text:
      '世界の人口のうち、極度の貧困にある人の割合は、過去20年でどう変わったでしょう？',
    short: '極度の貧困',
    choices: {
      a: '約2倍になった',
      b: 'あまり変わっていない',
      c: '半分になった'
    },
    answer: 'c'
  },
  {
    text: '世界の平均寿命は現在およそ何歳でしょう？',
    short: '平均寿命',
    choices: {
      a: '50歳',
      b: '60歳',
      c: '70歳'
    },
    answer: 'c'
  },
  {
    text:
      '15歳未満の子供は、現在世界に約20億人います。国連の予測によると、2100年に子供の数は約何人になるでしょう？',
    short: '未来の子供人口',
    choices: {
      a: '40億人',
      b: '30億人',
      c: '20億人'
    },
    answer: 'c'
  },
  {
    text:
      '国連の予測によると、2100年にはいまより人口が40億人増えるとされています。人口が増える最も大きな理由は何でしょう？',
    short: '人口増加の理由',
    choices: {
      a: '子供(15歳未満)が増えるから',
      b: '大人(15歳から74歳)が増えるから',
      c: '後期高齢者(75歳以上)が増えるから'
    },
    answer: 'b'
  },
  {
    text: '自然災害で毎年亡くなる人の数は、過去100年でどう変化したでしょう？',
    short: '自然災害',
    choices: {
      a: '2倍以上になった',
      b: 'あまり変わっていない',
      c: '半分以下になった'
    },
    answer: 'c'
  },
  {
    text:
      '現在、世界には約70億人の人がいます。下の地図では、人の印がそれぞれ10億人を表しています。世界の人口分布を正しく表しているのは3つのうちどれでしょう？',
    short: '人口分布',
    useGraphic: true,
    answer: 'a'
  },
  {
    text:
      '世界中の1歳児の中で、なんらかの病気に対して予防接種を受けている子供はどのくらいいるでしょう？',
    short: '子供の予防接種',
    choices: {
      a: '20%',
      b: '50%',
      c: '80%'
    },
    answer: 'c'
  },
  {
    text:
      '世界中の30歳男性は、平均10年間の学校教育を受けています。同じ年の女性は何年間学校教育を受けているでしょう？',
    short: '女性の教育',
    choices: {
      a: '9年',
      b: '6年',
      c: '3年'
    },
    answer: 'a'
  },
  {
    text:
      '1996年には、トラとジャイアントパンダとクロサイはいずれも絶滅危惧種として指定されていました。この3つのうち、当時よりも絶滅の危機に瀕している動物はいくつでしょう？',
    short: '絶滅危惧種',
    choices: {
      a: '2つ',
      b: 'ひとつ',
      c: 'ゼロ'
    },
    answer: 'c'
  },
  {
    text: 'いくらかでも電気が使える人は、世界にどのくらいいるでしょう？',
    short: '電気',
    choices: {
      a: '20%',
      b: '50%',
      c: '80%'
    },
    answer: 'c'
  }
]

export const score = selectedAnswers =>
  selectedAnswers.filter((answer, index) => problems[index].answer === answer)
    .length

export const firstIncorrect = selectedAnswers => {
  for (let i = 0; i < selectedAnswers.length; i++) {
    if (selectedAnswers[i] !== problems[i].answer) {
      return i
    }
  }
  return -1
}
